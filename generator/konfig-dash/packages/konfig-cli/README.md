# konfig-cli

CLI for dash.konfigthis.com

<!-- toc -->
* [konfig-cli](#konfig-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g konfig-cli
$ konfig COMMAND
running command...
$ konfig (--version)
konfig-cli/1.0.239 darwin-arm64 node-v16.19.0
$ konfig --help [COMMAND]
USAGE
  $ konfig COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`konfig bump`](#konfig-bump)
* [`konfig detect-breaking-change`](#konfig-detect-breaking-change)
* [`konfig diff`](#konfig-diff)
* [`konfig fix`](#konfig-fix)
* [`konfig generate`](#konfig-generate)
* [`konfig help [COMMAND]`](#konfig-help-command)
* [`konfig ignore`](#konfig-ignore)
* [`konfig init`](#konfig-init)
* [`konfig lint`](#konfig-lint)
* [`konfig lint-python`](#konfig-lint-python)
* [`konfig login`](#konfig-login)
* [`konfig logout`](#konfig-logout)
* [`konfig mock`](#konfig-mock)
* [`konfig p2o`](#konfig-p2o)
* [`konfig publish`](#konfig-publish)
* [`konfig pull`](#konfig-pull)
* [`konfig push`](#konfig-push)
* [`konfig revalidate-demos [FILE]`](#konfig-revalidate-demos-file)
* [`konfig slack-msg [FILE]`](#konfig-slack-msg-file)
* [`konfig test`](#konfig-test)

## `konfig bump`

Automatically bump semantic version of SDKs. If a breaking change is detected then the major version will be bumped. Otherwise a minor verison will be bumped.

```
USAGE
  $ konfig bump [-g <value>] [-p | -m | -M]

FLAGS
  -M, --major
  -g, --generator=<value>
  -m, --minor
  -p, --patch

DESCRIPTION
  Automatically bump semantic version of SDKs. If a breaking change is detected then the major version will be bumped.
  Otherwise a minor verison will be bumped.

EXAMPLES
  $ konfig bump
```

_See code: [dist/commands/bump.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/bump.ts)_

## `konfig detect-breaking-change`

Automatically finds base branch and detects if there is a breaking change.

```
USAGE
  $ konfig detect-breaking-change -m <value> -s <value>

FLAGS
  -m, --mainBranch=<value>  (required)
  -s, --specPath=<value>    (required)

DESCRIPTION
  Automatically finds base branch and detects if there is a breaking change.

EXAMPLES
  $ konfig detect-breaking-change
```

_See code: [dist/commands/detect-breaking-change.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/detect-breaking-change.ts)_

## `konfig diff`

Generate diff between OAS specs (https://github.com/opticdev/optic)

```
USAGE
  $ konfig diff

DESCRIPTION
  Generate diff between OAS specs (https://github.com/opticdev/optic)

EXAMPLES
  $ konfig diff
```

_See code: [dist/commands/diff.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/diff.ts)_

## `konfig fix`

Tool for fixing an OpenAPI Spec

```
USAGE
  $ konfig fix [-f] [-i <value>] [-s <value>] [-a] [-k <value>] [--skipMissingResponseDescriptionFix]
    [--skipListUsageSecurity] [-Y]

FLAGS
  -Y, --[no-]alwaysYes                      Always confirm with "Yes"("Y") when asked
  -a, --[no-]auto                           Automatically generate names if asked
  -f, --format                              Formats input specification
  -i, --specInputPath=<value>               Path to input OpenAPI Specification
  -k, --konfigDir=<value>                   Directory containing konfig.yaml
  -s, --spec=<value>                        Path to output OpenAPI Specification
  --[no-]skipListUsageSecurity              Ignores fixing list usage of security
  --[no-]skipMissingResponseDescriptionFix  Ignores fixing a missing description in response schema

DESCRIPTION
  Tool for fixing an OpenAPI Spec

EXAMPLES
  $ konfig fix
```

_See code: [dist/commands/fix.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/fix.ts)_

## `konfig generate`

Generate SDKs

```
USAGE
  $ konfig generate [-x] [-w <value>] [-i <value>] [-c <value>] [-s <value> | -o <value>] [-n] [-j <value>]
    [-p <value>] [-t <value>] [-C <value>] [-S <value>] [-P <value>] [-k <value>] [-g <value>] [-O <value>] [-f <value>]

FLAGS
  -C, --copyCSharpOutputDir=<value>      Path to C# output directory. Contents of existing directory will be deleted
                                         first.
  -O, --copyObjcOutputDir=<value>        Path to Objective-C output directory. Contents of existing directory will be
                                         deleted first.
  -P, --copyPHPOutputDir=<value>         Path to PHP output directory. Contents of existing directory will be deleted
                                         first.
  -S, --copySwiftOutputDir=<value>       Path to Swift output directory. Contents of existing directory will be deleted
                                         first.
  -c, --configDir=<value>                Path to configuration directory.
  -f, --generatorFilter=<value>          Comma separated list of generators to run (e.g. "-f
                                         python,java,go,csharp,objc")
  -g, --copyGoOutputDir=<value>          Path to Go output directory. Contents of existing directory will be deleted
                                         first.
  -i, --inputSpec=<value>                Path to OpenAPI Spec file.
  -j, --copyJavaOutputDir=<value>        Path to java output directory. Contents of existing directory will be deleted
                                         first.
  -k, --copyKotlinOutputDir=<value>      Path to Kotlin output directory. Contents of existing directory will be deleted
                                         first.
  -n, --doNotCopy                        Do not copy
  -o, --outputDir=<value>                Path to output directory. Deletes any existing directory at output location.
  -p, --copyPythonOutputDir=<value>      Path to python output directory. Contents of existing directory will be deleted
                                         first.
  -s, --outputSpec=<value>               Return the transformed specs to a specified directory.
  -t, --copyTypescriptOutputDir=<value>  Path to typescript output directory. Contents of existing directory will be
                                         deleted first.
  -w, --watch=<value>                    Watch any files under a regex pattern and re-run generation if any files are
                                         changed. Be default "konfig.yaml" is always added to the watch list. This is
                                         generally only useful for when you are actively customizing / testing an SDK.
  -x, --onlyCopyAdditionalGenerators     Only copy generated SDKs specified under 'additionalGenerators'

DESCRIPTION
  Generate SDKs

EXAMPLES
  $ konfig generate
```

_See code: [dist/commands/generate.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/generate.ts)_

## `konfig help [COMMAND]`

Display help for konfig.

```
USAGE
  $ konfig help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for konfig.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `konfig ignore`

Helper command for adding to .konfigignore

```
USAGE
  $ konfig ignore -g <value>

FLAGS
  -g, --glob=<value>  (required) Glob of paths to add to .konfigignore

DESCRIPTION
  Helper command for adding to .konfigignore

EXAMPLES
  $ konfig ignore
```

_See code: [dist/commands/ignore.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/ignore.ts)_

## `konfig init`

Initialize a Konfig repository

```
USAGE
  $ konfig init [-s] [-a] [-f] [-t <value>]

FLAGS
  -a, --githubAction
  -f, --overwrite
  -s, --settings
  -t, --target=<value>

DESCRIPTION
  Initialize a Konfig repository

EXAMPLES
  $ konfig init
```

_See code: [dist/commands/init.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/init.ts)_

## `konfig lint`

Lint your OpenAPI Spec

```
USAGE
  $ konfig lint

DESCRIPTION
  Lint your OpenAPI Spec

EXAMPLES
  $ konfig lint
```

_See code: [dist/commands/lint.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/lint.ts)_

## `konfig lint-python`

Lint your python SDK with ruff linter

```
USAGE
  $ konfig lint-python [-f] [-p <value>]

FLAGS
  -f, --fix           fix linting errors which ruff marks as fixable
  -p, --path=<value>  lint only specified path (file or directory) within python sdk directory. Glob patterns are
                      allowed.

DESCRIPTION
  Lint your python SDK with ruff linter

EXAMPLES
  $ konfig lint-python

  $ konfig lint-python -p test/

  $ konfig lint-python -f -p test/**/*test*.py

  $ konfig lint-python -f -p test/simple_test.py
```

_See code: [dist/commands/lint-python.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/lint-python.ts)_

## `konfig login`

Login to api.konfigthis.com

```
USAGE
  $ konfig login

DESCRIPTION
  Login to api.konfigthis.com

EXAMPLES
  $ konfig login
```

_See code: [dist/commands/login.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/login.ts)_

## `konfig logout`

Logout of Konfig

```
USAGE
  $ konfig logout

DESCRIPTION
  Logout of Konfig

EXAMPLES
  $ konfig logout
```

_See code: [dist/commands/logout.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/logout.ts)_

## `konfig mock`

Start a mock server from your OpenAPI Spec

```
USAGE
  $ konfig mock

DESCRIPTION
  Start a mock server from your OpenAPI Spec

EXAMPLES
  $ konfig mock
```

_See code: [dist/commands/mock.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/mock.ts)_

## `konfig p2o`

Convert Postman Collection to OpenAPI Spec

```
USAGE
  $ konfig p2o -p <value> -o <value>

FLAGS
  -o, --o=<value>  (required) Path to output OpenAPI Specification
  -p, --p=<value>  (required) Path to Postman Collection

DESCRIPTION
  Convert Postman Collection to OpenAPI Spec

EXAMPLES
  $ konfig p2o
```

_See code: [dist/commands/p2o.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/p2o.ts)_

## `konfig publish`

Publish SDKs

```
USAGE
  $ konfig publish [-d] [-g <value> | -a] [-t] [--skipRemoteCheck] [--skipTests] [-s]

FLAGS
  -a, --all                Specify all generators
  -d, --debug
  -g, --generator=<value>
  -s, --skipTag            Skip pushing git tag
  -t, --test
  --skipRemoteCheck        Do not check that remote is in sync
  --skipTests              Do not run tests before publishing

DESCRIPTION
  Publish SDKs

EXAMPLES
  $ konfig publish
```

_See code: [dist/commands/publish.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/publish.ts)_

## `konfig pull`

describe the command here

```
USAGE
  $ konfig pull

DESCRIPTION
  describe the command here

EXAMPLES
  $ konfig pull
```

_See code: [dist/commands/pull.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/pull.ts)_

## `konfig push`

Pushes an OpenAPI Spec to an SDK repository

```
USAGE
  $ konfig push -o <value> -r <value> -s <value> [-x <value>]

FLAGS
  -o, --owner=<value>      (required) GitHub Owner of SDK Repository
  -r, --repo=<value>       (required) Name of GitHub SDK Repository
  -s, --spec=<value>       (required) Path to OpenAPI Specification file
  -x, --directory=<value>  Path from root of Git repository to directory containing konfig.yaml. This is useful if your
                           have multiple SDK repositories (directories containing a konfig.yaml file).

DESCRIPTION
  Pushes an OpenAPI Spec to an SDK repository

EXAMPLES
  $ konfig push
```

_See code: [dist/commands/push.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/push.ts)_

## `konfig revalidate-demos [FILE]`

Revalidates demos for a particular organization and portal ID. This is required to ensure that the demo portal renders the latest demos from the demo repository.

```
USAGE
  $ konfig revalidate-demos [FILE] -o <value> -p <value>

FLAGS
  -o, --organizationId=<value>  (required) Organization ID
  -p, --portalId=<value>        (required) Portal ID

DESCRIPTION
  Revalidates demos for a particular organization and portal ID. This is required to ensure that the demo portal renders
  the latest demos from the demo repository.

EXAMPLES
  $ konfig revalidate-demos
```

_See code: [dist/commands/revalidate-demos.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/revalidate-demos.ts)_

## `konfig slack-msg [FILE]`

Generates a slack message

```
USAGE
  $ konfig slack-msg [FILE] [-g <value> | -a]

FLAGS
  -a, --all                Specify all generators
  -g, --generator=<value>

DESCRIPTION
  Generates a slack message

EXAMPLES
  $ konfig slack-msg
```

_See code: [dist/commands/slack-msg.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/slack-msg.ts)_

## `konfig test`

Execute test script in every SDK directory

```
USAGE
  $ konfig test [-f <value>] [-s]

FLAGS
  -f, --filter=<value>  Comma separated list of SDKs to test (e.g. "-f python,java,go,csharp,objc")
  -s, --sequence        Run tests in sequence

DESCRIPTION
  Execute test script in every SDK directory

EXAMPLES
  $ konfig test
```

_See code: [dist/commands/test.ts](https://github.com/konfig-dev/konfig-cli/blob/v1.0.239/dist/commands/test.ts)_
<!-- commandsstop -->
