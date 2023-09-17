import { generateParameterFromBodyParameter } from './generate-parameter-from-body-property'
import { ReferencePageProps } from './generate-props-for-reference-page'

export function generateParametersFromRequestBodyProperties({
  requestBodyProperties,
  requestBodyRequired,
}: Pick<ReferencePageProps, 'requestBodyProperties' | 'requestBodyRequired'>) {
  return Object.entries(requestBodyProperties ?? {}).map(
    ([propertyName, property]) =>
      generateParameterFromBodyParameter({
        name: propertyName,
        schema: property,
        requestBodyRequired,
      })
  )
}
