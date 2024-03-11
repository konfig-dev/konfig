import boxen from 'boxen'
import * as inquirer from 'inquirer'
import {
  getOperations,
  HttpMethods,
  Operation,
  operationIdSchema,
  OperationObject,
  Spec,
  TagObject,
  tagSchema,
} from 'konfig-lib'
import { FixOnlyOneTagName, Progress } from './fix-progress'
import { inquirerConfirm } from './inquirer-confirm'
import { logOperationDetails } from './log-operation-details'

export async function fixOnlyOneTagName({
  spec,
  progress,
  alwaysYes,
}: {
  spec: Spec['spec']
  progress: Progress
  alwaysYes: boolean
}): Promise<number> {
  if (spec.tags === undefined) return 0
  if (spec.tags.length === 0) return 0
  if (spec.tags.length > 1) return 0
  const savedTags = progress.getFixOnlyOneTagName()
  if (savedTags !== undefined) {
    if (savedTags === false) {
      const confirm = await inquirerConfirm({
        message: `Use saved answer for fixing only one tag name of "no"?`,
        alwaysYes,
      })
      if (confirm) return 0
    } else {
      const confirm = await inquirerConfirm({
        message: `Use ${
          Object.keys(savedTags).length
        } saved tag names instead of "${spec.tags[0].name}"`,
        alwaysYes,
      })
      if (confirm) {
        const operations = getOperations({ spec })
        for (const { operation, path, method } of operations) {
          await updateAndSaveNewTagName({
            operation,
            operations,
            spec,
            savedTags,
            alwaysYes,
            progress,
            path,
            method,
          })
        }
        return Object.keys(savedTags).length
      }
    }
  }
  const confirm = await inquirerConfirm({
    message: `Do not replace single "${spec.tags[0].name}" Tag with new Tag names?`,
    alwaysYes,
  })
  if (confirm) {
    progress.setFixOnlyOneTagNameToFalse()
    return 0
  }

  // remove all tags
  const operations = getOperations({ spec })
  for (const { operation } of operations) {
    delete operation['tags']
  }

  for (const { operation, path, method } of operations) {
    await updateAndSaveNewTagName({
      operation,
      operations,
      spec,
      alwaysYes,
      progress,
      path,
      method,
    })
  }
  return operations.length
}

async function updateAndSaveNewTagName({
  operation,
  operations,
  spec,
  savedTags,
  alwaysYes,
  progress,
  path,
  method,
}: {
  operation: Operation
  operations: OperationObject[]
  spec: Spec['spec']
  savedTags?: FixOnlyOneTagName
  alwaysYes: boolean
  progress: Progress
  path: string
  method: HttpMethods
}) {
  // get existing tags
  let existingTags: string[] = []
  for (const { operation } of operations) {
    if (operation.tags === undefined) continue
    existingTags.push(...operation.tags)
  }
  existingTags = Array.from(new Set(existingTags))

  // get saved tag name
  const savedTagName =
    savedTags !== undefined && operation.operationId
      ? savedTags[operation.operationId]
      : undefined

  logOperationDetails({ operation: { operation, path, method } })

  // query for existing or new name
  const { newName, existingName, useSavedName } = await inquirer.prompt<{
    newName?: string
    existingName?: string
    useSavedName?: boolean
  }>([
    {
      type: 'list',
      name: 'existingName',
      message: 'Use existing tag name?',
      when: ({ useSavedName }) =>
        !alwaysYes && !useSavedName && existingTags.length > 0,
      choices: [...existingTags, '(N) Create new tag'],
    },
    {
      type: 'input',
      name: 'newName',
      message: `Enter new Tag name:`,
      when: ({ existingName, useSavedName }) => {
        return (
          !alwaysYes &&
          !useSavedName &&
          (existingName === undefined || existingName === '(N) Create new tag')
        )
      },
      validate(newName: string) {
        const parseResult = tagSchema.safeParse(newName)
        if (!parseResult.success) return false
        if (spec.tags === undefined) return true
        const conflictingTagName = spec.tags
          .map((t) => t.name)
          .find((tagName) => tagName === newName)
        if (conflictingTagName !== undefined)
          return `New Tag name must be unique (conflicts with "${conflictingTagName}")`
        return true
      },
    },
  ])

  // assign new tag and save to progress
  if (alwaysYes && savedTagName) operation.tags = [savedTagName]
  else if (newName) operation.tags = [newName]
  else if (existingName) operation.tags = [existingName]
  else throw Error('Should have got at least one name')

  if (operation.operationId === undefined)
    throw Error('Should have had defined operation ids by now')

  progress.setFixOnlyOneTagName({
    operationId: operation.operationId,
    tag: operation.tags[0],
  })

  // update top-level tags field with all tags found in operations
  const newTags: { name: string }[] = []
  for (const { operation } of operations) {
    if (operation.tags === undefined) continue
    newTags.push(...operation.tags.map((tag) => ({ name: tag })))
  }
  spec.tags = newTags
}
