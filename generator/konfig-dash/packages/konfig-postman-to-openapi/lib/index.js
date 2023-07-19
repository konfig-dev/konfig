'use strict'

const {
  promises: { writeFile, readFile },
} = require('fs')
const { dump } = require('js-yaml')
const os = require('os')
const { parseMdTable } = require('./md-utils')
const { version } = require('../package.json')
const replacePostmanVariables = require('./var-replacer')
const jsonc = require('jsonc-parser')
const acorn = require('acorn')
const camelCase = require('lodash.camelcase')
const { isJsonString } = require('konfig-lib/dist/util/is-json-string')

async function postmanToOpenApi(
  input,
  output,
  {
    info = {},
    defaultTag = 'default',
    pathDepth = 0,
    auth: optsAuth,
    servers,
    externalDocs = {},
    folders = {},
    responseHeaders = true,
    replaceVars = false,
    additionalVars = {},
    outputFormat = 'yaml',
    disabledParams = { includeQuery: false, includeHeader: false },
    operationId = 'off',
  } = {}
) {
  // TODO validate?
  let collectionFile = await resolveInput(input)
  if (replaceVars) {
    collectionFile = replacePostmanVariables(collectionFile, additionalVars)
  }
  const _postmanJson = JSON.parse(collectionFile)
  const postmanJson = _postmanJson.collection || _postmanJson
  const { item: items, variable = [] } = postmanJson
  const paths = {}
  const domains = new Set()
  const tags = {}
  const securitySchemes = {}

  for (let [i, element] of items.entries()) {
    while (element != null && element.item != null) {
      // is a folder
      const { item, description: tagDesc } = element
      const tag = calculateFolderTag(element, folders)
      const tagged = item.map((e) => ({ ...e, tag }))
      tags[tag] = tagDesc
      items.splice(i, 1, ...tagged)
      // Empty folders will have tagged empty
      element = tagged.length > 0 ? tagged.shift() : items[i]
    }
    // If there are an empty folder at the end of the collection elements could be `undefined`
    if (element != null) {
      const {
        request: { url, method, body, description: rawDesc, header = [], auth },
        name,
        tag = defaultTag,
        event: events,
        response,
      } = element
      const { path, query, protocol, host, port, valid, pathVars } = scrapeURL(url)
      if (valid) {
        // Remove from name the possible operation id between brackets
        // eslint-disable-next-line no-useless-escape
        const summary = name.replace(/ \[([^\[\]]*)\]/gi, '')
        domains.add(calculateDomains(protocol, host, port))
        const joinedPath = calculatePath(path, pathDepth)
        if (!paths[joinedPath]) paths[joinedPath] = {}
        const { description, paramsMeta } = descriptionParse(rawDesc)
        paths[joinedPath][method.toLowerCase()] = {
          tags: [tag],
          summary,
          ...calculateOperationId(operationId, name, summary),
          ...(description ? { description } : {}),
          ...parseBody(body, method, response, events),
          ...parseOperationAuth(auth, securitySchemes, optsAuth),
          ...parseParameters(query, header, joinedPath, paramsMeta, pathVars, disabledParams),
          ...parseResponse(response, events, responseHeaders),
        }
      }
    }
  }

  const openApi = {
    openapi: '3.0.0',
    info: compileInfo(postmanJson, info),
    ...parseExternalDocs(variable, externalDocs),
    ...parseServers(domains, servers),
    ...parseAuth(postmanJson, optsAuth, securitySchemes),
    ...parseTags(tags),
    paths,
  }
  const openApiDoc = (
    outputFormat === 'json'
      ? JSON.stringify(openApi, null, 4)
      : dump(openApi, { skipInvalid: true })
  ).replaceAll('\n', os.EOL)
  if (output != null) {
    await writeFile(output, openApiDoc, 'utf8')
  }
  return openApiDoc
}

/* Calculate the tags for folders items based on the options */
function calculateFolderTag({ tag, name }, { separator = ' > ', concat = true }) {
  return tag && concat ? `${tag}${separator}${name}` : name
}

function compileInfo(postmanJson, optsInfo) {
  const {
    info: { name, description: desc },
    variable = [],
  } = postmanJson
  const ver = getVarValue(variable, 'version', '1.0.0')
  const {
    title = name,
    description = desc,
    version = ver,
    termsOfService,
    license,
    contact,
    xLogo,
  } = optsInfo
  return {
    title,
    description,
    version,
    ...parseXLogo(variable, xLogo),
    ...(termsOfService ? { termsOfService } : {}),
    ...parseContact(variable, contact),
    ...parseLicense(variable, license),
  }
}

function parseXLogo(variables, xLogo = {}) {
  const urlVar = getVarValue(variables, 'x-logo.urlVar')
  const backgroundColorVar = getVarValue(variables, 'x-logo.backgroundColorVar')
  const altTextVar = getVarValue(variables, 'x-logo.altTextVar')
  const hrefVar = getVarValue(variables, 'x-logo.hrefVar')
  const {
    url = urlVar,
    backgroundColor = backgroundColorVar,
    altText = altTextVar,
    href = hrefVar,
  } = xLogo
  return url != null ? { 'x-logo': { url, backgroundColor, altText, href } } : {}
}

function parseLicense(variables, optsLicense = {}) {
  const nameVar = getVarValue(variables, 'license.name')
  const urlVar = getVarValue(variables, 'license.url')
  const { name = nameVar, url = urlVar } = optsLicense
  return name != null ? { license: { name, ...(url ? { url } : {}) } } : {}
}

function parseContact(variables, optsContact = {}) {
  const nameVar = getVarValue(variables, 'contact.name')
  const urlVar = getVarValue(variables, 'contact.url')
  const emailVar = getVarValue(variables, 'contact.email')
  const { name = nameVar, url = urlVar, email = emailVar } = optsContact
  return [name, url, email].some((e) => e != null)
    ? {
        contact: {
          ...(name ? { name } : {}),
          ...(url ? { url } : {}),
          ...(email ? { email } : {}),
        },
      }
    : {}
}

function parseExternalDocs(variables, optsExternalDocs) {
  const descriptionVar = getVarValue(variables, 'externalDocs.description')
  const urlVar = getVarValue(variables, 'externalDocs.url')
  const { description = descriptionVar, url = urlVar } = optsExternalDocs
  return url != null ? { externalDocs: { url, ...(description ? { description } : {}) } } : {}
}

function parseBody(body, method, responses, events) {
  // Swagger validation return an error if GET has body
  if (['GET', 'DELETE'].includes(method)) return {}

  const required = parseEventsForRequiredPropertiesInPreRequestScript(events)

  let content = {}
  const hasRequestBody = []
  // top-level request body
  populateContent({ content, body, required, hasRequestBody })
  // body from responses
  responses.forEach((response, index) => {
    const {
      originalRequest: { body },
      code,
    } = response
    populateContent({ content, body, index, required, hasRequestBody, code })
  })
  if (hasRequestBody.every((requestHasBody) => requestHasBody))
    return { requestBody: { content, required: true } }
  return { requestBody: { content } }
}

function parseEventsForRequiredPropertiesInPreRequestScript(events) {
  const preRequestScript = events?.find((event) => event.listen === 'prerequest')
  if (preRequestScript === undefined) return
  const script = preRequestScript.script.exec.join('\n')
  const ast = acorn.parse(script, { ecmaVersion: 2020 })
  const requiredProperties = parseAstForRequiredProperties(ast)
  return requiredProperties
}

function parseAstForRequiredProperties(ast) {
  const body = ast.body
  const requiredProperties = []
  for (const node of body) {
    const isVariable = node.type === 'VariableDeclaration'
    if (!isVariable) continue
    const requiredDeclaration = node.declarations.find(
      (declarator) => declarator.id.name === 'required'
    )
    if (requiredDeclaration === undefined) continue

    for (const property of requiredDeclaration.init.properties) {
      if (property.value.value !== true) continue
      requiredProperties.push(property.key.name)
    }
  }
  return requiredProperties
}

/**
 * Populate the content object with the body of the request
 * @param {Object} content - The content object
 * @param {Object} body - The body of the request
 * @param {Number} index - The index of the response
 * @param {Array} required - The required properties
 * @param {Array} hasRequestBody - The array of boolean to know if the request has a body
 * @param {Number} code - The code of the response
 * @returns {void}
 */
function populateContent({ content, body, index, required, hasRequestBody, code }) {
  if (body === undefined) {
    hasRequestBody.push(false)
    return
  }
  hasRequestBody.push(true)
  const { mode, raw, options = { raw } } = body
  switch (mode) {
    case 'raw': {
      const {
        raw: { language },
      } = options

      let example = ''
      if (language === 'json' || isJsonString(raw)) {
        if (raw) {
          const errors = []
          example = jsonc.parse(raw, errors)
          if (errors.length > 0) {
            example = raw
          }
        }

        /**
         * If the content is not defined, we create it
         * If the content is defined, we add an example to the examples object
         */
        if (content['application/json'] === undefined) {
          content['application/json'] = {
            schema: {
              type: 'object',
              example,
              ...(required !== undefined ? { required } : {}),
            },
          }
        } else {
          if (content['application/json']['examples'] === undefined)
            content['application/json']['examples'] = {}

          // We add the example to the examples object with code so "konfig fix"
          // can use it to determine which examples to use in generating a
          // schema
          if (code === undefined) throw new Error('Code is undefined')
          if (code >= 400) return
          content['application/json']['examples'][`example-${index}`] = {
            value: example,
          }
        }
      } else if (language === 'text') {
        content['text/plain'] = {
          schema: {
            type: 'string',
            example: raw,
          },
        }
      } else {
        content['*/*'] = {
          schema: {
            type: 'string',
            // To protect from object types we always stringify this
            example: JSON.stringify(raw),
          },
        }
      }
      break
    }
    case 'file':
      content['text/plain'] = {}
      break
    case 'formdata': {
      const parsedFormData = parseFormData(body.formdata)

      // Carry the required field over
      const existingData = content['multipart/form-data']
      if (
        existingData !== undefined &&
        existingData.schema !== undefined &&
        existingData.schema.required !== undefined
      )
        parsedFormData.schema.required = existingData.schema.required

      content['multipart/form-data'] = parsedFormData
      break
    }
    case 'urlencoded':
      content['application/x-www-form-urlencoded'] = parseFormData(body.urlencoded)
      break
  }
}

/** Parse the body for create a form data structure */
function parseFormData(data) {
  const objectSchema = {
    schema: {
      type: 'object',
    },
  }
  return data.reduce((obj, { key, type, description, value }) => {
    const { schema } = obj
    if (isRequired(description)) {
      ;(schema.required = schema.required || []).push(key)
    }
    ;(schema.properties = schema.properties || {})[key] = {
      type: inferType(value),
      ...(description ? { description: description.replace(/ ?\[required\] ?/gi, '') } : {}),
      ...(value ? { example: value } : {}),
      ...(type === 'file' ? { format: 'binary' } : {}),
    }
    return obj
  }, objectSchema)
}

/**
 * Default logic to insert parameters, if parameter exist will not be inserted again.
 * In Postman this means that only the first parameter is used, the repeated ones are discarded.
 * This is a separated method to allow make it configurable in the future
 * @param {Map} parameterMap
 * @param {Object} param
 * @returns the modified parameterMap
 */
const defaultParamInserter = (parameterMap, param) => {
  if (!parameterMap.has(param.name)) {
    parameterMap.set(param.name, param)
  }
  return parameterMap
}

/* Parse the Postman query and header and transform into OpenApi parameters */
function parseParameters(
  query,
  header,
  paths,
  paramsMeta = {},
  pathVars,
  { includeQuery = false, includeHeader = false },
  paramInserter = defaultParamInserter
) {
  // parse Headers
  const parameters = [
    ...header.reduce(mapParameters('header', includeHeader, paramInserter), new Map()).values(),
  ]
  // parse Query
  parameters.push(
    ...query.reduce(mapParameters('query', includeQuery, paramInserter), new Map()).values()
  )
  // Path params
  parameters.push(...extractPathParameters(paths, paramsMeta, pathVars))
  return parameters.length ? { parameters } : {}
}

/* Accumulator function for different types of parameters */
function mapParameters(type, includeDisabled, paramInserter) {
  return (parameterMap, { key, description, value, disabled }) => {
    if (!includeDisabled && disabled === true) return parameterMap
    const required = /\[required\]/gi.test(description)
    paramInserter(parameterMap, {
      name: key,
      in: type,
      schema: { type: inferType(value) },
      ...(required ? { required } : {}),
      ...(description ? { description: description.replace(/ ?\[required\] ?/gi, '') } : {}),
      ...(value ? { example: value } : {}),
    })
    return parameterMap
  }
}

function extractPathParameters(path, paramsMeta, pathVars) {
  const matched = path.match(/{\s*[\w-]+\s*}/g) || []
  return matched.map((match) => {
    const name = match.slice(1, -1)
    const { type: varType = 'string', description: desc, value } = pathVars[name] || {}
    const { type = varType, description = desc, example = value } = paramsMeta[name] || {}
    return {
      name,
      in: 'path',
      schema: { type },
      required: true,
      ...(description ? { description } : {}),
      ...(example ? { example } : {}),
    }
  })
}

function getVarValue(variables, name, def = undefined) {
  const variable = variables.find(({ key }) => key === name)
  return variable ? variable.value : def
}

/* calculate the type of a variable based on OPenApi types */
function inferType(value) {
  if (/^\d+$/.test(value)) return 'integer'
  if (/^[+-]?([0-9]*[.])?[0-9]+$/.test(value)) return 'number'
  if (/^(true|false)$/.test(value)) return 'boolean'
  return 'string'
}

/* Calculate the global auth based on options and postman definition */
function parseAuth({ auth }, optAuth, securitySchemes) {
  if (optAuth != null) {
    return parseOptsAuth(optAuth)
  }
  return parsePostmanAuth(auth, securitySchemes)
}

function generateSecurityScheme(auth) {
  if (auth.type !== 'apikey')
    return {
      type: 'http',
      scheme: auth.type,
    }
  const where = auth.apikey.find((obj) => obj.key === 'in')?.value
  const name = auth.apikey.find((obj) => obj.key === 'key')?.value
  return {
    type: 'apiKey',
    in: where === undefined ? 'Header' : where,
    name,
  }
}

/* Parse a postman auth definition */
function parsePostmanAuth(postmanAuth = {}, securitySchemes) {
  const { type } = postmanAuth
  if (type != null) {
    securitySchemes[`${type}Auth`] = generateSecurityScheme(postmanAuth)
    return {
      components: { securitySchemes },
      security: [
        {
          [`${type}Auth`]: [],
        },
      ],
    }
  }
  return Object.keys(securitySchemes).length === 0 ? {} : { components: { securitySchemes } }
}

/* Parse Auth at operation/request level */
function parseOperationAuth(auth, securitySchemes, optsAuth) {
  if (auth == null || optsAuth != null) {
    // In case of config auth operation auth is disabled
    return {}
  } else {
    const { type } = auth
    securitySchemes[`${type}Auth`] = generateSecurityScheme(auth)
    return {
      security: [{ [`${type}Auth`]: [] }],
    }
  }
}

/* Parse a options global auth */
function parseOptsAuth(optAuth) {
  const securitySchemes = {}
  const security = []
  for (const [secName, secDefinition] of Object.entries(optAuth)) {
    const { type, scheme, ...rest } = secDefinition
    if (type === 'http' && ['bearer', 'basic'].includes(scheme)) {
      securitySchemes[secName] = {
        type: 'http',
        scheme,
        ...rest,
      }
      security.push({ [secName]: [] })
    }
  }
  return Object.keys(securitySchemes).length === 0
    ? {}
    : {
        components: { securitySchemes },
        security,
      }
}

/* From the path array compose the real path for OpenApi specs */
function calculatePath(paths, pathDepth) {
  paths = paths.slice(pathDepth) // path depth
  // replace repeated '{' and '}' chars
  // replace `:` chars at first
  return (
    '/' +
    paths
      .map((path) => {
        path = path.replace(/([{}])\1+/g, '$1')
        path = path.replace(/^:(.*)/g, '{$1}')
        return path
      })
      .join('/')
  )
}

function calculateDomains(protocol, hosts, port) {
  return protocol + '://' + hosts.join('.') + (port ? `:${port}` : '')
}

/**
 * To support postman collection v2 and variable replace we should parse the `url` or `url.raw` data
 * without trust in the object as in v2 could not exist and if replaceVars = true then values cannot
 * be correctly parsed
 * @param {Object | String} url
 * @returns a url structure as in postman v2.1 collections
 */
function scrapeURL(url) {
  // Avoid parse empty url request
  if (url === undefined || url === '' || url.raw === '') {
    return { valid: false }
  }
  const rawUrl = typeof url === 'string' || url instanceof String ? url : url.raw
  // Fix for issue #136 if replace vars are not used then new URL throw an error
  // when using variables before the schema
  const fixedUrl = rawUrl.startsWith('{{') ? 'http://' + rawUrl : rawUrl
  const objUrl = new URL(fixedUrl)
  return {
    raw: rawUrl,
    path: decodeURIComponent(objUrl.pathname).slice(1).split('/'),
    query: compoundQueryParams(objUrl.searchParams, url.query),
    protocol: objUrl.protocol.slice(0, -1),
    host: decodeURIComponent(objUrl.hostname).split('.'),
    port: objUrl.port,
    valid: true,
    pathVars:
      url.variable == null
        ? {}
        : url.variable.reduce((obj, { key, value, description }) => {
            obj[key] = { value, description, type: inferType(value) }
            return obj
          }, {}),
  }
}

/**
 * Calculate query parameters in postman collection
 * @param {*} searchParams The searchParam instance from an URL object
 * @param {*} queryCollection The postman collection query section
 * @returns A query params array as created by postman collections Array(Obj)
 *
 * NOTE: This method was created because we think that some versions of postman don´t add the `query`
 * parameter in the url, but after some reasearch the reason why the `query` parameter can not be
 * present is just because no query parameters are used so we just format the postman `query` array here.
 */
function compoundQueryParams(searchParams, queryCollection = []) {
  return queryCollection
}

/* Parse domains from operations or options */
function parseServers(domains, serversOpts) {
  let servers
  if (serversOpts != null) {
    // This map is just to filter not supported fields while no validations are implemented
    servers = serversOpts.map(({ url, description }) => ({ url, description }))
  } else {
    servers = Array.from(domains).map((domain) => ({ url: domain }))
  }
  return servers.length > 0 ? { servers } : {}
}

/* Transform a object of tags in an array of tags */
function parseTags(tagsObj) {
  const tags = Object.entries(tagsObj).map(([name, description]) => ({ name, description }))
  return tags.length > 0 ? { tags } : {}
}

function descriptionParse(description) {
  if (description == null) return { description }
  const splitDesc = description.split(/# postman-to-openapi/gi)
  if (splitDesc.length === 1) return { description }
  return {
    description: splitDesc[0].trim(),
    paramsMeta: parseMdTable(splitDesc[1]),
  }
}

function parseResponse(responses, events, responseHeaders) {
  if (responses != null && Array.isArray(responses) && responses.length > 0) {
    return parseResponseFromExamples(responses, responseHeaders)
  } else {
    return { responses: parseResponseFromEvents(events) }
  }
}

function parseResponseFromEvents(events = []) {
  let status = 200
  const test = events.filter((event) => event.listen === 'test')
  if (test.length > 0) {
    const script = test[0].script.exec.join()
    const result = script.match(
      /\.response\.code\)\.to\.eql\((\d{3})\)|\.to\.have\.status\((\d{3})\)/
    )
    status =
      result && result[1] != null ? result[1] : result && result[2] != null ? result[2] : status
  }
  return {
    [status]: {
      description: 'Successful response',
      content: {
        'application/json': {},
      },
    },
  }
}

function parseResponseFromExamples(responses, responseHeaders) {
  // Group responses by status code
  const statusCodeMap = responses.reduce(
    (
      statusMap,
      { name, code, status: description, header, body, _postman_previewlanguage: language }
    ) => {
      if (code in statusMap) {
        if (!(language in statusMap[code].bodies)) {
          statusMap[code].bodies[language] = []
        }
        statusMap[code].bodies[language].push({ name, body })
      } else {
        statusMap[code] = {
          description,
          header,
          bodies: { [language]: [{ name, body }] },
        }
      }
      return statusMap
    },
    {}
  )
  // Parse for OpenAPI
  const parsedResponses = Object.entries(statusCodeMap).reduce(
    (parsed, [status, { description, header, bodies }]) => {
      parsed[status] = {
        description,
        ...parseResponseHeaders(header, responseHeaders),
        ...parseContent(bodies),
      }
      return parsed
    },
    {}
  )
  return { responses: parsedResponses }
}

function parseContent(bodiesByLanguage) {
  const content = Object.entries(bodiesByLanguage).reduce((content, [language, bodies]) => {
    if (language === 'json') {
      const examples = parseExamples(bodies, 'json')

      // check if all examples are array types
      const allExamples = [
        examples.example ? examples.example : [],
        ...(examples.examples ? Object.values(examples.examples) : []),
      ]
      const allExampleAreArrayTypes = allExamples.reduce(
        (acc, example) => acc && Array.isArray(example),
        true
      )

      const type = allExampleAreArrayTypes ? 'array' : 'object'
      content['application/json'] = {
        schema: { type },
        ...examples,
      }
    } else {
      content['text/plain'] = {
        schema: { type: 'string' },
        ...parseExamples(bodies, 'text'),
      }
    }
    return content
  }, {})
  return { content }
}

function parseExamples(bodies, language) {
  if (Array.isArray(bodies) && bodies.length > 1) {
    return {
      examples: bodies.reduce((ex, { name: summary, body }, i) => {
        ex[`example-${i}`] = {
          summary,
          value: safeSampleParse(body, summary, language),
        }
        return ex
      }, {}),
    }
  } else {
    const { body, name } = bodies[0]
    return {
      example: safeSampleParse(body, name, language),
    }
  }
}

function safeSampleParse(body, name, language) {
  if (language === 'json') {
    const errors = []
    const parsedBody = jsonc.parse(body == null || body.trim().length === 0 ? '{}' : body, errors)
    if (errors.length > 0) {
      throw new Error('Error parsing response example "' + name + '"')
    }
    return parsedBody
  }
  return body
}

function parseResponseHeaders(headerArray, responseHeaders) {
  if (!responseHeaders) {
    return {}
  }
  headerArray = headerArray || []
  const headers = headerArray.reduce((acc, { key, value }) => {
    acc[key] = {
      schema: {
        type: inferType(value),
        example: value,
      },
    }
    return acc
  }, {})
  return Object.keys(headers).length > 0 ? { headers } : {}
}

/**
 * Just check if is a string collection or a path.
 * moved to method for allow easy changes in the future like check if it is a collection, validations...
 */
async function resolveInput(input) {
  if (input.trim().startsWith('{')) {
    return input
  } else {
    return readFile(input, 'utf8')
  }
}

/**
 * return if the provided text contains the '[required]' mark
 * @param {*} text The text where we should look for the required mark
 * @returns boolean
 */
function isRequired(text) {
  return /\[required\]/gi.test(text)
}

/**
 * calculate the operationId based on the user selected `mode`
 * @param {*} mode - mode to calculate the operation id between `off`, `auto` or `brackets`
 * @param {*} name - field name of the request/operation in the postman collection without modify.
 * @param {*} summary - calculated summary of the operation that will be used in the OpenAPI spec.
 * @returns an operation id
 */
function calculateOperationId(mode, name, summary) {
  let operationId
  switch (mode) {
    case 'off':
      break
    case 'auto':
      operationId = camelCase(summary)
      break
    case 'brackets': {
      // eslint-disable-next-line no-useless-escape
      const matches = name.match(/\[([^\[\]]*)\]/)
      operationId = matches ? matches[1] : undefined
      break
    }
    default: // Unknown value in the operationId option
      break
  }
  return operationId ? { operationId } : {}
}

postmanToOpenApi.version = version

module.exports = postmanToOpenApi
