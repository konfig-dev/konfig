import * as dm from 'deepmerge'
import isMergeableObjectDefault from 'is-mergeable-object'

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

function customMerge(key: string, options?: dm.Options) {
  return (x: any, y: any) => {
    if (x === '') {
      return y
    }
    if (y === '') {
      return x
    }
    // For other cases, default merging
    return dm.default(x, y, {
      ...optionModifier,
      ...options,
    })
  }
}

function isMergeableObject(value: any) {
  if (value === '') {
    return true
  }
  return isMergeableObjectDefault(value)
}

const optionModifier = {
  arrayMerge: overwriteMerge,
  customMerge,
  isMergeableObject,
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
