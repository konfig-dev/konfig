import * as execa from "execa";
import * as fs from "fs";
import * as path from "path";
import * as mustache from "mustache";
import { Published } from "./util";

// In debug mode, repository is not created and code is not pushed to remote
export function generateSdkRepository(key: string, debug: boolean = false) {
  const data: Published = JSON.parse(
    fs.readFileSync(
      path.join(path.dirname(__dirname), "db", "published", `${key}.json`),
      "utf-8"
    )
  );
  const repoDescription = generateRepositoryDescription(data);
  const repoDir = path.join(__dirname, "..", "sdks", data.sdkName);
  const pathToOas = oasFullPathFromKey(key);

  if (!debug && repositoryExists(data.sdkName)) {
    console.log(`Repository ${data.sdkName} already exists. Aborting...`);
    return;
  }

  // Create and clone repository. If debug mode, create local directory.
  if (!debug) createRepository(data.sdkName, repoDescription);
  else if (!fs.existsSync(repoDir)) fs.mkdirSync(repoDir);

  // Copy the OAS into the cloned repository
  fs.copyFileSync(pathToOas, path.join(repoDir, path.basename(pathToOas)));

  // Copy the header image into the cloned repository
  fs.copyFileSync(
    path.join(__dirname, "..", "headers", `${data.company}.png`),
    path.join(repoDir, "header.png")
  );

  writeKonfigYaml(data, pathToOas);

  // Run konfig generate. If any errors occur, delete the repository and abort.
  try {
    execa.sync("konfig", ["generate"], {
      cwd: repoDir,
      stdio: "inherit",
    });
  } catch (error: any) {
    console.log("Error occurred during konfig generate.");
    console.log("Aborting process and deleting repository...");
    if (!debug) {
      execa.sync("rm", ["-rf", data.sdkName], {
        cwd: path.join(__dirname, "..", "sdks"),
        stdio: "inherit",
      });
      deleteRepository(data.sdkName);
    }
    console.log("Repository deleted.");
    return;
  }
  addSignupLinkToReadmes(repoDir, data);

  // Commit and push to remote
  if (!debug) {
    execa.sync("git", ["add", "-A"], { cwd: repoDir, stdio: "inherit" });
    execa.sync(
      "git",
      ["commit", "-m", `Generate ${data.company} ${data.language} SDK`],
      { cwd: repoDir, stdio: "inherit" }
    );
    execa.sync("git", ["push", "origin", "HEAD"], {
      cwd: repoDir,
      stdio: "inherit",
    });
    // Remove local directory
    execa.sync("rm", ["-rf", data.sdkName], {
      cwd: path.join(__dirname, "..", "sdks"),
      stdio: "inherit",
    });
  }
}

function addSignupLinkToReadmes(repoDir: string, data: Published) {
  const signupLink = `https://docs.google.com/forms/d/e/1FAIpQLSedvSvvlpgoeI1BBjTyra7nC-SgMyKjugu2j4_dZNIGZ6Ul1Q/viewform?usp=pp_url&entry.1993275387=${data.company}&entry.2022822177=${data.serviceName}&entry.2109629584=${data.language}`;
  const sdkReadmeFilepath = path.join(repoDir, data.language, "README.md");
  const sdkReadme = fs.readFileSync(sdkReadmeFilepath, "utf-8");
  const installationSectionRegex = /^## Installation([\s\S]*?)(?=\n##)/im;
  const replacementText = `## Installation<a id="installation"></a>\n\nTo install, please sign up for the SDK [here](${signupLink}).\n`;
  const newReadme = sdkReadme.replace(
    installationSectionRegex,
    replacementText
  );
  fs.writeFileSync(sdkReadmeFilepath, newReadme);

  const rootReadmeFilepath = path.join(repoDir, "README.md");
  const rootReadme = fs.readFileSync(rootReadmeFilepath, "utf-8");
  const rootSignupMessage = `\nTo install, please sign up for the SDK [here](${signupLink}).`;
  fs.writeFileSync(rootReadmeFilepath, rootReadme + rootSignupMessage);
}

function createRepository(name: string, description: string) {
  console.log(`Creating repository ${name}...`);
  execa.sync(
    "gh",
    [
      "repo",
      "create",
      `konfig-sdks/${name}`,
      "--public",
      "--clone",
      "-d",
      description,
    ],
    { cwd: path.join(__dirname, "..", "sdks"), stdio: "inherit" }
  );
}

function deleteRepository(name: string) {
  execa.sync("gh", ["repo", "delete", `konfig-sdks/${name}`, "--yes"]);
}

function writeKonfigYaml(data: Published, pathToOas: string) {
  const template = fs.readFileSync(
    path.join(__dirname, "..", "templates", "konfig.yaml.mustache"),
    "utf-8"
  );
  const companyName = data.company.toLowerCase();
  const konfigYaml = mustache.render(template, {
    companyName: capitalize(companyName),
    homepage: data.homepage.replace("https://", ""),
    repoName: data.sdkName,
    lang: data.language,
    clientName: capitalize(data.clientNameCamelCase),
    packageName: data.sdkName.replace(/-/g, "_"),
    oasFileName: path.basename(pathToOas),
    ...generateTemplateLanguageData(data.language),
  });

  fs.writeFileSync(
    path.join(__dirname, "..", "sdks", data.sdkName, "konfig.yaml"),
    konfigYaml
  );
}

function repositoryExists(name: string): boolean {
  try {
    execa.sync("gh", ["repo", "view", `konfig-sdks/${name}`]);
    return true;
  } catch (error: any) {
    if (
      error.stderr &&
      error.stderr.includes("Could not resolve to a Repository")
    ) {
      return false;
    }
    throw error;
  }
}

function generateTemplateLanguageData(language: string) {
  const data: Record<string, any> = {
    typescript: false,
    java: false,
    python: false,
  };
  data[language] = true;
  return data;
}

function generateRepositoryDescription(data: Published) {
  const description = `${data.company}'s ${data.language} SDK for ${data.serviceName} API generated by Konfig (https://konfigthis.com/). `;
  return description + data.metaDescription;
}

function oasFullPathFromKey(key: string): string {
  const relativeDir = key.split("_").join("/");
  const fullDir = path.join(
    __dirname,
    "..",
    "openapi-directory",
    "APIs",
    relativeDir
  );
  const fileName = fs.readdirSync(fullDir)[0];
  return path.join(fullDir, fileName);
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// example usage:
// generateSdkRepository("ably.io_platform_1.1.0", true);
