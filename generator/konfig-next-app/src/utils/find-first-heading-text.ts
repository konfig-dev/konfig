import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import remarkParse from 'remark-parse'
import { toString } from 'mdast-util-to-string'
import { unified } from 'unified'

const processor = unified()
  .use(remarkParse)
  .use(remarkDirective)
  .use(remarkDirectiveRehype)

/**
 * Find the first heading text in a markdown string
 * @param markdown - markdown string
 * @returns the first heading text
 */
export function findFirstHeadingText({ markdown }: { markdown: string }) {
  const mdast = processor.parse(markdown)
  const node = mdast.children.find(({ type }) => type === 'heading')
  const demoName = toString(node)
  return demoName
}
