import { unified } from 'unified'
import parse from 'remark-parse'
import stringify from 'remark-stringify'
import gfm from 'remark-gfm'
import { Node } from 'unist'
import { visit } from 'unist-util-visit'
import { Operation } from 'konfig-lib'

export function transformInternalLinks({
  markdown,
  owner,
  repo,
  operations,
}: {
  markdown: string
  owner: string
  repo: string
  operations: Operation[]
}): string {
  // Use Unified to parse, transform, and stringify the markdown
  const processor = unified()
    .use(parse)
    .use(gfm) // Add remark-gfm to support GitHub Flavored Markdown
    .use(transformLinks({ owner, repo, operations }))
    .use(stringify)

  const result = processor.processSync(markdown).toString()
  return result
}

interface LinkNode extends Node {
  type: 'link'
  url: string
  title?: string
  children: Node[]
}

const API_PREFIX = 'api:'
const DEMO_PREFIX = 'demo:'

function transformLinks({
  owner,
  repo,
  operations,
}: {
  owner: string
  repo: string
  operations: Operation[]
}): () => (tree: Node) => void {
  return () => (tree) => {
    visit(tree, 'link', (node: LinkNode) => {
      if (isLinkNode(node)) {
        if (node.url.startsWith(API_PREFIX)) {
          const operationId = node.url.slice(API_PREFIX.length)
          const operation = operations.find((operation) => {
            return operation.operationId === operationId
          })
          if (operation !== undefined) {
            const tag = operation.tags?.[0]
            if (tag !== undefined) {
              node.url = `/${owner}/${repo}/reference/${tag}/${operationId}`
              return
            }
          }
        } else if (node.url.startsWith(DEMO_PREFIX)) {
          const demoId = node.url.slice(DEMO_PREFIX.length)
          node.url = `/${owner}/${repo}/demo/${demoId}`
        }
      }
    })
  }
}

function isLinkNode(node: Node): node is LinkNode {
  return node.type === 'link' && 'url' in node && 'children' in node
}
