import { Spec } from 'konfig-lib'

/**
 * Simply converts OAS 3.1.x to OAS 3.0.x
 */
export async function fixOas31Usage({ spec }: { spec: Spec }): Promise<number> {
  let numberOfOas31UsagesFixed = 0

  if (spec.spec.openapi !== '3.1.0') return numberOfOas31UsagesFixed

  spec.spec.openapi = '3.0.3'
  numberOfOas31UsagesFixed++

  return numberOfOas31UsagesFixed
}
