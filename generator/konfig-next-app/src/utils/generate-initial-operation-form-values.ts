import { Parameter } from '@/components/OperationParameter'
import type { UseFormInput } from '@mantine/form/lib/types'
import { getInputPlaceholder } from '@/components/OperationSecuritySchemeForm'
import { deepmerge } from './deepmerge'
import { isNotEmpty } from './is-not-empty'
import localforage from 'localforage'
import { ReferencePageProps } from './generate-props-for-reference-page'
import { recursivelyRemoveEmptyValues } from './recursively-remove-empty-values'
import { generatePropertiesForSchemaObject } from './generate-properties-for-schema-object'
import { validateValueForParameter } from './validate-value-for-parameter'

export const FORM_VALUES_LOCAL_STORAGE_KEY = ({
  owner,
  repo,
}: {
  owner: string
  repo: string
}) => `form-values-${owner}-${repo}`
export const PARAMETER_FORM_NAME_PREFIX = `parameters` as const
export const REQUEST_BODY_FORM_NAME_PREFIX = `requestBody` as const
export const SECURITY_FORM_NAME_PREFIX = `security` as const
export const SECURITY_FORM_VALUE_SUFFIX = 'value' as const
export const SECURITY_TYPE_PROPERTY = 'type' as const
export const API_KEY_IN_PROPERTY = 'in' as const
export const API_KEY_NAME_PROPERTY = 'key' as const
export const OAUTH2_CLIENT_ID_PROPERTY = 'clientId' as const
export const OAUTH2_CLIENT_SECRET_PROPERTY = 'clientSecret' as const
export const API_KEY_VALUE_PROPERTY = 'value' as const
export const CLIENT_STATE_VALUE_PROPERTY = 'value' as const
export const CLIENT_STATE_NAME_PROPERTY = 'name' as const
export const BEARER_VALUE_PROPERTY = 'value' as const

export type FormInputValue =
  | string
  | number
  | File
  | boolean
  | FormInputValues
  | string[]
  | number[]
  | FormInputValues[]
export type FormInputValues = {
  [parameter: string]: FormInputValue
}

export type FormDataType = {
  [PARAMETER_FORM_NAME_PREFIX]: FormInputValues

  /**
   * For unnamed request body parameters like scalar (string or number) / array type schema
   * request body parameters, we use the key `requestBody` to store the value. We do this because
   * there is no name for the parameter, so we can't use the parameter name as the key for the
   * PARAMETER_FORM_NAME_PREFIX object.
   */
  [REQUEST_BODY_FORM_NAME_PREFIX]: FormInputValue

  [SECURITY_FORM_NAME_PREFIX]: Record<
    string,
    | {
        [SECURITY_TYPE_PROPERTY]: 'oauth2-client-credentials'
        [OAUTH2_CLIENT_ID_PROPERTY]: string
        [OAUTH2_CLIENT_SECRET_PROPERTY]: string
      }
    | {
        [SECURITY_TYPE_PROPERTY]: 'apiKey'
        [API_KEY_IN_PROPERTY]: string
        [API_KEY_NAME_PROPERTY]: string
        [API_KEY_VALUE_PROPERTY]: string
      }
    | {
        [SECURITY_TYPE_PROPERTY]: 'bearer'
        [BEARER_VALUE_PROPERTY]: string
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

type GenerateInitialFormValuesInput = {
  parameters: Parameter[]
  requestBodyParameter?: Parameter | null
  securitySchemes: ReferencePageProps['securitySchemes']
  clientState: string[]
  hideSecurity: { name: string }[]
  owner: string
  repo: string
}

export function generateInitialFormValues(
  input: Omit<GenerateInitialFormValuesInput, 'owner' | 'repo'>
): FormValues {
  return generateFormInputValues(input)
}

export async function generateInitialFormValuesWithStorage(
  input: GenerateInitialFormValuesInput
): Promise<FormValues> {
  let { initialValues, validate } = generateFormInputValues(input)
  const { owner, repo } = input
  if (typeof window !== 'undefined') {
    const storedValue = await localforage.getItem(
      FORM_VALUES_LOCAL_STORAGE_KEY({ owner, repo })
    )
    const pruned =
      storedValue !== null && storedValue !== undefined
        ? recursivelyRemoveEmptyValues(storedValue as any)
        : storedValue
    if (storedValue) {
      try {
        initialValues = deepmerge(initialValues, pruned as any)
      } catch (e) {
        console.log('Failed to parse stored value')
      }
    }
  }
  return { initialValues, validate }
}

export type GenerateFormInputValuesInput = Pick<
  GenerateInitialFormValuesInput,
  | 'parameters'
  | 'securitySchemes'
  | 'hideSecurity'
  | 'clientState'
  | 'requestBodyParameter'
>
/**
 * See https://v6.mantine.dev/form/use-form/
 */
function generateFormInputValues({
  parameters,
  securitySchemes,
  hideSecurity,
  clientState,
  requestBodyParameter,
}: GenerateFormInputValuesInput): Required<
  Pick<FormValues, 'initialValues' | 'validate'>
> {
  let initialValues: FormValues['initialValues'] = {
    parameters: {},
    security: {},
    requestBody: '',
  }
  let validate: FormValues['validate'] = {}
  if (
    requestBodyParameter !== null &&
    requestBodyParameter !== undefined &&
    requestBodyParameter.schema.type !== 'object' // object type schema is spread as parameters so no validation is required
  ) {
    if (requestBodyParameter.required) {
      validate = deepmerge(validate, {
        requestBody: validateValueForParameter(
          requestBodyParameter,
          'Request Body'
        ),
      })
    }
  }
  for (const parameter of parameters) {
    if (parameter.schema.type === 'object' && parameter.schema.properties) {
      const properties = generatePropertiesForSchemaObject({
        schema: parameter.schema,
        example: parameter.example,
      })
      const innerInput: GenerateFormInputValuesInput = {
        parameters: properties,
        securitySchemes: {},
        hideSecurity,
        clientState,
        requestBodyParameter,
      }

      // TODO: handle nested field validation
      // we should recursively handle validation so multi-nested inner forms are validated

      const innerInitialValues = generateFormInputValues(innerInput)
      initialValues.parameters[parameter.name] =
        innerInitialValues.initialValues.parameters

      const validation: FormValues['validate'] = {
        parameters: {
          [parameter.name]: (innerInitialValues.validate as any).parameters,
        },
      }
      validate = deepmerge(validation, validate)
    } else if (
      // Checks if the parameter's schema is an array of objects
      parameter.schema.type === 'array' &&
      !('$ref' in parameter.schema.items) && // entire spec should be dereferenced
      parameter.schema.items?.type === 'object'
    ) {
      // If the array is an array of objects, we want to populate the array with at least one object
      const properties = generatePropertiesForSchemaObject({
        schema: parameter.schema.items,
        example: parameter.schema.items.example,
      })
      console.debug(
        'Generated properties from array item schema',
        properties,
        ', schema:',
        parameter.schema.items
      )
      const innerInput: GenerateFormInputValuesInput = {
        parameters: properties,
        securitySchemes: {},
        hideSecurity,
        clientState,
        requestBodyParameter,
      }
      const innerInitialValues = generateFormInputValues(innerInput)
      initialValues.parameters[parameter.name] = [
        innerInitialValues.initialValues.parameters,
      ]
      if (parameter.isRequestBody) {
        initialValues.requestBody = [
          innerInitialValues.initialValues.parameters,
        ]
      }
      const validation: FormValues['validate'] = {
        parameters: {
          [parameter.name]: (innerInitialValues.validate as any).parameters,
        },
      }
      validate = deepmerge(validation, validate)
    } else {
      // If the parameter is not an array of objects, we want to populate the parameter with an empty string
      const validation: FormValues['validate'] = {
        parameters: {
          [parameter.name]: validateValueForParameter(
            parameter,
            parameter.name
          ),
        },
      }
      validate = deepmerge(validation, validate)
      initialValues.parameters[parameter.name] = ''
    }
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
      } else if (
        securityScheme.type === 'oauth2' &&
        'flows' in securityScheme &&
        securityScheme.flows.clientCredentials !== undefined
      ) {
        initialValues.security[name] = {
          [SECURITY_TYPE_PROPERTY]: 'oauth2-client-credentials',
          [OAUTH2_CLIENT_ID_PROPERTY]: '',
          [OAUTH2_CLIENT_SECRET_PROPERTY]: '',
        }
        const validation: FormValues['validate'] = {
          [SECURITY_FORM_NAME_PREFIX]: {
            [name]: {
              [OAUTH2_CLIENT_SECRET_PROPERTY]: (value) => {
                return isNotEmpty(`OAuth Client Secret is required`)(value)
              },
              [OAUTH2_CLIENT_ID_PROPERTY]: (value) => {
                return isNotEmpty(`OAuth Client ID is required`)(value)
              },
            },
          },
        }
        validate = deepmerge(validation, validate)
      } else if (
        securityScheme.type === 'http' &&
        securityScheme.scheme === 'bearer'
      ) {
        initialValues.security[name] = {
          [SECURITY_TYPE_PROPERTY]: 'bearer',
          [BEARER_VALUE_PROPERTY]: '',
        }
        const validation: FormValues['validate'] = {
          [SECURITY_FORM_NAME_PREFIX]: {
            [name]: {
              [BEARER_VALUE_PROPERTY]: (value) => {
                return isNotEmpty(`Token is required`)(value)
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
  return { initialValues, validate }
}
