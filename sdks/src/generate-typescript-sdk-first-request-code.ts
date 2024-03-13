import camelcase from 'konfig-lib/dist/util/camelcase'

import { Method } from '../../generator/konfig-docs/src/components/SdkComponentProps'

/**
 * // Retrieve a list of API Requests that have been made.
 * const getApiRequestsResponse = onePasswordConnect.activity.getApiRequests({
 *     limit: 10,
 *     offset: 0
 * })
 */
export function generateTypescriptSdkFirstRequestCode({
  clientName,
  methods,
}: {
  clientName: string
  methods: Method[]
}): string {
  const firstMethod = methods[0]
  const parameters = firstMethod.parameters.filter(
    (parameter) =>
      (parameter.required &&
        parameter.schema !== 'object' &&
        parameter.schema !== 'array') ||
      parameter.example ||
      parameter.default,
  )
  const hasParameters = parameters.length > 0
  const lines: string[] = [
    `// ${firstMethod.description.trim()}`,
    `const ${firstMethod.method}Response = ${camelcase(clientName)}${
      firstMethod.tag ? `.${camelcase(firstMethod.tag)}` : ''
    }.${firstMethod.method}${hasParameters ? '({' : '()'}`,
    ...parameters.map((parameter) => {
      return `    ${parameter.name}: ${JSON.stringify(
        parameter.example ?? parameter.default,
      )}`
    }),
    ...(hasParameters ? [`})`] : []),
  ]
  return lines.join('\n')
}
