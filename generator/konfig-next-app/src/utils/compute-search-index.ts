import { OpenAPIV3_XDocument } from 'konfig-lib'
import Fuse from 'fuse.js'

/**
 * Computes a search index using flexsearch
 */
export function computeSearchIndex({
  markdown,
  openapi,
}: {
  markdown: { id: string; content: string }[]
  openapi: OpenAPIV3_XDocument
}) {
  const fuse = new Fuse(markdown, { keys: ['id', 'content'] })
  const myIndex = Fuse.createIndex(['id', 'content'], markdown)
  console.log(console.log(JSON.stringify(myIndex.toJSON(), null, 2)))
  const results = fuse.search('Welcome to the SnapTrade developer hub')
  console.log(results.length)
}
