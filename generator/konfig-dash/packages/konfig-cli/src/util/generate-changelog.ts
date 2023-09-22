/**
 * Used for generating a CHANGELOG.md file in the form of
 * ```
 * ## [version] - date
 *
 * - change 1
 * - change 2
 *
 * ## [version] - date
 *
 * - change 1
 * ```
 *
 * No headers are in the changelog besides the version headers. By default the
 * "change 1" line is "Regenerate SDKs with updated OpenAPI Specification".
 *
 * If existingChangelogMarkdown is provided, it will be used as the base for the changelog.
 */
export function generateChangelog({
  existingChangelogMarkdown,
  config: { version },
}: {
  existingChangelogMarkdown?: string
  config: {
    version: string
  }
}) {
  const versionHeader = `## [${version}]`
  const date = new Date().toISOString().split('T')[0]
  const versionHeaderWithDate = `${versionHeader} - ${date}`
  const versionHeaderWithDateAndRegenerateSdk = `${versionHeaderWithDate}\n\n- Regenerate SDKs with updated OpenAPI Specification`

  // If the existing changelog already has the version, return the existing changelog
  if (existingChangelogMarkdown?.includes(versionHeader)) {
    return existingChangelogMarkdown
  }

  // Append the new version header and default message at the top of the existing changelog
  return `${versionHeaderWithDateAndRegenerateSdk}\n\n${
    existingChangelogMarkdown ?? ''
  }`
}
