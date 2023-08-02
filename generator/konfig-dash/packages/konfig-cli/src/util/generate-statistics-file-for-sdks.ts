import { KonfigYamlType } from 'konfig-lib'
import { execSync } from 'child_process'
import path from 'path'

/**
 * Collects statistics about the SDKs in this repository.
 * 1. The number of lines of each SDK
 * 2. The sum of lines of code from (1)
 */
export function generateStatisticsFileForSdks({
  konfigYaml,
  cwd,
}: {
  konfigYaml: KonfigYamlType
  cwd: string
}): string {
  const { generators, additionalGenerators } = konfigYaml
  const lineCounts: Statistics['lineCounts'] = {}
  for (const [generatorName, generatorConfig] of [
    ...Object.entries(generators),
    ...(additionalGenerators ? Object.entries(additionalGenerators) : []),
  ]) {
    if (generatorConfig.disabled) continue
    const lineCount = getLineCountForGenerator({
      directory: generatorConfig.outputDirectory,
      absoluteDirectoryPath: path.join(cwd, generatorConfig.outputDirectory),
      cwd,
      generator:
        'generator' in generatorConfig
          ? (generatorConfig.generator as string)
          : generatorName,
    })
    lineCounts[generatorName] = lineCount
  }
  return generateMarkdownFromStatistics({ lineCounts })
}

// Count all git-indexed files under the provided directory using Node.js APIs
// For PHP make sure that the "cwd" is set to the directory of the generator and "ls-files" is called with "."
// Otherwise the line count will be 0
// If not PHP then cwd should not be passed to execSync
function getLineCountForGenerator({
  directory,
  absoluteDirectoryPath,
  generator,
  cwd,
}: {
  directory: string
  absoluteDirectoryPath: string
  generator: string
  cwd: string
}): number {
  const isPhp = generator === 'php'

  const command = generateCommand({ isPhp, directory })
  const lineCount = parseInt(
    execSync(
      command,
      isPhp ? { cwd: absoluteDirectoryPath } : { cwd }
    ).toString()
  )

  // check if lineCount is 0 or NaN
  if (lineCount === 0 || isNaN(lineCount)) {
    throw new Error(
      `Line count for generator in directory "${directory}" is ${lineCount}`
    )
  }

  return lineCount
}

function generateCommand({
  isPhp,
  directory,
}: {
  isPhp: boolean
  directory: string
}): string {
  const common =
    " | xargs wc -l | tail -n 1 | awk '{ total += $1 } END { print total }'"
  const command = `git ls-files -c -o ${
    isPhp ? '.' : `'${directory}'`
  }${common}`
  return command
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
