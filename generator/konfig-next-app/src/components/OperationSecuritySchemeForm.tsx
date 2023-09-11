import {
  BEARER_VALUE_PROPERTY,
  CLIENT_STATE_VALUE_PROPERTY,
  OAUTH2_CLIENT_ID_PROPERTY,
  OAUTH2_CLIENT_SECRET_PROPERTY,
  SECURITY_FORM_NAME_PREFIX,
  SECURITY_FORM_VALUE_SUFFIX,
} from '@/utils/generate-initial-operation-form-values'
import { useFormContext } from '@/utils/operation-form-context'
import { PasswordInput } from '@mantine/core'
import { IconLock } from '@tabler/icons-react'
import type { SecurityScheme } from 'konfig-lib'

export function OperationSecuritySchemeForm({
  name,
  scheme,
}: {
  name: string
  scheme: SecurityScheme
}) {
  const form = useFormContext()
  if (scheme.type === 'http' && scheme.scheme === 'bearer') {
    return (
      <PasswordInput
        withAsterisk
        label={getInputPlaceholder({ scheme })}
        placeholder={getInputPlaceholder({ scheme })}
        icon={<IconLock size="0.8rem" />}
        {...form.getInputProps(
          `${SECURITY_FORM_NAME_PREFIX}.${name}.${BEARER_VALUE_PROPERTY}`
        )}
      />
    )
  }
  if (
    scheme.type === 'oauth2' &&
    'flows' in scheme &&
    scheme.flows.clientCredentials !== undefined
  ) {
    return (
      <>
        <PasswordInput
          withAsterisk
          label={'OAuth Client ID'}
          placeholder={'OAuth Client Secret'}
          {...form.getInputProps(
            `${SECURITY_FORM_NAME_PREFIX}.${name}.${OAUTH2_CLIENT_ID_PROPERTY}`
          )}
        />
        <PasswordInput
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
    <PasswordInput
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
    <PasswordInput
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
    if (scheme.scheme === 'bearer') {
      return 'Token'
    }

    return 'Authorization'
  }
  if (scheme.type === 'openIdConnect') {
    return 'Authorization'
  }
  return ''
}
