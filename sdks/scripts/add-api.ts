import inquirer from "inquirer";
import path from "path";
import * as fs from "fs";

async function main() {
  await addApiToPublish();
}

/**
 * Adds an API to the list of APIs to publish in publish.json.
 *
 * 1. Ask to add one of the JSONs under db/spec-data
 * 2. Ask for a company, clientName, homepage.
 * 3. If spec-data JSON does not include categories, ask for categories.
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
 */
async function addApiToPublish() {
  const dbFolderPath = path.join(path.dirname(__dirname), "db");
  const specDataFolderPath = path.join(dbFolderPath, "spec-data");
  // Find all the JSONs under db/spec-data
  const specDataFiles = fs.readdirSync(specDataFolderPath);
  const specDataChoices = specDataFiles.map((file) => {
    const withoutExtension = file.split(".")[0];
    return {
      name: withoutExtension,
      value: withoutExtension,
    };
  });
  const specDataAnswers = await inquirer.prompt([
    {
      type: "list",
      name: "specData",
      message: "Which spec data would you like to add?",
      choices: specDataChoices,
    },
  ]);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
