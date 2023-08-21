import { NavbarDataItem } from '@/pages/[org]/[portal]/reference'
import type { Spec, HttpMethods } from 'konfig-lib'

/**
 * Generates the navbar links as NavbarDataItem[]. Each group is determined by the tag of an operation.
 * @param spec @type Spec["spec"]
 * @returns NavbarDataItem[]
 */
export function generateNavbarLinks({
  spec,
  owner,
  repo,
}: {
  spec: Spec['spec']
  owner: string
  repo: string
}): NavbarDataItem[] {
  const navbarLinks: NavbarDataItem[] = []
  const tags = spec.tags
  const paths = spec.paths
  if (paths === undefined) return []
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
          navbarLink.links.push({
            label: operation.summary ?? path,
            link: `/${owner}/${repo}/reference/${operation.operationId}`,
          })
        }
      })
    })
    navbarLinks.push(navbarLink)
  })

  // filter navbarLinks that have no links
  return navbarLinks.filter((navbarLink) => navbarLink.links.length > 0)
}
