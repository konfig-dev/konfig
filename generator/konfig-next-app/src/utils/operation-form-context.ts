import { createFormContext } from '@mantine/form'
import { FormDataType } from './generate-initial-operation-form-values'

export const [FormProvider, useFormContext, useForm] =
  createFormContext<FormDataType>()
