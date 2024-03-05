export type Demo = {
  id: string
  name: string
  markdown: string
  showCode: boolean | null
  metaDescription: string
}
export type Portal = {
  id: string
  portalName: string
  demos: Demo[]
}
export type Organization = {
  id: string
  organizationName: string
  portals: Portal[]
}
