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
      if (schema.enum.length === 0) return
      if (schema.$ref !== undefined) return // If it has a $ref, just let it be, because that could get a little compilcated
      if (schema.type === "array" || schema.type === "object") return // only correct primitive enums
      const enums = schema.enum as any[];
      if (!enums.every((value) => isType(value, schema.type))) {
        // If all enum values are the same type, set schema type to that type
        if (enums.every((value) => typeof value === typeof enums[0])) {
          // edge case: Use integer instead of number if all enums are integers
          if (enums.every((value) => Number.isInteger(value))) schema.type = 'integer';
          else schema.type = typeof enums[0];
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

// This function is like typeof but supports openAPI "integer" type
function isType(value: any, type: string): boolean {
  if (type === 'integer') return Number.isInteger(value);
  return typeof value === type;
}