/**
 * Tests incrementVersionWithPreservedTag
 *
 * Tests against regular semver: 1.0.0
 * Tests against semver with tag: 1.0.0-alpha.1
 */

import { incrementVersionWithPreservedTag } from '../../src/util/increment-version-with-preserved-tag'

describe('incrementVersionWithPreservedTag', () => {
  // create a separate test for every test case
  it('should increment regular semver - patch', () => {
    expect(incrementVersionWithPreservedTag('1.0.0', 'patch')).toBe('1.0.1')
  })

  it('should increment regular semver - minor', () => {
    expect(incrementVersionWithPreservedTag('1.0.0', 'minor')).toBe('1.1.0')
  })

  it('should increment regular semver - major', () => {
    expect(incrementVersionWithPreservedTag('1.0.0', 'major')).toBe('2.0.0')
  })

  it('should increment semver with tag - patch', () => {
    expect(incrementVersionWithPreservedTag('1.0.0-alpha.1', 'patch')).toBe(
      '1.0.1-alpha.1'
    )
  })
  it('should increment semver with tag - minor', () => {
    expect(incrementVersionWithPreservedTag('1.0.0-alpha.1', 'minor')).toBe(
      '1.1.0-alpha.1'
    )
  })
  it('should increment semver with tag - major', () => {
    expect(incrementVersionWithPreservedTag('1.0.0-alpha.1', 'major')).toBe(
      '2.0.0-alpha.1'
    )
  })
  it('should increment tag in semver - a', () => {
    expect(incrementVersionWithPreservedTag('1.0.0-a.5', 'prerelease')).toBe(
      '1.0.0-a.6'
    )
  })
  it('should increment tag in semver - alpha', () => {
    expect(
      incrementVersionWithPreservedTag('1.0.0-alpha.1', 'prerelease')
    ).toBe('1.0.0-alpha.2')
  })
  it('should increment tag in semver - beta', () => {
    expect(incrementVersionWithPreservedTag('1.0.0-beta.1', 'prerelease')).toBe(
      '1.0.0-beta.2'
    )
  })
  it('should increment tag in semver - rc', () => {
    expect(incrementVersionWithPreservedTag('1.0.0-rc.1', 'prerelease')).toBe(
      '1.0.0-rc.2'
    )
  })
})
