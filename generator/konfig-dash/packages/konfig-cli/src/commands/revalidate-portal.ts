import { CliUx, Command, Flags } from '@oclif/core'
import axios from 'axios'

function getRevalidatePortalUrl({ dev }: { dev: boolean }) {
  if (dev) return 'http://127.0.0.1:3000/api/revalidate-portal'
  return 'https://demo.konfigthis.com/api/revalidate-portal'
}

export default class RevalidatePortal extends Command {
  static description =
    'Revalidates portal for a particular GitHub organization and repository. This is required to ensure that the portal renders the latest information from GitHub.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    owner: Flags.string({
      char: 'o',
      required: true,
      description:
        'Owner (e.g. "konfigthis" in "github.com/konfig-dev/konfig")',
    }),
    repository: Flags.string({
      char: 'r',
      required: true,
      description:
        'Repository (e.g. "konfig" in "github.com/konfig-dev/konfig"))',
    }),
    dev: Flags.boolean({
      char: 'd',
      hidden: true,
      description: 'Set true to target localhost',
    }),
  }

  static args = [{ name: 'file' }]

  public async run(): Promise<void> {
    const { flags } = await this.parse(RevalidatePortal)
    const url = getRevalidatePortalUrl({ dev: flags.dev })
    this.debug(`Revalidating portal at ${url}`)
    CliUx.ux.action.start(
      `Revalidating portal for "${flags.owner}/${flags.repository}"`
    )
    const result = await axios.post(url, {
      owner: flags.owner,
      repo: flags.repository,
    })
    if (result.data['revalidated']) {
      CliUx.ux.action.stop()
      this.log(
        `✅ Successfully revalidated portal at ${flags.owner}/${flags.repository}`
      )
      this.debug('Paths Revalidated:')
      this.debug(result.data['revalidated'].join('\n'))
    } else {
      this.error(
        `Failed to revalidate ${flags.organizationId}/${flags.portalId}: "${result.data}"`
      )
    }
  }
}
