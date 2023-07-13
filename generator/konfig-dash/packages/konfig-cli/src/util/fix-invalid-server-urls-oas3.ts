import { OpenAPIV3_XDocument } from 'konfig-lib'
import * as inquirer from 'inquirer'
import { urlRegex } from 'konfig-lib'
import { inquirerConfirm } from './inquirer-confirm'
import { Progress } from './fix-progress'
import boxen from 'boxen'

export async function fixInvalidServerUrlsOas3({
  spec,
  progress,
  alwaysYes,
}: {
  spec: OpenAPIV3_XDocument
  progress: Progress
  alwaysYes: boolean
}): Promise<number> {
  let fixes = 0

  if (spec.servers === undefined) return fixes
  for (const server of spec.servers) {
    if (urlRegex.test(server.url)) continue
    console.log(
      boxen(
        `Detected invalid server URL "${server.url}"\nhttps://konfigthis.com/docs/lint-rules#tag-naming-convention"`,
        {
          title: 'Improper Tag Detected',
          padding: 1,
          borderColor: 'red',
        }
      )
    )
    fixes++
    const savedUrl = progress.getServerUrl({ oldUrl: server.url })
    if (savedUrl !== undefined) {
      const confirmed = await inquirerConfirm({
        message: `Use saved URL: "${savedUrl}"?`,
        alwaysYes,
      })
      if (confirmed) {
        server.url = savedUrl.url
        continue
      }
    }

    const { newUrl } = await inquirer.prompt<{ newUrl: string }>([
      {
        type: 'input',
        name: 'newUrl',
        message: `Enter new URL name:`,
        validate(url: string) {
          return urlRegex.test(url)
        },
      },
    ])
    progress.saveServerUrl({ oldUrl: server.url, newUrl })
    server.url = newUrl
  }
  return fixes
}
