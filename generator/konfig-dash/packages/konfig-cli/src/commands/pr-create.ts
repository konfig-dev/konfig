import { CliUx, Command, Flags } from '@oclif/core'
import axios from 'axios'
import {
  PrCreateRequestBodyType,
  PrCreateResponseBody,
} from 'konfig-openapi-spec'

export default class PrCreate extends Command {
  static description = 'Creates a github pull request'

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
    title: Flags.string({
      name: 'title',
      description: 'Title of the PR',
    }),
    body: Flags.string({
      name: 'body',
      description: 'Body of the PR',
    }),
    dev: Flags.boolean({ char: 'd', hidden: true }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(PrCreate)

    const url = flags.dev
      ? 'http://localhost:8911/prCreate'
      : 'https://api.konfigthis.com/prCreate'

    const body: PrCreateRequestBodyType = {
      owner: flags.owner,
      repo: flags.repo,
      base: flags.base,
      head: flags.head,
      title: flags.title || `Merge commit(s) from ${flags.head}`,
      body: flags.body || `PR created by Konfig '/prCreate' endpoint`,
    }

    const baseStr = flags.base
      ? `${flags.base}`
      : "the repository's default branch"
    const suffix = `PR in ${flags.owner}/${flags.repo} from ${flags.head} to ${baseStr}`

    CliUx.ux.action.start(`Creating ${suffix}`)
    const result = await axios.post(url, body)
    CliUx.ux.action.stop()

    if (result.status === 200) {
      const response = PrCreateResponseBody.parse(result.data)
      if (response.status === 'created-pr') {
        CliUx.ux.info(`✅ Successfully created ${suffix}`)
      } else if (response.status === 'pr-already-exists') {
        CliUx.ux.info(`✅ ${suffix} already exists`)
      }
      CliUx.ux.info(`🔗 Pull Request ${response.link}`)
    } else {
      CliUx.ux.error(
        `❌ Failed to create ${suffix}. \n Status code: ${
          result.status
        }. \n Response: ${JSON.stringify(result.data)}`
      )
    }
  }
}
