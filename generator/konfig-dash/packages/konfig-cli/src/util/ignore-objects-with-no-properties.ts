import {
  isObjectTypeSchemaWithNoProperties,
  resolveRef,
  Spec,
} from 'konfig-lib'
import { OBJECT_WITH_NO_PROPERTIES_RULE_NAME } from 'konfig-lib/dist/util/get-ignore'
import { inquirerConfirm } from './inquirer-confirm'
import boxen from 'boxen'
import { Progress } from './fix-progress'
import { findMediaObjects } from './find-media-objects'

export async function ignoreObjectsWithNoProperties({
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
  if (infoObject?.['x-konfig-ignore']?.[OBJECT_WITH_NO_PROPERTIES_RULE_NAME])
    return 0
  const objectTypeSchemas = findMediaObjects({ spec }).filter((object) => {
    if (object.media.schema === undefined) return false
    const schema = resolveRef({
      refOrObject: object.media.schema,
      $ref: spec.$ref,
    })
    return isObjectTypeSchemaWithNoProperties({ schema })
  })
  if (objectTypeSchemas.length === 0) return 0
  console.log(
    boxen(
      `Detected object type schemas with no properties\nRead more at https://konfigthis.com/docs/lint-rules#object-with-no-properties`,
      {
        padding: 1,
        title: OBJECT_WITH_NO_PROPERTIES_RULE_NAME,
        titleAlignment: 'center',
        textAlignment: 'center',
        borderColor: 'red',
      }
    )
  )
  const ignorePotentialIncorrectType = await getIgnoreAnswer({
    progress,
    alwaysYes,
    noInput,
  })
  if (!ignorePotentialIncorrectType) return 0
  if (infoObject['x-konfig-ignore'] === undefined)
    infoObject['x-konfig-ignore'] = {}
  infoObject['x-konfig-ignore'][OBJECT_WITH_NO_PROPERTIES_RULE_NAME] = true
  return 1
}

async function getIgnoreAnswer({
  progress,
  alwaysYes,
  noInput,
}: {
  progress: Progress
  alwaysYes: boolean
  noInput: boolean
}): Promise<boolean> {
  const savedAnswer = progress.getIgnoreObjectsWithNoProperties()
  if (savedAnswer !== undefined) {
    const confirm = await inquirerConfirm({
      message: `Use saved answer for ignoring "${OBJECT_WITH_NO_PROPERTIES_RULE_NAME}" lint rule: "${
        savedAnswer ? 'Y' : 'n'
      }"?`,
      alwaysYes,
    })
    if (confirm) return savedAnswer
  }
  const confirm = await inquirerConfirm({
    message: `Ignore "${OBJECT_WITH_NO_PROPERTIES_RULE_NAME}" lint rule?`,
    alwaysYes: noInput,
  })
  progress.saveIgnoreObjectsWithNoProperties({ confirm })
  return confirm
}
