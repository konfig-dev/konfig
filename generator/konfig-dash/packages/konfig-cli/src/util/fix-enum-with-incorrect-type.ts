import { Spec, recurseObject } from 'konfig-lib'

export async function fixEnumWithIncorrectType({
    spec,
  }: {
    spec: Spec
  }): Promise<number> {
    let numberOfEnumWithIncorrectType = 0;
    recurseObject(spec.spec, ({ value: schema }) => {
      if (schema === null) return
      if (typeof schema !== 'object') return
      if (schema.enum === undefined) return
      if (!Array.isArray(schema.enum)) return
      const enums = schema.enum as any[];
      if (!enums.every((value) => typeof value === schema.type)) {
        // If all enum values are the same type, set schema type to that type
        if (enums.every((value) => typeof value === typeof enums[0])) {
          schema.type = typeof enums[0];
          numberOfEnumWithIncorrectType++;
        }
        // Otherwise, set schema type to string and convert all values in schema.enum to string
        else {
          schema.type = 'string';
          schema.enum = enums.map((value) => value.toString());
          numberOfEnumWithIncorrectType++;
        }
      }
    });
    return numberOfEnumWithIncorrectType;
  }