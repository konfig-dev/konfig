import { GeneratorGitConfig } from 'konfig-lib'
import { getDefaultBranch } from './get-default-branch'
import { isSubmodule } from './is-submodule'

export async function getSdkDefaultBranch({
  git,
  outputDirectory,
}: {
  git: GeneratorGitConfig
  outputDirectory: string
}) {
  const generatorIsInSubmodule = await isSubmodule({
    git,
    configDir: process.cwd(),
  })
  const defaultBranch = generatorIsInSubmodule
    ? getDefaultBranch({ cwd: outputDirectory })
    : getDefaultBranch({ cwd: process.cwd() })
  return defaultBranch
}
