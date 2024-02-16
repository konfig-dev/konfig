# Quickly Fix Lint Errors for your OpenAPI Specification

To generate your first set of high quality SDKs you need to pass [Konfig's
Linter](/docs/tutorials/setup-linting/). But manually updating your OAS is tedious. Use [konfig
fix](https://github.com/konfig-dev/konfig-cli#konfig-fix) to expedite the process. Today `konfig fix` will:

- Add [missing global tags](https://meta.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules#operation-tag-defined)
- Add [missing OpenAPI object info description](https://meta.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules#info-description)
- Add [missing response descriptions](https://meta.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules#oas3-schema)
- Add [missing security schemes](docs/lint-rules#adv-security-schemes-defined)
- Remove [disallowed header names](docs/lint-rules#disallowed-header-names-response)
- Define [OpenAPI schemas request/response bodies](docs/lint-rules#components-schemas-defined-oas3)
- Detect possible [misuse of security requirements](docs/lint-rules#list-usage-of-security)
- Ensure [tags follow proper naming convention](docs/lint-rules#tag-naming-convention)
- Fix [empty request body content](docs/lint-rules#empty-request-body-content)
- Fix [missing 2xx response](docs/lint-rules#missing-2xx-response)
- Fix [object type schemas with no properties](docs/lint-rules#object-with-no-properties)
- Fix [unstructured request bodies](docs/lint-rules#structured-request-body)
- Fix [empty response body schema](docs/lint-rules#empty-response-body-schema)
- Fix [parameters that should be security requirements](docs/lint-rules#use-security-instead)
- Fix [paths that end with a slash](https://meta.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules#path-keys-no-trailing-slash)
- Fix [redundant security requirements and request parameters](docs/lint-rules#redundant-security-and-parameter)
- Fix invalid examples in [media objects](https://meta.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules#oas3-valid-media-example) and [schemas](https://meta.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules#oas3-valid-schema-example)
- Help you quickly create or update operation IDs following [best convention](/docs/tutorials/naming-operation-ids/)
- Ignores [potentially incorrect data types if confirmed](docs/lint-rules#potential-incorrect-type)

## How to use

Run `konfig fix -s <PATH_TO_SPEC>`.

```bash
❯ konfig fix -s api.yaml
┌────── Summary ───────┐
│                      │
│   Driver's License   │
│                      │
└──────────────────────┘
┌─────── Path - Method ───────┐
│                             │
│   /api/v1/gh/kyc/dl - GET   │
│                             │
└─────────────────────────────┘
┌── Summary ───┐
│              │
│   Passport   │
│              │
└──────────────┘
┌────────── Path - Method ──────────┐
│                                   │
│   /api/v1/gh/kyc/passport - GET   │
│                                   │
└───────────────────────────────────┘
# You will be prompted to assign operations IDs if they are missing or not following best practice
┌ Fixed 59 Issues ────────────────────────────────────────────┐
│                                                             │
│   Updated 34 operation IDs                                  │
│   Renamed 0 improperly named tags                           │
│   Removed 0 disallowed headers removed                      │
│   Added 0 potential-incorrect-type ignore rule              │
│   Added 1 object-with-no-properties ignore rule             │
│   Added 0 missing info description                          │
│   Added 0 missing response descriptions                     │
│   Added 9 missing tags                                      │
│   Added 1 empty response body schemas                       │
│   Added 14 named schemas                                    │
│   Added 0 missing 2xx responses                             │
│   Fixed 0 duplicate tag names fixed                         │
│   Fixed 0 unstructured request bodies                       │
│   Fixed 0 objects with no properties                        │
│   Fixed 0 redundant "example" & "examples" fields           │
│   Fixed 0 examples with invalid schemas                     │
│   Fixed 0 parameters that should be security requirements   │
│   Fixed 0 list usages of security                           │
│   Removed 0 trailing slashes                                │
│   Removed 0 redundant security requirement and parameters   │
│   Removed 0 parameters replace with security requirement    │
│   Removed 0 empty request bodies                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Saving Progress

`konfig fix` will automatically save progress upon any manual input so your work
can be resumed if interrupted. Optionally pass the `-Y` flag to automatically
confirm using saved progress.

## Successful Output

An OAS with no fixes will produce the following output:

```bash
❯ konfig fix -s api.yaml
┌ Fixed 0 Issues ─────────────────────────────────────────────┐
│                                                             │
│   Updated 0 operation IDs                                   │
│   Renamed 0 improperly named tags                           │
│   Removed 0 disallowed headers removed                      │
│   Added 0 potential-incorrect-type ignore rule              │
│   Added 0 object-with-no-properties ignore rule             │
│   Added 0 missing info description                          │
│   Added 0 missing response descriptions                     │
│   Added 0 missing tags                                      │
│   Added 0 empty response body schemas                       │
│   Added 0 named schemas                                     │
│   Added 0 missing 2xx responses                             │
│   Fixed 0 duplicate tag names fixed                         │
│   Fixed 0 unstructured request bodies                       │
│   Fixed 0 objects with no properties                        │
│   Fixed 0 redundant "example" & "examples" fields           │
│   Fixed 0 examples with invalid schemas                     │
│   Fixed 0 parameters that should be security requirements   │
│   Fixed 0 list usages of security                           │
│   Removed 0 trailing slashes                                │
│   Removed 0 redundant security requirement and parameters   │
│   Removed 0 parameters replace with security requirement    │
│   Removed 0 empty request bodies                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```
