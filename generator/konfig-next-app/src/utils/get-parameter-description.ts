import { Parameter } from '@/components/OperationParameter'
import { SchemaObject } from 'konfig-lib'

export function getParameterDescription(param: Parameter) {
  if (param.description !== undefined) return param.description
  if ('$ref' in param.schema) throw Error('Did not expect $ref in schema')
  if (param.schema.description !== undefined) {
    return param.schema.description
  }
  if (param.schema.allOf?.length === 1) {
    return (param.schema.allOf[0] as SchemaObject).description
  }
}
