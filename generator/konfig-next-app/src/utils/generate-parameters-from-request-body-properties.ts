import { StaticProps } from '@/pages/[org]/[portal]/reference/[tag]/[operationId]'
import { generateParameterFromBodyParameter } from './generate-parameter-from-body-property'

export function generateParametersFromRequestBodyProperties({
  requestBodyProperties,
  requestBodyRequired,
}: Pick<StaticProps, 'requestBodyProperties' | 'requestBodyRequired'>) {
  return Object.entries(requestBodyProperties ?? {}).map(
    ([propertyName, property]) =>
      generateParameterFromBodyParameter({
        name: propertyName,
        schema: property,
        requestBodyRequired,
      })
  )
}
