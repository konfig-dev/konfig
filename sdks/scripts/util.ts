import * as path from "path";
import { SdkPageProps } from "../../generator/konfig-docs/src/components/SdkComponentProps";
import { AdditionalSpecDataProps } from "./collect";
import { SecuritySchemes, Spec, getOperations, resolveRef } from "konfig-lib";
import kebabcase from "lodash.kebabcase";

export const dbFolder = path.join(path.dirname(__dirname), "db");
export const specFolder = path.join(dbFolder, "spec-data");
export const customRequestSpecsDir = path.join(
  dbFolder,
  "custom-request-specs"
);

/**
 * Sometimes the published properties should be always defined so this type is
 * used to overwrite the properties from SdkPageProps so downstream code can
 * assume that the properties are always defined
 */
type ExtraOrOverwriteProperties = {
  categories: string[];
  faviconUrl: string;
};

export type Published = SdkPageProps & {
  typescriptSdkUsageCode: string;
  originalSpecUrl?: string;
} & AdditionalSpecDataProps &
  ExtraOrOverwriteProperties;

export type HtmlData = {
  description?: string;
  imagePreview?: string;
  logo?: string;
};

export function getProviderName(spec: Spec): string {
  const info = spec.spec.info as any;
  return info["x-providerName"];
}

export function getServiceName(spec: Spec): string {
  const info = spec.spec.info as any;
  return info["x-serviceName"];
}

export function getVersion(spec: Spec): string {
  const info = spec.spec.info;
  return info.version;
}

export function getCategories(spec: Spec): string[] {
  const info = spec.spec.info as any;
  return info["x-apisguru-categories"];
}

export function getInfoContactUrl(spec: Spec): string | undefined {
  const info = spec.spec.info;
  return info.contact?.url;
}

export function getInfoContactEmail(spec: Spec): string | undefined {
  const info = spec.spec.info;
  return info.contact?.email;
}

export function computeDifficultyScore(
  numberOfEndpoints: number,
  numberOfOperations: number,
  numberOfSchemas: number,
  numberOfParameters: number
): number {
  return numberOfOperations + 0.5 * numberOfSchemas + 0.25 * numberOfParameters;
}

// something that doesn't fail github actions
// and is not the "-" character since "-" is used to replace special characters
// can't be "|" or "=" because those are special to shell
const KEY_DELIMITER = "_";
export function getKey(spec: Spec): string {
  const serviceName = getServiceName(spec);
  const parts =
    serviceName === undefined
      ? [getProviderName(spec), getVersion(spec)]
      : [getProviderName(spec), serviceName, getVersion(spec)];
  return (
    parts
      .join(KEY_DELIMITER)
      // remove any special characters that shell doesn't like
      // keep dot ".", "-", "_"
      .replace(/[^a-zA-Z0-9\.\-_]/g, "")
      // remove any double "-" characters
      .replaceAll("--", "-")
      .replaceAll("--", "-")
      .replaceAll("--", "-")
      .replaceAll("--", "-")
      // remove any trailing "-"
      .replaceAll(/-$/g, "")
  );
}

export function getNumberOfEndpoints(spec: Spec): number {
  if (spec.spec.paths === undefined) return 0;
  const numberOfEndpoints = Object.keys(spec.spec.paths).length;
  return numberOfEndpoints;
}

export function getNumberOfOperations(spec: Spec): number {
  if (spec.spec.paths === undefined) return 0;
  let numberOfOperations = 0;
  for (const path of Object.values(spec.spec.paths)) {
    if (path === undefined) continue;
    numberOfOperations += Object.keys(path).length;
  }
  return numberOfOperations;
}

export function getNumberOfSchemas(spec: Spec): number {
  if (spec.spec.components === undefined) return 0;
  if (spec.spec.components.schemas === undefined) return 0;
  const numberOfSchemas = Object.keys(spec.spec.components.schemas).length;
  return numberOfSchemas;
}

export function getSecuritySchemes(
  spec: Spec,
  dflt?: SecuritySchemes
): SecuritySchemes {
  const securitySchemeOrRefs = spec.spec.components?.securitySchemes;
  if (securitySchemeOrRefs === undefined) return dflt ? dflt : {};
  const securitySchemesKeys = Object.keys(securitySchemeOrRefs);
  const securitySchemes: SecuritySchemes = {};
  for (const key of securitySchemesKeys) {
    const securitySchemeOrRef = securitySchemeOrRefs[key];
    const securityScheme = resolveRef({
      refOrObject: securitySchemeOrRef,
      $ref: spec.$ref,
    });
    securitySchemes[key] = securityScheme;
  }

  return securitySchemes;
}

export function getOpenApiRaw(spec: Spec): string | undefined {
  const info = spec.spec.info as any;
  const origin = info["x-origin"];
  if (origin === undefined) return;
  const url = origin[0].url;

  // remove duplicate h at beginning of https if detected
  // for: watchful.li/1.0.0/swagger.yaml
  const cleanUrl = url.replace("hhttps", "https");

  return cleanUrl;
}

export function getNumberOfParameters(spec: Spec): number {
  // iterate over all operations and count parameters
  let numberOfParameters = 0;
  getOperations(spec).forEach(({ operation }) => {
    numberOfParameters += operation.parameters
      ? operation.parameters.length
      : 0;

    // Also add properties from an object type schema as parameters
    let requestBody = operation.requestBody;
    if (requestBody === undefined) return;
    if ("$ref" in requestBody) {
      requestBody = resolveRef({ refOrObject: requestBody, $ref: spec.$ref });
    }
    if ("$ref" in requestBody) {
      throw Error("Expect requestBody to be dereferenced");
    }
    const mediaTypes = Object.keys(requestBody.content);
    const mediaType = mediaTypes[0];
    if (mediaType === undefined) return;
    let schema = requestBody.content[mediaType].schema;
    if (schema === undefined) return;
    if ("$ref" in schema) {
      schema = resolveRef({ refOrObject: schema, $ref: spec.$ref });
    }
    if ("$ref" in schema) {
      throw Error("Expect schema to be dereferenced");
    }
    if (schema.properties === undefined) return;
    numberOfParameters += Object.keys(schema.properties).length;
  });

  return numberOfParameters;
}

export function generateSdkDynamicPath(company: string, serviceName?: string) {
  const companyKebabCase = kebabcase(company.toLowerCase());
  const serviceKebabCase =
    serviceName !== undefined ? kebabcase(serviceName.toLowerCase()) : null;
  const servicePath = serviceKebabCase ? `/${serviceKebabCase}` : "";
  return `${companyKebabCase}${servicePath}`;
}
