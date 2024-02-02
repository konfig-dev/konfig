import { Spec } from 'konfig-lib'
import * as inquirer from 'inquirer'
import { descriptionSchema, Progress } from './fix-progress'
import { inquirerConfirm } from './inquirer-confirm'

export async function fixMissingInfoDescription({
  spec,
  progress,
  alwaysYes,
  noInput,
}: {
  spec: Spec['spec']
  progress: Progress
  alwaysYes: boolean
  noInput: boolean
}): Promise<number> {
  if (spec.info.description !== undefined) return 0

  const savedDescription = progress.getInfoDescription()

  if (savedDescription !== undefined) {
    const confirm = await inquirerConfirm({
      message: `Use saved info object description "${savedDescription}"?`,
      alwaysYes,
    })
    if (confirm) {
      spec.info.description = savedDescription
      return 1
    }
  }

  const { description } = noInput
    ? { description: 'Missing description placeholder' }
    : await inquirer.prompt<{ description: string }>([
        {
          type: 'input',
          name: 'description',
          message:
            'Missing Info "description" field. Enter description (what does your API help developers do?):',
          validate(input: string) {
            return descriptionSchema.safeParse(input).success
          },
        },
      ])

  spec.info.description = description
  progress.saveInfoDescription({ description })

  return 1
}
