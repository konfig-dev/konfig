import { Spec, recurseObject } from 'konfig-lib'

export async function flattenSingletonAllOf({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfSingletonAllOfsFlattened = 0
  if (
    spec.spec.components === undefined ||
    spec.spec.components.schemas === undefined
  )
    return numberOfSingletonAllOfsFlattened

  recurseObject(spec.spec, ({ value: schema }) => {
    if (
      schema === null ||
      schema === undefined ||
      !Array.isArray(schema['allOf']) ||
      schema['allOf'].length !== 1 ||
      schema['allOf'][0]['$ref'] === undefined
    )
      return
    schema['$ref'] = schema['allOf'][0]['$ref']
    delete schema['allOf']
    numberOfSingletonAllOfsFlattened++
  })
  return numberOfSingletonAllOfsFlattened
}
