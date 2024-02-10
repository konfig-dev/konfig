import { Operation, OperationObject } from 'konfig-lib'
import OpenAI from 'openai'

export async function aiGenerateOperationIdSuffix({
  prefix,
  path,
  method,
  operation,
  operations,
}: {
  prefix: string
  path: string
  method: string
  operation: Operation
  operations: OperationObject[]
}): Promise<string> {
  const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] })

  const existingIds = operations.map((o) => o.operation.operationId)
  const existingIdsStr = existingIds.join(', ').slice(0, -2)
  const systemPrompt = `You are a generator of operation IDs for an OpenAPI specification. You generate operation IDs in json format: "{ prefix: ... , suffix: ...}"`
  const prompt = generatePrompt({
    prefix,
    path,
    method,
    operation,
    existingIdsStr,
  })

  const response = (
    await openai.chat.completions.create({
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      model: 'gpt-3.5-turbo-1106',
    })
  ).choices[0].message.content

  if (response === undefined || response === null || response === '')
    throw Error('OpenAI returned an empty response')

  const responseJson = JSON.parse(response)
  if (responseJson === undefined || responseJson === null)
    throw Error('OpenAI returned an invalid response: it is not a valid json')
  if (responseJson.suffix === undefined || responseJson.suffix === null)
    throw Error('OpenAI returned an invalid json: it does not contain a suffix')

  // Post-process to ensure that rules are followed
  let suffix = responseJson.suffix.replace('_', '')
  suffix = suffix.charAt(0).toLowerCase() + suffix.slice(1)
  suffix = suffix.replace('retrieve', 'get')
  suffix = suffix.replace('fetch', 'get')
  console.log(`AI-generated operation id: ${prefix}${suffix}`)
  return suffix
}

function generatePrompt({
  prefix,
  path,
  method,
  operation,
  existingIdsStr,
}: {
  prefix: string
  path: string
  method: string
  operation: Operation
  existingIdsStr: string
}): string {
  return `Generate an operation ID for this operation in my OpenAPI specification:
Path: ${path}
Method: ${method}
Summary: ${operation.summary}
Description: ${operation.description}

The operation ID is in the format "prefix_suffix". The prefix is: ${prefix}. Generate the suffix and respond in json format.
The operation ID MUST follow ALL of these rules:

1. The suffix must be at least 3 characters long.
2. The suffix must be in camelCase and CANNOT include any underscores.
3. The suffix must not redundantly re-use words from the prefix. (For example: Store_get is preferred over Store_getStore.)
4. If the suffix contains both a verb and a noun, the noun should generally follow the verb. (For example, Store_placeOrder is better than Store_orderPlace).
5. Prefer simple verbs like "get", "create", "update", "delete", and "list" when possible.

Existing operation ids for this OpenAPI specification are as follows: ${existingIdsStr}.
The operation ID MUST be unique within this list of existing operation IDs. You can also use them as a reference to generate this operation id.`
}
