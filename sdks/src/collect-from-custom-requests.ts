import { SecuritySchemes, parseSpec } from "konfig-lib";
import path from "path";
import { Db } from "../scripts/collect";
import * as fs from "fs";
import deepmerge from "deepmerge";
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
  | { url: string; regex?: string; type: "GET" }
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

function parseOAS(oas: string, regex: string | undefined): any {
  if (regex !== undefined) {
    return extractJsonFromString(oas, regex);
  }
  try {
    return JSON.parse(oas);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return yaml.load(oas);
    }
  }
}

async function executeCustomRequest(key: string, customRequest: CustomRequest) {
  if ("type" in customRequest && customRequest.type === "GET") {
    const getRequest = customRequest;
    const { url, regex } = getRequest;
    console.log(`Processing get request for ${key}`);

    const rawString = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.text());

    const rawSpec = parseOAS(rawString, regex);

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
  "ynab.com": {
    type: "GET",
    url: "https://api.ynab.com/papi/open_api_spec.yaml",
  },
  "nytimes.com_books": {
    lambda: async () => {
      const rawSpecString = await (
        await fetch(
          "https://developer.nytimes.com/portals/api/sites/nyt-devportal/liveportal/apis/books-product/download_spec",
          { redirect: "follow" }
        )
      ).text();
      const fromYaml = yaml.load(rawSpecString);
      return JSON.stringify(fromYaml);
    },
  },
  "notion.com": {
    lambda: async () => {
      const urls = [
        "https://developers.notion.com/reference/create-a-token?json=on",
        "https://developers.notion.com/reference/patch-block-children?json=on",
        "https://developers.notion.com/reference/retrieve-a-block?json=on",
        "https://developers.notion.com/reference/get-block-children?json=on",
        "https://developers.notion.com/reference/update-a-block?json=on",
        "https://developers.notion.com/reference/delete-a-block?json=on",
        "https://developers.notion.com/reference/post-page?json=on",
        "https://developers.notion.com/reference/retrieve-a-page?json=on",
        "https://developers.notion.com/reference/retrieve-a-page-property?json=on",
        "https://developers.notion.com/reference/patch-page?json=on",
        "https://developers.notion.com/reference/create-a-database?json=on",
        "https://developers.notion.com/reference/post-database-query?json=on",
        "https://developers.notion.com/reference/retrieve-a-database?json=on",
        "https://developers.notion.com/reference/update-a-database?json=on",
        "https://developers.notion.com/reference/get-users?json=on",
        "https://developers.notion.com/reference/get-user?json=on",
        "https://developers.notion.com/reference/get-self?json=on",
        "https://developers.notion.com/reference/create-a-comment?json=on",
        "https://developers.notion.com/reference/retrieve-a-comment?json=on",
        "https://developers.notion.com/reference/post-search?json=on",
      ];
      const specs: object[] = [];
      for (const url of urls) {
        const rawSpecString = await fetch(url, {
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            pragma: "no-cache",
            "sec-ch-ua": '"Not_A Brand";v="8", "Chromium";v="120"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sentry-trace":
              "dce4d3ea8da447b7962c4e50a0a2eccb-a9cb60f78dd7f21a-0",
            "x-requested-with": "XMLHttpRequest",
            cookie:
              "XSRF-TOKEN=RTVFxI7GO63fcVw91fitervD; intercom-id-gpfdrxfd=a7e56783-d834-4130-a3ce-9b4cc750ecc8; intercom-device-id-gpfdrxfd=1ec4b6a8-ed93-4c7b-b85c-88a6a336068f; ekfls=0ddebe53-2d38-438c-839a-8d6bb1f6aa6d; intercom-session-gpfdrxfd=",
            Referer: "https://developers.notion.com/reference/update-a-block",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
          body: null,
          method: "GET",
        }).then((response) => response.text());
        const rawSpec = JSON.parse(rawSpecString);
        if (rawSpec.oasDefinition !== undefined) {
          console.log(`Got oasDefinition for ${url}`);
          specs.push(rawSpec.oasDefinition);
        } else {
          throw Error("Expecting oasDefinition to be defined");
        }
      }

      // deepmerge all specs but don't append arrays
      // instead, just use the source array
      const mergedSpec = deepmerge.all(specs, {
        arrayMerge: (destination, source) => source,
      });
      return JSON.stringify(mergedSpec);
    },
  },
  "zapier.com_actions": {
    type: "GET",
    url: "https://actions.zapier.com/api/v1/openapi.json",
  },
  "paylocity.com_weblink": {
    lambda: async () => {
      const rawSpecString = await fetch(
        "https://developer.paylocity.com/integrations/reference/add-employee?json=on",
        {
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            pragma: "no-cache",
            "sec-ch-ua": '"Not_A Brand";v="8", "Chromium";v="120"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sentry-trace":
              "881ac93cc8ba4055af185bdbe9b03eb1-a843912c87ed9d39-0",
            "x-requested-with": "XMLHttpRequest",
            cookie:
              "ekfls=a6ff2e0e-b152-46a9-8ba7-87e557e92053; cf_clearance=bvqKh8aSTOy54p2_IpW3KHRIhZLWXq9N8pIkhY9NvUk-1706916425-1-Aaui19FSzqSBA0o6+swFR+abGo9XudzgfMEfuewJti4sUgY3ahKx8XbGGYssdIHQ9LRMUF3t5PeDnDVnkqqDtf4=; ARRAffinity=63995d25f48e1ae329d94d56f78f963bebcfdec0bf2164c5175c25d1a9b15940; ARRAffinitySameSite=63995d25f48e1ae329d94d56f78f963bebcfdec0bf2164c5175c25d1a9b15940; at_check=true; mbox=session#d18d2ec1a2274b17ace7470fd5b08297#1706918653|PC#d18d2ec1a2274b17ace7470fd5b08297.35_0#1770161593",
            Referer:
              "https://developer.paylocity.com/integrations/reference/add-employee",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
          body: null,
          method: "GET",
        }
      ).then((response) => response.text());
      const rawSpec = JSON.parse(rawSpecString);
      if (rawSpec.oasDefinition !== undefined) {
        return JSON.stringify(rawSpec.oasDefinition);
      }
      throw Error("Expecting oasDefinition to be defined");
    },
  },
  "soundcloud.com": {
    type: "GET",
    url: "https://developers.soundcloud.com/docs/api/explorer/swagger-ui-init.js",
    regex: `"swaggerDoc": (.*),\n.*"customOptions"`,
    openapi: "3.0.3",
  },
  "qualtrics.com_survey": {
    type: "GET",
    url: "https://stoplight.io/api/v1/projects/qualtricsv2/publicapidocs/nodes/reference/surveyDefinitions.json?fromExportButton=true&snapshotType=http_service",
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
