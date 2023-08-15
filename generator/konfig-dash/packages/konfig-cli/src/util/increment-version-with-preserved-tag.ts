import incrementVersion from 'semver/functions/inc'
import semver from 'semver'

export function incrementVersionWithPreservedTag(
  version: string,
  releaseType: semver.ReleaseType
) {
  if (releaseType === 'prerelease') {
    const sv = semver.parse(version)
    if (sv === null) throw Error('Invalid semver version')
    sv.inc(releaseType)
    return sv.version
  }

  const tag = semver.prerelease(version)

  // extract version from semver without tag
  const semverWithoutTag = semver.coerce(version)

  if (semverWithoutTag === null) throw new Error('Invalid semver version')

  const newVersion = incrementVersion(semverWithoutTag.version, releaseType)

  if (tag === null) return newVersion
  return `${newVersion}-${tag.join('.')}`
}
