---
'konfig-spectral-ruleset': minor
'konfig-cli': minor
---

- Fix readmeHeader configuration causing ENOENT error when no SDK has been
  generated before
- Fix duplicate-sdk-method-name throwing error if there is a match between two
  methods in different tags. This shouldn't throw an error since they should be
  separated by namespaces anyways
