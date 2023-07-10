import * as shell from 'shelljs'

export function getGitRepositoryName(): string {
  // get remote url e.g. "https://github.com/konfig-dev/my-sdks.git"
  const remoteUrl = shell.exec("git config --get remote.origin.url").stdout.trim();
  // remove leading path to get base name
  const baseName = remoteUrl.substring(remoteUrl.lastIndexOf('/') + 1);
  // strip ".git" off the end
  return baseName.replace(/\.git$/, '');
}
