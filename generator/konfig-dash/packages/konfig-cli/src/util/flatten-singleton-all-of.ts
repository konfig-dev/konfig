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

  recurseObject(spec.spec, ({ value: schema, path }) => {
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

    // If there are other properties in the schema and this is the property of
    // an object type schema, preserve all the other properties on a vendor
    // extension named `x-konfig-properties` so that they can be used to
    // generate the SDKs with the contents of other properties like
    // "description".

    // iterate up two levels to find the parent object
    // if the object has "type": "object" then it is the parent object
    let parent: any = spec.spec
    for (let i = 0; i < path.length - 2; i++) {
      parent = parent[path[i]]
    }
    const propertyName = path[path.length - 1]
    if (parent.type === 'object') {
      const parentSchema = parent
      if (parentSchema['x-konfig-properties'] === undefined) {
        parentSchema['x-konfig-properties'] = {}
      }
      for (const key in schema) {
        if (key !== '$ref') {
          if (parentSchema['x-konfig-properties'][propertyName] === undefined) {
            parentSchema['x-konfig-properties'][propertyName] = {}
          }
          parentSchema['x-konfig-properties'][propertyName][key] = schema[key]
        }
      }
    }

    // delete all other properties in the schema
    for (const key in schema) {
      if (key !== '$ref') {
        delete schema[key]
      }
    }

    numberOfSingletonAllOfsFlattened++
  })
  return numberOfSingletonAllOfsFlattened
}
