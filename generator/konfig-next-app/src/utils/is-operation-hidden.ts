import { KonfigYamlType } from 'konfig-lib'

export function isOperationHidden({
  path,
  method,
  tag,
  konfigYaml,
}: {
  path: string
  method: string
  tag: string
  konfigYaml: KonfigYamlType
}) {
  const hideOperations = konfigYaml.portal?.hideOperations
  if (hideOperations !== undefined) {
    if (path in hideOperations) {
      const methods = hideOperations[path]
      if (methods === undefined) return false
      if (method in methods) return true
    }
  }
  if (konfigYaml.filterTags !== undefined) {
    if (konfigYaml.filterTags.includes(tag)) return true
  }
  return false
}
