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
 * 6 b. If no, do nothing
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
 * 13. Ask for clientName, offer suggestion based on company name and service name.
 */
async function addApiToPublish() {
  // (1)
  const api = await chooseApiFromSpecData();

  // (2)
  const company = PublishJson.getCompany(api) || (await getCompany());
  PublishJson.saveCompany({ company }, api);
  console.log(`✅ Company: ${company}`);
  const homepage = PublishJson.getHomepage(api) || (await getHomepage());
  PublishJson.saveHomepage({ homepage }, api);
  console.log(`✅ Homepage: ${PublishJson.getHomepage(api)}`);

  // (3)
  const categories =
    PublishJson.getCategories(api) || (await getCategories(api, company));
  PublishJson.saveCategories({ categories }, api);
  console.log(`✅ Categories: ${PublishJson.getCategories(api)}`);

  // (4) & (5)
  const serviceName = await getServiceName(api);
  if (serviceName !== null) {
    PublishJson.saveServiceName({ serviceName }, api);
    console.log(`✅ Service Name: ${PublishJson.getServiceName(api)}`);
  } else {
    console.log("✅ Service Name: (skipped)");
  }
}

function getSpecData(api: string): any {
  return JSON.parse(
    fs.readFileSync(path.join(SPEC_DATA_FOLDER_PATH, `${api}.json`), "utf-8")
  );
}

async function getServiceName(api: string): Promise<string | false | null> {
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
    message: "What is the service name? (e.g. enter nothing to skip)",
  });
  return serviceName.serviceName.length > 0 ? serviceName.serviceName : null;
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

async function getClientName(): Promise<string> {
  return (
    await inquirer.prompt({
      type: "input",
      name: "clientName",
      message: "What is the client name?",
    })
  ).clientName;
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
