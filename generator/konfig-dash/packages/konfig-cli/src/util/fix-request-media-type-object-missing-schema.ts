import { Spec, getOperations, resolveRef } from 'konfig-lib'

export async function fixRequestMediaTypeObjectMissingSchema({
    spec,
  }: {
    spec: Spec
  }): Promise<number> {
    let numberOfMissingRequestSchemasInMediaTypeObjects = 0
    getOperations({ spec: spec.spec }).forEach(({ operation }) => {
      if (operation.requestBody) {
        const requestBody = resolveRef({refOrObject: operation.requestBody, $ref: spec.$ref})
        Object.values(requestBody.content).forEach((mediaTypeObject) => {
          if (!mediaTypeObject.schema) {
            mediaTypeObject.schema = {}
            numberOfMissingRequestSchemasInMediaTypeObjects++
          }
        })
      }
    })
    return numberOfMissingRequestSchemasInMediaTypeObjects;
  }