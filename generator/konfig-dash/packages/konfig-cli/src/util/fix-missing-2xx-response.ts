import { getOperations, Spec } from 'konfig-lib'
import { isMissing2xxResponse } from 'konfig-lib/dist/util/is-missing-2xx-response'

export async function fixMissing2xxResponse({
  spec,
}: {
  spec: Spec['spec']
}): Promise<number> {
  let numberOfMissing200ResponsesAdded = 0
  const operations = getOperations({ spec })

  for (const { operation } of operations) {
    const responseCodes = Object.keys(operation.responses)
    if (!isMissing2xxResponse({ responseCodes })) continue

    /**
     * For some reason, operation.responses in some cases
     * Specifically when adding vimeo API during pSEO project, this was the case so we need to handle it
     */
    if (Array.isArray(operation.responses)) operation.responses = {}

    if (responseCodes.length !== 1) {
      operation.responses['200'] = { description: 'OK' }
    } else {
      operation.responses['default'] = operation.responses[responseCodes[0]]
      delete operation.responses[responseCodes[0]]
    }
    numberOfMissing200ResponsesAdded++
  }

  return numberOfMissing200ResponsesAdded
}
