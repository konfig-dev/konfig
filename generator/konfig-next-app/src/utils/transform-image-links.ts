import { unified } from 'unified'
import parse from 'remark-parse'
import stringify from 'remark-stringify'
import gfm from 'remark-gfm'
import { Node } from 'unist'
import directive from 'remark-directive'
import { visit } from 'unist-util-visit'
import path from 'path'
import { cloudflareImageFromGitHub } from './cloudflare-image-from-github'
import { Octokit } from '@octokit/rest'

/**
 * Transforms image links in markdown to point to the raw image on GitHub
 * @returns The markdown with image links transformed
 */
export async function transformImageLinks(
  input: TransformLinksInput & { markdown: string }
): Promise<string> {
  // Use Unified to parse, transform, and stringify the markdown
  const processor = unified()
    .use(parse)
    .use(gfm) // Add remark-gfm to support GitHub Flavored Markdown
    .use(directive)
    .use(transformLinks(input))
    .use(stringify)

  const result = (await processor.process(input.markdown)).toString()
  return result
}

interface ImageNode extends Node {
  type: 'link'
  url: string
}

type TransformLinksInput = {
  owner: string
  repo: string
  docPath: string
  octokit: Octokit
  konfigYamlDir: string
}

function transformLinks({
  owner,
  repo,
  docPath,
  octokit,
  konfigYamlDir,
}: TransformLinksInput): () => (tree: Node) => Promise<void> {
  return () => async (tree) => {
    const promises: Promise<void>[] = []
    visit(tree, 'image', (node: ImageNode) => {
      if (isImageNode(node)) {
        promises.push(
          (async () => {
            node.url = await generateRawGitHubUserContentLink({
              owner,
              repo,
              docPath,
              url: node.url,
              octokit,
              konfigYamlDir,
            })
          })()
        )
      }
    })
    visit(tree, 'html', (node: any) => {
      if (node.value.includes('<img')) {
        const replaceValue = async () => {
          node.value = await replaceAsync(
            node.value as string,
            /src="([^"]*)"/,
            async (_match, src) => {
              return `src="${await generateRawGitHubUserContentLink({
                owner,
                repo,
                docPath,
                url: src,
                octokit,
                konfigYamlDir,
              })}"`
            }
          )
        }
        promises.push(replaceValue())
      }
    })

    await Promise.all(promises)
  }
}

async function replaceAsync(
  str: string,
  regex: RegExp,
  asyncFn: (full: string, ...args: any[]) => Promise<string>
) {
  const promises: Promise<string>[] = []
  str.replace(regex, (full, ...args) => {
    promises.push(asyncFn(full, ...args))
    return full
  })
  const data = await Promise.all(promises)
  return str.replace(regex, () => data.shift() || '')
}

async function generateRawGitHubUserContentLink({
  owner,
  repo,
  docPath,
  url,
  octokit,
  konfigYamlDir,
}: TransformLinksInput & { url: string }) {
  const relativePath = path.join(
    konfigYamlDir,
    path.join(path.dirname(docPath), url)
  )
  const image = await cloudflareImageFromGitHub({
    owner,
    repo,
    path: relativePath,
    octokit,
  })
  return image.cdnUrl
}

function isImageNode(node: Node): node is ImageNode {
  return node.type === 'image' && 'url' in node
}
