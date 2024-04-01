import { Demo } from './demos'
import { Demo as DemoObject } from 'konfig-lib/dist/KonfigYamlCommon'
import { findFirstHeadingText } from './find-first-heading-text'
import { extractMetaDescription } from './extract-meta-description'

export type DemoInput = DemoObject & { content: string }

export async function generateDemosFromFilenameAndContent({
  demos,
}: {
  demos: DemoInput[]
}): Promise<Demo[]> {
  const result: Demo[] = []

  for (const { content, id, showCode, path } of demos) {
    const name = findFirstHeadingText({ markdown: content })

    const metaDescription = await extractMetaDescription({ markdown: content })

    result.push({
      id,
      name,
      markdown: content,
      showCode: showCode ?? null,
      metaDescription,
      path,
    })
  }

  result.sort((a, b) => {
    if (demos)
      return (
        demos.findIndex((demo) => demo.id === a.id) -
        demos.findIndex((demo) => demo.id === b.id)
      )
    return 1
  })

  return result
}
