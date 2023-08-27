import {
  CLIENT_STATE_VALUE_PROPERTY,
  SECURITY_FORM_NAME_PREFIX,
  SECURITY_FORM_VALUE_SUFFIX,
} from '@/utils/generate-initial-operation-form-values'
import { useForm, useFormContext } from '@/utils/operation-form-context'
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
  const formInputName = generateSecurityFormInputName({ name })
  return (
    <TextInput
      placeholder={getInputPlaceholder({ scheme })}
      {...form.getInputProps(formInputName)}
    />
  )
}

export function OperationClientStateForm({ name }: { name: string }) {
  const form = useFormContext()
  const formInputName = `${SECURITY_FORM_NAME_PREFIX}.${name}.${CLIENT_STATE_VALUE_PROPERTY}`
  return <TextInput placeholder={name} {...form.getInputProps(formInputName)} />
}

export function generateSecurityFormInputName({ name }: { name: string }) {
  return `${SECURITY_FORM_NAME_PREFIX}.${name}.${SECURITY_FORM_VALUE_SUFFIX}`
}

function getInputPlaceholder({ scheme }: { scheme: SecurityScheme }) {
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
