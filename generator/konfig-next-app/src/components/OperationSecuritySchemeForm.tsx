import {
  CLIENT_STATE_VALUE_PROPERTY,
  OAUTH2_CLIENT_ID_PROPERTY,
  OAUTH2_CLIENT_SECRET_PROPERTY,
  SECURITY_FORM_NAME_PREFIX,
  SECURITY_FORM_VALUE_SUFFIX,
} from '@/utils/generate-initial-operation-form-values'
import { useFormContext } from '@/utils/operation-form-context'
import { TextInput } from '@mantine/core'
import type { SecurityScheme } from 'konfig-lib'

export function OperationSecuritySchemeForm({
  name,
  scheme,
}: {
  name: string
  scheme: SecurityScheme
}) {
  const form = useFormContext()
  if (
    scheme.type === 'oauth2' &&
    'flows' in scheme &&
    scheme.flows.clientCredentials !== undefined
  ) {
    return (
      <>
        <TextInput
          withAsterisk
          label={'OAuth Client ID'}
          placeholder={'OAuth Client Secret'}
          {...form.getInputProps(
            `${SECURITY_FORM_NAME_PREFIX}.${name}.${OAUTH2_CLIENT_ID_PROPERTY}`
          )}
        />
        <TextInput
          withAsterisk
          label={'OAuth Client Secret'}
          placeholder={'OAuth Client Secret'}
          {...form.getInputProps(
            `${SECURITY_FORM_NAME_PREFIX}.${name}.${OAUTH2_CLIENT_SECRET_PROPERTY}`
          )}
        />
      </>
    )
  }
  const formInputName = generateSecurityFormInputName({ name })
  return (
    <TextInput
      withAsterisk
      label={getInputPlaceholder({ scheme })}
      placeholder={getInputPlaceholder({ scheme })}
      {...form.getInputProps(formInputName)}
    />
  )
}

export function OperationClientStateForm({ name }: { name: string }) {
  const form = useFormContext()
  const formInputName = `${SECURITY_FORM_NAME_PREFIX}.${name}.${CLIENT_STATE_VALUE_PROPERTY}`
  return (
    <TextInput
      withAsterisk
      label={name}
      placeholder={name}
      {...form.getInputProps(formInputName)}
    />
  )
}

export function generateSecurityFormInputName({ name }: { name: string }) {
  return `${SECURITY_FORM_NAME_PREFIX}.${name}.${SECURITY_FORM_VALUE_SUFFIX}`
}

export function getInputPlaceholder({ scheme }: { scheme: SecurityScheme }) {
  if (scheme.type === 'apiKey') {
    return scheme.name
  }
  if (scheme.type === 'basic') {
    return 'Authorization'
  }
  if (scheme.type === 'oauth2') {
    return 'Authorization'
  }
  if (scheme.type === 'http') {
    return 'Authorization'
  }
  if (scheme.type === 'openIdConnect') {
    return 'Authorization'
  }
  return ''
}
