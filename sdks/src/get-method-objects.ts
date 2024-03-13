import { Spec, getOperations, resolveRef } from "konfig-lib";
import camelcase from "konfig-lib/dist/util/camelcase";
import {
  Parameter,
  Method,
  Response,
  ParameterExampleOrDefault,
} from "../../generator/konfig-docs/src/components/SdkComponentProps";
import { prodDependencies } from "mathjs";

// See generator/konfig-docs/src/components/Sdk.tsx#Method
export function getMethodObjects(spec: Spec): Method[] {
  const operations = getOperations(spec);
  const methods: Method[] = [];
  for (const { operation, method: httpMethod, path } of operations) {
    const parameters: Parameter[] = [];
    if (operation.parameters !== undefined) {
      for (const parameterOrRef of operation.parameters) {
        const parameter = resolveRef({
          refOrObject: parameterOrRef,
          $ref: spec.$ref,
        });
        const schemaOrRef = parameter.schema;
        const schemaObject =
          schemaOrRef !== undefined
            ? resolveRef({ refOrObject: schemaOrRef, $ref: spec.$ref })
            : "undefined";
        const schemaType =
          schemaObject !== "undefined"
            ? schemaObject.type === undefined
              ? "undefined"
              : schemaObject.type
            : "undefined";

        function getExample(): ParameterExampleOrDefault {
          if (parameter.example !== undefined) return parameter.example;
          if (
            parameter.examples !== undefined &&
            Array.isArray(parameter.examples) &&
            parameter.examples.length > 0
          ) {
            return parameter.examples;
          }
          if (schemaObject === "undefined") return;
          if (schemaObject.example !== undefined) return schemaObject.example;
          if (!parameter.required) return;
          if (schemaObject.type === "string")
            return `${parameter.name.toUpperCase()}`;
          if (schemaObject.type === "number") return 0;
          if (schemaObject.type === "boolean") return true;
          if (schemaObject.type === "integer") return 0;
        }

        function getDefault(): ParameterExampleOrDefault {
          if (schemaObject === "undefined") return;
          if (schemaObject.default !== undefined) return schemaObject.default;
        }

        const example = getExample();
        const dflt = getDefault();

        parameters.push({
          name: camelcase(parameter.name),
          schema: schemaType,
          required: parameter.required,
          description: parameter.description ?? "",
          example,
          default: dflt,
        });
      }
    }
    let requestBody = operation.requestBody;
    if (requestBody !== undefined) {
      if ("$ref" in requestBody) {
        requestBody = resolveRef({ refOrObject: requestBody, $ref: spec.$ref });
      }
      if ("$ref" in requestBody) {
        throw Error("Expect requestBody to be dereferenced");
      }
      const mediaTypes = Object.keys(requestBody.content);
      const mediaType = mediaTypes[0];
      if (mediaType !== undefined) {
        let schema = requestBody.content[mediaType].schema;
        if (schema !== undefined) {
          if ("$ref" in schema) {
            try {
              schema = resolveRef({ refOrObject: schema, $ref: spec.$ref });
            } catch (e) {
              console.log(e);
              throw e;
            }
          }
          if ("$ref" in schema) {
            throw Error("Expect schema to be dereferenced");
          }
          if (schema.properties !== undefined) {
            const required = schema.required;
            for (const property in schema.properties) {
              const propertySchemaOrRef = schema.properties[property];
              // avoid "TypeError: Cannot use 'in' operator to search for '$ref' in false"
              if (typeof propertySchemaOrRef !== "object") continue;

              const propertySchemaObject =
                propertySchemaOrRef !== undefined
                  ? resolveRef({
                      refOrObject: propertySchemaOrRef,
                      $ref: spec.$ref,
                    })
                  : "undefined";
              const propertySchemaType =
                propertySchemaObject !== "undefined"
                  ? propertySchemaObject.type
                  : "undefined";
              const stringSchemaOrObjectSchema = Array.isArray(
                propertySchemaType
              )
                ? propertySchemaType[0]
                : propertySchemaType;

              function getSchemaType(): string {
                if (typeof stringSchemaOrObjectSchema === "string")
                  return stringSchemaOrObjectSchema;
                return "undefined";
              }

              function getExample(): ParameterExampleOrDefault {
                if (propertySchemaObject === "undefined") return;
                if (propertySchemaObject.example !== undefined)
                  return propertySchemaObject.example;
                if (required?.includes(property)) {
                  if (propertySchemaObject.type === "string") {
                    return property.toUpperCase();
                  }
                  if (propertySchemaObject.type === "number") {
                    return 0;
                  }
                  if (propertySchemaObject.type === "boolean") {
                    return true;
                  }
                  if (propertySchemaObject.type === "integer") {
                    return 0;
                  }
                  if (propertySchemaObject.type === "null") {
                    return null;
                  }
                }
              }

              function getDefault(): ParameterExampleOrDefault {
                if (propertySchemaObject === "undefined") return;
                if (propertySchemaObject.default !== undefined)
                  return propertySchemaObject.default;
              }

              const schemaType = getSchemaType();
              const example = getExample();
              const dflt = getDefault();

              parameters.push({
                name: property,
                schema: schemaType,
                required: schema.required?.includes(property),
                description: "",
                example,
                default: dflt,
              });
            }
          }
        }
      }
    }

    const responses: Response[] = [];
    for (const statusCode in operation.responses) {
      const mediaObjectOrRef = operation.responses[statusCode];
      if (mediaObjectOrRef === null) console.log(operation);
      const mediaObject = resolveRef({
        refOrObject: mediaObjectOrRef,
        $ref: spec.$ref,
      }).content;
      if (mediaObject === undefined) {
        responses.push({
          statusCode,
          description:
            "description" in mediaObjectOrRef
              ? mediaObjectOrRef.description
              : "",
        });
        continue;
      }
      const mediaTypes = Object.keys(mediaObject);
      const mediaType = mediaTypes[0];
      const responseObjectOrRef = mediaObject[mediaType];
      if (responseObjectOrRef === undefined) continue;
      const responseObject = resolveRef({
        refOrObject: responseObjectOrRef,
        $ref: spec.$ref,
      });
      const schemaOrRef = responseObject.schema;
      try {
        const schema =
          schemaOrRef !== undefined
            ? resolveRef({ refOrObject: schemaOrRef, $ref: spec.$ref })
            : undefined;
        const description = schema?.description ?? "";
        responses.push({
          statusCode,
          description,
        });
      } catch (e) {
        if (e instanceof Error) {
          if (e.name === "MissingPointerError") continue;
        }
        throw e;
      }
    }

    const method = getMethodName({
      operationId: operation.operationId,
      path,
      method: httpMethod,
    });

    const tag = operation.tags?.[0];
    methods.push({
      url: path,
      method,
      httpMethod,
      ...(tag ? { tag, typeScriptTag: getTypescriptTag(tag) } : {}),
      description: operation.summary ?? operation.description ?? "",
      parameters,
      responses,
    });
  }
  return methods;
}

function getTypescriptTag(tag: string) {
  // remove parentheses characters ("(" & ")") from tag
  const withoutParentheses = tag.replace(/[()]/g, "");
  // remove backslashes ("\"") from tag
  const withoutBackslashes = withoutParentheses.replace(/\\/g, "");
  return camelcase(withoutBackslashes);
}

function getMethodName({
  operationId,
  path,
  method,
}: {
  operationId?: string;
  path: string;
  method: string;
}) {
  if (operationId !== undefined) {
    if (operationId.includes("_") && operationId.split("_").length === 2) {
      return camelcase(operationId.split("_")[1]);
    }
    return camelcase(operationId);
  }
  return camelcase(`${path}-${method}`);
}
