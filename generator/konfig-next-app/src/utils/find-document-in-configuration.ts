import { DocumentationConfig } from 'konfig-lib'

export function findDocumentInConfiguration({
  docId,
  docConfig,
}: {
  docId: string
  docConfig: DocumentationConfig
}) {
  const sections = docConfig.sidebar.sections
  for (const section of sections) {
    for (const link of section.links) {
      if (link.type === 'link' && link.id === docId) {
        return link
      } else if (link.type === 'group') {
        for (const innerLink of link.links) {
          if (innerLink.id === docId) return innerLink
        }
      }
    }
  }
  throw Error('Could not find document in configuration')
}
