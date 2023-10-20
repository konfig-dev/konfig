import { OpenAPIV3_XDocument } from 'konfig-lib'

export function fixTrailingSlashes({
  spec,
}: {
  spec: OpenAPIV3_XDocument
}): number {
  let numberOfTrailingSlashesFixed = 0

  // Paths
  if (spec.paths !== undefined) {
    for (const path of Object.keys(spec.paths)) {
      if (path === '/' || !path.endsWith('/')) continue
      spec.paths[path.substring(0, path.length - 1)] = spec.paths[path]
      delete spec.paths[path]
      numberOfTrailingSlashesFixed++
    }
  }

  // Servers
  if (spec.servers !== undefined) {
    for (const server of spec.servers) {
      if (!server.url.endsWith('/')) continue
      server.url = server.url.substring(0, server.url.length - 1)
      numberOfTrailingSlashesFixed++
    }
  }
  return numberOfTrailingSlashesFixed
}
