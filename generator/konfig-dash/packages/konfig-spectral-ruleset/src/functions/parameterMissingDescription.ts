import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import { ParameterObject } from 'konfig-lib'
import { deref } from './util/lib'

/**
 * Konfig pull's descriptions from either the parameter's description or the
 * parameter schema's description. Ensure that at least one of these is present
 * and non-empty.
 */
export const parameterMissingDescription: RulesetFunction<ParameterObject> = (
  input
): IFunctionResult[] => {
  const results: IFunctionResult[] = []

  const parameterDescription = input.description
  const parameterSchemaDescription = deref(input.schema).description

  if (!parameterDescription && !parameterSchemaDescription) {
    results.push({
      message: 'Parameter description is missing',
    })
  }

  return results
}
