import { SecuritySchemes, parseSpec } from "konfig-lib";
import path from "path";
import { Db } from "../scripts/collect";
import * as fs from "fs";
import yaml from "js-yaml";
import {
  computeDifficultyScore,
  customRequestSpecsDir,
  getSecuritySchemes,
  getCategories,
  getInfoContactEmail,
  getInfoContactUrl,
  getNumberOfEndpoints,
  getNumberOfOperations,
  getNumberOfParameters,
  getNumberOfSchemas,
  getOpenApiRaw,
  getProviderName,
  getServiceName,
  getVersion,
} from "../scripts/util";

/**
 * For describing a custom request to get an OAS
 */
export type CustomRequest = (
  | { url: string; regex: string }
  | { url: string; body: string }
  | { lambda: () => Promise<string> }
) & {
  securitySchemes?: SecuritySchemes;
  apiBaseUrl?: string;

  // for overriding "openapi" property
  // NOTE:
  // was useful because soundcloud API for some reason has 3.0.4 and we ensure "openapi" is either:
  // 3.0.0, 3.0.1, 3.0.2, 3.0.3, or 3.1.0
  // 3.0.4 doesn't even exist so what the heck...
  openapi?: string;
};

async function executeCustomRequest(key: string, customRequest: CustomRequest) {
  if ("regex" in customRequest) {
    const getRequest = customRequest;
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
    return rawSpecString;
  } else if ("body" in customRequest) {
    const postRequest = customRequest;
    const { url, body } = postRequest;
    console.log(`Processing post request for ${key}`);

    const rawSpecString = await fetch(url, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.text());
    return rawSpecString;
  } else if ("lambda" in customRequest) {
    const lambdaRequest = customRequest;
    console.log(`Processing lambda request for ${key}`);
    return await lambdaRequest.lambda();
  } else {
    throw Error("Unexpected custom request");
  }
}

const customRequests: Record<string, CustomRequest> = {
  "soundcloud.com": {
    url: "https://developers.soundcloud.com/docs/api/explorer/swagger-ui-init.js",
    regex: `"swaggerDoc": (.*),\n.*"customOptions"`,
    openapi: "3.0.3",
  },
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
  "snyk.com": {
    lambda: async () => {
      // GET request to: https://api.snyk.io/rest/openapi
      const versions = await fetch("https://api.snyk.io/rest/openapi").then(
        (res) => res.json()
      );
      const latestVersion = versions[versions.length - 1];
      return fetch(`https://api.snyk.io/rest/openapi/${latestVersion}`).then(
        (res) => res.text()
      );
    },
  },
};

export async function collectFromCustomRequests(): Promise<Db> {
  const db: Db = { specifications: {} };

  for (const key in customRequests) {
    const customRequest = customRequests[key];
    if (customRequest === undefined)
      throw Error("Expect customRequest to be defined");

    const rawSpecString = await executeCustomRequest(key, customRequest);

    if (rawSpecString === undefined) {
      throw Error("Expect rawSpecString to be defined");
    }

    const spec = await parseSpec(rawSpecString);
    const numberOfEndpoints = getNumberOfEndpoints(spec);
    const numberOfOperations = getNumberOfOperations(spec);
    const numberOfSchemas = getNumberOfSchemas(spec);
    const numberOfParameters = getNumberOfParameters(spec);

    // if getRequest.securitySchemes then also apply to spec
    if (customRequest.securitySchemes !== undefined) {
      if (spec.spec.components === undefined) spec.spec.components = {};
      spec.spec.components.securitySchemes =
        customRequest.securitySchemes as any;
      spec.spec.security = [
        Object.fromEntries(
          Object.keys(customRequest.securitySchemes).map((key) => [key, []])
        ),
      ];
    }

    let apiBaseUrl = spec.spec.servers?.[0]?.url;
    if (apiBaseUrl === undefined) {
      if (customRequest.apiBaseUrl !== undefined) {
        apiBaseUrl = customRequest.apiBaseUrl;
      } else {
        console.log(`❌ Skipping ${key} due to missing apiBaseUrl.`);
        continue;
      }
    }

    const specFilename = `${key}.yaml`;
    db.specifications[`from-custom-request_${key}`] = {
      providerName: getProviderName(spec),
      openApiRaw: getOpenApiRaw(spec),
      securitySchemes: getSecuritySchemes(spec, customRequest.securitySchemes),
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
      originalCustomRequest: customRequest,
      customRequestSpecFilename: specFilename,
      difficultyScore: computeDifficultyScore(
        numberOfEndpoints,
        numberOfOperations,
        numberOfSchemas,
        numberOfParameters
      ),
    };
    console.log(`Writing post request spec to disk for ${key}`);
    fs.writeFileSync(
      path.join(customRequestSpecsDir, specFilename),
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
