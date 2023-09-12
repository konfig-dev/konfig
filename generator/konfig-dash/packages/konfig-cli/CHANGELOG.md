# konfig-cli

## 1.10.4

### Patch Changes

- [`b36cb8fb`](https://github.com/konfig-dev/konfig/commit/b36cb8fb84cff89631264b0942d60b8edeaac1a2) Thanks [@dphuang2](https://github.com/dphuang2)! - remove non-alphanumeric characters except for spaces from fix operation id rule

## 1.10.3

### Patch Changes

- [#167](https://github.com/konfig-dev/konfig/pull/167) [`ca17fe4b`](https://github.com/konfig-dev/konfig/commit/ca17fe4be85776204d745709201333a8be140cb7) Thanks [@eddiechayes](https://github.com/eddiechayes)! - konfig lint runs fix

## 1.10.2

### Patch Changes

- Updated dependencies [[`b4366328`](https://github.com/konfig-dev/konfig/commit/b4366328b6c17a95b3d56a200e5d1808593c8528)]:
  - konfig-lib@1.6.0
  - konfig-openapi-spec@1.0.139
  - konfig-postman-to-openapi@3.0.117

## 1.10.1

### Patch Changes

- [#153](https://github.com/konfig-dev/konfig/pull/153) [`dce62b34`](https://github.com/konfig-dev/konfig/commit/dce62b3459583c84cbaca62fb115b9e536976282) Thanks [@eddiechayes](https://github.com/eddiechayes)! - added konfig version CLI command

## 1.10.0

### Minor Changes

- [#147](https://github.com/konfig-dev/konfig/pull/147) [`fe2fdd90`](https://github.com/konfig-dev/konfig/commit/fe2fdd90ff6a9e68501f45e379ff05f3a9439b84) Thanks [@dphuang2](https://github.com/dphuang2)! - add "revalidate-portal" command to replace "revalidate-demos"

## 1.9.1

### Patch Changes

- Updated dependencies [[`79cd79f0`](https://github.com/konfig-dev/konfig/commit/79cd79f0380e8c414d0d97dc9e9c97eeed521f2c), [`79cd79f0`](https://github.com/konfig-dev/konfig/commit/79cd79f0380e8c414d0d97dc9e9c97eeed521f2c)]:
  - konfig-lib@1.5.0
  - konfig-openapi-spec@1.0.138
  - konfig-postman-to-openapi@3.0.116

## 1.9.0

### Minor Changes

- [#139](https://github.com/konfig-dev/konfig/pull/139) [`ffcc4c0a`](https://github.com/konfig-dev/konfig/commit/ffcc4c0a1f406d6bf65f96eb8302f312d15d2bcd) Thanks [@dphuang2](https://github.com/dphuang2)! - removes generation instructions from top-level README

## 1.8.1

### Patch Changes

- [#137](https://github.com/konfig-dev/konfig/pull/137) [`75de250b`](https://github.com/konfig-dev/konfig/commit/75de250b4a18f77d6dc0eae2c98383bf19c01b93) Thanks [@eddiechayes](https://github.com/eddiechayes)! - fix mock server not terminating in docker container

## 1.8.0

### Minor Changes

- [#135](https://github.com/konfig-dev/konfig/pull/135) [`c1e90ed5`](https://github.com/konfig-dev/konfig/commit/c1e90ed530e5998a8bec15019bd4be6b09f160b7) Thanks [@dphuang2](https://github.com/dphuang2)! - add yarn.lock to hard-coded list of files to not delete

## 1.7.4

### Patch Changes

- Updated dependencies [[`1059bd82`](https://github.com/konfig-dev/konfig/commit/1059bd82a1dde5695d361a4ce56be89364babb29)]:
  - konfig-lib@1.4.0
  - konfig-openapi-spec@1.0.137
  - konfig-postman-to-openapi@3.0.115

## 1.7.3

### Patch Changes

- Updated dependencies [[`b0010205`](https://github.com/konfig-dev/konfig/commit/b001020545daad367d634c1a290722894976c95a)]:
  - konfig-lib@1.3.3
  - konfig-openapi-spec@1.0.136
  - konfig-postman-to-openapi@3.0.114

## 1.7.2

### Patch Changes

- Updated dependencies [[`297d5e45`](https://github.com/konfig-dev/konfig/commit/297d5e450613478d49bbc92357ea2a7e5f677acc)]:
  - konfig-lib@1.3.2
  - konfig-openapi-spec@1.0.135
  - konfig-postman-to-openapi@3.0.113

## 1.7.1

### Patch Changes

- [#123](https://github.com/konfig-dev/konfig/pull/123) [`f9ff241c`](https://github.com/konfig-dev/konfig/commit/f9ff241c03c5bd0645cde46ebaf1d0437a86a301) Thanks [@eddiechayes](https://github.com/eddiechayes)! - add konfig changeset cli command

- Updated dependencies [[`f9ff241c`](https://github.com/konfig-dev/konfig/commit/f9ff241c03c5bd0645cde46ebaf1d0437a86a301)]:
  - konfig-openapi-spec@1.0.134
  - konfig-lib@1.3.1
  - konfig-postman-to-openapi@3.0.112

## 1.7.0

### Minor Changes

- [`c1845a32`](https://github.com/konfig-dev/konfig/commit/c1845a32875eb0b3ee8dacf7d4451f9e8162dc3f) Thanks [@dphuang2](https://github.com/dphuang2)! - use konfig-kill-port

### Patch Changes

- Updated dependencies [[`c1845a32`](https://github.com/konfig-dev/konfig/commit/c1845a32875eb0b3ee8dacf7d4451f9e8162dc3f), [`1205d0c5`](https://github.com/konfig-dev/konfig/commit/1205d0c5f7d6e74f54254ef6099bfe522a588fa0)]:
  - konfig-kill-port@2.1.0

## 1.6.0

### Minor Changes

- [#119](https://github.com/konfig-dev/konfig/pull/119) [`e41378f0`](https://github.com/konfig-dev/konfig/commit/e41378f0f074e03c0cc512c546fd55c1e55d3411) Thanks [@dphuang2](https://github.com/dphuang2)! - - Run "konfig fix" at beginning of "konfig generate" if "specInputPath" is defined
  - fix "waiton" logic for mock server in "konfig test"
  - add prerelease "-r" flag for "konfig bump"

### Patch Changes

- Updated dependencies [[`e41378f0`](https://github.com/konfig-dev/konfig/commit/e41378f0f074e03c0cc512c546fd55c1e55d3411)]:
  - konfig-lib@1.3.0
  - konfig-openapi-spec@1.0.133
  - konfig-postman-to-openapi@3.0.111

## 1.5.0

### Minor Changes

- [#117](https://github.com/konfig-dev/konfig/pull/117) [`453424f1`](https://github.com/konfig-dev/konfig/commit/453424f1077e9a46aa0fc41a9ef1d8727586f64d) Thanks [@dphuang2](https://github.com/dphuang2)! - fix killing of mock server in testing

## 1.4.0

### Minor Changes

- [#115](https://github.com/konfig-dev/konfig/pull/115) [`bcac735e`](https://github.com/konfig-dev/konfig/commit/bcac735e66deca7a8e549d6cff1e175b5cb977a9) Thanks [@dphuang2](https://github.com/dphuang2)! - filter deprecated packages for npm in "konfig published"

## 1.3.0

### Minor Changes

- [#114](https://github.com/konfig-dev/konfig/pull/114) [`f51c5770`](https://github.com/konfig-dev/konfig/commit/f51c5770ba037fae0dc84be1149585e4e2af9d93) Thanks [@dphuang2](https://github.com/dphuang2)! - run mock server with "konfig test"

### Patch Changes

- Updated dependencies [[`29864036`](https://github.com/konfig-dev/konfig/commit/29864036e04a6e2cdc393e83ca189b7d09bc8323)]:
  - konfig-lib@1.2.0
  - konfig-openapi-spec@1.0.132
  - konfig-postman-to-openapi@3.0.110

## 1.2.0

### Minor Changes

- [#110](https://github.com/konfig-dev/konfig/pull/110) [`af14940f`](https://github.com/konfig-dev/konfig/commit/af14940fa215d60666a202511d35c1a7b56631e2) Thanks [@dphuang2](https://github.com/dphuang2)! - handle additional generators in "konfig bump"

## 1.1.0

### Minor Changes

- [#108](https://github.com/konfig-dev/konfig/pull/108) [`a2edaaa4`](https://github.com/konfig-dev/konfig/commit/a2edaaa428db01a65586db277970c35bac09ba24) Thanks [@dphuang2](https://github.com/dphuang2)! - fix invalid URL in "konfig published" + improve formatting

- [#108](https://github.com/konfig-dev/konfig/pull/108) [`a2edaaa4`](https://github.com/konfig-dev/konfig/commit/a2edaaa428db01a65586db277970c35bac09ba24) Thanks [@dphuang2](https://github.com/dphuang2)! - adds "konfig published" to CLI to query published packages

## 1.0.251

### Patch Changes

- 244817ff: reduce timeout for checking updates to 30 minutes

## 1.0.250

### Patch Changes

- Updated dependencies [7f3a6349]
  - konfig-lib@1.1.6
  - konfig-openapi-spec@1.0.131
  - konfig-postman-to-openapi@3.0.109

## 1.0.249

### Patch Changes

- af4f33fc: add warning if update is available
- Updated dependencies [bb4c6c7d]
  - konfig-lib@1.1.5
  - konfig-openapi-spec@1.0.130
  - konfig-postman-to-openapi@3.0.108

## 1.0.248

### Patch Changes

- 0ec9bfad: add description for npmName
- Updated dependencies [c833b8d1]
  - konfig-lib@1.1.4
  - konfig-openapi-spec@1.0.129
  - konfig-postman-to-openapi@3.0.107

## 1.0.247

### Patch Changes

- Updated dependencies [541aded4]
  - konfig-lib@1.1.3
  - konfig-openapi-spec@1.0.128
  - konfig-postman-to-openapi@3.0.106

## 1.0.246

### Patch Changes

- 9978a6a: add description to generate command
- Updated dependencies [72de0f1]
  - konfig-lib@1.1.2
  - konfig-openapi-spec@1.0.127
  - konfig-postman-to-openapi@3.0.105

## 1.0.243

### Patch Changes

- Updated dependencies
  - konfig-postman-to-openapi@3.0.102
