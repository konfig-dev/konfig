import inquirer from "inquirer";
import path from "path";
import * as fs from "fs";
import autocomplete from "inquirer-autocomplete-standalone";
import boxen from "boxen";
import { PublishJson as PublishJsonType } from "../src/publish-json-schema";
import Instructor from "@instructor-ai/instructor";
import { z } from "zod";
import OpenAI from "openai";
import snakeCase from "lodash.snakecase";
import { generateSdkDynamicPath } from "./util";
import { fetchFaviconAndSaveToFile } from "../src/fetch-favicon-and-save-to-file";
import axios from "axios";
import { fileTypeFromBuffer } from "file-type";
import os from "os";
import kebabCase from "lodash.kebabcase";
import camelCase from "camelcase";

const ROOT_FOLDER_PATH = path.dirname(__dirname);
const DB_FOLDER_PATH = path.join(ROOT_FOLDER_PATH, "db");
const SPEC_DATA_FOLDER_PATH = path.join(DB_FOLDER_PATH, "spec-data");

async function main() {
  await addApiToPublish();
}

/**
 * Adds an API to the list of APIs to publish in publish.json.
 *
 * 1. Ask to add one of the JSONs under db/spec-data
 * 2. Ask for a company, homepage.
 * 3. If spec-data JSON does not include categories, ask for categories (use AI to suggest category)
 * 4. If serviceName is not available from spec-data, ask if you would like to add one
 * 4 a. If yes, ask for serviceName
 * 4 b. If no, ask for a serviceName
 * 5. If serviceName is available, ask if you would like to remove it
 * 5 a. If yes, set serviceName to false
 * 5 b. If no, do nothing
 * 6. If a meta description is available from data-from-html.json, ask if you would like to add it
 * 6 a. If yes, add metaDescription from data-from-html.json
 * 6 b. If no, move to (7)
 * 7. If a meta description is not available from data-from-html.json,
 * 7 a. Generate description using AI and ask if you would like to add it
 * 7 a i. If yes, add description
 * 7 a ii. If no, ask for manual input for description
 * 8. Create folder under openapi-examples based on company name and service name [see generateSdkDynamciPath()]
 * 9. Automatically get favicon from homepage and save to file under openapi-examples
 * 10. Ask for URL to logo and save to file under openapi-examples
 * 11. Check if imagePreview.png is available in openapi-examples
 * 11 a. If yes, move on
 * 11 b. If no, wait for imagePreview.png to exist in openapi-examples
 * 12. Generate sdkName based on company name and service name
 * 13. Generate clientName based on company name and service name.
 */
async function addApiToPublish() {
  // (1)
  const api = await chooseApiFromSpecData();

  // (2)
  const company = PublishJson.getCompany(api) ?? (await getCompany());
  PublishJson.saveCompany({ company }, api);
  console.log(`✅ Company: ${company}`);
  const homepage = PublishJson.getHomepage(api) ?? (await getHomepage());
  PublishJson.saveHomepage({ homepage }, api);
  console.log(`✅ Homepage: ${PublishJson.getHomepage(api)}`);

  // (3)
  const categories =
    PublishJson.getCategories(api) ?? (await getCategories(api, company));
  PublishJson.saveCategories({ categories }, api);
  console.log(`✅ Categories: ${PublishJson.getCategories(api)}`);

  // (4) & (5)
  const serviceName =
    PublishJson.getServiceName(api) ?? (await getServiceName(api));
  PublishJson.saveServiceName({ serviceName }, api);
  console.log(`✅ Service Name: ${PublishJson.getServiceName(api)}`);

  // (6) & (7)
  const metaDescription =
    PublishJson.getMetaDescription(api) ??
    (await getMetaDescription(api, company));
  if (metaDescription !== null) {
    PublishJson.saveMetaDescription({ metaDescription }, api);
    console.log(`✅ Meta Description: ${metaDescription}`);
  } else {
    console.log("✅ Meta Description: (skipped)");
  }

  // (8)
  const companyServicePath = createDirectoryUnderOpenApiExamples(company, api);

  // (9)
  await fetchFaviconAndSaveToFile({
    destination: companyServicePath,
    domain: homepage,
  });

  // (10)
  await ensureLogoExists(homepage, companyServicePath);

  // (11)
  await ensureImagePreviewExists(homepage, companyServicePath);

  // (12) & (13)
  const sdkName = getSdkName(
    company,
    serviceName === false ? undefined : serviceName
  );
  const clientName = getClientName(company, "typescript");
}

function getSpecData(api: string): any {
  return JSON.parse(
    fs.readFileSync(path.join(SPEC_DATA_FOLDER_PATH, `${api}.json`), "utf-8")
  );
}

function createDirectoryUnderOpenApiExamples(
  company: string,
  serviceName: string
) {
  const dynamicPath = generateSdkDynamicPath(company, serviceName);
  const openApiExamplesPath = path.join(ROOT_FOLDER_PATH, "openapi-examples");
  const companyServicePath = path.join(openApiExamplesPath, dynamicPath);
  if (!fs.existsSync(companyServicePath)) {
    fs.mkdirSync(companyServicePath, { recursive: true });
  }
  return companyServicePath;
}

function getSdkName(company: string, serviceName?: string) {
  if (!serviceName) {
    return `${kebabCase(company)}-{language}-sdk`;
  }
  return `${kebabCase(company)}-${kebabCase(serviceName)}-{language}-sdk`;
}

function getClientName(company: string, serviceName?: string) {
  if (!serviceName) {
    return camelCase(company, { pascalCase: true });
  }
  return camelCase(`${company} ${serviceName}`, { pascalCase: true });
}

async function ensureImagePreviewExists(
  homepage: string,
  companyServicePath: string
) {
  // if file with name "imagePreview.png" exists, then return
  const files = fs.readdirSync(companyServicePath);
  const imagePreviewFiles = files.filter((file) => file === "imagePreview.png");
  if (imagePreviewFiles.length > 0) {
    return;
  }
  console.log(`🔗 Take a screen shot from: https://${homepage}`);

  // ask if screen shot has been taken
  await inquirer.prompt({
    type: "confirm",
    name: "screenshotTaken",
    message: "Has the screenshot been taken?",
  });

  // Find latest screenshot under user's Downloads folder
  const downloadPath = path.join(os.homedir(), "Downloads");
  const downloadFiles = fs.readdirSync(downloadPath);
  const screenshotFiles = downloadFiles.filter((file) => file.endsWith(".png"));
  if (screenshotFiles.length === 0) {
    console.log("❌ No screenshot found in Downloads folder");
    return;
  }
  // sort screenshotFiles by date modified
  screenshotFiles.sort((a, b) => {
    const aStats = fs.statSync(path.join(downloadPath, a));
    const bStats = fs.statSync(path.join(downloadPath, b));
    return bStats.mtimeMs - aStats.mtimeMs;
  });

  const latestScreenshot = screenshotFiles[0];
  const screenshotPath = path.join(downloadPath, latestScreenshot);
  const destinationPath = path.join(companyServicePath, "imagePreview.png");
  fs.copyFileSync(screenshotPath, destinationPath);
}

async function ensureLogoExists(homepage: string, companyServicePath: string) {
  // if file with name that starts with "logo" exists, then return
  const files = fs.readdirSync(companyServicePath);
  const logoFiles = files.filter((file) => file.startsWith("logo"));
  if (logoFiles.length > 0) {
    return;
  }
  console.log(
    `🔎: https://www.google.com/search?q=${encodeURIComponent(
      `${homepage} logo`
    )}&tbm=isch&tbs=ic:trans&prmd=invmbstz&hl=en&sa=X&ved=0CAMQpwVqFwoTCIDdm5bfu4QDFQAAAAAdAAAAABAI&biw=1338&bih=924`
  );
  const logoUrl = await inquirer.prompt({
    type: "input",
    name: "logoUrl",
    message: "What is the URL to the logo?",
  });
  // get logo image, determine file type, and save to file
  const response = await axios.get(logoUrl.logoUrl, {
    responseType: "arraybuffer",
  });
  const buffer = Buffer.from(response.data, "binary");
  const fileType = await fileTypeFromBuffer(buffer);
  if (!fileType) {
    throw new Error("Could not determine file type");
  }
  const logoPath = path.join(companyServicePath, `logo.${fileType.ext}`);
  fs.writeFileSync(logoPath, buffer);
}

async function getMetaDescription(
  api: string,
  companyName: string
): Promise<string | null> {
  const dataFromHtmlJson = JSON.parse(
    fs.readFileSync(path.join(DB_FOLDER_PATH, "data-from-html.json"), "utf-8")
  );
  const metaDescription = dataFromHtmlJson[api]?.description;
  if (metaDescription) {
    console.log(`🟢 Found meta description in data-from-html.json`);
    const addMetaDescription = await inquirer.prompt({
      type: "confirm",
      name: "addMetaDescription",
      message: "Would you like to add the meta description?",
    });
    return addMetaDescription.addMetaDescription ? metaDescription : null;
  }
  console.log("⚪️ Meta description not found in data-from-html.json");
  const oai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const client = Instructor({ client: oai, mode: "FUNCTIONS" });
  console.log("🧠 Generating meta description using AI...");
  const { description } = await client.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `
        Can you give me a description of ${companyName}. Just give me the description and don't prefix it with anything. The response should only include the description. Add some more detail in the description. DO NOT add quotes (") in the response as it is USELESS. Do not repeat yourself in the beginning of the response (e.g. "${companyName}, ${companyName}"). Here are some existing examples of descriptions for other companies:

        "Lob", "Lob provides a suite of APIs to deliver mail, including address verification, mail tracking, and more. Our print & mail API is used by companies large and small to send postcards, letters, and checks."
        "UniCourt", "UniCourt is a leader in making court data more accessible and useful. We provide real-time access to court data from state, federal, and local courts, as well as analytics, case management, and automation tools for legal professionals.
        "Vimeo", "Join the world's leading professional video platform and grow your business with easy-to-use, high-quality video creation, hosting, and marketing tools.
        "Zapier", "AI Actions is a tool for builders to equip AI platforms (or custom integrations) with the ability to run any Zapier action! The 20,000+ searches and actions you know and love from the Zapier automation platform can be used with your favorite AI tool."
        "Open Banking", "The trusted technology that connects banks, fintechs & technical providers - technology that's helping 6m users take control of their money.
        "Notion", "Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.
        "Ably", "Ably provides a suite of APIs to build, extend, and deliver powerful digital experiences in realtime. Organizations like Toyota, Bloomberg, HubSpot, and Hopin depend on Ably’s platform to offload the growing complexity of business-critical realtime data synchronization at global scale.
        "WhatsApp", "Use WhatsApp Messenger to stay in touch with friends and family. WhatsApp is free and offers simple, secure, reliable messaging and calling, available on phones all over the world.
        "Wikimedia", "Wikimedia is a global movement whose mission is to bring free educational content to the world.
        "Trello", "Trello is a collaboration tool that organizes your projects into boards. In one glance, Trello tells you what's being worked on, who's working on what, and where something is in a process.
        "The New York Times", "Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world. Subscribe for coverage of U.S. and international news, politics, business, technology, science, health, arts, sports and more.
        "GoDaddy", "All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.
        "Ticketmaster", "Tap into the Ticketmaster open developer network which gives you the flexibility and scale to bring unforgettable live events to fans. It’s our technology – your way."
        "Stack Exchange", "We make Stack Overflow and 170+ other community-powered Q&A sites.
        "Spotify", "Spotify is a digital music service that gives you access to millions of songs.
        "Shutterstock", "Download the best royalty free images from Shutterstock, including photos, vectors, and illustrations. Enjoy straightforward pricing and simple licensing.
        "Rotten Tomatoes", "Rotten Tomatoes, home of the Tomatometer, is the most trusted measurement of quality for Movies & TV. The definitive site for Reviews, Trailers, Showtimes, and Tickets.
        "Postmark", "Send transactional and marketing emails and get them to the inbox on time, every time. Postmark is a fast and reliable email delivery service for developers.
        "Paylocity", "Paylocity is the HR & Payroll provider that frees you from the tasks of today, so together, we can spend more time focused on the promise of tomorrow.
        "Qualtrics", "Know what your customers and employees need, when they need it, and deliver it every time with powerful, AI driven Experience Management (XM) software.
        "SoundCloud", "Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators.
        "Snyk", "Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.
        "Walmart", "Walmart is the world's largest retailer, and the Walmart Open API provides access to our extensive product catalog, thus enabling digital businesses to create new and innovative shopping experiences.`,
      },
    ],
    model: "gpt-3.5-turbo",
    response_model: {
      schema: z.object({ description: z.string() }),
      name: "Description",
    },
  });

  console.log(boxen(description, { title: "Description (✨ AI)" }));

  const useGeneratedDescription = await inquirer.prompt({
    type: "confirm",
    name: "useGeneratedDescription",
    message: "Would you like to use the generated description?",
  });

  if (useGeneratedDescription.useGeneratedDescription) {
    return description;
  }

  const manualDescription = await inquirer.prompt({
    type: "input",
    name: "manualDescription",
    message: "What is the description?",
  });
  return manualDescription.manualDescription;
}

async function getServiceName(api: string): Promise<string | false> {
  const specData = getSpecData(api);
  if (specData.serviceName) {
    console.log("Found serviceName in spec data");
    const removeServiceName = await inquirer.prompt({
      type: "confirm",
      name: "removeServiceName",
      message: "Would you like to remove the service name?",
    });
    return removeServiceName.removeServiceName ? false : specData.serviceName;
  }
  console.log("⚪️ Service name not found in spec data");
  const serviceName = await inquirer.prompt({
    type: "input",
    name: "serviceName",
    message: "What is the service name? (e.g. enter nothing to set as false)",
  });
  return serviceName.serviceName.length > 0 ? serviceName.serviceName : false;
}

async function getCategories(
  api: string,
  companyName: string
): Promise<string[]> {
  const specData = getSpecData(api);
  if (specData.categories) {
    console.log("🟢 Found categories in spec data");
    return specData.categories;
  }
  const publishJson: PublishJsonType = JSON.parse(
    fs.readFileSync(path.join(ROOT_FOLDER_PATH, "publish.json"), "utf-8")
  );

  const allCategories = Object.values(publishJson.publish).reduce(
    (acc, curr) => {
      if (curr.categories !== undefined && Array.isArray(curr.categories)) {
        const categories = curr.categories;
        return acc.concat(categories);
      }
      return acc;
    },
    [] as string[]
  );

  console.log("⚪️ Did not find categories in spec data");

  console.log(
    boxen(allCategories.join("\n"), {
      padding: 1,
      title: "Existing Categories",
    })
  );

  const categoriesSchema = z.object({
    matchingCategories: z.string().array(),
    newCategories: z.string().array(),
  });

  const oai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const client = Instructor({ client: oai, mode: "FUNCTIONS" });

  const { matchingCategories, newCategories } =
    await client.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `What are the categories for the company "${companyName}"?

        Here are existing categories: ${allCategories.join(
          ", "
        )}. Try to match "${companyName}" to existing categories or if there are new categories then please list them.`,
        },
      ],
      model: "gpt-3.5-turbo",
      response_model: { schema: categoriesSchema, name: "Categories" },
    });

  if (newCategories.length > 0) {
    console.log(
      boxen(matchingCategories.join("\n"), { title: "Matching (✨ AI)" })
    );
  }
  if (newCategories.length > 0) {
    console.log(boxen(newCategories.join("\n"), { title: "New (✨ AI)" }));
  }

  const categories = await inquirer.prompt({
    type: "input",
    name: "categories",
    message: "What are the categories?",
  });
  return categories.categories.split(",").map(snakeCase);
}

async function getHomepage(): Promise<string> {
  const homepage: string = (
    await inquirer.prompt({
      type: "input",
      name: "homepage",
      message: "What is the homepage?",
    })
  ).homepage;
  // remove "https://" or "http://" from the beginning of the string
  return homepage.replace(/^(https?:\/\/)/, "");
}

async function getCompany(): Promise<string> {
  return (
    await inquirer.prompt({
      type: "input",
      name: "company",
      message: "What is the company?",
    })
  ).company;
}

async function chooseApiFromSpecData(): Promise<string> {
  // Find all the JSONs under db/spec-data
  const specDataFiles = fs.readdirSync(SPEC_DATA_FOLDER_PATH);
  const specDataChoices = specDataFiles.map((file) => {
    // remove .json from end of file name
    const withoutExtension = file.replace(".json", "");
    return {
      name: withoutExtension,
      value: withoutExtension,
    };
  });
  const apiSpec = await autocomplete({
    message: "Which spec for what API would you like to add?",
    source: async (input) => {
      if (!input) {
        return specDataChoices;
      }
      return specDataChoices.filter((choices) => {
        return choices.name.includes(input);
      });
    },
  });
  return apiSpec;
}

class PublishJson {
  static PATH = path.join(ROOT_FOLDER_PATH, "publish.json");

  static getCompany(api: string): string | undefined {
    return PublishJson._currentPublishJson().publish[api]?.company;
  }

  static getHomepage(api: string): string | undefined {
    return PublishJson._currentPublishJson().publish[api]?.homepage;
  }

  static getCategories(api: string): string[] | undefined {
    return PublishJson._currentPublishJson().publish[api]?.categories;
  }

  static getClientName(api: string): string | undefined {
    return PublishJson._currentPublishJson().publish[api]?.clientName;
  }

  static getServiceName(api: string): string | false | undefined {
    return PublishJson._currentPublishJson().publish[api]?.serviceName;
  }

  static getMetaDescription(api: string): string | undefined {
    return PublishJson._currentPublishJson().publish[api]?.metaDescription;
  }

  static getSdkName(api: string): string | undefined {
    return PublishJson._currentPublishJson().publish[api]?.sdkName;
  }

  static saveSdkName = this._writeToDiskAfter(
    ({ sdkName }: { sdkName: string }, progress) => {
      progress.sdkName = sdkName;
    }
  );

  static saveMetaDescription = this._writeToDiskAfter(
    ({ metaDescription }: { metaDescription: string }, progress) => {
      progress.metaDescription = metaDescription;
    }
  );

  static saveServiceName = this._writeToDiskAfter(
    ({ serviceName }: { serviceName: string | false }, progress) => {
      progress.serviceName = serviceName;
    }
  );

  static saveCompany = this._writeToDiskAfter(
    ({ company }: { company: string }, progress) => {
      progress.company = company;
    }
  );

  static saveHomepage = this._writeToDiskAfter(
    ({ homepage }: { homepage: string }, progress) => {
      progress.homepage = homepage;
    }
  );

  static saveCategories = this._writeToDiskAfter(
    ({ categories }: { categories: string[] }, progress) => {
      progress.categories = categories;
    }
  );

  static saveClientName = this._writeToDiskAfter(
    ({ clientName }: { clientName: string }, progress) => {
      progress.clientName = clientName;
    }
  );

  static _currentPublishJson(): PublishJsonType {
    return JSON.parse(fs.readFileSync(this.PATH, "utf-8"));
  }

  /**
   * Decorator for ensuring that the progress is written to disk after the lambda is called.
   */
  static _writeToDiskAfter<T>(
    lambda: (
      args: T,
      progress: Partial<PublishJsonType["publish"]["specData"]>
    ) => void
  ): (args: T, specData: string) => void {
    return (args: T, specData) => {
      const publishJson = PublishJson._currentPublishJson();
      if (publishJson.publish === undefined) {
        publishJson.publish = {};
      }
      if (publishJson.publish[specData] === undefined) {
        publishJson.publish[specData] = {} as any;
      }
      lambda(args, publishJson.publish[specData]);
      fs.writeFileSync(this.PATH, JSON.stringify(publishJson, null, 2));
    };
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
