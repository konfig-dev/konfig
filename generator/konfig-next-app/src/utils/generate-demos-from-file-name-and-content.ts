import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import remarkParse from 'remark-parse'
import { unified } from 'unified'
import { Demo } from './demos'
import { toString } from 'mdast-util-to-string'
import { Demo as DemoObject } from 'konfig-lib/dist/KonfigYamlCommon'

export type DemoInput = Omit<DemoObject, 'path'> & { content: string }

export function generateDemosFromFilenameAndContent({
  demos,
}: {
  demos: DemoInput[]
}): Demo[] {
  const result: Demo[] = []

  const processor = unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkDirectiveRehype)

  demos.forEach(({ content, id, showCode }) => {
    const mdast = processor.parse(content)

    // find first heading text and use that as name
    const node = mdast.children.find(({ type }) => type === 'heading')
    const demoName = toString(node)

    result.push({
      id,
      name: demoName,
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
