import * as shell from 'shelljs'
/**
 * Get usually "master" or "main"
 */
export function getDefaultBranch({ cwd }: { cwd: string }) {
  try {
    const result = shell.exec(
      "git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@'",
      { silent: true, cwd }
    )
    return result.stdout.trim()
  } catch (e) {
    console.error(
      'Warning! Encountered error when trying to use git. If running in CI, this can be safely ignored.'
    )
  }
  return 'main'
}
