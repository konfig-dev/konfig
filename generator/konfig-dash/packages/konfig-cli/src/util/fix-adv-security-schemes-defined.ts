import * as inquirer from 'inquirer'
import {
  getOperationParametersDeprecated,
  getOperations,
  Operation,
  OperationParameter,
  resolveRef,
  Spec,
} from 'konfig-lib'
import {
  inSchema,
  OAuthFlowObject,
  OAuthFlowObjectCommon,
  Progress,
  SecuritySchemeObject,
} from './fix-progress'
import { inquirerConfirm } from './inquirer-confirm'
import { logOperationDetails } from './log-operation-details'
import boxen from 'boxen'
import { inquirerPromptCI } from './inquirer-prompt-ci'

export async function fixAdvSecuritySchemesDefined({
  spec,
  progress,
  alwaysYes,
  ci,
}: {
  spec: Spec
  progress: Progress
  alwaysYes: boolean
  ci: boolean
}): Promise<number> {
  let numberOfParametersRemovedForSecurityScheme = 0

  const operations = getOperations({ spec: spec.spec })
  for (const { operation, method, path } of operations) {
    const parameters = await getOperationParametersDeprecated({
      operation,
      $ref: spec.$ref,
    })
    if (parameters === undefined) continue
    for (const parameter of parameters) {
      const { success } = inSchema.safeParse(parameter.in)
      if (!success) continue

      logOperationDetails({ operation: { operation, path, method } })

      const savedSecurityScheme = progress.getSecuritySchemeParameter({
        name: parameter.name,
        parameterIn: parameter.in,
      })
      if (savedSecurityScheme !== undefined) {
        const confirm =
          savedSecurityScheme === false
            ? await inquirerConfirm({
                message: `Use saved decision to not make parameter(name: ${parameter.name}, in: ${parameter.in}) a security scheme?`,
                alwaysYes,
              })
            : await inquirerConfirm({
                message: `Use saved security scheme for parameter(name: ${parameter.name}, in: ${parameter.in})?`,
                alwaysYes,
              })
        if (confirm && savedSecurityScheme) {
          await removeParameterForSecurityRequirement({
            spec,
            name: parameter.name,
            parameterIn: parameter.in,
            securityScheme: savedSecurityScheme,
            operation,
          })
          numberOfParametersRemovedForSecurityScheme++
          continue
        }
        if (confirm && savedSecurityScheme === false) {
          continue
        }
      }

      const existingSecurity =
      spec.spec.components?.securitySchemes !== undefined
        ? Object.entries(spec.spec.components.securitySchemes).find(
            ([securityName, s]) => {
              const resolved = resolveRef({ refOrObject: s, $ref: spec.$ref })
              if (resolved.type !== 'apiKey') return
              return (
                resolved.name.toLowerCase() === parameter.name.toLowerCase()
              )
            }
          )
        : undefined
    if (existingSecurity !== undefined) {
      const securitySchemeObject = resolveRef({
        refOrObject: existingSecurity[1],
        $ref: spec.$ref,
      })
      if (securitySchemeObject.type !== 'apiKey')
        throw Error(
          'unexpected security scheme type when replacing case in-sensitive parameter'
        )
      const securityScheme: SecuritySchemeObject = {
        in: securitySchemeObject.in as any,
        name: securitySchemeObject.name,
        type: 'apiKey',
        securityName: existingSecurity[0],
      }
      await removeParameterForSecurityRequirement({
        spec,
        name: parameter.name,
        parameterIn: parameter.in,
        securityScheme,
        operation,
      })
      continue;
    }

      const { securityName, isSecurity } = await inquirerPromptCI<{
        securityName: string
        isSecurity: boolean
      }>({
          ci,
          ciDefault: { securityName: '', isSecurity: false },
          questions: 
            [
              {
                type: 'confirm',
                name: 'isSecurity',
                message: `Is parameter(name: ${parameter.name}, in: ${parameter.in}) a security requirement?`,
              },
              {
                type: 'input',
                name: 'securityName',
                message: `Enter a name for security scheme name for parameter(name: ${parameter.name}, in: ${parameter.in}): `,
                when({ isSecurity }) {
                  return isSecurity
                },
              },
            ]
        })
      if (!isSecurity) {
        progress.saveSecuritySchemeParameter({
          name: parameter.name,
          parameterIn: parameter.in,
          securityScheme: false,
        })
        continue
      }
      const { type } = await inquirer.prompt<{
        type: SecuritySchemeObject['type']
      }>([
        {
          type: 'list',
          choices: ['apiKey', 'oauth2'] as SecuritySchemeObject['type'][],
          name: 'type',
          message: `Which type of security scheme is this parameter?`,
        },
      ])
      const securityScheme = await createSecurityScheme({
        securityName,
        parameter,
        type,
      })
      await removeParameterForSecurityRequirement({
        spec,
        name: parameter.name,
        parameterIn: parameter.in,
        operation,
        securityScheme,
      })
      numberOfParametersRemovedForSecurityScheme++
      progress.saveSecuritySchemeParameter({
        name: parameter.name,
        parameterIn: parameter.in,
        securityScheme,
      })
    }
  }
  return numberOfParametersRemovedForSecurityScheme
}

async function createSecurityScheme({
  type,
  parameter,
  securityName,
}: {
  type: SecuritySchemeObject['type']
  parameter: OperationParameter
  securityName: string
}): Promise<SecuritySchemeObject> {
  if (type === 'apiKey') {
    return {
      securityName,
      type,
      name: parameter.name,
      in: inSchema.parse(parameter.in),
    }
  }
  //
  const flows = await createOauthFlowObject()
  return {
    securityName,
    type,
    flows,
  }
}

async function createOauthFlowObject(): Promise<OAuthFlowObject> {
  const { flows } = await inquirer.prompt<{
    flows: (keyof OAuthFlowObject)[]
  }>([
    {
      type: 'checkbox',
      choices: [
        'authorizationCode',
        'implicit',
        'clientCredentials',
        'password',
      ] as (keyof OAuthFlowObject)[],
      name: 'flows',
      message: `Which type of oauth flows are accepted?`,
    },
  ])
  const flow: OAuthFlowObject = {}
  for (const flowType of flows) {
    if (flowType !== 'clientCredentials') throw Error('Not implemented')

    const { tokenUrl } = await inquirer.prompt<{
      tokenUrl: string
    }>([
      {
        type: 'input',
        name: 'tokenUrl',
        message: `What is the token URL for the "${flowType}" flow?`,
      },
    ])

    const scopes: OAuthFlowObjectCommon['scopes'] = {}

    const { numberOfScopes } = await inquirer.prompt<{
      numberOfScopes: number
    }>([
      {
        type: 'number',
        name: 'numberOfScopes',
        message: `How many different oauth scope(s) are there?`,
      },
    ])

    for (let i = 0; i < numberOfScopes; i++) {
      const { name, description } = await inquirer.prompt<{
        name: string
        description: string
      }>([
        {
          type: 'input',
          name: 'name',
          message: 'Name of scope',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Description of scope',
        },
      ])
      scopes[name] = description
    }

    flow[flowType] = {
      tokenUrl,
      scopes,
    }
  }
  return flow
}

async function removeParameterForSecurityRequirement({
  spec: { spec, $ref },
  name,
  parameterIn,
  securityScheme,
  operation,
}: {
  spec: Spec
  operation: Operation
  name: string
  parameterIn: string
  securityScheme: SecuritySchemeObject
}) {
  let scopes: string[] = []
  if (securityScheme.type === 'oauth2') {
    if (securityScheme.flows.authorizationCode !== undefined)
      throw Error('Not Implemented')
    if (securityScheme.flows.implicit !== undefined)
      throw Error('Not Implemented')
    if (securityScheme.flows.password !== undefined)
      throw Error('Not Implemented')
    if (securityScheme.flows.clientCredentials) {
      const scopeAndDescriptions = Object.entries(
        securityScheme.flows.clientCredentials.scopes
      )

      if (scopeAndDescriptions.length === 1) {
        scopes.push(scopeAndDescriptions[0][0])
      } else {
        const { selectedScopes } = await inquirer.prompt<{
          selectedScopes: string[]
        }>([
          {
            type: 'checkbox',
            choices: scopeAndDescriptions.map(([scope, description]) => ({
              value: scope,
              name: `${scope}${description !== '' ? `: ${description}` : ''}`,
            })),
            name: 'selectedScopes',
            message: `Which oauth scopes are required for "${securityScheme.securityName}"?`,
            validate(input, answers) {
              if (
                scopeAndDescriptions.length > 0 &&
                answers &&
                answers.selectedScopes.length === 0
              )
                return 'Select at least one scope'
              return true
            },
          },
        ])
        scopes.push(...selectedScopes)
      }
    }
  }

  // Add to components
  if (spec.components === undefined) spec.components = {}
  if (spec.components.securitySchemes === undefined)
    spec.components.securitySchemes = {}
  const { securityName, ...securitySchemeObject } = securityScheme
  spec.components.securitySchemes[securityScheme.securityName] =
    securitySchemeObject

  // Add to security requirement of operation
  if (operation.security === undefined) operation.security = []
  if (operation.security.length === 0)
    operation.security = [
      {
        [securityScheme.securityName]: scopes,
      },
    ]
  else if (operation.security.length === 1)
    operation.security[0][securityScheme.securityName] = scopes
  else {
    console.log(
      boxen(
        `Detected multiple security schemes. Adding "${securityScheme.securityName}" to all schemes.`,
        { padding: 1, title: 'Warniing' }
      )
    )
    for (const security of operation.security) {
      security[securityScheme.securityName] = scopes
    }
  }

  // Remove from parameters
  const parameters = await getOperationParametersDeprecated({
    operation,
    $ref,
  })
  if (parameters === undefined)
    throw Error('We should have had parameters if we found something to remove')
  const index = parameters.findIndex(
    (p) => p.name === name && p.in === parameterIn
  )
  if (index === -1) throw Error('We should have found parameter')
  operation.parameters?.splice(index, 1)
}
