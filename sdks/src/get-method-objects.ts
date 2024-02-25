import { Spec, getOperations, resolveRef } from "konfig-lib";
import camelcase from "konfig-lib/dist/util/camelcase";
import {
  Parameter,
  Method,
  Response,
} from "../../generator/konfig-docs/src/components/SdkComponentProps";

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
        const schema =
          schemaOrRef !== undefined
            ? resolveRef({ refOrObject: schemaOrRef, $ref: spec.$ref }).type ??
              "undefined"
            : "undefined";
        parameters.push({
          name: camelcase(parameter.name),
          schema,
          required: parameter.required,
          description: parameter.description ?? "",
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
            for (const property in schema.properties) {
              const propertySchemaOrRef = schema.properties[property];
              // avoid "TypeError: Cannot use 'in' operator to search for '$ref' in false"
              if (typeof propertySchemaOrRef !== "object") continue;
              let propertySchema =
                propertySchemaOrRef !== undefined
                  ? resolveRef({
                      refOrObject: propertySchemaOrRef,
                      $ref: spec.$ref,
                    }).type ?? "undefined"
                  : "undefined";
              const firstSchema = Array.isArray(propertySchema)
                ? propertySchema[0]
                : propertySchema;
              parameters.push({
                name: property,
                schema: firstSchema,
                required: schema.required?.includes(property),
                description: "",
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
      if (mediaObject === undefined) continue;
      const mediaTypes = Object.keys(mediaObject);
      const mediaType = mediaTypes[0];
      const responseObjectOrRef = mediaObject[mediaType];
      if (responseObjectOrRef === undefined) continue;
      const responseObject = resolveRef({
        refOrObject: responseObjectOrRef,
        $ref: spec.$ref,
      });
      const schemaOrRef = responseObject.schema;
      const schema =
        schemaOrRef !== undefined
          ? resolveRef({ refOrObject: schemaOrRef, $ref: spec.$ref })
          : undefined;
      const description = schema?.description ?? "";
      responses.push({
        statusCode,
        description,
      });
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
