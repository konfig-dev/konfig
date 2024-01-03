import { KonfigYamlType } from 'konfig-lib'
import ignore, { Ignore } from 'ignore'
import path from 'path'
import * as fs from 'fs-extra'
import * as os from 'os'
import globby from 'globby'

/**
 * Collects statistics about the SDKs in this repository.
 * 1. The number of lines of each SDK
 * 2. The sum of lines of code from (1)
 */
export async function generateStatisticsFileForSdks({
  konfigYaml,
  cwd,
}: {
  konfigYaml: KonfigYamlType
  cwd: string
}): Promise<string> {
  const { generators, additionalGenerators } = konfigYaml
  const lineCounts: Statistics['lineCounts'] = {}
  for (const [generatorName, generatorConfig] of [
    ...Object.entries(generators),
    ...(additionalGenerators ? Object.entries(additionalGenerators) : []),
  ]) {
    if (generatorConfig.disabled) continue
    const lineCount = await getLineCountForGenerator({
      directory: generatorConfig.outputDirectory,
      cwd,
    })
    lineCounts[generatorName] = lineCount
  }
  return generateMarkdownFromStatistics({ lineCounts })
}

// Count all git-indexed files under the provided directory using Node.js APIs
// For PHP make sure that the "cwd" is set to the directory of the generator and "ls-files" is called with "."
// Otherwise the line count will be 0
// If not PHP then cwd should not be passed to execSync
async function getLineCountForGenerator({
  directory,
  cwd,
}: {
  directory: string
  cwd: string
}): Promise<number> {
  const files = await readGitTrackedFiles(path.join(cwd, directory), cwd)
  // count number of lines in each file
  let lineCount = 0
  const debugLineCounts: Record<string, number> = {}
  for (const [file, fileContents] of Object.entries(files)) {
    if (file === '') continue
    if (!isSubPath(directory, file)) continue
    const count = (fileContents.toString().match(/\n/g) || []).length
    debugLineCounts[file] = count
    // count the number of '\n' characters in fileContents and add to lineCount
    lineCount += count
  }
  if (process.env.DEBUG) {
    const debugFilePath = path.join(
      os.tmpdir(),
      directory,
      'debug-line-counts.json'
    )
    console.log('counting lines for directory:', directory)
    console.log('debugFilePath', debugFilePath)
    fs.ensureDirSync(path.dirname(debugFilePath))
    fs.writeFileSync(debugFilePath, JSON.stringify(debugLineCounts, null, 2))
  }

  // check if lineCount is 0 or NaN
  if (lineCount === 0 || isNaN(lineCount)) {
    throw new Error(
      `Line count for generator in directory "${directory}" is ${lineCount}`
    )
  }

  return lineCount
}

// OS-agnostic subpath check
function isSubPath(from: string, to: string) {
  const relative = path.relative(from, to)
  return relative && !relative.startsWith('..') && !path.isAbsolute(relative)
}

async function readGitTrackedFiles(directory: string, root: string) {
  const fileContents: Record<string, string> = {}

  if (process.env.DEBUG) {
    console.log('readGitTrackedFiles', { directory, root })
  }

  // Use globby to get all files tracked by git
  const files = await globby(`**/*`, {
    cwd: directory,
    absolute: true,
    onlyFiles: true,
    dot: true,
    gitignore: true,
    // always ignore .git, node_modules
    ignore: ['**/.git/**', '**/node_modules/**'],
  })

  if (process.env.DEBUG) {
    console.log('readGitTrackedFiles', { files })
  }

  const ig = await collectIgnores([root, directory])

  // Read the content of each file (untracked and tracked)
  for (const file of files) {
    const relativePathFromRoot = path.relative(root, file)
    const relativePathFromDirectory = path.relative(directory, file)
    // if file is ignored by the "ig" .gitignore object then continue
    if (ig.ignores(relativePathFromDirectory)) continue

    const content = await fs.readFile(file, 'utf-8')
    fileContents[relativePathFromRoot] = content
  }

  return fileContents
}

/**
 * Returns an ignore object that includes .gitignore in all subdirectories for the provided directory.
 */
async function collectIgnores(directories: string[]): Promise<Ignore> {
  // Use globby to get all .gitignore files
  const gitignoreFiles = directories.map((directory) =>
    path.join(directory, '.gitignore')
  )

  // Create an ignore object that includes all .gitignore files
  const ig = ignore()
  for (const gitignoreFile of gitignoreFiles) {
    if (!fs.existsSync(gitignoreFile)) continue
    ig.add(fs.readFileSync(gitignoreFile, 'utf-8'))
  }
  return ig
}

type Statistics = {
  lineCounts: Record<string, number>
}

/**
 * Generates a markdown file from the statistics.
 * - Heading of "SDK Statistics"
 * - Table with columns "SDK Name" and "Lines of Code"
 * - Section for sum of lines of code
 */
function generateMarkdownFromStatistics({ lineCounts }: Statistics) {
  let markdown = '# SDK Statistics\n\n'
  markdown += '| SDK Name | Lines of Code |\n'
  markdown += '| -------- | ------------- |\n'
  for (const [generatorName, lineCount] of Object.entries(lineCounts)) {
    markdown += `| ${generatorName} | ${lineCount} |\n`
  }
  markdown += `| **Total** | ${Object.values(lineCounts).reduce(
    (a, b) => a + b,
    0
  )} |\n`
  return markdown
}
