import { Command } from '@oclif/core'
import axios from 'axios'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import z from 'zod'
import { table } from 'table'
import {
  generateNpmPackageUrl,
  generateNpmVersion,
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

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    await this.parse(Published)
    const { allGenerators } = parseKonfigYaml({
      configDir: process.cwd(),
    })

    const packages: Package[] = []
    for (const [name, config] of allGenerators) {
      if (config.language === 'typescript') {
        const metadata = npmPackageSchema.parse(
          (await axios.get(`https://registry.npmjs.org/${config.npmName}`)).data
        )
        const versionsOrdered = Object.keys(metadata.versions).sort(
          semver.rcompare
        )

        for (let index = 0; index < 5; index++) {
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
        config.projectName
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
