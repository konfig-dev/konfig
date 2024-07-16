export function generateHtmlTitle({
  siteTitle,
  pageTitle,
}: {
  siteTitle: string | null
  pageTitle: string
}) {
  if (siteTitle === null) return pageTitle
  return `${pageTitle} / ${siteTitle}`
}
