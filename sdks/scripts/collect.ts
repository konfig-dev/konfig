import * as path from "path";
import {
  SecuritySchemes,
  Spec,
  getOperations,
  parseSpec,
  resolveRef,
} from "konfig-lib";
import yaml from "js-yaml";
import * as fs from "fs";
import * as glob from "glob";
import * as math from "mathjs";
import type { SdkPageProps } from "../../generator/konfig-docs/src/components/SdkComponentProps";
import { getRequestSpecsDir, postRequestSpecsDir, specFolder } from "./util";

type Paths = { oasPath: string }[];

const apiDirectory = path.join(
  path.dirname(__dirname),
  "openapi-directory",
  "APIs"
);

function calculateZScores(numbers: number[]): number[] {
  const mean = math.mean(numbers);
  const stdDev = math.std(numbers) as unknown as number;

  return numbers.map((num) => (num - mean) / stdDev);
}

function collectOasFilePaths(): Paths {
  const paths: Paths = [];
  const pattern = path.join(apiDirectory, "**", "*(openapi|swagger).yaml");
  glob.sync(pattern).forEach((oasPath) => paths.push({ oasPath }));
  return paths;
}

function getProviderName(spec: Spec): string {
  const info = spec.spec.info as any;
  return info["x-providerName"];
}

function getServiceName(spec: Spec): string {
  const info = spec.spec.info as any;
  return info["x-serviceName"];
}

function getVersion(spec: Spec): string {
  const info = spec.spec.info;
  return info.version;
}

function getCategories(spec: Spec): string[] {
  const info = spec.spec.info as any;
  return info["x-apisguru-categories"];
}

function getInfoContactUrl(spec: Spec): string | undefined {
  const info = spec.spec.info;
  return info.contact?.url;
}

function getInfoContactEmail(spec: Spec): string | undefined {
  const info = spec.spec.info;
  return info.contact?.email;
}

function computeDifficultyScore(
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
function getKey(spec: Spec): string {
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

function getNumberOfEndpoints(spec: Spec): number {
  if (spec.spec.paths === undefined) return 0;
  const numberOfEndpoints = Object.keys(spec.spec.paths).length;
  return numberOfEndpoints;
}

function getNumberOfOperations(spec: Spec): number {
  if (spec.spec.paths === undefined) return 0;
  let numberOfOperations = 0;
  for (const path of Object.values(spec.spec.paths)) {
    if (path === undefined) continue;
    numberOfOperations += Object.keys(path).length;
  }
  return numberOfOperations;
}

function getNumberOfSchemas(spec: Spec): number {
  if (spec.spec.components === undefined) return 0;
  if (spec.spec.components.schemas === undefined) return 0;
  const numberOfSchemas = Object.keys(spec.spec.components.schemas).length;
  return numberOfSchemas;
}

function getSecuritySchemes(
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

function getOpenApiRaw(spec: Spec): string | undefined {
  const info = spec.spec.info as any;
  const origin = info["x-origin"];
  if (origin === undefined) return;
  const url = origin[0].url;

  // remove duplicate h at beginning of https if detected
  // for: watchful.li/1.0.0/swagger.yaml
  const cleanUrl = url.replace("hhttps", "https");

  return cleanUrl;
}

function getNumberOfParameters(spec: Spec): number {
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

/**
 * Extra or overwrite properties for SdkPageProps
 */
export type AdditionalSpecDataProps = {
  securitySchemes: SecuritySchemes;
  categories?: string[];
  // null means it was not originally from openapi-directory repo
  openapiDirectoryPath?: string;
  postRequestSpecFilename?: string;
  originalSpecPostRequest?: {
    url: string;
    body: string;
  };
  getRequestSpecFilename?: string;
  originalSpecGetRequest?: {
    url: string;
    regex: string;
  };
  originalSpecUrl?: string;
};

export type SdkPagePropsWithPropertiesOmitted = Omit<
  SdkPageProps,
  | "previewLinkImage" // DONE IN SEPARATE SCRIPT
  | "metaDescription" // DONE IN SEPARATE SCRIPT
  | "lastUpdated" // PICK UP FROM DIFFERENT FILE
  | "logo" // DONE IN SEPARATE SCRIPT
  | "methods" // DONE IN generate-published.ts
  | "sdkName" // DO MANUALLY
  | "clientName" // DO MANUALLY
  | "clientNameCamelCase" // DO MANUALLY
  | "company" // DO MANUALLY
> &
  AdditionalSpecDataProps;

export type SdkPagePropsWithPropertiesOmittedWithoutDifficulty = Omit<
  SdkPagePropsWithPropertiesOmitted,
  "difficulty"
>;

export type Db = {
  specifications: Record<
    string,
    SdkPagePropsWithPropertiesOmittedWithoutDifficulty
  >;
};

export type DbWithDifficulty = {
  specifications: Record<string, SdkPagePropsWithPropertiesOmitted>;
};

function writeData(db: DbWithDifficulty) {
  let i = 0;
  for (const key in db.specifications) {
    console.log(
      `Writing data to disk for ${key}: ${++i}/${
        Object.keys(db.specifications).length
      }`
    );
    const stringified = JSON.stringify(db.specifications[key], null, 2);
    fs.writeFileSync(path.join(specFolder, `${key}.json`), stringified);
  }
}

const doNotProcess = [
  "bungie.net",
  "presalytics.io",
  "stripe.com",
  "adyen.com",
  "googleapis.com",
  "google.home",
  "google.com",
  "goog.io",
  "azure.com",
  "amazonaws.com",
  "microsoft.com",
  "windows.net",
  "twilio.com",
  "github.com",
  "plaid.com",
  "apisetu.gov.in", // gets 403 forbidden
  "codat.io", // speakeasy customer
];

async function collectFilterAndSave(): Promise<void> {
  const paths = collectOasFilePaths();

  const filteredPaths = paths.filter(
    ({ oasPath }) => !doNotProcess.some((f) => oasPath.includes(f))
  );

  const specsForFilteredPaths: { spec: Spec; oasPath: string }[] = [];

  let i = 0;
  for (const { oasPath } of filteredPaths) {
    const cleanPath = path.relative(apiDirectory, oasPath);
    console.log(
      `Parsing spec for path ${++i}/${filteredPaths.length}: ${cleanPath}`
    );
    const oas = fs.readFileSync(oasPath, "utf-8");
    let spec: Spec;
    try {
      spec = await parseSpec(oas);
    } catch (error) {
      console.log(`❌ Skipping ${cleanPath} due to error while parsing.`);
      continue;
    }
    specsForFilteredPaths.push({ spec, oasPath });
  }

  console.log("Removed paths that timeout when parsing");

  const finalSpecs: { spec: Spec; oasPath: string }[] = [];
  i = 0;
  for (const { spec, oasPath } of specsForFilteredPaths) {
    const cleanPath = path.relative(apiDirectory, oasPath);
    console.log(
      `Checking if origin URL works for path ${cleanPath}: ${++i}/${
        specsForFilteredPaths.length
      }`
    );
    const openApiRaw = getOpenApiRaw(spec);
    if (openApiRaw === undefined) {
      console.log(`❌ Skipping ${cleanPath} due to missing openApiRaw.`);
      continue;
    }

    // check if origin url is working
    try {
      await fetch(openApiRaw);
      finalSpecs.push({ spec, oasPath });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        console.log(
          `❌ Skipping ${cleanPath} due to error ("${error.message}") when checking if origin url works.`
        );
      } else {
        console.log(
          `❌ Skipping ${cleanPath} due to error when checking if origin url works.`
        );
      }
    }
  }

  const oasPaths = specsForFilteredPaths.map(({ oasPath }) => oasPath);
  fs.writeFileSync(
    path.join(path.dirname(__dirname), "db", "filtered.txt"),
    oasPaths.join("\n")
  );
}

async function processFiltered(): Promise<Db> {
  const filtered = fs
    .readFileSync(
      path.join(path.dirname(__dirname), "db", "filtered.txt"),
      "utf-8"
    )
    .split("\n");

  const db: Db = { specifications: {} };
  const select = process.env.SELECT;

  let i = 0;
  for (const oasPath of filtered) {
    const cleanPath = path.relative(apiDirectory, oasPath);

    // skip paths from doNotProcess
    if (doNotProcess.some((f) => oasPath.includes(f))) {
      console.log(`❌ Skipping ${cleanPath} due to doNotProcess.`);
      continue;
    }

    if (select !== undefined && !oasPath.includes(select)) {
      console.log(`❌ Skipping ${cleanPath} due to select.`);
      continue;
    }

    const spec = await parseSpec(fs.readFileSync(oasPath, "utf-8"));

    console.log(`Processing path ${++i}/${filtered.length}: ${cleanPath}`);
    const key = getKey(spec);
    const numberOfEndpoints = getNumberOfEndpoints(spec);
    const numberOfOperations = getNumberOfOperations(spec);
    const numberOfSchemas = getNumberOfSchemas(spec);
    const numberOfParameters = getNumberOfParameters(spec);
    const apiBaseUrl = spec.spec.servers?.[0]?.url;
    if (apiBaseUrl === undefined) {
      console.log(`❌ Skipping ${cleanPath} due to missing apiBaseUrl.`);
      continue;
    }
    db.specifications[key] = {
      openapiDirectoryPath: cleanPath,
      providerName: getProviderName(spec),
      openApiRaw: getOpenApiRaw(spec),
      securitySchemes: getSecuritySchemes(spec),
      categories: getCategories(spec),
      homepage: getProviderName(spec),
      serviceName: getServiceName(spec),
      apiVersion: getVersion(spec),
      apiBaseUrl: apiBaseUrl,
      apiDescription: spec.spec.info.description,
      apiTitle: spec.spec.info.title,
      endpoints: numberOfEndpoints,
      sdkMethods: numberOfOperations,
      schemas: numberOfSchemas,
      parameters: numberOfParameters,
      contactUrl: getInfoContactUrl(spec),
      contactEmail: getInfoContactEmail(spec),
      difficultyScore: computeDifficultyScore(
        numberOfEndpoints,
        numberOfOperations,
        numberOfSchemas,
        numberOfParameters
      ),
    };
  }
  return db;
}

async function addDifficulty(db: Db): Promise<DbWithDifficulty> {
  const difficultyScores = Object.values(db.specifications).map(
    (specification) => specification.difficultyScore
  );
  const zScores = calculateZScores(difficultyScores);
  let i = 0;
  const dbWithDifficulty: DbWithDifficulty = { specifications: {} };
  for (const key in db.specifications) {
    const spec = db.specifications[key];
    const z = zScores[i];
    const difficulty = getDifficulty(z);
    dbWithDifficulty.specifications[key] = {
      ...spec,
      difficulty,
    };
    i++;
  }
  return dbWithDifficulty;
}

function getDifficulty(difficultyScore: number): string {
  if (difficultyScore > 1) return "Very Hard";
  else if (difficultyScore > 0.1) return "Hard";
  else if (difficultyScore > -0.1) return "Medium";
  else if (difficultyScore > -0.3) return "Easy";
  else return "Very Easy";
}

const postRequests: Record<
  string,
  AdditionalSpecDataProps["originalSpecPostRequest"] & {
    securitySchemes?: SecuritySchemes;
    apiBaseUrl?: string;
  }
> = {
  /**
   * Got this from inspecting network tab when going to API Reference page at:
   * https://developer.walmart.com/api/us/cp/feeds
   */
  "walmart.com_content": {
    url: "https://developer.walmart.com/api/detail",
    body: `{"params":{"country":"us","category":"cp","apiName":"feeds"}}`,
    securitySchemes: {
      clientId: {
        type: "apiKey",
        in: "header",
        name: "clientId",
      },
      privateKey: {
        type: "apiKey",
        in: "header",
        name: "privateKey",
      },
    },
    apiBaseUrl: "https://marketplace.walmartapis.com/v3/feeds",
  },
};

async function collectFromPostRequests(): Promise<Db> {
  const db: Db = { specifications: {} };

  for (const key in postRequests) {
    const postRequest = postRequests[key];
    if (postRequest === undefined)
      throw Error("Expect postRequest to be defined");
    const { url, body } = postRequest;
    console.log(`Processing post request for ${key}`);

    const rawSpecString = await fetch(url, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.text());

    const spec = await parseSpec(rawSpecString);
    const numberOfEndpoints = getNumberOfEndpoints(spec);
    const numberOfOperations = getNumberOfOperations(spec);
    const numberOfSchemas = getNumberOfSchemas(spec);
    const numberOfParameters = getNumberOfParameters(spec);
    // if postRequest.securitySchemes then also apply to spec
    if (postRequest.securitySchemes !== undefined) {
      if (spec.spec.components === undefined) spec.spec.components = {};
      spec.spec.components.securitySchemes = postRequest.securitySchemes as any;
      spec.spec.security = [
        Object.fromEntries(
          Object.keys(postRequest.securitySchemes).map((key) => [key, []])
        ),
      ];
    }

    let apiBaseUrl = spec.spec.servers?.[0]?.url;
    if (apiBaseUrl === undefined) {
      if (postRequest.apiBaseUrl !== undefined) {
        apiBaseUrl = postRequest.apiBaseUrl;
      } else {
        console.log(`❌ Skipping ${key} due to missing apiBaseUrl.`);
        continue;
      }
    }
    const specFilename = `${key}.yaml`;
    db.specifications[`from-post-request_${key}`] = {
      providerName: getProviderName(spec),
      openApiRaw: getOpenApiRaw(spec),
      securitySchemes: getSecuritySchemes(spec, postRequest.securitySchemes),
      categories: getCategories(spec),
      homepage: getProviderName(spec),
      serviceName: getServiceName(spec),
      apiVersion: getVersion(spec),
      apiBaseUrl,
      apiDescription: spec.spec.info.description,
      apiTitle: spec.spec.info.title,
      endpoints: numberOfEndpoints,
      sdkMethods: numberOfOperations,
      schemas: numberOfSchemas,
      parameters: numberOfParameters,
      contactUrl: getInfoContactUrl(spec),
      contactEmail: getInfoContactEmail(spec),
      postRequestSpecFilename: specFilename,
      originalSpecPostRequest: {
        url,
        body,
      },
      difficultyScore: computeDifficultyScore(
        numberOfEndpoints,
        numberOfOperations,
        numberOfSchemas,
        numberOfParameters
      ),
    };
    console.log(`Writing post request spec to disk for ${key}`);
    fs.writeFileSync(
      path.join(postRequestSpecsDir, specFilename),
      yaml.dump(spec.spec)
    );
  }

  return db;
}

const getRequests: Record<
  string,
  AdditionalSpecDataProps["originalSpecGetRequest"] & {
    securitySchemes?: SecuritySchemes;
    apiBaseUrl?: string;

    // for overriding "openapi" property
    // NOTE:
    // was useful because soundcloud API for some reason has 3.0.4 and we ensure "openapi" is either:
    // 3.0.0, 3.0.1, 3.0.2, 3.0.3, or 3.1.0
    // 3.0.4 doesn't even exist so what the heck...
    openapi?: string;
  }
> = {
  "soundcloud.com": {
    url: "https://developers.soundcloud.com/docs/api/explorer/swagger-ui-init.js",
    regex: `"swaggerDoc": (.*),\n.*"customOptions"`,
    openapi: "3.0.3",
  },
};

async function collectFromGetRequests(): Promise<Db> {
  const db: Db = { specifications: {} };

  for (const key in getRequests) {
    const getRequest = getRequests[key];
    if (getRequest === undefined)
      throw Error("Expect getRequest to be defined");
    const { url, regex } = getRequest;
    console.log(`Processing get request for ${key}`);

    const rawString = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.text());

    const rawSpec = extractJsonFromString(rawString, regex);

    if (getRequest.openapi !== undefined) {
      rawSpec.openapi = getRequest.openapi;
    }

    const rawSpecString = JSON.stringify(rawSpec);

    if (rawSpecString === undefined) {
      throw Error("Expect rawSpecString to be defined");
    }

    const spec = await parseSpec(rawSpecString);
    const numberOfEndpoints = getNumberOfEndpoints(spec);
    const numberOfOperations = getNumberOfOperations(spec);
    const numberOfSchemas = getNumberOfSchemas(spec);
    const numberOfParameters = getNumberOfParameters(spec);

    // if getRequest.securitySchemes then also apply to spec
    if (getRequest.securitySchemes !== undefined) {
      if (spec.spec.components === undefined) spec.spec.components = {};
      spec.spec.components.securitySchemes = getRequest.securitySchemes as any;
      spec.spec.security = [
        Object.fromEntries(
          Object.keys(getRequest.securitySchemes).map((key) => [key, []])
        ),
      ];
    }

    let apiBaseUrl = spec.spec.servers?.[0]?.url;
    if (apiBaseUrl === undefined) {
      if (getRequest.apiBaseUrl !== undefined) {
        apiBaseUrl = getRequest.apiBaseUrl;
      } else {
        console.log(`❌ Skipping ${key} due to missing apiBaseUrl.`);
        continue;
      }
    }

    const specFilename = `${key}.yaml`;
    db.specifications[`from-get-request_${key}`] = {
      providerName: getProviderName(spec),
      openApiRaw: getOpenApiRaw(spec),
      securitySchemes: getSecuritySchemes(spec, getRequest.securitySchemes),
      categories: getCategories(spec),
      homepage: getProviderName(spec),
      apiBaseUrl,
      serviceName: getServiceName(spec),
      apiVersion: getVersion(spec),
      apiDescription: spec.spec.info.description,
      apiTitle: spec.spec.info.title,
      endpoints: numberOfEndpoints,
      sdkMethods: numberOfOperations,
      schemas: numberOfSchemas,
      parameters: numberOfParameters,
      contactUrl: getInfoContactUrl(spec),
      contactEmail: getInfoContactEmail(spec),
      getRequestSpecFilename: specFilename,
      originalSpecGetRequest: {
        url,
        regex,
      },
      difficultyScore: computeDifficultyScore(
        numberOfEndpoints,
        numberOfOperations,
        numberOfSchemas,
        numberOfParameters
      ),
    };
    console.log(`Writing post request spec to disk for ${key}`);
    fs.writeFileSync(
      path.join(getRequestSpecsDir, specFilename),
      yaml.dump(spec.spec)
    );
  }

  return db;
}

function extractJsonFromString(inputStr: string, regexPattern: string): any {
  // Convert the string pattern to a RegExp object
  const regex = new RegExp(regexPattern, "smg");

  // Use the match method to find the pattern
  const match = regex.exec(inputStr);

  if (!match) throw Error("No match found");
  // Extract the matched group which contains the JSON
  const jsonString = match[1];

  // Parse the extracted string into a JSON object
  return JSON.parse(jsonString);
}

async function main() {
  if (process.env.FILTER !== undefined && process.env.FILTER !== "") {
    await collectFilterAndSave();
    return;
  }
  console.log("Processing get requests");
  let getRequestDb = await collectFromGetRequests();
  console.log("Processing post requests");
  let postRequestDb = await collectFromPostRequests();
  console.log("Processing filtered specs");
  const openapiDirectoryDb = await processFiltered();
  const mergedDb = {
    specifications: {
      ...openapiDirectoryDb.specifications,
      ...postRequestDb.specifications,
      ...getRequestDb.specifications,
    },
  };
  console.log("Adding difficulty scores");
  const db = await addDifficulty(mergedDb);
  // delete specFolder if it exists
  fs.rmSync(specFolder, { recursive: true });
  // ensure specFolder exists
  fs.mkdirSync(specFolder, { recursive: true });
  console.log("Writing data to disk");
  writeData(db);
  console.log("Done!");
}

main();
