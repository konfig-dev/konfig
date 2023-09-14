import { Demo } from './demos'
import { Demo as DemoObject } from 'konfig-lib/dist/KonfigYamlCommon'
import { findFirstHeadingText } from './find-first-heading-text'

export type DemoInput = Omit<DemoObject, 'path'> & { content: string }

export function generateDemosFromFilenameAndContent({
  demos,
}: {
  demos: DemoInput[]
}): Demo[] {
  const result: Demo[] = []

  demos.forEach(({ content, id, showCode }) => {
    const name = findFirstHeadingText({ markdown: content })

    result.push({
      id,
      name,
      markdown: content,
      showCode: showCode ?? null,
    })
  })

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
