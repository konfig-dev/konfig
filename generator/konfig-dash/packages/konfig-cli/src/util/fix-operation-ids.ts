import * as inquirer from 'inquirer'
import boxen from 'boxen'
import { Operation, HttpMethods, Spec, getOperations } from 'konfig-lib'
import { Progress } from './fix-progress'
import { operationIdSchema } from 'konfig-lib'
import { inquirerConfirm } from './inquirer-confirm'
import { logOperationDetails } from './log-operation-details'
import camelcase from 'camelcase'
import OpenAI from 'openai'

function updateOperationId({
  operation,
  operationId,
  method,
  path,
  progress,
}: {
  operation: Operation
  path: string
  method: HttpMethods
  operationId: string
  progress: Progress
}) {
  operation.operationId = operationId
  progress.saveOperationId({ path, method, operationId })
}

async function updateOperationTag({
  spec,
  operation,
  progress,
  path,
  method,
}: {
  spec: Spec['spec']
  operation: Operation
  path: string
  method: HttpMethods
  progress: Progress
}) {
  logOperationDetails({ operation: { operation, method, path } })
  const { tag } = await inquirer.prompt<{ tag: string }>([
    {
      type: 'list',
      name: 'tag',
      choices: spec.tags,
      message: 'Choose an existing tag',
    },
  ])
  operation.tags = [tag]
  progress.saveOperationTag({ path, method, operationTag: tag })
}

function generatePrefix({ operation }: { operation: Operation }) {
  if (operation.tags === undefined) throw Error('Tags is empty')
  const tag = operation.tags[0]

  // remove any non-alphanumeric characters except spaces from tag
  const filtered = tag.replace(/[^a-zA-Z0-9 ]/g, '')

  const prefix = `${camelcase(filtered, { pascalCase: true })}_`
  return {
    prefix,
    generateOperationId: (suffix: string) => `${prefix}${suffix}`,
  }
}

export async function fixOperationIds({
  spec,
  progress,
  alwaysYes,
  useAIForOperationId,
}: {
  spec: Spec['spec']
  progress: Progress
  alwaysYes: boolean
  useAIForOperationId: boolean
}): Promise<number> {
  let numberOfUpdatedOperationIds = 0
  if (spec.paths === undefined) return numberOfUpdatedOperationIds
  if (spec.tags === undefined || spec.tags.length === 0) {
    throw Error('TODO')
  }
  // Dummy key prevents error from being thrown
  const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'] ?? 'dummy',
  })
  const operations = getOperations({ spec })
  for (const { operation, path, method } of operations) {
    if (operation.operationId !== undefined) {
      const result = operationIdSchema.safeParse(operation.operationId)
      if (result.success) continue
      console.log(
        boxen(
          `Detected improperly named operation ID.\nReason:\n - ${result.error.issues
            .map((issue) => issue.message)
            .join('\n - ')}`,
          {
            title: 'Improper OperationID Detected',
            padding: 1,
            borderColor: 'red',
          }
        )
      )
    }
    if (operation.tags === undefined || operation.tags.length === 0) {
      await updateOperationTag({ spec, operation, progress, path, method })
    }
    numberOfUpdatedOperationIds++
    const { prefix, generateOperationId } = generatePrefix({ operation })
    const operationsWithId = operations
      .map((o) => o.operation)
      .filter((operation) => operation.operationId !== undefined)
      .filter(
        (operation) =>
          operationIdSchema.safeParse(operation.operationId).success
      )
    if (operationsWithId.length > 5) {
      console.log(
        boxen(
          operationsWithId
            .map((operation) => operation.operationId)
            .slice(operationsWithId.length - 5)
            .join('\n'),
          {
            title: 'Existing Operation IDs',
            titleAlignment: 'center',
            padding: 1,
          }
        )
      )
    }

    logOperationDetails({ operation: { operation, path, method } })

    const savedOperationId = progress.getOperationId({ path, method })
    if (savedOperationId !== undefined) {
      const confirm = await inquirerConfirm({
        message: `Use saved operation ID "${savedOperationId}"?`,
        alwaysYes,
      })
      if (confirm) {
        updateOperationId({
          operation,
          operationId: savedOperationId,
          path,
          method,
          progress,
        })
        continue
      }
    }

    // compute a default value if possible
    function computeDefault() {
      const withMatchingSummaries = operationsWithId.filter(
        (opWithId) => opWithId.summary === operation.summary
      )

      if (withMatchingSummaries.length < 2) {
        return
      }
      // looks like there are more than 2 operations with matching summaries
      // lets see if their operation ID suffixes are also the same
      const uniqueOperationIds = new Set(
        withMatchingSummaries.map(
          (operation) => operation.operationId?.split('_')[1] // suffix
        )
      )
      if (uniqueOperationIds.size > 1) return

      // they all have the same operation id suffixes, we can compute the suffix as a default then
      const suffix = withMatchingSummaries[0].operationId?.split('_')[1]
      console.log(
        boxen(`"${suffix}"`, {
          title: '🪄 Computed Default Value',
          textAlignment: 'center',
          borderColor: 'green',
        })
      )
      return suffix
    }

    async function generateSuffixWithAI(): Promise<string> {
      //       const existingIds = operations
      //         .map((o) => o.operation.operationId)
      //         .join(', ')
      //         .slice(0, -2)
      //       const prompt = `Generate an operation ID for this operation in my OpenAPI specification:
      // Path: ${path}
      // Method: ${method}
      // Summary: ${operation.summary}
      // Description: ${operation.description}

      // The operation ID must be prefixed with: ${prefix}, and MUST follow ALL of these rules:
      // 1. The suffix must be at least 3 characters long.
      // 2. The suffix must not redundantly re-use words from the prefix.
      // (For example: Store_get is preferred over Store_getStore.)
      // 3. If the suffix contains both a verb and a noun, the noun should generally follow the verb. (For example, Store_placeOrder is preferred over Store_orderPlace).
      // 4. The suffix must be in camelCase and CANNOT include any underscores.

      // Existing operation ids for this OpenAPI specification are as follows: ${existingIds}.

      // Based on these existing ids, the operation id must also follow these rules:
      // 5. The operation ID must be unique.
      // 6. If applicable, the same types of actions across different operations should be structured similarly. (For example, Cat_get, Dog_get, and Fish_get are preferred over Cat_get, Dog_retrieve, and Fish_fetch.)

      // ONLY RESPOND WITH JUST THE OPERATION ID ITSELF. Do not include any other text in your response.`

      //       const response = (
      //         await openai.chat.completions.create({
      //           messages: [{ role: 'user', content: prompt }],
      //           model: 'gpt-3.5-turbo',
      //         })
      //       ).choices[0].message.content

      //       if (response === undefined || response === null || response === '')
      //         throw Error('OpenAI returned an empty response')

      //       if (!response.startsWith(prefix))
      //         throw Error(
      //           `OpenAI returned an invalid response: "${response}; it should start with prefix "${prefix}"`
      //         )
      //       console.log(`AI-generated operation id: ${response}`)
      //       return response.slice(prefix.length)
      return 'suffix'
    }

    async function promptForSuffix(): Promise<{ suffix: string }> {
      return await inquirer.prompt<{ suffix: string }>([
        {
          type: 'input',
          name: 'suffix',
          message: `Enter operation ID:`,
          default: computeDefault(),
          validate(suffix: string) {
            if (suffix === '') return 'Please specify a non-empty string'
            if (suffix.length < 3)
              return 'Please enter a suffix longer than 2 characters'
            const conflictingOperationId = operations
              .map((o) => o.operation.operationId)
              .find((opId) => opId === generateOperationId(suffix))
            if (conflictingOperationId !== undefined)
              return `Operation ID must be unique (conflicts with "${conflictingOperationId}")`
            return true
          },
          transformer(suffix: string) {
            return generateOperationId(suffix)
          },
        },
      ])
    }

    const suffix = useAIForOperationId
      ? await generateSuffixWithAI()
      : (await promptForSuffix()).suffix

    updateOperationId({
      operation,
      operationId: generateOperationId(suffix),
      path,
      method,
      progress,
    })
  }
  return numberOfUpdatedOperationIds
}
