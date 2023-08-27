import { Parameter } from '@/components/OperationParameter'
import { JSONValue } from './json-value'
import { generateParameterInputName } from '@/components/ParameterInput'
import { generateParameterFromBodyParameter } from './generate-parameter-from-body-property'
import { generateSecurityFormInputName } from '@/components/OperationSecuritySchemeForm'
import type { UseFormInput } from '@mantine/form/lib/types'
import { isNotEmpty } from '@mantine/form'
import { StaticProps } from '@/pages/[org]/[portal]/reference/[tag]/[operationId]'

export type FormDataType = Record<string, JSONValue>
type FormValues = UseFormInput<FormDataType, (values: unknown) => unknown>

export function generateInitialFormValues({
  parameters,
  requestBodyProperties,
  securitySchemes,
  requestBodyRequired,
}: {
  parameters: Parameter[]
  requestBodyProperties?: StaticProps['requestBodyProperties']
  securitySchemes: StaticProps['securitySchemes']
  requestBodyRequired: StaticProps['requestBodyRequired']
}): FormValues {
  const initialValues: FormValues['initialValues'] = {}
  const validate: FormValues['validate'] = {}
  for (const parameter of parameters) {
    const formName = generateParameterInputName(parameter)
    validate[formName] = parameter.required
      ? isNotEmpty(`${parameter.name} is required`)
      : undefined
    initialValues[formName] = ''
  }
  if (requestBodyProperties != null) {
    for (const [name, schema] of Object.entries(requestBodyProperties)) {
      const parameter = generateParameterFromBodyParameter({
        name,
        schema,
        requestBodyRequired,
      })
      const formName = generateParameterInputName(parameter)
      validate[formName] = parameter.required
        ? isNotEmpty(`${name} is required`)
        : undefined
      initialValues[formName] = ''
    }
  }
  if (securitySchemes != null) {
    for (const [name] of Object.entries(securitySchemes)) {
      const formName = generateSecurityFormInputName({ name })
      initialValues[formName] = ''
    }
  }
  return { initialValues, validate }
}
