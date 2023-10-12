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
  try {
    const topLevelGitRepo = simpleGit(configDir)
    const remotes = await topLevelGitRepo.remote([])
    // check if remotes is void and return false if true
    if (!remotes) {
      return false
    }
    const remote = remotes.split('\n')[0]
    const url = await topLevelGitRepo.remote(['get-url', remote])
    if (!url) {
      return false
    }
    const repoName = git.repoId.split('/')[0]
    const gitConfigUrl = `${git.host}/${git.userId}/${repoName}.git`
    const isSameRemoteUrl = url.includes(gitConfigUrl)
    return !isSameRemoteUrl
  } catch (e) {
    console.error(e)
  }
  return false
}
