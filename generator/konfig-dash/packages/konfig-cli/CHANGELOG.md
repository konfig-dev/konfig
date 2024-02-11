# konfig-cli

## 1.38.10

### Patch Changes

- [#550](https://github.com/konfig-dev/konfig/pull/550) [`6eb0cac6`](https://github.com/konfig-dev/konfig/commit/6eb0cac63c542fc8e7f38d9a02294c15c35aae53) Thanks [@dphuang2](https://github.com/dphuang2)! - remove unnecessary console.log statement

## 1.38.9

### Patch Changes

- [#551](https://github.com/konfig-dev/konfig/pull/551) [`105a4996`](https://github.com/konfig-dev/konfig/commit/105a4996807cd2bb567aa26b7dcee36279116046) Thanks [@eddiechayes](https://github.com/eddiechayes)! - fix skipListUsageSecurity flag in konfig fix

## 1.38.8

### Patch Changes

- [#546](https://github.com/konfig-dev/konfig/pull/546) [`e48b3efc`](https://github.com/konfig-dev/konfig/commit/e48b3efc463b936845d4508492ac7df7e4152491) Thanks [@eddiechayes](https://github.com/eddiechayes)! - - add removeDefaultConfigurationParameters to typescript config

- Updated dependencies [[`e48b3efc`](https://github.com/konfig-dev/konfig/commit/e48b3efc463b936845d4508492ac7df7e4152491)]:
  - konfig-postman-to-openapi@3.1.9
  - konfig-typescript-sdk@1.3.1
  - konfig-openapi-spec@1.8.9
  - konfig-lib@1.36.4

## 1.38.7

### Patch Changes

- [#545](https://github.com/konfig-dev/konfig/pull/545) [`b8be7bad`](https://github.com/konfig-dev/konfig/commit/b8be7bad5e32511f1876fde9f26d8ca65503bdae) Thanks [@dphuang2](https://github.com/dphuang2)! - Make implementation of isSubmodule more robust

- Updated dependencies [[`b8be7bad`](https://github.com/konfig-dev/konfig/commit/b8be7bad5e32511f1876fde9f26d8ca65503bdae)]:
  - konfig-lib@1.36.3
  - konfig-openapi-spec@1.8.8
  - konfig-postman-to-openapi@3.1.8

## 1.38.6

### Patch Changes

- [#543](https://github.com/konfig-dev/konfig/pull/543) [`77b4431f`](https://github.com/konfig-dev/konfig/commit/77b4431f0cac2a5c030c7deb1a706821ce0cc773) Thanks [@dphuang2](https://github.com/dphuang2)! - fix submodule check implementation to be more robust

## 1.38.5

### Patch Changes

- [#541](https://github.com/konfig-dev/konfig/pull/541) [`c1898839`](https://github.com/konfig-dev/konfig/commit/c1898839d5246f9d9977bb5149e19560c3939911) Thanks [@dphuang2](https://github.com/dphuang2)! - add --mutex network flag to TS SDK testing

- [#540](https://github.com/konfig-dev/konfig/pull/540) [`757280c8`](https://github.com/konfig-dev/konfig/commit/757280c823b7af70219fb34b65f36473280c2959) Thanks [@eddiechayes](https://github.com/eddiechayes)! - add securitySchemeOverride to konfig.yaml

- Updated dependencies [[`757280c8`](https://github.com/konfig-dev/konfig/commit/757280c823b7af70219fb34b65f36473280c2959)]:
  - konfig-openapi-spec@1.8.7
  - konfig-lib@1.36.2
  - konfig-postman-to-openapi@3.1.7

## 1.38.4

### Patch Changes

- [#535](https://github.com/konfig-dev/konfig/pull/535) [`3c0fc5ba`](https://github.com/konfig-dev/konfig/commit/3c0fc5bada09ce010e1b245ebd0541473b163edf) Thanks [@dphuang2](https://github.com/dphuang2)! - handle >=3 schemas when converting "type": "null" & anyOf usage back to OAS 3.0.x

## 1.38.3

### Patch Changes

- [#523](https://github.com/konfig-dev/konfig/pull/523) [`1675a390`](https://github.com/konfig-dev/konfig/commit/1675a3909f6eb714c1ec94438db23e3d79f2aa7d) Thanks [@eddiechayes](https://github.com/eddiechayes)! - adding noInput flag to konfig fix

- [`9c3ce0bd`](https://github.com/konfig-dev/konfig/commit/9c3ce0bd6ed993b70e8a79cb94695c2a08faacf2) Thanks [@dphuang2](https://github.com/dphuang2)! - fix operation tag assignment not being used

## 1.38.2

### Patch Changes

- [#518](https://github.com/konfig-dev/konfig/pull/518) [`1bb4ee39`](https://github.com/konfig-dev/konfig/commit/1bb4ee39d4e4d09c21e86f4443c08723052508a6) Thanks [@eddiechayes](https://github.com/eddiechayes)! - Make konfig fix not require konfig.yaml if input/output flags are set & add progressOverridePath flag

- [#509](https://github.com/konfig-dev/konfig/pull/509) [`f80a4f34`](https://github.com/konfig-dev/konfig/commit/f80a4f3466051f6875a87aac774042a88f6dfb01) Thanks [@eddiechayes](https://github.com/eddiechayes)! - add --useAIForOperationId flag to konfig fix

## 1.38.1

### Patch Changes

- [#477](https://github.com/konfig-dev/konfig/pull/477) [`a7d61873`](https://github.com/konfig-dev/konfig/commit/a7d6187324c3e4b94c3de50413d854f622b0a77b) Thanks [@dphuang2](https://github.com/dphuang2)! - Fix handling of enum strings for TypeScript SDK

- Updated dependencies [[`a7d61873`](https://github.com/konfig-dev/konfig/commit/a7d6187324c3e4b94c3de50413d854f622b0a77b)]:
  - konfig-lib@1.36.1
  - konfig-openapi-spec@1.8.6
  - konfig-postman-to-openapi@3.1.6

## 1.38.0

### Minor Changes

- [#474](https://github.com/konfig-dev/konfig/pull/474) [`5e38dc1c`](https://github.com/konfig-dev/konfig/commit/5e38dc1cd0d748d50e31451e782362c31c1c8dd5) Thanks [@dphuang2](https://github.com/dphuang2)! - Revert usage of anyOf schema with "type": "null" from OAS 3.1

- [#474](https://github.com/konfig-dev/konfig/pull/474) [`5e38dc1c`](https://github.com/konfig-dev/konfig/commit/5e38dc1cd0d748d50e31451e782362c31c1c8dd5) Thanks [@dphuang2](https://github.com/dphuang2)! - Remove usage of "examples" from OAS 3.1

## 1.37.0

### Minor Changes

- [#471](https://github.com/konfig-dev/konfig/pull/471) [`a56ccd42`](https://github.com/konfig-dev/konfig/commit/a56ccd42da81c27d2241534939857b3a6dddbcba) Thanks [@dphuang2](https://github.com/dphuang2)! - - Fix readmeHeader configuration causing ENOENT error when no SDK has been
  generated before
  - Fix duplicate-sdk-method-name throwing error if there is a match between two
    methods in different tags. This shouldn't throw an error since they should be
    separated by namespaces anyways

## 1.36.5

### Patch Changes

- Updated dependencies [[`c002b6f3`](https://github.com/konfig-dev/konfig/commit/c002b6f337801ea3eb71acfef6d49c9f2d8a84d0)]:
  - konfig-lib@1.36.0
  - konfig-openapi-spec@1.8.5
  - konfig-postman-to-openapi@3.1.5

## 1.36.4

### Patch Changes

- Updated dependencies [[`dcbb96d0`](https://github.com/konfig-dev/konfig/commit/dcbb96d0886c811f7271c4a8db3c69f9f6e1c833)]:
  - konfig-lib@1.35.0
  - konfig-openapi-spec@1.8.4
  - konfig-postman-to-openapi@3.1.4

## 1.36.3

### Patch Changes

- [#431](https://github.com/konfig-dev/konfig/pull/431) [`5de1be39`](https://github.com/konfig-dev/konfig/commit/5de1be39ded180f26cec84b36cbf2860d66d07b5) Thanks [@dphuang2](https://github.com/dphuang2)! - fix generation of STATISTICS.md hanging

- Updated dependencies [[`5de1be39`](https://github.com/konfig-dev/konfig/commit/5de1be39ded180f26cec84b36cbf2860d66d07b5)]:
  - konfig-openapi-spec@1.8.3
  - konfig-lib@1.34.3
  - konfig-postman-to-openapi@3.1.3

## 1.36.2

### Patch Changes

- [`5343476d`](https://github.com/konfig-dev/konfig/commit/5343476d07bc2074cc80cd511ca18b417f1f0dac) Thanks [@eddiechayes](https://github.com/eddiechayes)! - use repoId instead of repoName for go publish

## 1.36.1

### Patch Changes

- [#420](https://github.com/konfig-dev/konfig/pull/420) [`6e27b58d`](https://github.com/konfig-dev/konfig/commit/6e27b58d3bb3cab5c9616ebbe2275d85e9bf0cb4) Thanks [@eddiechayes](https://github.com/eddiechayes)! - add maptags to transformspec

- Updated dependencies [[`6e27b58d`](https://github.com/konfig-dev/konfig/commit/6e27b58d3bb3cab5c9616ebbe2275d85e9bf0cb4)]:
  - konfig-openapi-spec@1.8.2
  - konfig-lib@1.34.2
  - konfig-postman-to-openapi@3.1.2

## 1.36.0

### Minor Changes

- [#422](https://github.com/konfig-dev/konfig/pull/422) [`9f5bf701`](https://github.com/konfig-dev/konfig/commit/9f5bf70101475e081607b75a054a241eb33a283c) Thanks [@dphuang2](https://github.com/dphuang2)! - Fix broken "Documentation" link in generated top-level README.md for SDK repo

- [#416](https://github.com/konfig-dev/konfig/pull/416) [`7b8d1fd6`](https://github.com/konfig-dev/konfig/commit/7b8d1fd6cb5a7b57e9d5004a7fe87f17b6aa01d9) Thanks [@dphuang2](https://github.com/dphuang2)! - write LICENSE file for Swift SDK

- [#424](https://github.com/konfig-dev/konfig/pull/424) [`4b504ac2`](https://github.com/konfig-dev/konfig/commit/4b504ac2581052333d241ac36ecce3074ce82fea) Thanks [@dphuang2](https://github.com/dphuang2)! - validate Go SDK config / fix publishing for Go

## 1.35.0

### Minor Changes

- [`dc29d6e5`](https://github.com/konfig-dev/konfig/commit/dc29d6e5607fe88e73616529dd2babf9c32c9144) Thanks [@dphuang2](https://github.com/dphuang2)! - upgrade @stoplight/prism-cli dependency

- [#409](https://github.com/konfig-dev/konfig/pull/409) [`ab52fae1`](https://github.com/konfig-dev/konfig/commit/ab52fae196256319657ff20dbc2b52024e127ffc) Thanks [@dphuang2](https://github.com/dphuang2)! - print error for "konfig mock" if caught

### Patch Changes

- Updated dependencies [[`816adff9`](https://github.com/konfig-dev/konfig/commit/816adff9500ccb56ba35c68152a02b3e8ec022d7)]:
  - konfig-lib@1.34.1
  - konfig-openapi-spec@1.8.1
  - konfig-postman-to-openapi@3.1.1

## 1.34.0

### Minor Changes

- [#399](https://github.com/konfig-dev/konfig/pull/399) [`7f82ce28`](https://github.com/konfig-dev/konfig/commit/7f82ce28482db4bacabf20eb7283c4f4678729bb) Thanks [@dphuang2](https://github.com/dphuang2)! - add the openapi-schema-validate utility command

- [#399](https://github.com/konfig-dev/konfig/pull/399) [`7f82ce28`](https://github.com/konfig-dev/konfig/commit/7f82ce28482db4bacabf20eb7283c4f4678729bb) Thanks [@dphuang2](https://github.com/dphuang2)! - allow running "konfig lint" without "konfig.yaml" in CWD

### Patch Changes

- [#398](https://github.com/konfig-dev/konfig/pull/398) [`882692b7`](https://github.com/konfig-dev/konfig/commit/882692b71338505527c85b34614b84b60f119ec2) Thanks [@eddiechayes](https://github.com/eddiechayes)! - add handleSubmodule to swift

- Updated dependencies [[`7f82ce28`](https://github.com/konfig-dev/konfig/commit/7f82ce28482db4bacabf20eb7283c4f4678729bb), [`7f82ce28`](https://github.com/konfig-dev/konfig/commit/7f82ce28482db4bacabf20eb7283c4f4678729bb)]:
  - konfig-postman-to-openapi@3.1.0
  - konfig-openapi-spec@1.8.0
  - konfig-lib@1.34.0

## 1.33.1

### Patch Changes

- Updated dependencies [[`1e7398dc`](https://github.com/konfig-dev/konfig/commit/1e7398dcc55c23211b77937bbcfb6746a1c2dcae)]:
  - konfig-lib@1.33.0
  - konfig-openapi-spec@1.7.7
  - konfig-postman-to-openapi@3.0.149

## 1.33.0

### Minor Changes

- [#390](https://github.com/konfig-dev/konfig/pull/390) [`9c59eb37`](https://github.com/konfig-dev/konfig/commit/9c59eb379831703f4dc2c7e4177e67e670dba017) Thanks [@dphuang2](https://github.com/dphuang2)! - improve error messaging when file not found from github

## 1.32.4

### Patch Changes

- Updated dependencies [[`7ca27279`](https://github.com/konfig-dev/konfig/commit/7ca27279a2b13ff88812e5dc16cd9730680b2266)]:
  - konfig-lib@1.32.0
  - konfig-openapi-spec@1.7.6
  - konfig-postman-to-openapi@3.0.148

## 1.32.3

### Patch Changes

- Updated dependencies [[`d0f443c5`](https://github.com/konfig-dev/konfig/commit/d0f443c598a2d7c4ded710eb1c1d786aea20b37a), [`234f77a7`](https://github.com/konfig-dev/konfig/commit/234f77a75464ba458edafab91624153b60984577)]:
  - konfig-lib@1.31.0
  - konfig-openapi-spec@1.7.5
  - konfig-postman-to-openapi@3.0.147

## 1.32.2

### Patch Changes

- [`cc7c73f2`](https://github.com/konfig-dev/konfig/commit/cc7c73f2590ac4827eef94754482dc58b83e0960) Thanks [@eddiechayes](https://github.com/eddiechayes)! - apply filterPaths to konfig fix

- Updated dependencies [[`cc7c73f2`](https://github.com/konfig-dev/konfig/commit/cc7c73f2590ac4827eef94754482dc58b83e0960)]:
  - konfig-lib@1.30.2
  - konfig-openapi-spec@1.7.4
  - konfig-postman-to-openapi@3.0.146

## 1.32.1

### Patch Changes

- [#354](https://github.com/konfig-dev/konfig/pull/354) [`c57aded2`](https://github.com/konfig-dev/konfig/commit/c57aded2618c791fd7442a01b9e6533b2a394450) Thanks [@eddiechayes](https://github.com/eddiechayes)! - maven test run in quiet mode

- [#366](https://github.com/konfig-dev/konfig/pull/366) [`905876e3`](https://github.com/konfig-dev/konfig/commit/905876e3adee94eff659d2efdadc5b08758e2e1c) Thanks [@eddiechayes](https://github.com/eddiechayes)! - add --ignoreSubmodules flag to generate

- Updated dependencies [[`e5213a41`](https://github.com/konfig-dev/konfig/commit/e5213a41cbea37716363345da920e3612d05ed4c), [`c57aded2`](https://github.com/konfig-dev/konfig/commit/c57aded2618c791fd7442a01b9e6533b2a394450), [`4522afbc`](https://github.com/konfig-dev/konfig/commit/4522afbc9b3e44b52fa73e55457de2992742a7ed)]:
  - konfig-lib@1.30.1
  - konfig-postman-to-openapi@3.0.145
  - konfig-openapi-spec@1.7.3

## 1.32.0

### Minor Changes

- [#357](https://github.com/konfig-dev/konfig/pull/357) [`fee1ac96`](https://github.com/konfig-dev/konfig/commit/fee1ac965b9cffcf8fa5428ef22f504979986510) Thanks [@dphuang2](https://github.com/dphuang2)! - set output directory to date to avoid conflict

## 1.31.1

### Patch Changes

- Updated dependencies [[`107261c4`](https://github.com/konfig-dev/konfig/commit/107261c4821f9165d012b8f85b0b8248bae9acd2)]:
  - konfig-lib@1.30.0
  - konfig-openapi-spec@1.7.2
  - konfig-postman-to-openapi@3.0.144

## 1.31.0

### Minor Changes

- [#351](https://github.com/konfig-dev/konfig/pull/351) [`e19a56d9`](https://github.com/konfig-dev/konfig/commit/e19a56d9cd7337a30070ba56f78083f61a27da92) Thanks [@dphuang2](https://github.com/dphuang2)! - allow default changeset bump type to be configured for a generator

- [#349](https://github.com/konfig-dev/konfig/pull/349) [`9f95edfa`](https://github.com/konfig-dev/konfig/commit/9f95edfabe9e745251f58f6ed9b554031e161ccb) Thanks [@dphuang2](https://github.com/dphuang2)! - add skipGitCleanCheck flag to konfig publish

### Patch Changes

- Updated dependencies [[`e19a56d9`](https://github.com/konfig-dev/konfig/commit/e19a56d9cd7337a30070ba56f78083f61a27da92)]:
  - konfig-lib@1.29.0
  - konfig-openapi-spec@1.7.1
  - konfig-postman-to-openapi@3.0.143

## 1.30.1

### Patch Changes

- [`1bd979ad`](https://github.com/konfig-dev/konfig/commit/1bd979ad10e48ad65829b7c00365fad55db29b7d) Thanks [@dphuang2](https://github.com/dphuang2)! - add logging before error about dirty git repo in konfig publish

## 1.30.0

### Minor Changes

- [`2e7c6a41`](https://github.com/konfig-dev/konfig/commit/2e7c6a413dfe0234aa69c68d2d406c719199bf93) Thanks [@dphuang2](https://github.com/dphuang2)! - ensure 'poetry lock --no-update' is called if necessary

## 1.29.0

### Minor Changes

- [#343](https://github.com/konfig-dev/konfig/pull/343) [`c88285d0`](https://github.com/konfig-dev/konfig/commit/c88285d03321f2d1fedffdfa6164bc22cba92f2b) Thanks [@dphuang2](https://github.com/dphuang2)! - add readmeHeaderSnippet configuration

### Patch Changes

- Updated dependencies [[`c88285d0`](https://github.com/konfig-dev/konfig/commit/c88285d03321f2d1fedffdfa6164bc22cba92f2b)]:
  - konfig-openapi-spec@1.7.0
  - konfig-lib@1.28.0
  - konfig-postman-to-openapi@3.0.142

## 1.28.0

### Minor Changes

- [`c83d71f0`](https://github.com/konfig-dev/konfig/commit/c83d71f0395c3eee4917d1ed66a43ff74b1c8f87) Thanks [@dphuang2](https://github.com/dphuang2)! - fix comments in code snippets for Python having reference link fix applied

## 1.27.0

### Minor Changes

- [#332](https://github.com/konfig-dev/konfig/pull/332) [`077a3abe`](https://github.com/konfig-dev/konfig/commit/077a3abe1adee0c041528c72afd22eccff1dd61d) Thanks [@dphuang2](https://github.com/dphuang2)! - fix reference link in PyPI

## 1.26.0

### Minor Changes

- [#324](https://github.com/konfig-dev/konfig/pull/324) [`6cf3abc4`](https://github.com/konfig-dev/konfig/commit/6cf3abc422257a461228ef0b177b9a4469239d68) Thanks [@dphuang2](https://github.com/dphuang2)! - poetry.lock is now generated after generating SDKs

## 1.25.0

### Minor Changes

- [#320](https://github.com/konfig-dev/konfig/pull/320) [`feda4e8f`](https://github.com/konfig-dev/konfig/commit/feda4e8f96bc7c4f731807126d088de3bb274aa9) Thanks [@dphuang2](https://github.com/dphuang2)! - fix location of .pytest for Python SDK in "konfig test"

### Patch Changes

- Updated dependencies [[`962ab778`](https://github.com/konfig-dev/konfig/commit/962ab7789efa4af28efed53ecf38b33af1a8800a)]:
  - konfig-lib@1.27.0
  - konfig-openapi-spec@1.6.4
  - konfig-postman-to-openapi@3.0.141

## 1.24.0

### Minor Changes

- [`8c03fa02`](https://github.com/konfig-dev/konfig/commit/8c03fa02c01f5ffc111b61ce3d501d5abfa16906) Thanks [@dphuang2](https://github.com/dphuang2)! - add option to force use Twine credentials for publishing to PyPI

## 1.23.5

### Patch Changes

- [#314](https://github.com/konfig-dev/konfig/pull/314) [`6e163cc8`](https://github.com/konfig-dev/konfig/commit/6e163cc87d32aea6bb3e62ddd1b8e1c3e7b00690) Thanks [@eddiechayes](https://github.com/eddiechayes)! - Fix kill port in containers

- Updated dependencies [[`6e163cc8`](https://github.com/konfig-dev/konfig/commit/6e163cc87d32aea6bb3e62ddd1b8e1c3e7b00690)]:
  - konfig-kill-port@2.1.1
  - konfig-lib@1.26.1
  - konfig-openapi-spec@1.6.3
  - konfig-postman-to-openapi@3.0.140

## 1.23.4

### Patch Changes

- [#311](https://github.com/konfig-dev/konfig/pull/311) [`787daba1`](https://github.com/konfig-dev/konfig/commit/787daba138beef15a7a155356494e1953b7f9a0c) Thanks [@eddiechayes](https://github.com/eddiechayes)! - add mockServerPort arg to konfig test

- Updated dependencies [[`ce10a4a1`](https://github.com/konfig-dev/konfig/commit/ce10a4a196734dacc2dee760e9f98501b755de01)]:
  - konfig-lib@1.26.0
  - konfig-openapi-spec@1.6.2
  - konfig-postman-to-openapi@3.0.139

## 1.23.3

### Patch Changes

- [#305](https://github.com/konfig-dev/konfig/pull/305) [`2989b356`](https://github.com/konfig-dev/konfig/commit/2989b356fcae870d00027dea8354d1300b3a8adf) Thanks [@eddiechayes](https://github.com/eddiechayes)! - konfig fix removes trailing slashes on servers

## 1.23.2

### Patch Changes

- Updated dependencies [[`1735540b`](https://github.com/konfig-dev/konfig/commit/1735540b83b9ed7316fd73f9523ba679873c504e)]:
  - konfig-lib@1.25.1
  - konfig-openapi-spec@1.6.1
  - konfig-postman-to-openapi@3.0.138

## 1.23.1

### Patch Changes

- Updated dependencies [[`c90dc42f`](https://github.com/konfig-dev/konfig/commit/c90dc42f1c9e32df66a1390ce532ddecf90c0eb2)]:
  - konfig-openapi-spec@1.6.0
  - konfig-lib@1.25.0
  - konfig-postman-to-openapi@3.0.137

## 1.23.0

### Minor Changes

- [#286](https://github.com/konfig-dev/konfig/pull/286) [`359e8f49`](https://github.com/konfig-dev/konfig/commit/359e8f491dbb76f1bfee2239af36783f4f29fb68) Thanks [@dphuang2](https://github.com/dphuang2)! - add noMockServer flag for running tests

## 1.22.0

### Minor Changes

- [#280](https://github.com/konfig-dev/konfig/pull/280) [`a62dbaf3`](https://github.com/konfig-dev/konfig/commit/a62dbaf3034e311733a10ea6e069733380fd19a2) Thanks [@dphuang2](https://github.com/dphuang2)! - fix but in getting git repository name for generating README

- [#280](https://github.com/konfig-dev/konfig/pull/280) [`a62dbaf3`](https://github.com/konfig-dev/konfig/commit/a62dbaf3034e311733a10ea6e069733380fd19a2) Thanks [@dphuang2](https://github.com/dphuang2)! - default to "main" if defaultBranch cannot be computed

## 1.21.0

### Minor Changes

- [#278](https://github.com/konfig-dev/konfig/pull/278) [`2de513ed`](https://github.com/konfig-dev/konfig/commit/2de513edf83ff99fc40980b6b8de5aacd1f92c87) Thanks [@dphuang2](https://github.com/dphuang2)! - refactor implementation for isGitSubmodule

## 1.20.0

### Minor Changes

- [#274](https://github.com/konfig-dev/konfig/pull/274) [`acd5d5e3`](https://github.com/konfig-dev/konfig/commit/acd5d5e3c319540df7047f9682611c4b237658b7) Thanks [@dphuang2](https://github.com/dphuang2)! - support using preferred editor for changeset message

- [#274](https://github.com/konfig-dev/konfig/pull/274) [`acd5d5e3`](https://github.com/konfig-dev/konfig/commit/acd5d5e3c319540df7047f9682611c4b237658b7) Thanks [@dphuang2](https://github.com/dphuang2)! - generate table of contents for Python SDK README.md file

## 1.19.5

### Patch Changes

- Updated dependencies [[`128b79c1`](https://github.com/konfig-dev/konfig/commit/128b79c1770661b787a17c17571ad447cd134567)]:
  - konfig-lib@1.24.0
  - konfig-openapi-spec@1.5.3
  - konfig-postman-to-openapi@3.0.136

## 1.19.4

### Patch Changes

- [#269](https://github.com/konfig-dev/konfig/pull/269) [`9832b12d`](https://github.com/konfig-dev/konfig/commit/9832b12d03afe45140e5ef793fe456962ee987ad) Thanks [@eddiechayes](https://github.com/eddiechayes)! - fix skipTag for publish ts

## 1.19.3

### Patch Changes

- [#267](https://github.com/konfig-dev/konfig/pull/267) [`b3f2b48c`](https://github.com/konfig-dev/konfig/commit/b3f2b48c2ed5f4001f8e5476e6cac1d5356837d2) Thanks [@eddiechayes](https://github.com/eddiechayes)! - fix pypi publishing with token

## 1.19.2

### Patch Changes

- Updated dependencies [[`99310fc1`](https://github.com/konfig-dev/konfig/commit/99310fc166af9212c69aea6a8447bd421f059575)]:
  - konfig-lib@1.23.0
  - konfig-openapi-spec@1.5.2
  - konfig-postman-to-openapi@3.0.135

## 1.19.1

### Patch Changes

- Updated dependencies [[`93d5dcf9`](https://github.com/konfig-dev/konfig/commit/93d5dcf94d62ce83549ae7e6985e93713731fce0)]:
  - konfig-lib@1.22.0
  - konfig-openapi-spec@1.5.1
  - konfig-postman-to-openapi@3.0.134

## 1.19.0

### Minor Changes

- [#258](https://github.com/konfig-dev/konfig/pull/258) [`ba01dc5f`](https://github.com/konfig-dev/konfig/commit/ba01dc5f8354bb09dfcbe97917a6c00368128a4b) Thanks [@dphuang2](https://github.com/dphuang2)! - add readmeHeader configuration for more welcoming README pages

- [#258](https://github.com/konfig-dev/konfig/pull/258) [`ba01dc5f`](https://github.com/konfig-dev/konfig/commit/ba01dc5f8354bb09dfcbe97917a6c00368128a4b) Thanks [@dphuang2](https://github.com/dphuang2)! - generate table of contents for TypeScript SDK

### Patch Changes

- Updated dependencies [[`ba01dc5f`](https://github.com/konfig-dev/konfig/commit/ba01dc5f8354bb09dfcbe97917a6c00368128a4b)]:
  - konfig-openapi-spec@1.5.0
  - konfig-lib@1.21.0
  - konfig-postman-to-openapi@3.0.133

## 1.18.1

### Patch Changes

- Updated dependencies [[`d7ebabf8`](https://github.com/konfig-dev/konfig/commit/d7ebabf8f9f528eda5586ae994b9676ff5f711b8)]:
  - konfig-lib@1.20.0
  - konfig-openapi-spec@1.4.2
  - konfig-postman-to-openapi@3.0.132

## 1.18.0

### Minor Changes

- [#250](https://github.com/konfig-dev/konfig/pull/250) [`32dfd9a1`](https://github.com/konfig-dev/konfig/commit/32dfd9a15aaf9016624d173977bd43e3f0725d1d) Thanks [@dphuang2](https://github.com/dphuang2)! - fix bug in empty response body schema fix rule

### Patch Changes

- [#251](https://github.com/konfig-dev/konfig/pull/251) [`551ebd48`](https://github.com/konfig-dev/konfig/commit/551ebd4878ffd97611daf75bed500e46e8a43521) Thanks [@eddiechayes](https://github.com/eddiechayes)! - add new --tolerateRepublish error string

- Updated dependencies [[`32dfd9a1`](https://github.com/konfig-dev/konfig/commit/32dfd9a15aaf9016624d173977bd43e3f0725d1d)]:
  - konfig-lib@1.19.0
  - konfig-openapi-spec@1.4.1
  - konfig-postman-to-openapi@3.0.131

## 1.17.0

### Minor Changes

- [#242](https://github.com/konfig-dev/konfig/pull/242) [`6b4a9657`](https://github.com/konfig-dev/konfig/commit/6b4a965786b14c4d9f499fcdbf642f862d74ce6e) Thanks [@dphuang2](https://github.com/dphuang2)! - fix bug in "konfig fix" while fixing operation ids

### Patch Changes

- [#249](https://github.com/konfig-dev/konfig/pull/249) [`62a48c53`](https://github.com/konfig-dev/konfig/commit/62a48c5300f80d6759c3782307128eabc57ff4c6) Thanks [@eddiechayes](https://github.com/eddiechayes)! - write .npmrc after generate typescript

## 1.16.1

### Patch Changes

- [#240](https://github.com/konfig-dev/konfig/pull/240) [`f0d23f90`](https://github.com/konfig-dev/konfig/commit/f0d23f90c69805524859dbe4e37cbd9ebfae2519) Thanks [@eddiechayes](https://github.com/eddiechayes)! - add `yarn` to end of konfig generate

## 1.16.0

### Minor Changes

- [#237](https://github.com/konfig-dev/konfig/pull/237) [`af4d803e`](https://github.com/konfig-dev/konfig/commit/af4d803e9ca765ffc52f4987d7169197c20f3ec2) Thanks [@dphuang2](https://github.com/dphuang2)! - fix bug in generating top-level README.md

### Patch Changes

- Updated dependencies [[`82553c73`](https://github.com/konfig-dev/konfig/commit/82553c73fc836af4c7ea220fbecf375d2fa4b14b)]:
  - konfig-openapi-spec@1.4.0
  - konfig-lib@1.18.0
  - konfig-postman-to-openapi@3.0.130

## 1.15.0

### Minor Changes

- [#234](https://github.com/konfig-dev/konfig/pull/234) [`817c829e`](https://github.com/konfig-dev/konfig/commit/817c829e9668549b8f703342f1b7831bb8c67dfc) Thanks [@dphuang2](https://github.com/dphuang2)! - use KONFIG_API_URL for "konfig generate" if exists

- [#233](https://github.com/konfig-dev/konfig/pull/233) [`0b14a865`](https://github.com/konfig-dev/konfig/commit/0b14a865ebbd235e3d5996c7c3da3896f54e589b) Thanks [@dphuang2](https://github.com/dphuang2)! - add -i and -o flag to pull

### Patch Changes

- Updated dependencies [[`6c28822e`](https://github.com/konfig-dev/konfig/commit/6c28822eb8ccfa53359d7ba105340ffa9409fcad)]:
  - konfig-lib@1.17.0
  - konfig-openapi-spec@1.3.5
  - konfig-postman-to-openapi@3.0.129

## 1.14.2

### Patch Changes

- Updated dependencies [[`ab7e69b6`](https://github.com/konfig-dev/konfig/commit/ab7e69b68ea891c74c7fa2c042beb6cd644382ee)]:
  - konfig-lib@1.16.0
  - konfig-openapi-spec@1.3.4
  - konfig-postman-to-openapi@3.0.128

## 1.14.1

### Patch Changes

- [#227](https://github.com/konfig-dev/konfig/pull/227) [`ef1d23af`](https://github.com/konfig-dev/konfig/commit/ef1d23afae81e1488807f0793fdc766f6dd319b9) Thanks [@dphuang2](https://github.com/dphuang2)! - fix bug when generating Go SDK

- [#222](https://github.com/konfig-dev/konfig/pull/222) [`d90d63ea`](https://github.com/konfig-dev/konfig/commit/d90d63ea5c472a42be5a0d3c649ad62c955b9a9c) Thanks [@eddiechayes](https://github.com/eddiechayes)! - add pr-create CLI command and /prCreate endpoint

- [#224](https://github.com/konfig-dev/konfig/pull/224) [`1d379bf1`](https://github.com/konfig-dev/konfig/commit/1d379bf1ef2ec82e1a83b29707533f194aa3c7c9) Thanks [@eddiechayes](https://github.com/eddiechayes)! - create pr-merge CLI command and /prMerge endpoint

- [#225](https://github.com/konfig-dev/konfig/pull/225) [`fc8a924c`](https://github.com/konfig-dev/konfig/commit/fc8a924c31e9023f912453ded597936a11a65a04) Thanks [@eddiechayes](https://github.com/eddiechayes)! - add api keys for /prCreate and /prMerge endpoints

- Updated dependencies [[`3bfa15ce`](https://github.com/konfig-dev/konfig/commit/3bfa15ce74f365b7b248739c3d84d07458cfdbb3), [`d90d63ea`](https://github.com/konfig-dev/konfig/commit/d90d63ea5c472a42be5a0d3c649ad62c955b9a9c), [`1d379bf1`](https://github.com/konfig-dev/konfig/commit/1d379bf1ef2ec82e1a83b29707533f194aa3c7c9), [`fc8a924c`](https://github.com/konfig-dev/konfig/commit/fc8a924c31e9023f912453ded597936a11a65a04)]:
  - konfig-lib@1.15.0
  - konfig-openapi-spec@1.3.3
  - konfig-postman-to-openapi@3.0.127

## 1.14.0

### Minor Changes

- [#218](https://github.com/konfig-dev/konfig/pull/218) [`681c8fa5`](https://github.com/konfig-dev/konfig/commit/681c8fa5bd08d9d4a4ae74b11c63c68978ab89d6) Thanks [@dphuang2](https://github.com/dphuang2)! - fix go publishing/top-level README links

## 1.13.0

### Minor Changes

- [#216](https://github.com/konfig-dev/konfig/pull/216) [`0a49bd66`](https://github.com/konfig-dev/konfig/commit/0a49bd664623f0dd23c262276a3c8467cbc1cfc3) Thanks [@dphuang2](https://github.com/dphuang2)! - fix handling of specRemotePath being a yaml file

## 1.12.1

### Patch Changes

- Updated dependencies [[`95538406`](https://github.com/konfig-dev/konfig/commit/95538406638712c2b32a323a74742a21da1d5bf0)]:
  - konfig-lib@1.14.0
  - konfig-openapi-spec@1.3.2
  - konfig-postman-to-openapi@3.0.126

## 1.12.0

### Minor Changes

- [#206](https://github.com/konfig-dev/konfig/pull/206) [`0b6c29d2`](https://github.com/konfig-dev/konfig/commit/0b6c29d2aa339e2f8755030d03191c21f9affd55) Thanks [@konfig-publisher](https://github.com/konfig-publisher)! - add dart sdk support in konfig.yaml

### Patch Changes

- [#206](https://github.com/konfig-dev/konfig/pull/206) [`0b6c29d2`](https://github.com/konfig-dev/konfig/commit/0b6c29d2aa339e2f8755030d03191c21f9affd55) Thanks [@konfig-publisher](https://github.com/konfig-publisher)! - upgrade prism / fix path to prism logic in testing

- Updated dependencies [[`0b6c29d2`](https://github.com/konfig-dev/konfig/commit/0b6c29d2aa339e2f8755030d03191c21f9affd55)]:
  - konfig-lib@1.13.0
  - konfig-openapi-spec@1.3.1
  - konfig-postman-to-openapi@3.0.125

## 1.11.9

### Patch Changes

- Updated dependencies [[`97752b65`](https://github.com/konfig-dev/konfig/commit/97752b650be5f5089d8ade979516f9ddc008cd33)]:
  - konfig-openapi-spec@1.3.0
  - konfig-lib@1.12.0
  - konfig-postman-to-openapi@3.0.124

## 1.11.8

### Patch Changes

- [#207](https://github.com/konfig-dev/konfig/pull/207) [`1080d4b2`](https://github.com/konfig-dev/konfig/commit/1080d4b2161ee5b80fd05673816603fbfb833f85) Thanks [@eddiechayes](https://github.com/eddiechayes)! - create konfig list-sdk-submodules

## 1.11.7

### Patch Changes

- Updated dependencies [[`32c2e0f4`](https://github.com/konfig-dev/konfig/commit/32c2e0f40c90b1a6caab0d2f3c6a0c098de0608a)]:
  - konfig-openapi-spec@1.2.0
  - konfig-lib@1.11.0
  - konfig-postman-to-openapi@3.0.123

## 1.11.6

### Patch Changes

- [#201](https://github.com/konfig-dev/konfig/pull/201) [`56165df0`](https://github.com/konfig-dev/konfig/commit/56165df0566b797b8b2c63ae58ee5e4ee8715c41) Thanks [@eddiechayes](https://github.com/eddiechayes)! - added --tolerateRepublish flag to publish

## 1.11.5

### Patch Changes

- Updated dependencies [[`2b90fa13`](https://github.com/konfig-dev/konfig/commit/2b90fa132bceb427272d9835686977a51eda01f1)]:
  - konfig-lib@1.10.0
  - konfig-openapi-spec@1.1.1
  - konfig-postman-to-openapi@3.0.122

## 1.11.4

### Patch Changes

- Updated dependencies [[`5d046896`](https://github.com/konfig-dev/konfig/commit/5d04689669cced6f4462e7b24a8b7462ad00798c)]:
  - konfig-openapi-spec@1.1.0
  - konfig-lib@1.9.0
  - konfig-postman-to-openapi@3.0.121

## 1.11.3

### Patch Changes

- Updated dependencies [[`fab62fdf`](https://github.com/konfig-dev/konfig/commit/fab62fdf7f5b0ca3369f7f326dc9a8a4d56b77ed)]:
  - konfig-openapi-spec@1.0.142
  - konfig-lib@1.8.1
  - konfig-postman-to-openapi@3.0.120

## 1.11.2

### Patch Changes

- Updated dependencies [[`28f0b957`](https://github.com/konfig-dev/konfig/commit/28f0b957d4108d1eec8c129da718a56bd594672c)]:
  - konfig-lib@1.8.0
  - konfig-openapi-spec@1.0.141
  - konfig-postman-to-openapi@3.0.119

## 1.11.1

### Patch Changes

- [#179](https://github.com/konfig-dev/konfig/pull/179) [`dde3354e`](https://github.com/konfig-dev/konfig/commit/dde3354eb3acba72f3d66aa7cd84e51e12b8794f) Thanks [@eddiechayes](https://github.com/eddiechayes)! - ci flag for fix fills in empty body response schema

## 1.11.0

### Minor Changes

- [#174](https://github.com/konfig-dev/konfig/pull/174) [`3756851e`](https://github.com/konfig-dev/konfig/commit/3756851e22a6adf25ad9612e71118a46ffc8af1d) Thanks [@dphuang2](https://github.com/dphuang2)! - fixInheritMetadataFromSpec

### Patch Changes

- Updated dependencies [[`3756851e`](https://github.com/konfig-dev/konfig/commit/3756851e22a6adf25ad9612e71118a46ffc8af1d)]:
  - konfig-lib@1.7.0
  - konfig-openapi-spec@1.0.140
  - konfig-postman-to-openapi@3.0.118

## 1.10.6

### Patch Changes

- [#172](https://github.com/konfig-dev/konfig/pull/172) [`85d358e9`](https://github.com/konfig-dev/konfig/commit/85d358e96d94f60abbddcb8d5e4ae07101e4c625) Thanks [@eddiechayes](https://github.com/eddiechayes)! - fix doesnt run in ci mode if there is no specInputPath

## 1.10.5

### Patch Changes

- [#170](https://github.com/konfig-dev/konfig/pull/170) [`74ac81fc`](https://github.com/konfig-dev/konfig/commit/74ac81fc389e2fc1aac36e7871ab55982fb71148) Thanks [@eddiechayes](https://github.com/eddiechayes)! - add --ci flag to fix

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
