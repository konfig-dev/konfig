import { Parameter } from '@/components/OperationParameter'
import {
  Spec,
  OperationObject,
  SchemaObject,
  ResponseObject,
  SecurityScheme,
  RequestBodyObject,
  getOperations,
  HttpMethods,
} from 'konfig-lib'
import { GetStaticPropsResult } from 'next'
import {
  GithubResources,
  githubGetReferenceResources,
} from './github-get-reference-resources'
import { NavbarDataItem } from '@/components/LinksGroup'
import { generateDemosDataFromGithub } from './generate-demos-from-github'
import { sortParametersByRequired } from './sort-parameters-by-required'
import { generateLogoLink } from './generate-logo-link'

export type ReferencePageProps = Omit<GithubResources, 'spec'> & {
  spec: Spec['spec']
  operationId: string
  operation: OperationObject
  servers: string[]
  title: string
  owner: string
  demos: string[] // demo ids
  hasDocumentation: boolean
  repo: string
  httpMethod: HttpMethods
  contentType: string | null
  path: string
  oauthTokenUrl: string | null
  requestBodyParameter: Parameter | null
  pathParameters: Parameter[]
  queryParameters: Parameter[]
  hideNonSdkSnippets: boolean
  headerParameters: Parameter[]
  cookieParameters: Parameter[]
  requestBodyProperties: Record<string, SchemaObject> | null
  requestBodyRequired: string[] | null
  googleAnalyticsId: string | null
  responses: Record<string, ResponseObject>
  securityRequirements: Record<string, string[]> | null
  securitySchemes: Record<string, SecurityScheme> | null
  omitOwnerAndRepo?: boolean
  logo: ReturnType<typeof generateLogoLink>
}

export async function generatePropsForReferencePage({
  owner,
  tag,
  repo,
  operationId,
  omitOwnerAndRepo,
}: {
  owner: string
  tag: string
  repo: string
  operationId: string
  omitOwnerAndRepo?: boolean
}): Promise<GetStaticPropsResult<ReferencePageProps>> {
  const { spec, ...props } = await githubGetReferenceResources({
    owner,
    repo,
    omitOwnerAndRepo,
  })

  const demos = await generateDemosDataFromGithub({
    orgId: owner,
    portalId: repo,
  })

  if (spec.specDereferenced === null) throw Error('specDereferenced is null')

  // find any tokenUrl in the spec from the oauth2 security scheme
  // if found then set oauthTokenUrl to that value
  // if not found then set oauthTokenUrl to null
  let oauthTokenUrl: string | null = null
  if (spec.specDereferenced.components?.securitySchemes) {
    for (const securityScheme of Object.values(
      spec.specDereferenced.components.securitySchemes
    )) {
      if ('$ref' in securityScheme) throw Error('Spec should be dereferenced')
      if (securityScheme.type === 'oauth2') {
        oauthTokenUrl =
          securityScheme.flows?.clientCredentials?.tokenUrl ?? null
      }
    }
  }

  let operation: OperationObject | null = null
  const operations = getOperations({ spec: spec.specDereferenced })
  for (const op of operations) {
    if (op.operation.operationId === operationId) operation = op
  }
  if (operation === null)
    throw Error(`Operation with operation ID ${operationId} not found`)

  // find links group with operation id that matches operation in metadata.operationId and set initiallyOpened to true
  // if not found then set initiallyOpened to false
  // also sets "active" to true to make it highlighted in the navbar
  props.navbarData = props.navbarData.map(
    (item: NavbarDataItem): NavbarDataItem => {
      const hasOperation = item.links.find((link) => {
        if (link.metadata?.operationId === operationId) {
          link.active = true
          return true
        }
        return false
      })
      item.initiallyOpened = hasOperation ? true : false
      return item
    }
  )

  const requestBody = (operation.operation.requestBody ??
    null) as RequestBodyObject | null

  // extract all properties from requestBody schema for every media type into a map of media type -> properties
  const allRequestBodyProperties: Record<
    string,
    Record<string, SchemaObject>
  > = {}
  if (requestBody?.content) {
    for (const mediaType in requestBody.content) {
      const mediaTypeObject = requestBody.content[mediaType]
      if (mediaTypeObject.schema === undefined) continue
      if ('$ref' in mediaTypeObject.schema)
        throw Error('Spec should be dereferenced')
      if (mediaTypeObject.schema?.properties) {
        allRequestBodyProperties[mediaType] = mediaTypeObject.schema
          .properties as Record<string, SchemaObject>
      }
    }
  }

  let requestBodyParameter: Parameter | null = null
  let contentType: string | null = null
  if (requestBody?.content) {
    for (const mediaType in requestBody.content) {
      const mediaTypeObject = requestBody.content[mediaType]
      if (mediaTypeObject.schema === undefined) continue
      if ('$ref' in mediaTypeObject.schema)
        throw Error('Spec should be dereferenced')
      contentType = mediaType
      requestBodyParameter = {
        name: '',
        in: 'body',
        schema: mediaTypeObject.schema,
        isRequestBody: true,
      }
    }
  }

  // put all required properties into a map of media type -> required properties
  const allRequestBodyRequired: Record<string, string[]> = {}
  if (requestBody?.content) {
    for (const [mediaType, mediaTypeObject] of Object.entries(
      requestBody.content
    )) {
      if (mediaTypeObject.schema?.required) {
        allRequestBodyRequired[mediaType] = mediaTypeObject.schema.required
      }
    }
  }

  // extract the first mediaType from requestBody and create two variables: requestBodyProperties and requestBodyRequired
  // if no requestBody then set requestBodyProperties and requestBodyRequired to null
  let requestBodyProperties: Record<string, SchemaObject> | null = null
  let requestBodyRequired: string[] | null = null
  if (requestBody?.content) {
    const firstMediaType = Object.keys(requestBody.content)[0]
    requestBodyProperties = allRequestBodyProperties[firstMediaType] ?? null
    requestBodyRequired = allRequestBodyRequired[firstMediaType] ?? null
  }

  // put responses into a map of response code -> response object
  const responses: Record<string, ResponseObject> = {}
  if (operation.operation.responses) {
    for (const [responseCode, responseObject] of Object.entries(
      operation.operation.responses
    )) {
      responses[responseCode] = responseObject as ResponseObject
    }
  }
  const operationParameters = (operation.operation?.parameters ??
    []) as Parameter[]

  const pathParameters = sortParametersByRequired(
    operationParameters.filter((param) => param.in === 'path')
  )
  const queryParameters = sortParametersByRequired(
    operationParameters.filter((param) => param.in === 'query')
  )
  const headerParameters = sortParametersByRequired(
    operationParameters.filter((param) => param.in === 'header')
  )
  const cookieParameters = sortParametersByRequired(
    operationParameters.filter((param) => param.in === 'cookie')
  )

  // get global security requirements from spec and operation-specific security
  // requirements, merge them together, and map them to the corresponding
  // security schema under securitySchemes. If no security requirements are
  // found, set securityRequirements to null
  let securityRequirements: Record<string, string[]> | null = null
  if (spec.specDereferenced.security) {
    securityRequirements = {}
    for (const securityRequirement of spec.specDereferenced.security) {
      for (const [securitySchema, scopes] of Object.entries(
        securityRequirement
      )) {
        securityRequirements[securitySchema] = scopes
      }
    }
  }
  if (operation.operation.security) {
    if (securityRequirements === null) securityRequirements = {}
    for (const securityRequirement of operation.operation.security) {
      for (const [securitySchema, scopes] of Object.entries(
        securityRequirement
      )) {
        securityRequirements[securitySchema] = scopes
      }
    }
  }
  let securitySchemes: Record<string, SecurityScheme> | null = null
  if (
    securityRequirements &&
    spec.specDereferenced.components?.securitySchemes
  ) {
    for (const [security, scopes] of Object.entries(securityRequirements)) {
      if (security in spec.specDereferenced.components.securitySchemes) {
        if (securitySchemes === null) securitySchemes = {}
        securitySchemes[security] = spec.specDereferenced.components
          .securitySchemes[security] as SecurityScheme
      }
    }
  }

  // Dylan: note that we can't do this because TypeScript SDK throws an error if security is not provided
  //
  // if security is set to "[]" on the operation then no security should exist
  // if (operation.operation.security?.length === 0) {
  //   securityRequirements = null
  //   securitySchemes = null
  // }

  const servers = spec.spec.servers?.map((server) => server.url)
  if (servers === undefined) throw Error('No servers found in spec')
  if (servers.length === 0) throw Error('No servers found in spec')

  // return a 404 if "portal" property is not configured
  if (props.konfigYaml.portal === undefined)
    return {
      notFound: true,
    }

  return {
    props: {
      ...props,
      title: props.konfigYaml.portal.title,
      contentType,
      hideNonSdkSnippets: props.konfigYaml.portal.hideNonSdkSnippets ?? false,
      httpMethod: operation.method,
      path: operation.path,
      operationId,
      operation,
      spec: spec.spec,
      servers,
      pathParameters,
      queryParameters,
      requestBodyParameter,
      owner,
      repo,
      headerParameters,
      oauthTokenUrl,
      cookieParameters,
      omitOwnerAndRepo: omitOwnerAndRepo ?? false,
      googleAnalyticsId: props.konfigYaml.portal.googleAnalyticsId ?? null,
      hasDocumentation: props.konfigYaml.portal?.documentation !== undefined,
      requestBodyProperties,
      demos:
        demos.result === 'error'
          ? []
          : demos.portal.demos.map((demo) => demo.id),
      requestBodyRequired,
      securityRequirements,
      securitySchemes,
      responses,
    },
  }
}
