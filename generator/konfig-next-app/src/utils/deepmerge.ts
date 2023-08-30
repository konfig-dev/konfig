import * as dm from 'deepmerge'

/**
 * Wraps deepmerge to ensure arrays are always overwritten
 */

const overwriteMerge = (
  destinationArray: any[],
  sourceArray: any[],
  options: dm.ArrayMergeOptions
) => sourceArray

export const deepmerge = <T>(
  x: Partial<T>,
  y: Partial<T>,
  options?: dm.Options
): T => dm.default(x, y, { arrayMerge: overwriteMerge, ...options })
