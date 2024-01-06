import * as dm from 'deepmerge'

/**
 * Wraps deepmerge to ensure arrays are always overwritten
 */

function overwriteMerge(
  destinationArray: any[],
  sourceArray: any[],
  options: dm.ArrayMergeOptions
) {
  return sourceArray
}

const optionModifier = {
  arrayMerge: overwriteMerge,
} as const

export const deepmerge = <T>(
  x: Partial<T>,
  y: Partial<T>,
  options?: dm.Options
): T =>
  dm.default(x, y, {
    ...optionModifier,
    ...options,
  })
