import { OpenAPIV3_XDocument } from 'konfig-lib'
import Fuse, { FuseIndex } from 'fuse.js'

/**
 * Computes a search index using flexsearch
 */
export function computeFuseIndex({
  markdown,
  openapi,
}: {
  markdown: { id: string; content: string }[]
  openapi: OpenAPIV3_XDocument
}): FuseIndex<{
  id: string
  content: string
}> {
  // const fuse = new Fuse(markdown, {
  //   keys: ['id', 'content'],
  //   includeScore: true,
  //   includeMatches: true,
  //   useExtendedSearch: true,
  // })
  return Fuse.createIndex(['id', 'content'], markdown)
  // const results = fuse.search('\'"Welcome to the SnapTrade"')
  // console.log(
  //   results
  //     .sort((a, b) => {
  //       if (a.score === undefined || b.score === undefined) {
  //         return 0
  //       }
  //       return a.score - b.score
  //     })
  //     .map((r) => {
  //       return JSON.stringify(
  //         {
  //           substrings: r.matches?.[0].indices.map((index) => {
  //             return r.item.content.substring(index[0], index[1] + 1)
  //           }),
  //           score: r.score,
  //         },
  //         null,
  //         2
  //       )
  //     })
  // )
}
