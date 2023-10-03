import { GeneratorGitConfig } from 'konfig-lib'
import simpleGit from 'simple-git'

/**
 * Determine if the SDK is pointing to what should be a submodule by comparing
 * the remote origin url with the URL from git configuration.
 */
export async function isSubmodule({
  git,
  configDir,
}: {
  git: GeneratorGitConfig
  configDir: string
}): Promise<boolean> {
  const topLevelGitRepo = simpleGit(configDir)
  const remoteOriginUrl = (
    await topLevelGitRepo.listRemote(['--get-url'])
  ).trim()
  const repoName = git.repoId.split('/')[0]
  const gitConfigUrl = `${git.host}/${git.userId}/${repoName}.git`
  const isSameRemoteUrl = remoteOriginUrl.includes(gitConfigUrl)
  return !isSameRemoteUrl
}
