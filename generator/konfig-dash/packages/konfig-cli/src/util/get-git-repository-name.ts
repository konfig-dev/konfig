import * as shell from 'shelljs'

export function getGitRepositoryName(): string {
  // get remote url e.g. "https://github.com/konfig-dev/my-sdks.git"
  let remoteUrl = ''
  try {
    remoteUrl = shell.exec('git config --get remote.origin.url').stdout.trim()
  } catch (e) {
    console.error(
      'Warning! Encountered error when trying to use git. If running in CI, this can be safely ignored.'
    )
  }

  const remoteUrlWithoutTrailingSlash = remoteUrl.replace(/\/$/, '')

  // remove leading path to get base name
  const baseName = remoteUrlWithoutTrailingSlash.substring(
    remoteUrlWithoutTrailingSlash.lastIndexOf('/') + 1
  )
  // strip ".git" off the end
  return baseName.replace(/\.git$/, '')
}
