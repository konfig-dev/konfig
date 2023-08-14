import { Command, Flags } from '@oclif/core'
import axios from 'axios'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import z from 'zod'
import { table } from 'table'
import {
  generateNpmPackageUrl,
  generateNpmVersion,
  generatePyPiPackageUrl,
  generatorNameAsDisplayName,
} from '../util/generate-readme'
import semver from 'semver'

const npmPackageSchema = z.object({
  name: z.string(),
  versions: z.record(
    z.object({
      name: z.string(),
      version: z.string(),
      description: z.string(),
    })
  ),
})

const packageSchema = z.object({
  generator: z.string(),
  displayName: z.string(),
  registryName: z.string(),
  packageName: z.string(),
  packageUrl: z.string(),
  version: z.string(),
})

type Package = z.infer<typeof packageSchema>

export default class Published extends Command {
  static description = 'Queries public package managers for published packages'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    limit: Flags.integer({
      default: 5,
      name: 'limit',
      char: 'l',
    }),
  }

  static args = []

  public async run(): Promise<void> {
    const {
      flags: { limit },
    } = await this.parse(Published)
    const { allGenerators } = parseKonfigYaml({
      configDir: process.cwd(),
    })

    const packages: Package[] = []
    for (const [name, config] of allGenerators) {
      if (config.language === 'typescript') {
        const metadata = npmPackageSchema.parse(
          (await axios.get(`https://registry.npmjs.org/${config.npmName}`)).data
        )
        const versionsOrdered = sortVersions(Object.keys(metadata.versions))

        for (let index = 0; index < limit; index++) {
          const version = versionsOrdered[index]
          packages.push({
            displayName: generatorNameAsDisplayName({
              generatorConfig: config,
            }),
            generator: name,
            packageName: metadata.name,
            registryName: 'npm',
            packageUrl: generateNpmPackageUrl({
              npmName: metadata.name,
              version: generateNpmVersion({ version }),
            }),
            version,
          })
        }
      } else if (config.language === 'python') {
        const versions = sortVersions(
          await getPyPiPackageVersions(config.projectName)
        )
        for (let index = 0; index < limit; index++) {
          const version = versions[index]
          packages.push({
            displayName: generatorNameAsDisplayName({
              generatorConfig: config,
            }),
            generator: name,
            packageName: config.projectName,
            registryName: 'PyPi',
            packageUrl: generatePyPiPackageUrl({
              packageName: config.projectName,
              version,
            }),
            version,
          })
        }
      }
    }

    const rows = packages.reduce((acc, pkg) => {
      const key = pkg.displayName
      if (!acc[key]) acc[key] = []
      acc[key].push([
        pkg.packageName,
        pkg.registryName,
        pkg.packageUrl,
        pkg.version,
      ])
      return acc
    }, {} as Record<string, string[][]>)

    for (const generator in rows) {
      const packages = rows[generator]
      console.log(
        table([['NAME', 'REGISTRY', 'URL', 'VERSION'], ...packages], {
          header: {
            content: generator,
            alignment: 'center',
          },
        })
      )
    }
  }
}

async function getPyPiPackageVersions(packageName: string) {
  try {
    const url = `https://pypi.org/pypi/${packageName}/json`
    const response = await axios.get(url)

    if (response.status === 200 && response.data && response.data.releases) {
      return Object.keys(response.data.releases)
    } else {
      console.error(`Failed to retrieve versions for ${packageName}.`)
      return []
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(`An error occurred: ${error.message}`)
    }
    return []
  }
}

function sortVersions(versions: string[]) {
  return versions.sort((a, b) =>
    semver.rcompare(extractSemver(a), extractSemver(b))
  )
}

function extractSemver(version: string) {
  const semver = version.match(/^(\d+\.\d+\.\d+)/)?.[1]
  if (semver === undefined)
    throw Error(`Could not extract semantic version from ${version}`)
  return semver
}
