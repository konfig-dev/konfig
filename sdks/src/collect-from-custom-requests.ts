import {
  SecuritySchemes,
  parseSpec,
  recurseObject,
} from "../../generator/konfig-dash/packages/konfig-lib/dist";
import path from "path";
import { Db } from "../scripts/collect";
import * as fs from "fs-extra";
import deepmerge from "deepmerge";
import deepEqual from "deep-equal";
import yaml from "js-yaml";
import puppeteer, { Browser as PuppeteerBrowser } from "puppeteer";
import AdmZip from "adm-zip";
// @ts-ignore
import swaggerConverter from "swagger-converter";
import $RefParser from "@apidevtools/json-schema-ref-parser";
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
  browserDownloadsFolder,
  getCustomRequestLastFetched,
  saveCustomRequestLastFetched,
  processedCustomRequestCacheDir,
  dbFolder,
  githubZipDir,
} from "../scripts/util";
import { PuppeteerBlocker } from "@cliqz/adblocker-puppeteer";
import fetch from "cross-fetch"; // required 'fetch'
import { collectEndpointsFromReadme } from "./collect-endpoints-from-readme";
import { collectEndpointsFromMintlify } from "./collect-endpoints-from-mintlify";
import { transpilePostmanToOpenApiCached } from "./transpile-postman-to-openapi-cached";

/**
 * For describing a custom request to get an OAS
 */
export type CustomRequest = (
  | {
      url: string;
      defaultUrlForBrokenLinks?: string;
      regex?: string;
      type: "GET";
    }
  | { url: string; body: string }
  | {
      lambda: (args: {
        browser: PuppeteerBrowser;
        key: string;
      }) => Promise<string>;
      defaultUrlForBrokenLinks?: string;
    }
) & {
  doNotCollect?: boolean;
  securitySchemes?: SecuritySchemes;
  apiBaseUrl?: string;
  servers?: {
    url: string;
    description?: string;
    variables?: Record<
      string,
      { default: string; description?: string; enum?: string[] }
    >;
  }[];

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

export const REGEX_FOR_BROKEN_LINKS = /\([\/|#][{}%~\/\w-]+?\)/g;
async function executeCustomRequest(
  key: string,
  customRequest: CustomRequest,
  browser: PuppeteerBrowser
) {
  if ("type" in customRequest && customRequest.type === "GET") {
    const getRequest = customRequest;
    const { url, regex, defaultUrlForBrokenLinks } = getRequest;
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

    let rawSpecString = JSON.stringify(rawSpec);

    const urlWithoutSubpath = url.split("/").slice(0, 3).join("/");

    rawSpecString = rawSpecString.replaceAll(
      REGEX_FOR_BROKEN_LINKS,
      `(${defaultUrlForBrokenLinks ?? urlWithoutSubpath})`
    );

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
    let rawSpecString = await lambdaRequest.lambda({ browser, key });
    if ("defaultUrlForBrokenLinks" in customRequest) {
      rawSpecString = rawSpecString.replaceAll(
        REGEX_FOR_BROKEN_LINKS,
        `(${customRequest.defaultUrlForBrokenLinks})`
      );
    }
    return rawSpecString;
  } else {
    throw Error("Unexpected custom request");
  }
}

const customRequests: Record<string, CustomRequest> = {
  "multiwoven.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/Multiwoven/docs/main/api-reference/openapi.yml",
  },
  "clickup.com": {
    lambda: async () => {
      const url =
        "https://clickup.com/api/page-data/clickupreference/operation/GetAuthorizedTeams/page-data.json";
      const response = await fetch(url);
      const json = await response.json();
      const redocStoreStr = json.result.data.contentItem.data.redocStoreStr;
      const redocStore = JSON.parse(redocStoreStr);
      const oas = redocStore.definition.data;
      return JSON.stringify(oas);
    },
    defaultUrlForBrokenLinks: "https://clickup.com/api",
  },
  "onedoc.com": {
    type: "GET",
    url: "https://app.onedoclabs.com/api/api-doc",
    apiBaseUrl: "https://app.onedoclabs.com",
  },
  "baseten.co": {
    type: "GET",
    url: "https://api.baseten.co/v1/spec",
  },
  "dev.to": {
    type: "GET",
    url: "https://raw.githubusercontent.com/forem/forem/main/swagger/v1/api_v1.json",
  },
  "xyte.io": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://dev.xyte.io/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "hyperplane.ai": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.hyperplane.ai/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "clerk.com_Backend": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://clerk.com/docs/reference/backend-api",
        browser,
      });
    },
  },
  "circleci.com": {
    type: "GET",
    url: "https://circleci.com/api/v2/openapi.json",
  },
  "gitlab.com": {
    type: "GET",
    url: "https://gitlab.com/gitlab-org/gitlab/-/raw/master/doc/api/openapi/openapi.yaml",
  },
  "mailchimp.com": {
    lambda: async () => {
      const url = "https://api.mailchimp.com/schema/3.0/Swagger.json?expand";
      const rawSpecString = await fetch(url).then((res) => res.text());
      // replace every markdown link (e.g. "(URL)"") that starts with "(/" or "(#" with "(https://mailchimp.com/developer/)"
      const regex = /(\((\/|#).*?\))/g;
      return rawSpecString.replaceAll(
        regex,
        `(https://mailchimp.com/developer/)`
      );
    },
  },
  "docusign.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/docusign/eSign-OpenAPI-Specification/master/esignature.rest.swagger-v2.1.json",
  },
  "discourse.org": {
    type: "GET",
    url: "http://docs.discourse.org/openapi.json",
  },
  "elevenlabs.com": {
    type: "GET",
    url: "https://api.elevenlabs.io/openapi.json",
    apiBaseUrl: "https://api.elevenlabs.io",
  },
  "finicity.com": {
    type: "GET",
    url: "https://static.developer.mastercard.com/content/open-banking-us/swagger/openbanking-us.yaml",
  },
  "langfuse.com": {
    type: "GET",
    url: "https://cloud.langfuse.com/openapi-server.yml",
    servers: [
      { url: "https://cloud.langfuse.com", description: "EU" },
      { url: "https://us.cloud.langfuse.com", description: "US" },
    ],
  },
  "customer.io_JourneysApp": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        filename: "cio_journeys_app_api.json",
        url: "https://customer.io/docs/api/app/",
        browser,
      });
    },
  },
  "customer.io_JourneysTrack": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        filename: "cio_journeys_track_api.json",
        url: "https://customer.io/docs/api/track/",
        browser,
      });
    },
  },
  "getresponse.com": {
    type: "GET",
    url: "https://apireference.getresponse.com/open-api.json",
  },
  "customer.io_DatePipelines": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        filename: "cio_data_pipelines_api.json",
        url: "https://customer.io/docs/api/cdp/",
        browser,
      });
    },
  },
  // "retellai.com": {
  //   type: "GET",
  //   url: "https://raw.githubusercontent.com/RetellAI/docs/HEAD/openapi.yaml",
  // },
  "meilisearch.com": {
    type: "GET",
    url: "https://bump.sh/meilisearch/doc/meilisearch.yaml",
  },
  "nasa.gov_TechPort": {
    lambda: async () => {
      const url = "https://techport.nasa.gov/api/specification";
      return fetch(url).then((res) => res.text());
    },
  },
  "dots.dev": {
    type: "GET",
    url: "https://raw.githubusercontent.com/Send-Dots/dots-docs-v2/master/docs/v2.yaml",
  },
  "lob.com": {
    lambda: async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/lob/lob-openapi/main/dist/lob-api-bundled.yml"
      );
      let rawSpecString = await response.text();
      rawSpecString = rawSpecString.replaceAll(
        "#tag/Versioning-and-Changelog",
        "https://docs.lob.com/#tag/Versioning-and-Changelog"
      );
      rawSpecString = rawSpecString.replaceAll("((http", "(http");
      return rawSpecString;
    },
  },
  "adp.com_WorkforceNow": {
    lambda: async ({ key }) => {
      const postmanUrl =
        "https://raw.githubusercontent.com/adpllc/marketplace-sample-payloads/master/wfn/ADP%20WFN%20APIs.postman_collection.json";
      const postmanCollection = await fetch(postmanUrl).then((res) =>
        res.json()
      );
      const openapi = transpilePostmanToOpenApiCached({
        key,
        postmanCollection,
      });
      return JSON.stringify(openapi);
    },
  },
  "beamable.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.beamable.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "breezy.hr": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developer.breezy.hr/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  // "breathehr.com": {
  //   lambda: async () => {
  //     const baseUrl = "https://api.breathehr.com/v1/swagger_doc";
  //     const json = await fetch(baseUrl).then((res) => res.json());
  //     const jsons = [json];
  //     for (const endpoint of json.apis) {
  //       const path = endpoint.path;
  //       const json = await fetch(`${baseUrl}${path}`).then((res) => res.json());
  //       jsons.push(json);
  //     }

  //     // merge all JSONs
  //     const mergedSpec: any = deepmerge.all(jsons);

  //     const swagger2 = swaggerConverter.convert(mergedSpec.models, mergedSpec);

  //     return JSON.stringify(swagger2);
  //   },
  // },
  "bamboohr.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://documentation.bamboohr.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "alexishr.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.alexishr.com/",
        browser,
      });
    },
  },
  "copper.com": {
    lambda: async ({ key }) => {
      const postmanUrl =
        "https://developer.copper.com/download/copper_postman_collection.json";
      const postmanCollection = await fetch(postmanUrl).then((res) =>
        res.json()
      );
      const openapi = transpilePostmanToOpenApiCached({
        key,
        postmanCollection,
      });
      return JSON.stringify(openapi);
    },
  },
  "xero.com_Accounting": {
    type: "GET",
    url: "https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_accounting.yaml",
  },
  "beehiiv.com": {
    type: "GET",
    url: "https://stoplight.io/api/v1/projects/beehiiv/v2/nodes/reference/Swarm-Public-API.yaml?fromExportButton=true&snapshotType=http_service&deref=optimizedBundle",
  },
  "seyna.eu": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developers.seyna.eu/",
        filename: "openapi.json",
        browser,
      });
    },
  },
  "microsoft.com_Dynamics365BusinessCentral": {
    type: "GET",
    url: "https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v1.0/contracts/bcoas1.0.yaml",
  },
  // Couldn't parse this, kept hanging at "Parsing spec with SwaggerParser"
  // "microsoft.com_Graph": {
  //   type: "GET",
  //   url: "https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/master/openapi/v1.0/openapi.yaml",
  // },
  "freeagent.com": {
    apiBaseUrl: "https://api.freeagent.com",
    lambda: async ({ key }) => {
      const postmanUrl =
        "https://raw.githubusercontent.com/fac/postman-freeagent-api-collection/master/FreeAgent.postman_collection.json";
      const postmanCollection = await fetch(postmanUrl).then((res) =>
        res.json()
      );
      const openapi = transpilePostmanToOpenApiCached({
        key,
        postmanCollection,
      });
      return JSON.stringify(openapi);
    },
  },
  "withterminal.com": {
    lambda: async ({ key }) => {
      const postmanUrl =
        "https://raw.githubusercontent.com/terminal-api/postman/main/postman/terminal.postman_collection.json";
      const postmanCollection = await fetch(postmanUrl).then((res) =>
        res.json()
      );
      const openapi = transpilePostmanToOpenApiCached({
        key,
        postmanCollection,
      });
      return JSON.stringify(openapi);
    },
  },
  "1password.com_Partnership": {
    type: "GET",
    url: "https://i.1password.com/media/1password-partnership-api/partnership-api.yml",
  },
  "posthog.com": {
    type: "GET",
    url: "https://app.posthog.com/api/schema/",
    servers: [
      {
        url: "https://app.posthog.com",
        description: "US Cloud",
      },
      {
        url: "https://eu.posthog.com",
        description: "EU Cloud",
      },
    ],
  },
  "1password.com_Connect": {
    type: "GET",
    url: "https://i.1password.com/media/1password-connect/1password-connect-api.yaml",
  },
  "vimeo.com": {
    lambda: async () => {
      const response = await fetch("https://api.vimeo.com/?openapi=1", {
        headers: {
          Authorization: "bearer 428c282ac3d7bf40265e8700904bb85b",
        },
      });
      // remove all properties that start with the substring: "x-mill"
      const rawSpecString = await response.text();
      const parsedSpec = JSON.parse(rawSpecString);
      recurseObject(parsedSpec, ({ value }) => {
        if (value === undefined) return;
        if (typeof value !== "object") return;
        if (value === null) return;
        const keys = Object.keys(value);
        for (const key of keys) {
          if (key.startsWith("x-mill")) {
            delete value[key];
          }
        }
      });
      return JSON.stringify(parsedSpec);
    },
  },
  "svix.com": {
    lambda: async () => {
      const url = "https://api.svix.com/api/v1/openapi.json";
      const response = await fetch(url);
      const rawSpecString = await response.text();
      const parsedSpec = JSON.parse(rawSpecString);

      // Remove line that includes "<SecurityDefinitions />" from api description
      parsedSpec.info.description = parsedSpec.info.description.replace(
        "<SecurityDefinitions />",
        ""
      );
      return JSON.stringify(parsedSpec);
    },
  },
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
  "baremetrics.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.baremetrics.com/reference",
      });
      console.log(urls);
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "vantage.sh": {
    type: "GET",
    url: "https://api.vantage.sh/v2/swagger.json",
  },
  "seel.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developer.seel.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "notion.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.notion.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "synclabs.so": {
    type: "GET",
    url: "https://api.synclabs.so/playground-json",
    apiBaseUrl: "https://api.synclabs.so",
  },
  "zapier.com_actions": {
    type: "GET",
    url: "https://actions.zapier.com/api/v1/openapi.json",
  },
  "zapier.com_Embed": {
    type: "GET",
    url: "https://stoplight.io/api/v1/projects/zapier/public-api/nodes/spec/reference/API.yaml?fromExportButton=true&snapshotType=http_service&deref=optimizedBundle",
  },
  "insightly.com": {
    type: "GET",
    url: "https://api.na1.insightly.com/v3.1/swagger/docs/v3.1",
  },
  "pipedrive.com": {
    type: "GET",
    url: "https://developers.pipedrive.com/docs/api/v1/openapi.yaml",
  },
  "salesflare.com": {
    type: "GET",
    url: "https://api.salesflare.com/openapi.json",
  },
  "pipelinersales.com": {
    type: "GET",
    url: "https://stoplight.io/api/v1/projects/pipeliner/api-docs/nodes/openapi.json?fromExportButton=true&snapshotType=http_service&deref=optimizedBundle",
  },
  "keap.com": {
    type: "GET",
    url: "https://api.infusionsoft.com/info-service/crm/docs/rest/V1",
  },
  "intercom.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/intercom/Intercom-OpenAPI/main/descriptions/2.9/api.intercom.io.yaml",
  },
  "spotdraft.com": {
    type: "GET",
    url: "https://api.spotdraft.com/api/docs/?format=openapi",
  },
  "shortcut.com": {
    type: "GET",
    url: "https://developer.shortcut.com/api/rest/v3/shortcut.swagger.json",
  },
  "kustomer.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developer.kustomer.com/kustomer-api-docs/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "ironcladapp.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/Ironclad/openapi/main/openapi/openapi.json",
  },
  "hubspot.com_CRM": {
    lambda: async () => {
      const indexUrl = "https://api.hubspot.com/api-catalog-public/v1/apis";

      // fetch and parse for result[name=CRM].features.openapi
      const response = await fetch(indexUrl);
      const json = await response.json();
      const openapiUrls = json.results.find(
        (item: any) => item.name === "CRM"
      ).features;

      console.log(openapiUrls);

      // fetch all openapi files and merge
      const openapiSpecs = (
        await Promise.all(
          Object.values(openapiUrls).map(async ({ openAPI }: any) => {
            try {
              const response = await fetch(openAPI);
              if (!response.ok) {
                if (response.status === 404) {
                  console.log(`OpenAPI not found at ${openAPI}. Skipping...`);
                  return;
                } else {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
              }
              return response.json();
            } catch (error) {
              console.error("Fetch error:", error);
            }
          })
        )
      ).filter((spec) => spec !== undefined && spec !== null);

      // write openapiSpecs to file
      fs.writeFileSync(
        "openapiSpecs.json",
        JSON.stringify(openapiSpecs, null, 2)
      );

      // merge
      const mergedSpec = openapiSpecs.reduce((acc, curr) => {
        return deepmerge.all([acc, curr], {
          arrayMerge: (acc, curr) => {
            // merge and deduplicate object that are deep equal
            const deduplicated = acc.filter(
              (item) => !curr.some((currItem) => deepEqual(item, currItem))
            );
            return deduplicated.concat(curr);
          },
        });
      }, {});

      return JSON.stringify(mergedSpec, null, 2);
    },
  },
  "lucca-hr.com_Organization": {
    type: "GET",
    url: "https://stoplight.io/api/v1/projects/lucca/lucca-legacyapi/nodes/reference/Organization-v3.yaml?fromExportButton=true&snapshotType=http_service&deref=optimizedBundle",
  },
  "lucca-hr.com_Directory": {
    type: "GET",
    url: "https://stoplight.io/api/v1/projects/lucca/lucca-legacyapi/nodes/reference/Directory-v3.yaml?fromExportButton=true&snapshotType=http_service&deref=optimizedBundle",
  },
  "lucca-hr.com_Figgo": {
    type: "GET",
    url: "https://stoplight.io/api/v1/projects/lucca/lucca-legacyapi/nodes/reference/Figgo-v3.yaml?fromExportButton=true&snapshotType=http_service&deref=optimizedBundle",
  },
  "lucca-hr.com_TimmiTimesheet": {
    type: "GET",
    url: "https://stoplight.io/api/v1/projects/lucca/lucca-legacyapi/nodes/reference/Timmi-Timesheet-v3.yaml?fromExportButton=true&snapshotType=http_service&deref=optimizedBundle",
  },
  "lucca-hr.com_CleemyExpenses": {
    type: "GET",
    url: "https://stoplight.io/api/v1/projects/lucca/lucca-legacyapi/nodes/reference/Cleemy-Expenses-v3.yaml?fromExportButton=true&snapshotType=http_service&deref=optimizedBundle",
  },
  "suprsend.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.suprsend.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "okta.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/okta/okta-management-openapi-spec/master/dist/spec.yaml",
  },
  "payfit.com": {
    lambda: async () => {
      const url = "https://developers.payfit.io/openapi";
      // get HTML and find href fro <a> that contains "openapi" and download OAS from there
      const htmlResponse = await fetch(url);
      const html = await htmlResponse.text();
      const subpath = html.match(/href="([^"]+)"/)?.[1];
      if (!subpath) {
        throw Error("Could not find openapi url");
      }
      const openapiUrl = `https://developers.payfit.io/${subpath}`;
      const response = await fetch(openapiUrl);
      return response.text();
    },
  },
  "peoplehr.com": {
    lambda: async () => {
      const url = "https://apidocs.peoplehr.com/demo/swaggerNew.json";

      // get rawSpecString
      const response = await fetch(url);
      let rawSpecString = await response.text();

      // remove ",," from rawSpecString
      rawSpecString = rawSpecString.replaceAll(",,", ",");

      return rawSpecString;
    },
  },
  "signwell.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.signwell.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "officient.io": {
    lambda: async () => {
      const url = "https://apidocs.officient.io/openapi";
      // get HTML and find href fro <a> that contains "openapi" and download OAS from there
      const htmlResponse = await fetch(url);
      const html = await htmlResponse.text();
      const subpath = html.match(/href="([^"]+)"/)?.[1];
      if (!subpath) {
        throw Error("Could not find openapi url");
      }
      const openapiUrl = `https://apidocs.officient.io/${subpath}`;
      const response = await fetch(openapiUrl);
      return response.text();
    },
  },
  "namely.com": {
    lambda: async () => {
      const url =
        "https://stoplight.io/api/v1/projects/namely/namely-api/nodes/reference/openapi.json?fromExportButton=true&snapshotType=http_service&deref=optimizedBundle";
      const response = await fetch(url);
      let rawSpecString = await response.text();

      // replace "#/definitions/Team" with "#/definitions/team"
      rawSpecString = rawSpecString.replaceAll(
        "#/definitions/Team",
        "#/definitions/team"
      );

      // replace "#/definitions/team%20Link" with "#/definitions/Team%20Link"
      rawSpecString = rawSpecString.replaceAll(
        "#/definitions/team%20Link",
        "#/definitions/Team%20Link"
      );

      return rawSpecString;
    },
    servers: [
      {
        url: "https://{company}.namely.com/api/v1",
        variables: { company: { default: "your-company" } },
      },
    ],
  },
  "httpbin.org": {
    type: "GET",
    url: "https://httpbin.org/spec.json",
  },
  "paylocity.com_weblink": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developer.paylocity.com/integrations/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "onelogin.com": {
    type: "GET",
    url: "https://app.swaggerhub.com/apiproxy/registry/OneLogin-Auth/onelogin-api/1.0.0-oas3",
  },
  "visier.com_Authentication": {
    type: "GET",
    url: "https://raw.githubusercontent.com/visier/openapi-clients/main/res/authentication-apis.yaml",
    servers: [
      {
        url: "https://{vanity-name}.api.visier.io",
        variables: {
          "vanity-name": {
            default: "vanity",
          },
        },
      },
    ],
  },
  "visier.com_ConsolidatedAnalytics": {
    type: "GET",
    url: "https://raw.githubusercontent.com/visier/openapi-clients/main/res/consolidated-analytics-apis.yaml",
    servers: [
      {
        url: "https://{vanity-name}.api.visier.io",
        variables: {
          "vanity-name": {
            default: "vanity",
          },
        },
      },
    ],
  },
  "visier.com_DataHandling": {
    type: "GET",
    url: "https://raw.githubusercontent.com/visier/openapi-clients/main/res/data-handling-apis.yaml",
    servers: [
      {
        url: "https://{vanity-name}.api.visier.io",
        variables: {
          "vanity-name": {
            default: "vanity",
          },
        },
      },
    ],
  },
  "visier.com_DataIntake": {
    type: "GET",
    url: "https://raw.githubusercontent.com/visier/openapi-clients/main/res/data-intake-apis.yaml",
    servers: [
      {
        url: "https://{vanity-name}.api.visier.io",
        variables: {
          "vanity-name": {
            default: "vanity",
          },
        },
      },
    ],
  },
  "visier.com_DocumentSearch": {
    type: "GET",
    url: "https://raw.githubusercontent.com/visier/openapi-clients/main/res/document-search-apis.yaml",
    servers: [
      {
        url: "https://{vanity-name}.api.visier.io",
        variables: {
          "vanity-name": {
            default: "vanity",
          },
        },
      },
    ],
  },
  "visier.com_ModelQuery": {
    type: "GET",
    url: "https://raw.githubusercontent.com/visier/openapi-clients/main/res/document-search-apis.yaml",
    servers: [
      {
        url: "https://{vanity-name}.api.visier.io",
        variables: {
          "vanity-name": {
            default: "vanity",
          },
        },
      },
    ],
  },
  "visier.com_ObjectConfiguration": {
    type: "GET",
    url: "https://raw.githubusercontent.com/visier/openapi-clients/main/res/object-configuration-apis.yaml",
    servers: [
      {
        url: "https://{vanity-name}.api.visier.io",
        variables: {
          "vanity-name": {
            default: "vanity",
          },
        },
      },
    ],
  },
  "visier.com_PermissionManagement": {
    type: "GET",
    url: "https://raw.githubusercontent.com/visier/openapi-clients/main/res/permission-management-apis.yaml",
    servers: [
      {
        url: "https://{vanity-name}.api.visier.io",
        variables: {
          "vanity-name": {
            default: "vanity",
          },
        },
      },
    ],
  },
  "visier.com_ProfileManagement": {
    type: "GET",
    url: "https://raw.githubusercontent.com/visier/openapi-clients/main/res/profile-management-apis.yaml",
    servers: [
      {
        url: "https://{vanity-name}.api.visier.io",
        variables: {
          "vanity-name": {
            default: "vanity",
          },
        },
      },
    ],
  },
  "visier.com_TenantManagement": {
    type: "GET",
    url: "https://raw.githubusercontent.com/visier/openapi-clients/main/res/tenant-management-apis.yaml",
    servers: [
      {
        url: "https://{vanity-name}.api.visier.io",
        variables: {
          "vanity-name": {
            default: "vanity",
          },
        },
      },
    ],
  },
  "visier.com_UserManagement": {
    type: "GET",
    url: "https://raw.githubusercontent.com/visier/openapi-clients/main/res/user-management-apis.yaml",
    servers: [
      {
        url: "https://{vanity-name}.api.visier.io",
        variables: {
          "vanity-name": {
            default: "vanity",
          },
        },
      },
    ],
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
  "shipengine.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/ShipEngine/shipengine-openapi/master/openapi.yaml",
  },
  "slack.com_web": {
    lambda: async () => {
      // const url =
      //   "https://raw.githubusercontent.com/slackapi/slack-api-specs/master/web-api/slack_web_openapi_v2.json";
      const url =
        "https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/slack.com/1.7.0/openapi.yaml";
      const response = await fetch(url);
      let jsonString = await response.text();

      // replace every markdown link (e.g. "(URL)"") that starts with "(/" or "(#" with "(https://slack.dev)"
      const regex = /(\((\/|#).*?\))/g;
      jsonString = jsonString.replaceAll(regex, `(https://slack.dev)`);

      return jsonString;
    },
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
  "zuora.com": {
    type: "GET",
    url: "https://developer.zuora.com/yaml/zuora_openapi.yaml",
  },
  "launchdarkly.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://apidocs.launchdarkly.com",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "brex.com_Team": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/team_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "brex.com_Onboarding": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/onboarding_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "gusto.com_EmbeddedPayroll": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.gusto.com/embedded-payroll/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "intellihr.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developers.intellihr.io/docs/v1/",
        filename: "openapi.json",
        browser,
      });
    },
  },
  "hibob.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://apidocs.hibob.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "slope.so": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.slope.so/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "gusto.com_AppIntegrations": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.gusto.com/app-integrations/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "tribepad.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.tribepad.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "workable.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://workable.readme.io/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "radix.ai": {
    type: "GET",
    url: "https://api.talentapi.com/openapi.json",
    apiBaseUrl: "https://api.talentapi.com",
  },
  "talentlyft.com_Customers": {
    type: "GET",
    url: "https://api.talentlyft.com/swagger/v2/swagger.json",
    apiBaseUrl: "https://api.talentlyft.com",
  },
  "factorialhr.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://apidoc.factorialhr.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "brex.com_Payments": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/payments_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "personio.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/personio/api-docs/master/personio-personnel-data-api-oa3.yaml",
  },
  "pingidentity.com_PingDirectory": {
    type: "GET",
    url: "https://raw.githubusercontent.com/pingidentity/pingdirectory-go-client/HEAD/configurationapi/api/openapi.yaml",
  },
  "proliant.com": {
    type: "GET",
    url: "https://www.readypayonline.com/CompanyAPI/swagger/docs/v1",
  },
  "remote.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://gateway.remote.com/v1/docs/openapi.html",
        filename: "openapi.json",
        browser,
      });
    },
  },
  "brex.com_Transactions": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/transactions_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "brex.com_Expenses": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/expenses_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "brex.com_Webhooks": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/webhooks_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "brex.com_Budgets": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/budgets_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "griffin.com": {
    type: "GET",
    url: "http://docs.griffin.com/redocusaurus/plugin-redoc-0.yaml",
  },
  "resend.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/resend/resend-openapi/main/resend.yaml",
  },
  "klarna.com_payments": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.klarna.com/api/payments/",
        filename: "swagger.json",
        browser,
        enableAdBlock: true,
      });
    },
  },
  "klarna.com_checkout": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.klarna.com/api/checkout/",
        filename: "swagger.json",
        browser,
        enableAdBlock: true,
      });
    },
  },
  "justeattakeaway.com": {
    type: "GET",
    url: "https://uk.api.just-eat.io/docs/openapi.yaml",
    defaultUrlForBrokenLinks: "https://uk.api.just-eat.io/docs/",
  },
  "hetzner.com": {
    type: "GET",
    url: "https://docs.hetzner.cloud/spec.json",
  },
  "box.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/box/box-openapi/en/openapi.json",
  },
  "api.video": {
    type: "GET",
    url: "https://raw.githubusercontent.com/apivideo/api.video-documentation/main/openapi.yaml",
  },
  "appwrite.io_Client": {
    type: "GET",
    url: "https://raw.githubusercontent.com/appwrite/appwrite/main/app/config/specs/open-api3-latest-client.json",
  },
  "appwrite.io_Server": {
    type: "GET",
    url: "https://raw.githubusercontent.com/appwrite/appwrite/main/app/config/specs/open-api3-latest-server.json",
  },
  "appwrite.io_Console": {
    type: "GET",
    url: "https://raw.githubusercontent.com/appwrite/appwrite/main/app/config/specs/open-api3-latest-console.json",
  },
  "asana.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml",
  },
  "oysterhr.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.oysterhr.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "quivr.app": {
    type: "GET",
    url: "https://api.quivr.app/openapi.json",
    apiBaseUrl: "https://api.quivr.app",
  },
  "paycor.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developers.paycor.com/explore",
        browser,
      });
    },
  },
  "paychex.com": {
    lambda: async () => {
      // fetch HTML from url and parse for spec-url at:
      // <redoc spec-url=https://developer.paychex.com/sites/default/files/apidocument/openapi-merge-develop.114.json></redoc>
      const url = "https://developer.paychex.com/documentation";
      const response = await fetch(url);
      const html = await response.text();
      const regex = /<redoc spec-url=(.*?)>/;
      const match = html.match(regex);
      if (!match) throw Error("Expecting spec-url to be defined");
      const specUrl = match[1];
      console.log(specUrl);
      return fetch(specUrl).then((res) => res.text());
    },
  },
  // "oracle.com_HumanCapitalManagement": {
  //   doNotCollect: true,
  //   lambda: async () => {
  //     const url =
  //       "https://docs.oracle.com/en/cloud/saas/human-resources/24a/farws/openapi.json";
  //     let rawSpecString = await fetch(url).then((res) => res.text());
  //     rawSpecString = rawSpecString.replaceAll(
  //       `"openapi":"3.0"`,
  //       `"openapi":"3.0.0"`
  //     );
  //     return rawSpecString;
  //   },
  //   servers: [
  //     {
  //       url: "https://${server}/hcmRestApi/resources/11.13.18.05",
  //       description: "HCM API",
  //       variables: {
  //         server: { default: "servername.fa.us2.oraclecloud.com" },
  //       },
  //     },
  //   ],
  // },
  "hsbc.com_AccountInformationCE": {
    lambda: async ({ browser }) => {
      const url =
        "https://develop.hsbc.com/ob-api-documentation/account-information-ce-hsbcnet/endpoints";
      const anchorSelector = "a.apidownloadlink";

      // open page to url and grab "href" attribute from anchorSelector
      // then fetch the file
      const page = await browser.newPage();
      await page.goto(url);
      const href = await page.$eval(anchorSelector, (el) =>
        el.getAttribute("href")
      );
      if (href === null) throw Error("Expecting href to be defined");
      const rawSpecString = await fetch(`https://develop.hsbc.com${href}`).then(
        (res) => res.text()
      );
      return rawSpecString;
    },
  },
  "zoom.us_meeting": {
    lambda: async () => {
      const url =
        "https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#overview";

      // Launch a browser instance
      const browser = await puppeteer.launch({ headless: "new" });
      const page = await browser.newPage();

      // Navigate to the page
      await page.goto(url, { waitUntil: "networkidle0" }); // Wait until network is idle

      // Get the content of the page after all JavaScript has executed
      const html = await page.evaluate(
        () => document.documentElement.outerHTML
      );

      const marker = "data:application/json;base64,";
      const start = html.indexOf(marker);
      const end = html.indexOf('"', start);
      const base64 = html.slice(start + marker.length, end);
      let json = Buffer.from(base64, "base64").toString("utf-8");

      // Close the browser
      await browser.close();

      const toReplace = [
        "(/api-reference/zoom-api/methods#operation/groups)",
        "(/api-reference/zoom-api/methods#operation/users)",
        "(/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid)",
        "(/docs/api-reference/using-zoom-apis#meeting-id-and-uuid)",
        "(/docs/api-reference/zoom-api/ma#operation/users)",
        "(/docs/api-reference/zoom-api/methods#operation/meeting)",
        "(/docs/api-reference/zoom-api/methods#operation/meetingRegistrants)",
        "(/docs/api-reference/zoom-api/methods#operation/webinarCreate)",
        "(/docs/api/rest/reference/zoom-api/methods#operation/webinar)",
        "(/docs/api-reference/zoom-api/methods#operation/webinar)",
      ];

      for (const substring of toReplace) {
        json = json.replaceAll(substring, `(https://developers.zoom.us)`);
      }

      // replace every markdown link (e.g. "(URL)"") that starts with "/docs/api" with "(https://developers.zoom.us)"
      const regex = /(\(\/docs\/api.*?\))/g;
      json = json.replaceAll(regex, `(https://developers.zoom.us)`);

      return json;
    },
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
  "clever.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/Clever/swagger-api/master/v3.1.yml",
  },
  "uploadthing.com": {
    type: "GET",
    url: "https://uploadthing.com/api/openapi-spec.json",
  },
  "digitalocean.com": {
    type: "GET",
    url: "https://api-engineering.nyc3.cdn.digitaloceanspaces.com/spec-ci/DigitalOcean-public.v2.yaml",
  },
  "spotify.com_1.0.0": {
    lambda: async () => {
      const response = await fetch(
        "https://developer.spotify.com/_data/documentation/web-api/reference/open-api-schema.yml"
      );
      let rawSpecString = await response.text();
      rawSpecString = rawSpecString
        .replaceAll("policies:", "")
        .replaceAll("$ref: '../policies.yaml'", "");
      return rawSpecString;
    },
  },
  "jina.ai": {
    type: "GET",
    url: "https://api.jina.ai/openapi.json",
    apiBaseUrl: "https://api.jina.ai",
  },
  "lambdalabs.com": {
    type: "GET",
    url: "https://cloud.lambdalabs.com/static/api/v1/openapi.yaml",
  },
  "iris.co.uk_Cascade": {
    type: "GET",
    url: "https://swagger.hrapi.co.uk/swagger.json",
  },
  "jumpcloud.com": {
    type: "GET",
    url: "https://docs.jumpcloud.com/api/2.0/index.yaml",
  },
  "sage.com": {
    type: "GET",
    url: "https://developer.sage.com/hr/reference/sage-hr-v1.0.swagger.yml",
  },
  "keka.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.keka.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "induced.ai": {
    type: "GET",
    url: "https://raw.githubusercontent.com/inducedai/docs/main/openapi.json",
  },
  // "tavus.io": {
  //   lambda: async () => {
  //     const urls = await collectEndpointsFromMintlify({
  //       url: "https://docs.tavusapi.com/api-reference/phoenix-replica-model/create-replica",
  //     });
  //     return downloadOpenApiSpecFromMintlify({ urls });
  //   },
  // },
  // "pulze.ai": {
  //   lambda: async () => {
  //     const urls = await collectEndpointsFromMintlify({
  //       url: "https://docs.pulze.ai/api-reference/chat-completions",
  //     });
  //     return downloadOpenApiSpecFromMintlify({ urls });
  //   },
  //   apiBaseUrl: "https://api.pulze.ai",
  // },
  // "getpartna.com": {
  //   lambda: async () => {
  //     const urls = await collectEndpointsFromMintlify({
  //       url: "https://docs.getpartna.com/api-reference/endpoint/biz/retrieve-users-transaction-records",
  //     });
  //     return downloadOpenApiSpecFromMintlify({ urls });
  //   },
  // },
  "crowdsec.net": {
    type: "GET",
    url: "https://raw.githubusercontent.com/crowdsecurity/crowdsec/master/pkg/models/localapi_swagger.yaml",
  },
  "crowd4cash.ch": {
    type: "GET",
    url: "https://api2.crowd4cash.ch/swagger/v2/swagger.json",
    apiBaseUrl: "https://api2.crowd4cash.ch/",
  },
  "payfactory.io": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://payfactory.readme.io/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "charthop.com": {
    type: "GET",
    url: "https://api.charthop.com/swagger.json",
    apiBaseUrl: "https://api.charthop.com",
  },
  "clayhr.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://clayhr.readme.io/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "helcim.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://devdocs.helcim.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "homerun.co": {
    lambda: async () => {
      const url = "https://developers.homerun.co/";

      // get raw HTML from url
      const html = await fetch(url).then((res) => res.text());

      // grab contents of script tag using xpath
      const scriptMatch = html.match(/<script>(.*?)<\/script>/s);
      const script = scriptMatch ? scriptMatch[1] : null;

      // find line that includes __redoc_state and evaluate it
      const stateMatch = script
        ?.split("\n")
        .find((line) => line.includes("__redoc_state"));
      let state = stateMatch ? stateMatch : null;
      if (!state) throw Error("Expecting state to be defined");

      state = state.replace("const __redoc_state = ", "");
      // remove last character
      state = state.trim().slice(0, -1);

      const result = JSON.parse(state).spec.data;

      console.log(result);

      // parse JSON from script
      return JSON.stringify(result, null, 2);
    },
  },
  "pinpointhq.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.pinpointhq.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "jobsoid.com": {
    type: "GET",
    url: "https://apidocs.jobsoid.com/swagger.json",
  },
  "jobadder.com": {
    type: "GET",
    url: "https://api.jobadder.com/v2/openapi.json",
  },
  "dropbox.com_Sign": {
    type: "GET",
    url: "https://raw.githubusercontent.com/hellosign/hellosign-openapi/main/openapi.yaml",
  },
  "2c2p.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developer.2c2p.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "tremendous.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.tremendous.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "fastspring.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developer.fastspring.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "agrimetrics.co.uk": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developer.agrimetrics.co.uk/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "nvidia.com_NIM": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.api.nvidia.com/nim/reference",
      });
      return await downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "nvidia.com_CloudFunctions": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.api.nvidia.com/cloud-functions/reference",
      });
      return await downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "unstructured.io": {
    type: "GET",
    url: "https://raw.githubusercontent.com/Unstructured-IO/unstructured-api/main/openapi.json",
  },
  "deel.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developer.deel.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "cyberark.com_Conjur": {
    lambda: async () => {
      const zipUrl =
        "https://github.com/cyberark/conjur-openapi-spec/archive/refs/heads/main.zip";
      const dir = path.join(githubZipDir, "cyberark.com_Conjur");
      const zipDir = path.join(dir, "zip");
      const unzippedDir = path.join(dir, "unzipped");

      // ensure folder exists
      fs.ensureDirSync(dir);
      fs.ensureDirSync(zipDir);
      fs.ensureDirSync(unzippedDir);

      const zipPath = path.join(zipDir, "repo.zip");
      const axios = require("axios");
      const writer = fs.createWriteStream(zipPath);

      const response = await axios({
        url: zipUrl,
        method: "GET",
        responseType: "stream",
      });

      response.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on("finish", resolve);
        writer.on("error", reject);
      });

      const zip = new AdmZip(zipPath);
      zip.extractAllTo(unzippedDir, false);

      const openapi = path.join(
        unzippedDir,
        "conjur-openapi-spec-main",
        "spec",
        "openapi.yml"
      );

      const bundled = await $RefParser.bundle(openapi);

      return JSON.stringify(bundled, null, 2);
    },
  },
  "unit.co": {
    lambda: async () => {
      const zipUrl =
        "https://github.com/unit-finance/openapi-unit-sdk/archive/refs/heads/main.zip";

      // download zip and unzip to db/github-zip-downloads/unit.co/
      const dir = path.join(githubZipDir, "unit.co");
      const zipDir = path.join(dir, "zip");
      const unzippedDir = path.join(dir, "unzipped");

      // ensure folder exists
      fs.ensureDirSync(dir);
      fs.ensureDirSync(zipDir);
      fs.ensureDirSync(unzippedDir);

      // download from zipUrl to dir/zip
      const zipPath = path.join(zipDir, "repo.zip");
      const axios = require("axios");
      const writer = fs.createWriteStream(zipPath);

      const response = await axios({
        url: zipUrl,
        method: "GET",
        responseType: "stream",
      });

      response.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on("finish", resolve);
        writer.on("error", reject);
      });

      // unzip to dir/unzipped
      const zip = new AdmZip(zipPath);
      zip.extractAllTo(unzippedDir, false);

      const openapi = path.join(
        unzippedDir,
        "openapi-unit-sdk-main",
        "openapi.json"
      );

      const bundled = await $RefParser.bundle(openapi);

      return JSON.stringify(bundled, null, 2);
    },
  },
  "front.com_Core": {
    type: "GET",
    url: "https://raw.githubusercontent.com/frontapp/front-api-specs/main/core-api/core-api.json",
  },
  "front.com_Channel": {
    type: "GET",
    url: "https://raw.githubusercontent.com/frontapp/front-api-specs/main/channel-api/channel-api.json",
  },
  "browsercat.com": {
    type: "GET",
    url: "https://api.browsercat.com/openapi.json",
  },
  "pay.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://apiref.pay.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "ukg.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developer.ukg.com/hcm/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "activecampaign.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.activecampaign.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "affinity.co": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.affinity.co/",
        browser,
      });
    },
  },
  // "workday.com_Staffing": {
  //   type: "GET",
  //   url: "https://community.workday.com/sites/default/files/file-hosting/restapi/staffing_v6_20240323_oas2.json",
  // },
  // "workday.com_PerformanceEnablement": {
  //   type: "GET",
  //   url: "https://community.workday.com/sites/default/files/file-hosting/restapi/performanceEnablement_v5_20240323_oas2.json",
  // },
  // "workday.com_Person": {
  //   type: "GET",
  //   url: "https://community.workday.com/sites/default/files/file-hosting/restapi/person_v4_20240323_oas2.json",
  // },
  // "squareup.com": {
  //   lambda: async () => {
  //     const url =
  //       "https://raw.githubusercontent.com/square/connect-api-specification/master/api.json";
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     recurseObject(json, ({ value }) => {
  //       /*
  //       {
  //         "type": "object",
  //         "additionalProperties": {
  //           "$ref": "#/definitions/LocationCustomAttributeDeleteRequest"
  //         },
  //         "description": "The data used to update the `CustomAttribute` objects.\nThe keys must be unique and are used to map to the corresponding response."
  //       }
  //       */
  //       /*
  //       {
  //       "type": "object",
  //       "additionalProperties": {
  //         "$ref": "#/definitions/LocationCustomAttributeDeleteResponse"
  //       },
  //       "description": "A map of responses that correspond to individual delete requests. Each response has the\nsame key as the corresponding request."
  //       }
  //       */
  //       // find object that matches above and remove additionalProperties
  //       if (typeof value !== "object") return;
  //       if (value === null) return;
  //       if (value.type !== "object") return;
  //       if (!value.additionalProperties) return;
  //       if (
  //         typeof value.additionalProperties === "object" &&
  //         "$ref" in value.additionalProperties
  //       )
  //         delete value.additionalProperties;
  //     });
  //     return JSON.stringify(json, null, 2);
  //   },
  // },
  "sesamehr.com": {
    type: "GET",
    url: "https://apidocs.sesametime.com/index.json",
  },
  "7shifts.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.7shifts.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "atlassian.com_BitBucket": {
    type: "GET",
    url: "https://dac-static.atlassian.com/cloud/bitbucket/swagger.v3.json",
  },
  "height.app": {
    type: "GET",
    url: "https://height-api.xyz/redocusaurus/default.yaml",
  },
  "hive.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.hive.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "atlassian.com_Jira": {
    type: "GET",
    url: "https://dac-static.atlassian.com/cloud/jira/platform/swagger-v3.v3.json",
  },
  "gorgias.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.gorgias.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "gladly.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.gladly.com/rest/",
        browser,
      });
    },
  },
  "dixa.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.dixa.io/openapi/dixa-api/v1/overview/",
        browser,
      });
    },
  },
  "nocodb.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/nocodb/nocodb/HEAD/packages/nocodb/src/schema/swagger-v2.json",
  },
  "coalesce.io": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.coalesce.io/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "revenium.io": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://revenium.readme.io/reference",
      });
      return await downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "clickfunnels.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.myclickfunnels.com/reference",
      });
      return await downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "zendesk.com": {
    type: "GET",
    url: "https://developer.zendesk.com/zendesk/oas.yaml",
  },
  "cornerstoneondemand.com": {
    type: "GET",
    url: "https://developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/rest-api/swagger/swagger.json",
  },
  "ashbyhq.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.ashbyhq.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "teamwork.com": {
    type: "GET",
    url: "https://contento-assets.s3.eu-west-1.amazonaws.com/oas/teamwork_docs/projects/reference/projects-api-v3.oas2.yml",
    servers: [
      {
        url: "https://{site_name}.teamwork.com",
        variables: { site_name: { default: "your-site" } },
      },
    ],
  },
  "kenjo.io": {
    type: "GET",
    url: "https://static.kenjo.io/kenjo-api.yml",
  },
  "sumsub.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.sumsub.com/reference",
      });
      return await downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "validifi.com": {
    lambda: async ({ key }) => {
      const postmanUrl =
        "https://portal.ribbit.ai/resources/RIBBIT%20API_v4.postman_collection.json";
      const postmanCollection = await fetch(postmanUrl).then((res) =>
        res.json()
      );
      const openapi = transpilePostmanToOpenApiCached({
        key,
        postmanCollection,
      });
      return JSON.stringify(openapi);
    },
  },
  "proovid.com": {
    type: "GET",
    url: "https://proovidapi.azurewebsites.net/swagger/v1/swagger.json",
    apiBaseUrl: "https://proovidapi.azurewebsites.net/",
  },
  "procurify.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.procurify.com/",
        browser,
      });
    },
  },
  "billsby.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://support.billsby.com/reference",
      });
      return await downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "sqala.tech": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://sqala.readme.io/reference",
      });
      return await downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "peachpayments.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developer.peachpayments.com/reference",
      });
      return await downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "connexpay.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.connexpay.com/reference",
      });
      return await downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "bluetime.io": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.bluetime.io/reference",
      });
      return await downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "paypal.com_Checkout": {
    type: "GET",
    url: "https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/checkout_orders_v2.json",
  },
  "paypal.com_Invoicing": {
    type: "GET",
    url: "https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/invoicing_v2.json",
  },
  "paypal.com_Payment": {
    type: "GET",
    url: "https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/payments_payment_v2.json",
  },
  "bluesnap.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.bluesnap.com/v8976-JSON/reference",
      });
      return await downloadOpenApiSpecFromReadme({ urls });
    },
  },
  // "diarupt.ai": {
  //   lambda: async () => {
  //     const urls = await collectEndpointsFromMintlify({
  //       url: "https://docs.diarupt.ai/api-reference",
  //     });
  //     return downloadOpenApiSpecFromMintlify({ urls });
  //   },
  // },
  "echelonpro.io": {
    type: "GET",
    url: "https://developers.echelonpay.com/api/_static/openapi.yaml",
  },
  "softledger.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://api-docs.softledger.com/",
        browser,
        filename: "openapi.json",
      });
    },
  },
  "fountain.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developer.fountain.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "tripadd.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://api.tripadd.com/docs/",
        browser,
        filename: "openapi.json",
      });
    },
  },
  "leaflink.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.leaflink.com/legacy/v2/api/ref/index.html",
        browser,
        filename: "openapi.json",
      });
    },
  },
  "uploadcare.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://uploadcare.com/api-refs/upload-api/",
        browser,
        filename: "openapi.json",
      });
    },
  },
  "resistant.ai": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://documents.resistant.ai/docs/v2.html",
        browser,
        filename: "openapi.json",
      });
    },
  },
  "engrain.com_SightMap": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://api.sightmap.com/v1/openapi",
        browser,
        filename: "openapi.json",
      });
    },
  },
  "adatree.com.au_Data": {
    type: "GET",
    url: "https://raw.githubusercontent.com/Adatree/api-specs/main/data.yaml",
  },
  "adatree.com.au_Banking": {
    type: "GET",
    url: "https://raw.githubusercontent.com/Adatree/api-specs/main/banking.yaml",
  },
  "adatree.com.au_Consent": {
    type: "GET",
    url: "https://raw.githubusercontent.com/Adatree/api-specs/main/consent.yaml",
  },
  "adatree.com.au_Insights": {
    type: "GET",
    url: "https://raw.githubusercontent.com/Adatree/api-specs/main/insights.yaml",
  },
  "recruiterflow.com": {
    type: "GET",
    url: "https://recruiterflow.com/swagger.yml",
    apiBaseUrl: "https://recruiterflow.com",
  },
  "interviewstream.com": {
    type: "GET",
    url: "https://general-api.ivs-apps.com/api/swagger.json",
    apiBaseUrl: "https://api.interviewstream.com/",
  },
  "smartrecruiters.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://developers.smartrecruiters.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "currencyalliance.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://api.currencyalliance.com/api-docs/v3",
        browser,
        filename: "openapi.json",
      });
    },
  },
  "foodkit.io": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.foodkit.dev/",
        filename: "openapi.json",
        browser,
      });
    },
  },
  "goshippo.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.goshippo.com/shippoapi/public-api/",
        browser,
      });
    },
  },
  "layer2financial.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.layer2financial.com/api-docs/openapi/layer2/overview/",
        browser,
      });
    },
  },
  "30k.com_Milefy": {
    type: "GET",
    url: "http://milefy-api-docs.30k.com/milefy.yaml",
  },
  "jiko.io": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.jiko.io/reference",
        browser,
        filename: "openapi.json",
      });
    },
  },
  "bossinsights.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://api.bossinsights.com/",
        browser,
        filename: "openapi.json",
      });
    },
  },
  "wealthos.cloud": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://wos-gb.sandbox.wealthos.cloud/admin/documentation",
        browser,
        filename: "openapi.json",
      });
    },
  },
  "bl.ink": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developers.bl.ink/",
        browser,
        filename: "openapi.json",
      });
    },
  },
  "wink.travel": {
    type: "GET",
    url: "https://api.wink.travel/v3/api-docs/affiliate",
  },
  "notabene.id": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://doc.notabene.id/",
        browser,
        filename: "openapi.json",
      });
    },
  },
  "weavy.com": {
    type: "GET",
    url: "https://www.weavy.com/hubfs/docs/openapi.json",
    apiBaseUrl: "https://{WEAVY-SERVER}",
  },
  "vegapay.tech": {
    type: "GET",
    url: "https://www.vegapay.tech/docs/openapi.yaml",
  },
  "textrequest.com": {
    type: "GET",
    url: "https://www.textrequest.com/dist/swagger/apiv3docs.yml",
  },
  "starkbank.com": {
    type: "GET",
    url: "https://www.starkbank.com/static/openapi-v2.yml",
  },
  "bulksms.com": {
    type: "GET",
    url: "https://www.bulksms.com/developer/json/v1/swagger.yaml?v=9",
  },
  "pappers.fr": {
    type: "GET",
    url: "https://www.pappers.fr/api_v2.yaml?20231125",
  },
  "ducky.eco": {
    type: "GET",
    url: "https://storage.googleapis.com/doc.api.ducky.eco/api-v3.json",
  },
  "redkik.com": {
    type: "GET",
    url: "https://sales.app.redkik.com/api/v2/apidoc/doc/userservice.json",
    apiBaseUrl: "https://sales.app.redkik.com/api/v2/",
  },
  "brevo.com": {
    type: "GET",
    url: "https://api.brevo.com/v3/swagger_definition_v3.yml",
  },
  "belvo.com": {
    type: "GET",
    url: "https://statics.belvo.io/openapi-specs/BelvoOpenFinanceApiSpec.yaml",
  },
  "podium.com": {
    lambda: async () => {
      const urls = await collectEndpointsFromReadme({
        url: "https://docs.podium.com/reference",
      });
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "tramitapp.com": {
    type: "GET",
    url: "https://rrhh.tramitapp.com/public/assets/tramitapp-api.yaml",
  },
  "wannme.com": {
    type: "GET",
    url: "https://rest-demo.wannme.com/integration/v2/v3/api-docs",
  },
  "onna.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/onna/platform-api/main/spec/platform-api.yaml",
  },
  "globalpredictions.com": {
    type: "GET",
    url: "https://portfoliopilot.com/static/external_api/external_api.yaml",
  },
  "epidemicsound.com": {
    type: "GET",
    url: "https://partner-content-api.epidemicsound.com/docs/spec.json",
  },
  "nfe.io": {
    type: "GET",
    url: "https://nfe.io/docs/app/uploads/2020/10/nfe-api.txt",
  },
  "aeternity.com": {
    type: "GET",
    url: "https://mainnet.aeternity.io/api?oas3",
  },
  "logisticsos.com": {
    type: "GET",
    url: "https://los-ops-pub.s3.us-west-2.amazonaws.com/api_reference/swagger-v3.json",
  },
  "hathora.dev": {
    type: "GET",
    url: "https://hathora.dev/swagger.json",
  },
  "measureone.com": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.measureone.com",
        browser,
      });
    },
  },
  "innoship.io": {
    type: "GET",
    url: "https://api.innoship.io/swagger/v1/swagger.json",
    apiBaseUrl: "https://api.innoship.com",
  },
  "ilert.com": {
    type: "GET",
    url: "https://api.ilert.com/api-docs/swagger.json",
  },
  "marketdata.app": {
    type: "GET",
    url: "https://api.marketdata.app/schema/",
    apiBaseUrl: "https://api.marketdata.app/",
  },
  "rated.network": {
    type: "GET",
    url: "https://api.rated.network/openapi.json",
    apiBaseUrl: "https://api.rated.network",
  },
  "sellsy.com": {
    type: "GET",
    url: "https://api.sellsy.com/doc/v2/dist/sellsy.v2.latest.yaml",
  },
  "rivery.io": {
    type: "GET",
    url: "https://api.rivery.io/openapi.json",
  },
  "secoda.co": {
    type: "GET",
    url: "https://api.secoda.co/api/schema/",
  },
  "tilled.com": {
    type: "GET",
    url: "https://api.tilled.com/docs/spec3.json",
  },
  "theirstack.com": {
    type: "GET",
    url: "https://api.theirstack.com/openapi.json",
    apiBaseUrl: "https://api.theirstack.com/",
  },
  "spaceinvoices.com": {
    type: "GET",
    url: "https://api.spaceinvoices.com/openapi.yaml",
  },
  "seomonitor.com": {
    type: "GET",
    url: "https://api.seomonitor.com/api-json",
  },
  "relysia.com": {
    type: "GET",
    url: "https://api.relysia.com/docs/json",
  },
  "realcube.com": {
    type: "GET",
    url: "https://api.realcube.com/api/v1/docs.json",
  },
  "packetfabric.com": {
    type: "GET",
    url: "https://api.packetfabric.com/openapi/specification/swagger.yaml",
  },
  "melod.ie": {
    type: "GET",
    url: "https://api.melod.ie/openapi.yml",
  },
  "netvyne.com": {
    type: "GET",
    url: "https://api.netvyne.com/documentation/doc.json",
  },
  "localizely.com": {
    type: "GET",
    url: "https://api.localizely.com/api-docs",
  },
  "kombo.dev": {
    type: "GET",
    url: "https://api.kombo.dev/openapi.json",
  },
  "mambu.com_PaymentOrder": {
    type: "GET",
    url: "https://api.mambu.com/payments-api/mambu-payments-api-spec-oas3.json",
  },
  "inmobile.com": {
    type: "GET",
    url: "https://api.inmobile.com/swagger/v1/swagger.json",
  },
  "finleycms.com": {
    type: "GET",
    url: "https://api.finleycms.com/api-docs/spec",
    apiBaseUrl: "api.finleycms.com",
  },
  "fordefi.com": {
    type: "GET",
    url: "https://api.fordefi.com/openapi.json",
  },
  "golioth.io": {
    type: "GET",
    url: "https://api.golioth.io/swagger.json",
  },
  "apaleo.com": {
    type: "GET",
    url: "https://api.apaleo.com/swagger/inventory-v1/swagger.json",
    apiBaseUrl: "api.apaleo.com",
  },
  "ebury.io": {
    type: "GET",
    url: "https://api.ebury.io/openapi.yaml",
  },
  "verifiable.com": {
    type: "GET",
    url: "https://api.discovery.verifiable.com/.well-known/openapi/vCurrent.json",
  },
  "crusoecloud.com": {
    type: "GET",
    url: "https://api.crusoecloud.com/v1alpha5/openapi.json",
  },
  "clarifai.com": {
    type: "GET",
    url: "https://api.clarifai.com/v2/swagger.json",
    apiBaseUrl: "api.clarifia.com",
  },
  "chatkitty.com": {
    type: "GET",
    url: "https://api.chatkitty.com/docs/v1",
  },
  "browse.ai": {
    type: "GET",
    url: "https://api.browse.ai/v2/openapi",
  },
  "askmiso.com": {
    type: "GET",
    url: "https://api.askmiso.com/swagger.json",
  },
  "baserow.io": {
    type: "GET",
    url: "https://api.baserow.io/api/schema.json",
    apiBaseUrl: "api.baserow.io",
  },
  "wallester.com": {
    type: "GET",
    url: "https://api-doc.wallester.com/swagger.json",
  },
  "telintel.com_NumberPortability": {
    type: "GET",
    url: "http://numberportability.telintel.com/portability.yaml",
  },
  "telintel.com_SmsGateway": {
    type: "GET",
    url: "http://smsapi.telintel.com/SMSGateway.yaml",
  },
  "token.io": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://reference.token.io/",
        browser,
      });
    },
  },
  "monto.ai": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://monto.redoc.ly/",
        browser,
      });
    },
  },
  "hypatos.ai": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://hypatos.redoc.ly/",
        browser,
      });
    },
  },
  "tryedge.io": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.tryedge.io/",
        browser,
      });
    },
  },
  "linkcy.io": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.sandbox.linkcy.io/",
        browser,
      });
    },
  },
  "nuapay.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/sentenial/open-banking-swagger/master/tpp-swagger.yaml",
  },
  "drivewealth.com": {
    type: "GET",
    url: "https://raw.githubusercontent.com/DriveWealth/dw-openapi/main/dist/InvestingAPI.yaml",
  },
  "malga.io": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.malga.io/api",
        browser,
      });
    },
  },
  "volt.io": {
    lambda: async ({ browser }) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.volt.io/api-documentation/",
        browser,
        filename: "volt-openapi.yaml",
      });
    },
  },
  "tryrook.io": {
    type: "GET",
    url: "https://docs.tryrook.io/redocusaurus/plugin-redoc-0.yaml",
  },
  "surfly.com": {
    type: "GET",
    url: "https://docs.surfly.com/redocusaurus/plugin-redoc-0.yaml",
  },
  "relynk.io": {
    type: "GET",
    url: "https://docs.relynk.io/redocusaurus/api-v2_0_0.yaml",
  },
  "prolific.com": {
    type: "GET",
    url: "https://docs.prolific.com/docs/api-docs/public-openapi",
  },
  "modrinth.com": {
    type: "GET",
    url: "https://docs.modrinth.com/redocusaurus/plugin-redoc-0.yaml",
  },
  "buttondown.email": {
    type: "GET",
    url: "https://raw.githubusercontent.com/buttondown/openapi/main/openapi.json",
    apiBaseUrl: "https://api.buttondown.email/v1/",
  },
  "btcpayserver.org": {
    type: "GET",
    url: "https://docs.btcpayserver.org/API/Greenfield/v1/swagger.json",
  },
  "beamlend.com": {
    type: "GET",
    url: "https://docs.beamlend.com/redocusaurus/plugin-redoc-0.yaml",
    apiBaseUrl: "https://api.beamlend.com",
  },
  "banksapi.de": {
    type: "GET",
    url: "https://docs.banksapi.de/api-documentation/banksapi-v2-openapi-3_0.yaml",
  },
  "bity.com": {
    type: "GET",
    url: "https://doc.bity.com/exchange/exchange_api_v2.openapi.yaml",
  },
  "keatext.ai": {
    type: "GET",
    url: "https://developer.keatext.ai/specs.yaml",
  },
  "finshark.io": {
    type: "GET",
    url: "https://cdn.finshark.io/docs/openapi_v1.yaml",
  },
  "ongoody.com": {
    type: "GET",
    url: "https://assets.ongoody.com/static/web/goody-api-openapi.json",
  },
  "gridbees.com": {
    type: "GET",
    url: "https://assets-global.website-files.com/6274d1a571beb184d5ff254f/6488434bf530aef27387176a_OpenAPI_v3.txt",
  },
  "nanonets.com": {
    type: "GET",
    url: "https://app.nanonets.com/swagger",
  },
  "wefitter.com": {
    type: "GET",
    url: "https://api.wefitter.com/api/v1.3/redoc/?format=openapi",
  },
  "moffin.mx": {
    type: "GET",
    url: "https://app.moffin.mx/api/v1/docs",
  },
  "mega-api.app.br": {
    type: "GET",
    url: "https://apistart01.megaapi.com.br/docs/swagger.json",
    apiBaseUrl: "https://apistart01.megaapi.com.br",
  },
};

async function downloadOpenApiSpecFromMintlify({
  urls,
}: {
  urls: string[];
}): Promise<string> {
  const specs: object[] = [];
  const regex =
    /<script\s+id="__NEXT_DATA__"\s+type="application\/json">([\s\S]*?)<\/script>/;
  for (const url of urls) {
    const html = await fetch(url).then((res) => res.text());
    const match = regex.exec(html);
    if (match === null || match.length < 2) {
      console.warn(`Could not find a regex match for ${url}`);
      continue;
    }
    const rawJson = match[1];
    const json = JSON.parse(rawJson);
    const metadata = json.props.pageProps.pageData.apiReferenceData.metadata;
    if (metadata === undefined) {
      console.warn(`No json found for ${url}`);
      continue;
    }
    console.log(`Found metadata.spec for ${url}`);
    specs.push(metadata.spec);
  }
  const mergedSpec = deepmerge.all(specs, {
    arrayMerge: (destination, source) => source,
  });
  return JSON.stringify(mergedSpec);
}

async function downloadOpenApiSpecFromReadme({
  urls,
}: {
  urls: string[];
}): Promise<string> {
  const specs: object[] = [];
  urls = urls.map((url) => (url.endsWith("?json=on") ? url : url + "?json=on"));
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
        "sentry-trace": "dce4d3ea8da447b7962c4e50a0a2eccb-a9cb60f78dd7f21a-0",
        "x-requested-with": "XMLHttpRequest",
        cookie:
          "XSRF-TOKEN=RTVFxI7GO63fcVw91fitervD; intercom-id-gpfdrxfd=a7e56783-d834-4130-a3ce-9b4cc750ecc8; intercom-device-id-gpfdrxfd=1ec4b6a8-ed93-4c7b-b85c-88a6a336068f; ekfls=0ddebe53-2d38-438c-839a-8d6bb1f6aa6d; intercom-session-gpfdrxfd=",
        Referer: url,
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    }).then((response) => response.text());
    try {
      const rawSpec = JSON.parse(rawSpecString);
      if (
        rawSpec.oasDefinition !== undefined &&
        rawSpec.oasDefinition !== null
      ) {
        console.log(`Got oasDefinition for ${url}`);
        specs.push(rawSpec.oasDefinition);
      } else {
        console.warn(
          `Expecting oasDefinition to be defined but it's not for ${url}`
        );
      }
    } catch (e) {
      const emptyDiv = "<div></div>";
      if (rawSpecString === emptyDiv) {
        console.warn(`Got empty div ("${emptyDiv}") as a result...skipping`);
        continue;
      }
      if (rawSpecString.trim().endsWith("html>")) {
        console.warn(`Got HTML instead of JSON...skipping`);
        continue;
      }
      if (rawSpecString.trim() === "") {
        console.warn(`Got empty string instead of JSON...skipping`);
        continue;
      }
      console.error(rawSpecString);
      throw e;
    }
  }

  const specsContainsNull = specs.some((spec) => spec === null);
  console.log(`specsContainsNull: ${specsContainsNull}`);

  // deepmerge all specs but don't append arrays
  // instead, just use the source array
  const mergedSpec = deepmerge.all(specs, {
    arrayMerge: (destination, source) => source,
  });
  return JSON.stringify(mergedSpec);
}

/**
 * Downloads the OpenAPI spec from the Redocly URL and saves it to the specified
 * filename.  Sometimes Redocly embeds the contents of the OAS inside the
 * bundled JS files so we need to use Puppeteer to navigate to the page and
 * download the file.
 */
async function downloadOpenApiSpecFromRedoclyEmbedded({
  url,
  filename = "swagger.json",
  browser,
  enableAdBlock,
  closeModal,
}: {
  url: string;
  filename?: string;
  browser: PuppeteerBrowser;
  enableAdBlock?: boolean;
  closeModal?: {
    modalSelector: string;
    closeSelector: string;
  };
}) {
  let retries = 0;
  while (retries < 3) {
    try {
      const page = await browser.newPage();

      if (enableAdBlock) {
        PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
          blocker.enableBlockingInPage(page);
        });
      }

      // Set the download options
      const client = await page.target().createCDPSession();

      // extract domain without scheme from URL (e.g. https://apidocs.launchdarkly.com -> apidocs.launchdarkly.com)
      // or (e.g. https://docs.klarna.com/api/payments/ -> docs.klarna.com/api/payments)
      const domainWithoutScheme = new URL(url).hostname + new URL(url).pathname;

      const removeTrailingSlash = (str: string) =>
        str.endsWith("/") ? str.slice(0, -1) : str;

      // replace all slashes with underscores
      const domainWithoutSlashes = removeTrailingSlash(
        domainWithoutScheme
      ).replaceAll("/", "_");

      const downloadPath = path.join(
        browserDownloadsFolder,
        domainWithoutSlashes
      );

      // need to clear directory so we can properly wait for download to finish
      fs.rmdirSync(downloadPath, { recursive: true });

      fs.ensureDirSync(downloadPath);
      await client.send("Page.setDownloadBehavior", {
        behavior: "allow",
        downloadPath,
      });

      // Navigate to the page
      console.log(`Navigating to ${url}`);
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
      console.log(`Finished navigating to ${url}`);

      if (closeModal !== undefined) {
        console.log("Closing modal...");
        await page.waitForSelector(closeModal.modalSelector);
        console.log("Modal found");
        await page.waitForSelector(closeModal.closeSelector);
        console.log("Modal close button found");
        await page.click(closeModal.closeSelector);

        // wait for modalSelector to disappear
        await page.waitForFunction(
          (modalSelector) => !document.querySelector(modalSelector),
          {},
          closeModal.modalSelector
        );

        console.log("Finished closing modal");
      }

      // Click the download button
      const downloadButtonSelector = `a[download="${filename}"]`;
      await page.waitForSelector(downloadButtonSelector);
      // wait for page to fully load as well
      await page.click(downloadButtonSelector);

      // wait until download finishes by checking if the size of files the
      // download folder have stopped increasing after the file appears
      console.log(`Waiting for download to finish for ${url}...`);
      try {
        await waitForDownloadToFinishByFileSize(downloadPath);
      } catch (e) {
        console.error(`Timeout occured while waiting for download to finish`);
        retries++;
        continue;
      }
      console.log(`Finished waiting for download to finish for ${url}`);

      let rawSpecString = fs.readFileSync(
        path.join(downloadPath, filename),
        "utf-8"
      );
      const regex = /(\((\/|#).*?\))/g;
      rawSpecString = rawSpecString.replaceAll(regex, `(${url})`);
      return rawSpecString;
    } catch (e) {
      if (e instanceof Error) {
        console.error(`Error encountered: ${e.message}`);
      }
      console.error(`Retrying...`);
      retries++;
    }
  }
  throw Error("Exceeded maximum retries");
}

async function waitForDownloadToFinishByFileSize(downloadPath: string) {
  const timeout = 10_000;
  console.log(`Waiting for file to appear under ${downloadPath}...`);
  // wait for the file to appear
  const t1 = Date.now();
  while (true) {
    const t2 = Date.now();
    if (t2 - t1 > timeout) {
      throw Error(`Timeout: File download took longer than ${timeout} seconds`);
    }
    const files = fs.readdirSync(downloadPath);
    if (files.length > 0) {
      break;
    }
    // wait for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  console.log(`File appeared under ${downloadPath}`);
  // wait for the file to stop increasing in size by checking if the size hasn't increased in size for a duration
  let previousSize = 0;
  let tick = 0;
  while (true) {
    const files = fs.readdirSync(downloadPath);
    if (files.length === 0) {
      throw Error("Expecting files to be present");
    }
    const file = files[0];
    const stats = fs.statSync(path.join(downloadPath, file));
    if (stats.size === previousSize) {
      tick++;
      if (tick > 2) {
        break;
      }
    } else {
      tick = 0;
    }
    previousSize = stats.size;
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

type CachedProcessedRequest = {
  processed: Db["specifications"][string];
};

function cachedCustomRequestPath(key: string) {
  return path.join(processedCustomRequestCacheDir, `${key}.yaml`);
}

/**
 * Returns the cached processed custom request if it exists and is still valid.
 */
function getCachedProcessedCustomRequest({
  key,
}: {
  key: string;
}): CachedProcessedRequest | undefined {
  const cachePath = cachedCustomRequestPath(key);
  if (!fs.existsSync(cachePath)) {
    return undefined;
  }
  const processed = yaml.load(
    fs.readFileSync(cachePath, "utf-8")
  ) as CachedProcessedRequest;

  return processed;
}

/**
 * Hashes rawSpecString and saves that alongside the processed custom request
 * to disk.
 */
function saveCachedProcessedCustomRequest({
  key,
  processed,
}: {
  key: string;
  processed: CachedProcessedRequest["processed"];
}) {
  const cachePath = cachedCustomRequestPath(key);
  const cachedProcessedRequest: CachedProcessedRequest = { processed };
  fs.writeFileSync(cachePath, yaml.dump(cachedProcessedRequest));
}

async function processCustomRequest({
  customRequest,
  key,
  browser,
  customRequestSpecFilePath,
  specFilename,
}: {
  customRequest: CustomRequest;
  key: string;
  browser: PuppeteerBrowser;
  customRequestSpecFilePath: string;
  specFilename: string;
}): Promise<Db["specifications"][string] | undefined> {
  const lastFetched = getCustomRequestLastFetched(key);
  let rawSpecStringCurrent: string | null = null;
  if (
    lastFetched !== undefined &&
    process.env.FILTER_CUSTOM === undefined &&
    lastFetched > new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)
  ) {
    console.log(`Skip fetching ${key} due to last fetched being recent`);
    const cachedProcessedCustomRequest = getCachedProcessedCustomRequest({
      key,
    });
    if (cachedProcessedCustomRequest !== undefined) {
      console.log(`Using cached processed custom request for ${key}`);
      return cachedProcessedCustomRequest.processed;
    }
  } else {
    rawSpecStringCurrent = await executeCustomRequest(
      key,
      customRequest,
      browser
    );
    saveCustomRequestLastFetched(new Date(), [key]);
  }
  let rawSpecStringLastFetched: string | null = null;
  if (fs.existsSync(customRequestSpecFilePath)) {
    rawSpecStringLastFetched = fs.readFileSync(
      customRequestSpecFilePath,
      "utf-8"
    );
  }

  const rawSpecString = rawSpecStringCurrent ?? rawSpecStringLastFetched;

  if (rawSpecString === null) {
    throw Error("Expect rawSpecString to be defined");
  }

  console.log(`Parsing spec for ${key}`);
  const spec = await parseSpec(rawSpecString);

  // if getRequest.securitySchemes then also apply to spec
  if (customRequest.securitySchemes !== undefined) {
    if (spec.spec.components === undefined) spec.spec.components = {};
    spec.spec.components.securitySchemes = customRequest.securitySchemes as any;
    spec.spec.security = [
      Object.fromEntries(
        Object.keys(customRequest.securitySchemes).map((key) => [key, []])
      ),
    ];
  }

  let apiBaseUrl = spec.spec.servers?.[0]?.url;
  if (customRequest.servers !== undefined) {
    spec.spec.servers = customRequest.servers;
    apiBaseUrl = customRequest.servers[0].url;
  }
  if (customRequest.apiBaseUrl !== undefined) {
    spec.spec.servers = [{ url: customRequest.apiBaseUrl }];
    apiBaseUrl = customRequest.apiBaseUrl;
  }
  if (apiBaseUrl === undefined) throw Error(`❌ ${key} is missing apiBaseUrl.`);

  console.log(`Collecting number of endpoints for ${key}`);
  const numberOfEndpoints = getNumberOfEndpoints(spec);

  console.log(`Collecting number of operations for ${key}`);
  const numberOfOperations = getNumberOfOperations(spec);

  console.log(`Collecting number of schemas for ${key}`);
  const numberOfSchemas = getNumberOfSchemas(spec);

  console.log(`Collecting number of parameters for ${key}`);
  const numberOfParameters = getNumberOfParameters(spec);

  const processedRequest: Db["specifications"][string] = {
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
    originalCustomRequest:
      "lambda" in customRequest ? { lambda: true } : customRequest,
    customRequestSpecFilename: specFilename,
    difficultyScore: computeDifficultyScore(
      numberOfEndpoints,
      numberOfOperations,
      numberOfSchemas,
      numberOfParameters
    ),
  };

  // "yarn published" expects the file to be present to be processed
  console.log(`Writing post request spec to disk for ${key}`);
  fs.writeFileSync(customRequestSpecFilePath, yaml.dump(spec.spec));

  saveCachedProcessedCustomRequest({
    key,
    processed: processedRequest,
  });
  return processedRequest;
}

export async function collectFromCustomRequests(): Promise<Db> {
  const db: Db = { specifications: {} };

  const browser = await puppeteer.launch({
    headless: process.env.NOT_HEADLESS ? false : "new",
    // change default resolution to 1920x1080
    defaultViewport: { width: 1920, height: 1080 },
    devtools: true,
  });

  for (const key in customRequests) {
    const specFilename = `${key}.yaml`;
    const customRequestSpecFilePath = path.join(
      customRequestSpecsDir,
      specFilename
    );

    // if fetched in the last day, skip
    if (process.env.FILTER_CUSTOM !== undefined) {
      if (!key.includes(process.env.FILTER_CUSTOM)) {
        continue;
      }
    }

    const customRequest = customRequests[key];
    if (customRequest.doNotCollect) {
      continue;
    }

    const processedRequest = await processCustomRequest({
      customRequest,
      key,
      browser,
      customRequestSpecFilePath,
      specFilename,
    });

    if (processedRequest === undefined) {
      continue;
    }

    db.specifications[`from-custom-request_${key}`] = processedRequest;
  }
  browser.close();

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
