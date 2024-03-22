import { Spec, recurseObject } from 'konfig-lib'

export async function fixArraySchemaMissingItems({
    spec,
  }: {
    spec: Spec
  }): Promise<number> {
    let numberOfArraySchemasMissingItems = 0;
    recurseObject(spec.spec, ({ value: schema }) => {
      if (schema === null) return
      if (typeof schema !== 'object') return
      if (schema.type !== 'array') return
      if (schema.items) return
      schema.items = { description: "WARNING: Missing items property in array schema. Missing items property has been filled with this AnyType schema."};
      console.log("*** WARNING *** Detected array schema with missing items; added items with AnyType schema.");
      numberOfArraySchemasMissingItems++;
    });
    return numberOfArraySchemasMissingItems;
  }