import { SecurityScheme } from './get-security-schemes'

export const getSecurityParameterName = ({
  security,
}: {
  security: SecurityScheme
}) => {
  if (security.type === 'oauth2') return 'Authorization'
  if (security.type === 'openIdConnect') return 'Authorization'
  if (security.type === 'basic') return 'Authorization'
  if (security.type === 'http') return 'Authorization'
  if (security.type === 'apiKey') return security.name
  throw Error('Not Implemented')
}
