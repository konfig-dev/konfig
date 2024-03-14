import { Spec, recurseObject } from 'konfig-lib'

export async function fixBrokenMarkdownLinks({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfFixedMarkdownLinks = 0
  recurseObject(spec.spec, ({ value: schema }) => {
    if (schema === null || schema === undefined) return
    if (schema.description === undefined || schema.description === null) return
    if (typeof schema.description !== 'string') return
    const description = schema.description as string
    const regex = /\[([^\]]+)\]\s*\(([^)]+)\)/g;
    const fixedDescription = description.replaceAll(regex, (_, text, url) => `[${text.trim()}](${url.trim()})`)
    if (fixedDescription !== description) {
      numberOfFixedMarkdownLinks++
      schema.description = fixedDescription
    }
  });
  return numberOfFixedMarkdownLinks
}