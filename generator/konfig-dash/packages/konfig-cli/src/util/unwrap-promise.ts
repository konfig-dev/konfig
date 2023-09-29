/**
 * Turns Promise<T> into T
 */
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
