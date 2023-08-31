import { Parameter } from '@/components/OperationParameter'
import type { UseFormInput } from '@mantine/form/lib/types'
import { isNotEmpty } from '@mantine/form'
import { StaticProps } from '@/pages/[org]/[portal]/reference/[tag]/[operationId]'
import { getInputPlaceholder } from '@/components/OperationSecuritySchemeForm'
import { deepmerge } from './deepmerge'

export const FORM_VALUES_LOCAL_STORAGE_KEY = ({
  owner,
  repo,
}: {
  owner: string
  repo: string
}) => `form-values-${owner}-${repo}`
export const PARAMETER_FORM_NAME_PREFIX = `parameters` as const
export const SECURITY_FORM_NAME_PREFIX = `security` as const
export const SECURITY_FORM_VALUE_SUFFIX = 'value' as const
export const SECURITY_TYPE_PROPERTY = 'type'
export const API_KEY_IN_PROPERTY = 'in'
export const API_KEY_NAME_PROPERTY = 'key'
export const API_KEY_VALUE_PROPERTY = 'value'
export const CLIENT_STATE_VALUE_PROPERTY = 'value'
export const CLIENT_STATE_NAME_PROPERTY = 'name'

export type FormInputValues = {
  [property: string]:
    | string
    | FormInputValues
    | string[]
    | number[]
    | Array<FormInputValues>
}

export type FormDataType = {
  [PARAMETER_FORM_NAME_PREFIX]: FormInputValues
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
  hideSecurity,
  doNotRestoreFromStorage,
  owner,
  repo,
}: {
  parameters: Parameter[]
  securitySchemes: StaticProps['securitySchemes']
  clientState: string[]
  hideSecurity: { name: string }[]
  doNotRestoreFromStorage?: boolean
  owner: string
  repo: string
}): FormValues {
  let initialValues: FormValues['initialValues'] = {
    parameters: {},
    security: {},
  }
  let validate: FormValues['validate'] = {}
  for (const parameter of parameters) {
    if (parameter.required) {
      const validation: FormValues['validate'] = {
        parameters: {
          [parameter.name]: (value) => {
            return isNotEmpty(`${parameter.name} is required`)(value)
          },
        },
      }
      validate = deepmerge(validation, validate)
    }
    initialValues.parameters[parameter.name] = ''
  }
  if (securitySchemes != null) {
    for (const [name, securityScheme] of Object.entries(securitySchemes)) {
      if (hideSecurity.some((scheme) => scheme.name === name)) {
        continue
      }
      if (securityScheme.type === 'apiKey') {
        initialValues.security[name] = {
          [SECURITY_TYPE_PROPERTY]: 'apiKey',
          [API_KEY_IN_PROPERTY]: securityScheme.in,
          [API_KEY_NAME_PROPERTY]: securityScheme.name,
          [API_KEY_VALUE_PROPERTY]: '',
        }
        const validation: FormValues['validate'] = {
          [SECURITY_FORM_NAME_PREFIX]: {
            [name]: {
              value: (value) => {
                return isNotEmpty(
                  `${getInputPlaceholder({
                    scheme: securityScheme,
                  })} is required`
                )(value)
              },
            },
          },
        }
        validate = deepmerge(validation, validate)
      }
    }
    for (const state of clientState) {
      const validation: FormValues['validate'] = {
        [SECURITY_FORM_NAME_PREFIX]: {
          [state]: {
            value: (value) => {
              return isNotEmpty(`${state} is required`)(value)
            },
          },
        },
      }
      validate = deepmerge(validation, validate)
      initialValues.security[state] = {
        [SECURITY_TYPE_PROPERTY]: 'clientState',
        [CLIENT_STATE_NAME_PROPERTY]: state,
        [CLIENT_STATE_VALUE_PROPERTY]: '',
      }
    }
  }
  if (typeof window !== 'undefined' && doNotRestoreFromStorage !== true) {
    const storedValue = window.localStorage.getItem(
      FORM_VALUES_LOCAL_STORAGE_KEY({ owner, repo })
    )
    if (storedValue) {
      try {
        initialValues = deepmerge(initialValues, JSON.parse(storedValue))
      } catch (e) {
        console.log('Failed to parse stored value')
      }
    }
  }
  return { initialValues, validate }
}
