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
  fs.writeFileSync(readmePath, withToc)
}
