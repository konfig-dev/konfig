import { SecurityScheme } from './get-security-schemes'
import { z } from '../zod'

export const securitySchemeInSchema = z.enum(['query', 'header', 'cookie'])
export type SecuritySchemeIn = z.infer<typeof securitySchemeInSchema>
export function getSecurityIn({
  security,
}: {
  security: SecurityScheme
}): SecuritySchemeIn {
  if (
    security.type === 'basic' ||
    security.type === 'http' ||
    security.type === 'openIdConnect' ||
    security.type === 'oauth2'
  )
    return 'header'
  return securitySchemeInSchema.parse(security.in.toLowerCase())
}
