import * as shell from 'shelljs'
/**
 * Get usually "master" or "main"
 */
export function getDefaultBranch({ cwd }: { cwd: string }) {
  const result = shell.exec(
    "git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@'",
    { silent: true, cwd }
  )
  return result.stdout.trim()
}
