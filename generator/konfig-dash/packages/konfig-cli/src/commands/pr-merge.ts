import { CliUx, Command, Flags } from '@oclif/core'
import axios from 'axios'
import {
  PrMergeRequestBodyType,
  PrMergeResponseBody,
} from 'konfig-openapi-spec'

export default class PrMerge extends Command {
  static description = 'Merges a github pull request'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    owner: Flags.string({
      name: 'owner',
      char: 'o',
      description: 'Owner of github repository',
      required: true,
    }),
    repo: Flags.string({
      name: 'repo',
      char: 'r',
      description: 'Name of github repository',
      required: true,
    }),
    base: Flags.string({
      name: 'base',
      char: 'b',
      description: 'Name of the branch you want to merge into',
    }),
    head: Flags.string({
      name: 'head',
      char: 'h',
      description: 'Name of the branch you want to merge from',
      required: true,
    }),
    dev: Flags.boolean({ char: 'd', hidden: true }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(PrMerge)

    const apiKey = process.env.KONFIG_API_KEY
    if (apiKey === undefined)
      throw Error('Missing KONFIG_API_KEY Environment Variable')

    const url = flags.dev
      ? 'http://localhost:8911/prMerge'
      : 'https://api.konfigthis.com/prMerge'

    const body: PrMergeRequestBodyType = {
      owner: flags.owner,
      repo: flags.repo,
      base: flags.base || '',
      head: flags.head,
    }

    const baseStr = flags.base
      ? `${flags.base}`
      : "the repository's default branch"
    const suffix = `PR from ${flags.head} to ${baseStr} in repository ${flags.owner}/${flags.repo}`

    CliUx.ux.action.start(`Merging ${suffix}`)
    const result = await axios.post(url, body, {
      headers: { 'x-konfig-api-key': apiKey },
    })
    CliUx.ux.action.stop()

    if (result.status === 200) {
      const response = PrMergeResponseBody.parse(result.data)
      if (response.status === 'merged-pr') {
        CliUx.ux.info(`✅ Successfully merged ${suffix}`)
        CliUx.ux.info(`🔗 Pull Request ${response.link}`)
      } else if (response.status === 'no-pr-found') {
        CliUx.ux.info(`⚠️ ${suffix} not found`)
      }
    } else {
      CliUx.ux.error(
        `❌ Failed to merge ${suffix}. \n Status code: ${
          result.status
        }. \n Response: ${JSON.stringify(result.data)}`
      )
    }
  }
}
