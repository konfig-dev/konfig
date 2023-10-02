import { HomeDirParams } from './ensure-config-setup'
import { getApiUrl } from './get-api-url'
import { removeTrailingSlash } from './remove-trailing-slash'
import { URL } from 'url'

export function getHostForGenerateApi({
  apiUrl,
  homeParams,
}: {
  apiUrl?: URL
  homeParams: HomeDirParams
}) {
  const apiUrlOverride = process.env.KONFIG_API_URL
  const finalApiUrl =
    apiUrlOverride !== undefined ? new URL(apiUrlOverride) : apiUrl
  const host = finalApiUrl
    ? removeTrailingSlash(finalApiUrl.href)
    : getApiUrl(homeParams)
  return host
}
