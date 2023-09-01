import { Command } from '@oclif/core'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import * as path from 'path'
import * as fs from 'fs-extra'
import { load } from 'js-yaml'
import { KONFIG_FOLDER_NAME } from '../util/get-konfig-folder';
import { executeBumpCommand } from '../util/execute-bump-command'
import semver from 'semver'

export default class Version extends Command {
  static description = 'Bumps version of each generator based on changesets.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  // Allows for easy comparison of bump types
  static bumpValues: Record<string, number> = {
    "prerelease": 0,
    "patch": 1,
    "minor": 2,
    "major": 3,
  }

  public async run(): Promise<void> {
    // Ensures we are in a directory with konfig.yaml file
    const { loadedKonfigYaml, konfigYamlPath } = parseKonfigYaml({configDir: process.cwd()});

    const changesetPath = path.join(process.cwd(), KONFIG_FOLDER_NAME, 'changesets')
    fs.ensureDirSync(changesetPath)

    // Determine the version bump type for each generator
    const bumpTypes: Record<string, string> = {}
    const changesetFiles = fs.readdirSync(changesetPath)
    this.log(`Found ${changesetFiles.length} changeset file(s).\n`)

    for (const file of changesetFiles) {
      // Read and parse the file
      const changesetRaw = fs.readFileSync(path.join(changesetPath, file), 'utf-8')
      const frontMatter = changesetRaw.split('---')[1]
      const changeset = load(frontMatter) as Record<string, string>
      // Record the version bump type for each generator
      this.updateBumpTypes(bumpTypes, changeset)
    }

    // Bump version of each generator
    Object.entries(bumpTypes).forEach(([generator, bumpType]) => {
      executeBumpCommand({ 
        filter: [generator], 
        releaseType: bumpType as semver.ReleaseType, 
        loadedKonfigYaml, 
        konfigYamlPath 
      })
      this.log("-----")
    })

    // Delete all changeset files
    fs.emptyDirSync(path.join(process.cwd(), KONFIG_FOLDER_NAME, 'changesets'))
  }

  // Updates bumpTypes object with bump type for each generator
  private updateBumpTypes(bumpTypes: Record<string, string>, changeset: Record<string, string>) {
    Object.entries(changeset).forEach(([generator, bumpType]) => {
      if (bumpTypes[generator] === undefined) {
        bumpTypes[generator] = bumpType
      } else {
        if (Version.bumpValues[bumpType] > Version.bumpValues[bumpTypes[generator]])
          bumpTypes[generator] = bumpType
      }
    });
  }
}
