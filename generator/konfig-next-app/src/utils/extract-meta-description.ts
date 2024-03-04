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
 * Extract a description to be used as a <meta> and og:description tag. Make
 * sure to keep it under 160 characters and longer than 110 characters. Try to
 * find a stopping point that is not in the middle of a sentence. But make sure
 * to include the last period.
 * @param markdown - markdown string
 * @returns meta description
 */
export function extractMetaDescription({
  markdown,
}: {
  markdown: string
}): string {
  const mdast = processor.parse(markdown)

  // filter for all paragraphs
  const node = mdast.children.filter(({ type }) => type === 'paragraph')

  const textContent = toString(node)

  const truncated = textContent.slice(0, 160)
  const lastPeriod = truncated.lastIndexOf('.')
  const metaDescription = truncated.slice(0, lastPeriod + 1)

  return metaDescription
}
