import { Operation, TagObject, OperationObject } from 'konfig-lib'
import OpenAI from 'openai'

export async function aiGenerateOrChooseTag(
  operation: Operation,
  path: string,
  method: string,
  tags: TagObject[]
): Promise<string> {
  const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] })
  const tagNames = tags.map((t) => t.name)

  // First, try and choose a tag programmatically without using OpenAI
  const tag = programaticallyChooseTag(operation, path, tagNames)
  if (tag !== undefined) return tag
  const systemPrompt = `You are a generator of tags for an OpenAPI specification. You generate tags in json format: "{ tag: ... }"`
  const prompt = generatePrompt(path, method, operation, tagNames)
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
  if (responseJson.tag === undefined || responseJson.tag === null)
    throw Error('OpenAI returned an invalid json: it does not contain a tag')

  tags.push({ name: responseJson.tag })
  return responseJson.tag
}

function programaticallyChooseTag(
  operation: Operation,
  path: string,
  tagNames: string[]
): string | undefined {
  for (const tag of tagNames) {
    if (path.toLowerCase().includes(tag.toLowerCase())) return tag
    if (
      operation.summary &&
      operation.summary.toLowerCase().includes(tag.toLowerCase())
    )
      return tag
  }
  return undefined
}

function generatePrompt(
  path: string,
  method: string,
  operation: Operation,
  tagNames: string[]
): string {
  const tagNamesStr = tagNames.join(', ').slice(0, -2)
  return `The following operation from my OpenAPI specification is missing a tag:
Path: ${path}
Method: ${method}
Summary: ${operation.summary}

Based on this information, choose the best tag from this list of existing tags on the OpenApi Specification: ${tagNamesStr}.
IF AND ONLY IF none of these existing tags are suitable, then generate a new tag. The new tag MUST be a single word, MUST be a noun, and MUST be singular. It MUST NOT be a combination of multiple words.

In general, a good tag name is related to the type of data being operated on (such as "Student"), or the type of operation being performed (such as "Authentication").

Respond with just the tag in json format: "{ tag: ... }" with no other information.`
}
