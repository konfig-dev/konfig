import { GeneratorGitConfig } from 'konfig-lib'
import simpleGit from 'simple-git'
import execa from 'execa'
import * as path from 'path'

/**
 * Determine if the SDK is pointing to what should be a submodule by comparing
 * the remote origin url with the URL from git configuration.
 */
export async function isSubmodule({
  git,
  configDir,
  directory,
}: {
  git: GeneratorGitConfig
  configDir: string
  directory?: string
}): Promise<boolean> {
  if (directory !== undefined) {
    /**
     * This should be a more robust implementation that doesn't rely on origin
     * "get-url" which could be wrong if the name of a GitHub repo was changed
     * at some point. Instead this should check if the directory is a submodule
     * by checking if it's inside a work tree and if the top level is different
     * from the configDir. If the directory is a submodule, then the work tree
     * top leve should be different from the configDir.
     */
    try {
      const { stdout: insideWorkTree } = await execa(
        'git',
        ['rev-parse', '--is-inside-work-tree'],
        { cwd: path.join(process.cwd(), directory) }
      )
      if (insideWorkTree.trim() !== 'true') {
        return false
      }

      const { stdout: topLevel } = await execa(
        'git',
        ['rev-parse', '--show-toplevel'],
        { cwd: path.join(process.cwd(), directory) }
      )
      return topLevel.trim() !== configDir
    } catch (error) {
      console.error(`Error checking if directory is a submodule: ${error}`)
      return false
    }
  }
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
    console.error(
      'Warning! Encountered error when trying to use git. If running in CI, this can be safely ignored.'
    )
  }
  return false
}
