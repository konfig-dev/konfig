import { KonfigYamlType } from 'konfig-lib'

export function findFirstDocumentInConfiguration({
  docConfig,
}: {
  docConfig: NonNullable<NonNullable<KonfigYamlType['portal']>['documentation']>
}) {
  const sections = docConfig.sidebar.sections
  for (const section of sections) {
    for (const link of section.links) {
      if (link.type === 'link') return link
      else if (link.type === 'group') {
        for (const innerLink of link.links) {
          return innerLink
        }
      }
    }
  }
  throw Error('Could not find document in configuration')
}
