import { unified } from 'unified'
import parse from 'remark-parse'
import stringify from 'remark-stringify'
import gfm from 'remark-gfm'
import { Node } from 'unist'
import directive from 'remark-directive'
import { visit } from 'unist-util-visit'
import path from 'path'

/**
 * Transforms image links in markdown to point to the raw image on GitHub
 * @returns The markdown with image links transformed
 */
export function transformImageLinks(
  input: TransformLinksInput & { markdown: string }
): string {
  // Use Unified to parse, transform, and stringify the markdown
  const processor = unified()
    .use(parse)
    .use(gfm) // Add remark-gfm to support GitHub Flavored Markdown
    .use(directive)
    .use(transformLinks(input))
    .use(stringify)

  const result = processor.processSync(input.markdown).toString()
  return result
}

interface ImageNode extends Node {
  type: 'link'
  url: string
}

type TransformLinksInput = {
  owner: string
  repo: string
  defaultBranch: string
  docPath: string
}

function transformLinks({
  owner,
  repo,
  defaultBranch,
  docPath,
}: TransformLinksInput): () => (tree: Node) => void {
  return () => (tree) => {
    visit(tree, 'image', (node: ImageNode) => {
      if (isImageNode(node)) {
        node.url = `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/${path.join(
          path.dirname(docPath),
          node.url
        )}`
      }
    })
  }
}

function isImageNode(node: Node): node is ImageNode {
  return node.type === 'image' && 'url' in node
}
