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
  | { lambda: (browser: PuppeteerBrowser) => Promise<string> }
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

    if (defaultUrlForBrokenLinks !== undefined) {
      const regexForBrokenLinks = /(\((\/|#).*?\))/g;
      rawSpecString = rawSpecString.replaceAll(
        regexForBrokenLinks,
        `(${defaultUrlForBrokenLinks})`
      );
    }

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
    return await lambdaRequest.lambda(browser);
  } else {
    throw Error("Unexpected custom request");
  }
}

const customRequests: Record<string, CustomRequest> = {
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
      return downloadOpenApiSpecFromRedocly({
        url: "https://apidocs.launchdarkly.com",
        filename: "swagger.json",
        browser,
      });
    },
  },
  "klarna.com_payments": {
    lambda: async (browser) => {
      return downloadOpenApiSpecFromRedocly({
        url: "https://docs.klarna.com/api/payments/",
        filename: "swagger.json",
        browser,
        enableAdBlock: true,
      });
    },
  },
  "klarna.com_checkout": {
    lambda: async (browser) => {
      return downloadOpenApiSpecFromRedocly({
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

/**
 * Downloads the OpenAPI spec from the Redocly URL and saves it to the specified filename
 */
async function downloadOpenApiSpecFromRedocly({
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
  await page.goto(url);
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

export async function collectFromCustomRequests(): Promise<Db> {
  const db: Db = { specifications: {} };

  const browser = await puppeteer.launch({
    headless: process.env.NOT_HEADLESS ? false : "new",
    // change default resolution to 1920x1080
    defaultViewport: { width: 1920, height: 1080 },
    devtools: true,
  });
  for (const key in customRequests) {
    if (process.env.FILTER_CUSTOM !== undefined) {
      if (!key.includes(process.env.FILTER_CUSTOM)) {
        continue;
      }
    }
    const customRequest = customRequests[key];
    if (customRequest === undefined)
      throw Error("Expect customRequest to be defined");

    const rawSpecString = await executeCustomRequest(
      key,
      customRequest,
      browser
    );

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
