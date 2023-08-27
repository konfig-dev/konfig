import { Parameter } from '@/components/OperationParameter'
import type { UseFormInput } from '@mantine/form/lib/types'
import { isNotEmpty } from '@mantine/form'
import { StaticProps } from '@/pages/[org]/[portal]/reference/[tag]/[operationId]'
import deepmerge from 'deepmerge'
import { SchemaObject } from 'konfig-lib'

export const PARAMETER_FORM_NAME_PREFIX = `parameters` as const
export const SECURITY_FORM_NAME_PREFIX = `security` as const
export const SECURITY_FORM_VALUE_SUFFIX = 'value' as const
export const SECURITY_TYPE_PROPERTY = 'type'
export const API_KEY_IN_PROPERTY = 'in'
export const API_KEY_NAME_PROPERTY = 'key'
export const API_KEY_VALUE_PROPERTY = 'value'
export const PARAMETER_IN_PROPERTY = 'in'
export const PARAMETER_VALUE_PROPERTY = 'value'
export const CLIENT_STATE_VALUE_PROPERTY = 'value'
export const CLIENT_STATE_NAME_PROPERTY = 'name'
// descendent of https://swagger.io/specification/
export type FormDataType = {
  [PARAMETER_FORM_NAME_PREFIX]: Record<
    string,
    {
      [PARAMETER_IN_PROPERTY]: string
      [PARAMETER_VALUE_PROPERTY]: string
      schema: SchemaObject
    }
  >
  [SECURITY_FORM_NAME_PREFIX]: Record<
    string,
    | {
        [SECURITY_TYPE_PROPERTY]: 'apiKey'
        [API_KEY_IN_PROPERTY]: string
        [API_KEY_NAME_PROPERTY]: string
        [API_KEY_VALUE_PROPERTY]: string
      }
    | {
        [SECURITY_TYPE_PROPERTY]: 'clientState'
        [CLIENT_STATE_NAME_PROPERTY]: string
        [CLIENT_STATE_VALUE_PROPERTY]: string
      }
  >
}
type FormValues = UseFormInput<
  FormDataType,
  (values: FormDataType) => FormDataType
>

export function generateInitialFormValues({
  parameters,
  securitySchemes,
  clientState,
}: {
  parameters: Parameter[]
  securitySchemes: StaticProps['securitySchemes']
  clientState: string[]
}): FormValues {
  const initialValues: FormValues['initialValues'] = {
    parameters: {},
    security: {},
  }
  const validate: FormValues['validate'] = {}
  for (const parameter of parameters) {
    if (parameter.required) {
      const validation: FormValues['validate'] = {
        [PARAMETER_FORM_NAME_PREFIX]: {
          [parameter.name]: ({ value }) => {
            return isNotEmpty(`${parameter.name} is required`)(value)
          },
        },
      }
      deepmerge(validate, validation)
    }
    initialValues.parameters[parameter.name] = {
      [PARAMETER_IN_PROPERTY]: parameter.in,
      [PARAMETER_VALUE_PROPERTY]: '',
      schema: parameter.schema,
    }
  }
  if (securitySchemes != null) {
    for (const [name, securityScheme] of Object.entries(securitySchemes)) {
      if (securityScheme.type === 'apiKey') {
        initialValues.security[name] = {
          [SECURITY_TYPE_PROPERTY]: 'apiKey',
          [API_KEY_IN_PROPERTY]: securityScheme.in,
          [API_KEY_NAME_PROPERTY]: securityScheme.name,
          [API_KEY_VALUE_PROPERTY]: '',
        }
      }
    }
    for (const state of clientState) {
      initialValues.security[state] = {
        [SECURITY_TYPE_PROPERTY]: 'clientState',
        [CLIENT_STATE_NAME_PROPERTY]: state,
        [CLIENT_STATE_VALUE_PROPERTY]: '',
      }
    }
  }
  return { initialValues, validate }
}
