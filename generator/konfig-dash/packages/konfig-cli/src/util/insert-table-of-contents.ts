import * as path from 'path'
import * as fs from 'fs'

export function insertTableOfContents({
  outputDirectory,
}: {
  outputDirectory: string
}) {
  const toc = require('markdown-toc')
  const readmePath = path.join(outputDirectory, 'README.md')
  const readme = fs.readFileSync(readmePath, 'utf-8')
  const withToc = toc.insert(readme, {
    filter: (str: string) => {
      return !str.startsWith('[Author]')
    },
    maxdepth: 3,
  })
  const withTocAndReferenceLinkFix = applyReferenceLinkFix(withToc)
  fs.writeFileSync(readmePath, withTocAndReferenceLinkFix)
}

// https://github.com/pypa/readme_renderer/issues/169#issuecomment-808577486
/**
 * Turns all headings into links by adding <a id="..."></a> after them with no space.
 * Uses regex to avoid parsing the markdown AST.
 */
function applyReferenceLinkFix(markdown: string): string {
  const { slugify } = require('markdown-toc/lib/utils')
  const headingRegex = /^#+\s+(.*)$/gm
  return markdown.replace(headingRegex, (match, p1) => {
    const slug = slugify(p1)
    return `${match}<a id="${slug}"></a>`
  })
}
