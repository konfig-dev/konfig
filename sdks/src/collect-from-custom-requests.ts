import {
  SecuritySchemes,
  parseSpec,
  recurseObject,
} from "../../generator/konfig-dash/packages/konfig-lib/dist";
import path from "path";
import { Db } from "../scripts/collect";
import * as fs from "fs-extra";
import deepmerge from "deepmerge";
import yaml from "js-yaml";
import puppeteer, { Browser as PuppeteerBrowser } from "puppeteer";
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
} from "../scripts/util";
import { PuppeteerBlocker } from "@cliqz/adblocker-puppeteer";
import fetch from "cross-fetch"; // required 'fetch'

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
      lambda: (browser: PuppeteerBrowser) => Promise<string>;
      defaultUrlForBrokenLinks?: string;
    }
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
    let rawSpecString = await lambdaRequest.lambda(browser);
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
      const urls = [
        "https://developers.baremetrics.com/reference/get-account",
        "https://developers.baremetrics.com/reference/sources",
        "https://developers.baremetrics.com/reference/list-plans",
        "https://developers.baremetrics.com/reference/show-plan",
        "https://developers.baremetrics.com/reference/update-plan",
        "https://developers.baremetrics.com/reference/create-plan",
        "https://developers.baremetrics.com/reference/delete-plan",
        "https://developers.baremetrics.com/reference/list-customers",
        "https://developers.baremetrics.com/reference/show-customer",
        "https://developers.baremetrics.com/reference/list-customer-events",
        "https://developers.baremetrics.com/reference/update-customer",
        "https://developers.baremetrics.com/reference/create-customer",
        "https://developers.baremetrics.com/reference/delete-customer",
        "https://developers.baremetrics.com/reference/list-subscriptions",
        "https://developers.baremetrics.com/reference/show-subscription",
        "https://developers.baremetrics.com/reference/update-subscription",
        "https://developers.baremetrics.com/reference/cancel-subscription",
        "https://developers.baremetrics.com/reference/create-subscription",
        "https://developers.baremetrics.com/reference/delete-subscription",
        "https://developers.baremetrics.com/reference/list-annotations",
        "https://developers.baremetrics.com/reference/show-annotation",
        "https://developers.baremetrics.com/reference/create-annotation",
        "https://developers.baremetrics.com/reference/delete-annotation",
        "https://developers.baremetrics.com/reference/list-goals",
        "https://developers.baremetrics.com/reference/show-goal",
        "https://developers.baremetrics.com/reference/create-goal",
        "https://developers.baremetrics.com/reference/delete-goal",
        "https://developers.baremetrics.com/reference/list-users",
        "https://developers.baremetrics.com/reference/show-user",
        "https://developers.baremetrics.com/reference/list-charges",
        "https://developers.baremetrics.com/reference/show-charge",
        "https://developers.baremetrics.com/reference/create-charge",
        "https://developers.baremetrics.com/reference/delete-charge",
        "https://developers.baremetrics.com/reference/list-refunds",
        "https://developers.baremetrics.com/reference/show-refund",
        "https://developers.baremetrics.com/reference/create-refund",
        "https://developers.baremetrics.com/reference/delete-refund",
        "https://developers.baremetrics.com/reference/list-events",
        "https://developers.baremetrics.com/reference/show-event",
        "https://developers.baremetrics.com/reference/show-summary",
        "https://developers.baremetrics.com/reference/show-metric",
        "https://developers.baremetrics.com/reference/show-customers",
        "https://developers.baremetrics.com/reference/show-plan-breakout",
        "https://developers.baremetrics.com/reference/show-cohorts",
        "https://developers.baremetrics.com/reference/list-fields",
        "https://developers.baremetrics.com/reference/list-segments",
        "https://developers.baremetrics.com/reference/show-segment",
        "https://developers.baremetrics.com/reference/search-segment",
        "https://developers.baremetrics.com/reference/create-segment",
        "https://developers.baremetrics.com/reference/update-segment",
        "https://developers.baremetrics.com/reference/delete-segment",
        "https://developers.baremetrics.com/reference/set-attributes",
        "https://developers.baremetrics.com/reference/list-attribute-fields",
        "https://developers.baremetrics.com/reference/create-attribute-field",
        "https://developers.baremetrics.com/reference/update-attribute-field",
        "https://developers.baremetrics.com/reference/list-cancellation-insight-events",
        "https://developers.baremetrics.com/reference/show-event-1",
        "https://developers.baremetrics.com/reference/update-event",
        "https://developers.baremetrics.com/reference/create-event",
        "https://developers.baremetrics.com/reference/show-reason",
        "https://developers.baremetrics.com/reference/create-reason",
        "https://developers.baremetrics.com/reference/delete-reason",
        "https://developers.baremetrics.com/reference/update-reason",
      ];
      return downloadOpenApiSpecFromReadme({ urls });
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
      return downloadOpenApiSpecFromReadme({ urls });
    },
  },
  "zapier.com_actions": {
    type: "GET",
    url: "https://actions.zapier.com/api/v1/openapi.json",
  },
  "httpbin.org": {
    type: "GET",
    url: "https://httpbin.org/spec.json",
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
    lambda: async (browser) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://apidocs.launchdarkly.com",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "brex.com_Team": {
    lambda: async (browser) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/team_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "brex.com_Onboarding": {
    lambda: async (browser) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/onboarding_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "brex.com_Payments": {
    lambda: async (browser) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/payments_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "brex.com_Transactions": {
    lambda: async (browser) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/transactions_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "brex.com_Expenses": {
    lambda: async (browser) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/expenses_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "brex.com_Webhooks": {
    lambda: async (browser) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://developer.brex.com/openapi/webhooks_api/",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "brex.com_Budgets": {
    lambda: async (browser) => {
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
    lambda: async (browser) => {
      return downloadOpenApiSpecFromRedoclyEmbedded({
        url: "https://docs.klarna.com/api/payments/",
        filename: "swagger.json",
        browser,
        enableAdBlock: true,
      });
    },
  },
  "klarna.com_checkout": {
    lambda: async (browser) => {
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
  "hsbc.com_AccountInformationCE": {
    lambda: async (browser) => {
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
};

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
    const rawSpec = JSON.parse(rawSpecString);
    if (rawSpec.oasDefinition !== undefined && rawSpec.oasDefinition !== null) {
      console.log(`Got oasDefinition for ${url}`);
      specs.push(rawSpec.oasDefinition);
    } else {
      throw Error(
        `Expecting oasDefinition to be defined but it's not for ${url}`
      );
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
  filename,
  browser,
  enableAdBlock,
  closeModal,
}: {
  url: string;
  filename: string;
  browser: PuppeteerBrowser;
  enableAdBlock?: boolean;
  closeModal?: {
    modalSelector: string;
    closeSelector: string;
  };
}) {
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

  const downloadPath = path.join(browserDownloadsFolder, domainWithoutSlashes);

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
  await waitForDownloadToFinishByFileSize(downloadPath);
  console.log(`Finished waiting for download to finish for ${url}`);

  let rawSpecString = fs.readFileSync(
    path.join(downloadPath, filename),
    "utf-8"
  );
  const regex = /(\((\/|#).*?\))/g;
  rawSpecString = rawSpecString.replaceAll(regex, `(${url})`);
  return rawSpecString;
}

async function waitForDownloadToFinishByFileSize(downloadPath: string) {
  console.log(`Waiting for file to appear under ${downloadPath}...`);
  // wait for the file to appear
  while (true) {
    const files = fs.readdirSync(downloadPath);
    if (files.length > 0) {
      break;
    }
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
  fetchedKeys,
  customRequestSpecFilePath,
  specFilename,
}: {
  customRequest: CustomRequest;
  key: string;
  browser: PuppeteerBrowser;
  fetchedKeys: string[];
  customRequestSpecFilePath: string;
  specFilename: string;
}): Promise<Db["specifications"][string] | undefined> {
  const lastFetched = getCustomRequestLastFetched(key);
  let rawSpecStringCurrent: string | null = null;
  if (
    lastFetched !== undefined &&
    process.env.FILTER_CUSTOMER === undefined &&
    lastFetched > new Date(Date.now() - 1000 * 60 * 60 * 24)
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
    fetchedKeys.push(key);
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
  if (apiBaseUrl === undefined) {
    if (customRequest.apiBaseUrl !== undefined) {
      apiBaseUrl = customRequest.apiBaseUrl;
      spec.spec.servers = [{ url: apiBaseUrl }];
    } else {
      throw Error(`❌ ${key} is missing apiBaseUrl.`);
    }
  }

  const numberOfEndpoints = getNumberOfEndpoints(spec);
  const numberOfOperations = getNumberOfOperations(spec);
  const numberOfSchemas = getNumberOfSchemas(spec);
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

  const fetchedKeys: string[] = [];
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

    const processedRequest = await processCustomRequest({
      customRequest: customRequests[key],
      key,
      browser,
      fetchedKeys,
      customRequestSpecFilePath,
      specFilename,
    });

    if (processedRequest === undefined) {
      continue;
    }

    db.specifications[`from-custom-request_${key}`] = processedRequest;
  }
  browser.close();

  saveCustomRequestLastFetched(new Date(), fetchedKeys);

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
