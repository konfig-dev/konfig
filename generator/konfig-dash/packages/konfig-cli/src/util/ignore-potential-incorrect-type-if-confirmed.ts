import { POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME, Spec } from 'konfig-lib'
import { inquirerConfirm } from './inquirer-confirm'
import boxen from 'boxen'
import { Progress } from './fix-progress'
import { hasSchemaWithPossibleIncorrectDataType } from './has-schema-with-possible-incorrect-data-type'

export async function ignorePotentialIncorrectTypeIfConfirmed({
  spec,
  alwaysYes,
  noInput,
  progress,
}: {
  spec: Spec
  alwaysYes: boolean
  noInput: boolean
  progress: Progress
}): Promise<0 | 1> {
  const infoObject: any = spec.spec.info
  if (
    infoObject?.['x-konfig-ignore']?.[POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME]
  )
    return 0
  let foundSchemaWithPotentiallyIncorrectType =
    hasSchemaWithPossibleIncorrectDataType({ spec: spec.spec })
  if (foundSchemaWithPotentiallyIncorrectType === null) return 0
  console.log(
    boxen(
      `Detected potentially incorrect type "${foundSchemaWithPotentiallyIncorrectType.type}" example "${foundSchemaWithPotentiallyIncorrectType.example}"`,
      {
        padding: 1,
        title: POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME,
        titleAlignment: 'center',
        borderColor: 'red',
      }
    )
  )

  const ignorePotentialIncorrectType = await getIgnorePotentialIncorrectType({
    progress,
    alwaysYes,
    noInput,
  })
  if (!ignorePotentialIncorrectType) return 0
  if (infoObject['x-konfig-ignore'] === undefined)
    infoObject['x-konfig-ignore'] = {}
  infoObject['x-konfig-ignore'][POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME] = true
  return 1
}

async function getIgnorePotentialIncorrectType({
  progress,
  alwaysYes,
  noInput,
}: {
  progress: Progress
  alwaysYes: boolean
  noInput: boolean
}): Promise<boolean> {
  const savedAnswerForIgnorePotentialIncorrectType =
    progress.getIgnorePotentialIncorrectType()
  if (savedAnswerForIgnorePotentialIncorrectType) {
    const confirm = await inquirerConfirm({
      message: `Use saved answer for ignoring "${POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME}" lint rule: "${
        savedAnswerForIgnorePotentialIncorrectType ? 'Y' : 'n'
      }"?`,
      alwaysYes,
    })
    if (confirm) return savedAnswerForIgnorePotentialIncorrectType
  }
  const confirm = await inquirerConfirm({
    message: `Ignore "${POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME}" lint rule?`,
    alwaysYes: noInput,
  })
  progress.saveIgnorePotentialIncorrectType({ confirm })
  return confirm
}
