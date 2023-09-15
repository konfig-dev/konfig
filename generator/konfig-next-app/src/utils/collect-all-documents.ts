import { DocumentationConfig, Link } from 'konfig-lib'

export function collectAllDocuments({
  docConfig,
}: {
  docConfig: DocumentationConfig
}): Link[] {
  const links: Link[] = []
  const sections = docConfig.sidebar.sections
  for (const section of sections) {
    for (const link of section.links) {
      if (link.type === 'link') links.push(link)
      else if (link.type === 'group') {
        for (const innerLink of link.links) {
          links.push(innerLink)
        }
      }
    }
  }
  return links
}
