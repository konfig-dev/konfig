import { NavbarDataItem } from '@/components/LinksGroup'
import type { Spec, HttpMethods, KonfigYamlType } from 'konfig-lib'

/**
 * Generates the navbar links as NavbarDataItem[]. Each group is determined by the tag of an operation.
 * @param spec @type Spec["spec"]
 * @returns NavbarDataItem[]
 */
export function generateNavbarLinks({
  spec,
  owner,
  repo,
  konfigYaml,
  omitOwnerAndRepo,
}: {
  spec: Spec['spec']
  owner: string
  repo: string
  konfigYaml: KonfigYamlType
  omitOwnerAndRepo?: boolean
}): NavbarDataItem[] {
  const navbarLinks: NavbarDataItem[] = []
  let tags = spec.tags
  const paths = spec.paths
  if (paths === undefined) return []
  // if tags is undefined then iterate through all operations and collect all unique tags
  if (
    tags === undefined ||
    (typeof tags === 'string' && tags === 'undefined')
  ) {
    const allTags = new Set<string>()
    Object.keys(paths).forEach((path) => {
      const pathItem = paths[path]
      if (pathItem === undefined) return
      Object.keys(pathItem).forEach((method) => {
        if (pathItem === undefined) return
        const operation = pathItem[method as HttpMethods]
        if (operation?.tags) {
          operation.tags.forEach((tag) => {
            allTags.add(tag)
          })
        }
      })
    })
    tags = Array.from(allTags).map((tag) => ({ name: tag }))
  }

  tags?.forEach((tag) => {
    const navbarLink: NavbarDataItem = {
      label: tag.name,
      links: [],
    }
    Object.keys(paths).forEach((path) => {
      const pathItem = paths[path]
      if (pathItem === undefined) return
      Object.keys(pathItem).forEach((method) => {
        if (pathItem === undefined) return
        const operation = pathItem[method as HttpMethods]
        if (operation?.tags?.includes(tag.name)) {
          const suffix = `reference/${operation.tags}/${operation.operationId}`
          const link = omitOwnerAndRepo
            ? `/${suffix}`
            : `/${owner}/${repo}/${suffix}`
          navbarLink.links.push({
            label: operation.summary ?? path,
            metadata: {
              operationId: operation.operationId,
            },
            link,
            httpMethod: method as HttpMethods,
          })
        }
      })
    })
    navbarLinks.push(navbarLink)
  })

  // filter navbarLinks that have no links
  const hasLinks = navbarLinks.filter(
    (navbarLink) => navbarLink.links.length > 0
  )
  // filter navbarLinks that are specified in the konfig.yaml#filterTags
  const filterTags = konfigYaml.filterTags ?? []
  const filteredNavbarLinks = hasLinks.filter(
    (navbarLink) => !filterTags.includes(navbarLink.label)
  )
  return filteredNavbarLinks
}
