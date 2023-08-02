import { KonfigYamlType } from 'konfig-lib'
import path from 'path'
import * as fs from 'fs-extra'
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
  const files = await readGitTrackedFiles(cwd, cwd)
  console.log('gitTrackedFiles:', files)
  for (const [generatorName, generatorConfig] of [
    ...Object.entries(generators),
    ...(additionalGenerators ? Object.entries(additionalGenerators) : []),
  ]) {
    if (generatorConfig.disabled) continue
    const lineCount = await getLineCountForGenerator({
      directory: generatorConfig.outputDirectory,
      absoluteDirectoryPath: path.join(cwd, generatorConfig.outputDirectory),
      files,
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
  files,
}: {
  directory: string
  absoluteDirectoryPath: string
  files: Record<string, string>
}): Promise<number> {
  // count number of lines in each file
  let lineCount = 0
  for (const [file, fileContents] of Object.entries(files)) {
    if (file === '') continue
    if (!file.includes(directory)) continue
    // count the number of '\n' characters in fileContents and add to lineCount
    lineCount += (fileContents.toString().match(/\n/g) || []).length
  }

  // check if lineCount is 0 or NaN
  if (lineCount === 0 || isNaN(lineCount)) {
    throw new Error(
      `Line count for generator in directory "${directory}" is ${lineCount}`
    )
  }

  return lineCount
}

async function readGitTrackedFiles(directory: string, root: string) {
  const fileContents: Record<string, string> = {}

  // Use globby to get all files tracked by git
  const ignore = getIgnoreGlobs(directory)
  const files = await globby('**/*', {
    cwd: directory,
    absolute: true,
    ignore,
    onlyFiles: true,
  })

  console.log('ignore', ignore)
  console.log('files', files)

  // Handle submodules (basic example)
  const gitmodulesPath = path.join(directory, '.gitmodules')
  // all submodule paths
  const allSudmobulePaths: string[] = []
  if (await fs.pathExists(gitmodulesPath)) {
    const gitmodulesContent = await fs.readFile(gitmodulesPath, 'utf-8')
    const submodulePaths = gitmodulesContent.match(/path = (.+)/g)
    if (submodulePaths) {
      for (const submodulePath of submodulePaths) {
        const submoduleDirectory = path.join(
          directory,
          submodulePath.replace('path = ', '')
        )
        allSudmobulePaths.push(submoduleDirectory)
        const submoduleContents = await readGitTrackedFiles(
          submoduleDirectory,
          root
        )
        Object.assign(fileContents, submoduleContents) // Merge submodule contents
      }
    }
  }

  console.log('allSudmobulePaths', allSudmobulePaths)

  // Read the content of each file (untracked and tracked)
  for (const file of files) {
    // if file includes a submodule path then continue
    if (
      allSudmobulePaths.some((submodulePath) => file.includes(submodulePath))
    ) {
      continue
    }

    const content = await fs.readFile(file, 'utf-8')
    fileContents[file.replace(`${root}/`, '')] = content
  }

  return fileContents
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

/**
 * Reads .gitignore in directory and adds all lines to a file
 */
function getIgnoreGlobs(dir: string): string[] {
  const gitignorePath = path.join(dir, '.gitignore')
  if (!fs.existsSync(gitignorePath)) return []
  const gitignore = fs.readFileSync(gitignorePath, 'utf-8')
  return gitignore.split('\n').filter((line) => line !== '')
}
