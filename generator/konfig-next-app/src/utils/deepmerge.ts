import * as dm from 'deepmerge'
import isMergeableObjectDefault from 'is-mergeable-object'

/**
 * Wraps deepmerge to ensure arrays are always overwritten
 */

const overwriteMerge = (
  destinationArray: any[],
  sourceArray: any[],
  options: dm.ArrayMergeOptions
) => {
  return sourceArray
}

const customMerge = (key: string, options?: dm.Options) => {
  return (x: any, y: any) => {
    if (x === '') {
      return y
    }
    if (y === '') {
      return x
    }
    // For other cases, default merging
    return dm.default(x, y, options)
  }
}

const isMergeableObject = (value: any) => {
  if (value === '') {
    return true
  }
  return isMergeableObjectDefault(value)
}

export const deepmerge = <T>(
  x: Partial<T>,
  y: Partial<T>,
  options?: dm.Options
): T =>
  dm.default(x, y, {
    arrayMerge: overwriteMerge,
    customMerge,
    isMergeableObject,
    ...options,
  })
