import inquirer from "inquirer";
import path from "path";
import * as fs from "fs";
import autocomplete from "inquirer-autocomplete-standalone";
import boxen from "boxen";
import { PublishJson as PublishJsonType } from "../src/publish-json-schema";

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
 * 4. If serviceName is not available, ask if you would like to add one
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
  if (PublishJson.getCompany(api) === undefined) {
    const company = await getCompany();
    PublishJson.saveCompany({ company }, api);
  } else {
    console.log(`Company: ${PublishJson.getCompany(api)}`);
  }
  if (PublishJson.getHomepage(api) === undefined) {
    const homepage = await getHomepage();
    PublishJson.saveHomepage({ homepage }, api);
  } else {
    console.log(`Homepage: ${PublishJson.getHomepage(api)}`);
  }

  // (3)
  if (
    PublishJson.getCategories(api) === undefined ||
    PublishJson.getCategories(api)?.length === 0
  ) {
    const categories = await getCategories(api);
    PublishJson.saveCategories({ categories }, api);
  } else {
    console.log(`Categories: ${PublishJson.getCategories(api)}`);
  }
}

async function getCategories(api: string): Promise<string[]> {
  const specData = JSON.parse(
    fs.readFileSync(path.join(SPEC_DATA_FOLDER_PATH, `${api}.json`), "utf-8")
  );
  if (specData.categories) {
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

  console.log(
    boxen(allCategories.join("\n"), {
      padding: 1,
      title: "Existing Categories",
    })
  );

  const categories = await inquirer.prompt({
    type: "input",
    name: "categories",
    message: "What are the categories?",
  });
  return categories.categories.split(",");
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
    message: "Which spec for what API would you liek to add?",
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
