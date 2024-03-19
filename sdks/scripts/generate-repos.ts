import * as execa from "execa";
import * as fs from "fs-extra";
import * as path from "path";
import * as mustache from "mustache";
import { Published, generateSdkDynamicPath } from "./util";

const LANGUAGES = ["typescript", "java", "python"];
const OAS_FILE_NAME = "openapi.yaml";

// Directories
const publishedDir = path.join(path.dirname(__dirname), "db", "published");
const genDir = path.join(path.dirname(__dirname), ".gen");
const tmpDir = path.join(genDir, "tmp");
const repoDir = path.join(genDir, "repo");
const fixedSpecsDir = path.join(path.dirname(__dirname), "db", "fixed-specs");
const openapiExamplesDir = path.join(path.dirname(__dirname), "openapi-examples");

const capitalizedLanguage: Record<string, string> = {
  typescript: "TypeScript",
  java: "Java",
  python: "Python",
};

type GenerateSdkResult = {
  key: string;
  language: string;
  result: "success" | "fail" | "skip";
  reason?: string;
};

function handleErrors(fn: () => void, result: GenerateSdkResult, action: string, verbose: boolean): GenerateSdkResult {
  try {
    fn();
  } catch (error: any) {
    result.reason = "Error occured when " + action + (verbose ? `: ${error.message}` : "");
  }
  return result;
}

function updateExisting(key: string, language: string, allExistingRepos: string[]): GenerateSdkResult {
  const data: Published = JSON.parse(fs.readFileSync(path.join(publishedDir, `${key}.json`), "utf-8"));
  const sdkName = data.sdkName.replace("{language}", language);
  if (!allExistingRepos.includes(sdkName)) {
    return { key, language, result: "skip", reason: "Repository does not exist" };
  }
  return generateSdkRepository(key, language, false, true, false);
}

function generateSdkRepository(
  key: string,
  language: string,
  debug: boolean,
  updateExisting: boolean,
  verbose: boolean,
): GenerateSdkResult {
  let result: GenerateSdkResult = { key, language, result: "fail" };
  const data: Published = JSON.parse(fs.readFileSync(path.join(publishedDir, `${key}.json`), "utf-8"));
  const sdkName = data.sdkName.replace("{language}", language);

  if (data.fixedSpecFileName === undefined) {
    result.reason = "Fixed spec not found.";
    return result;
  }
  if (data.repositoryDescription == undefined) {
    result.reason = "Repository description not found.";
    return result;
  }

  const pathToOas = path.join(fixedSpecsDir, data.fixedSpecFileName);
  const sdkTmpDir = path.join(tmpDir, sdkName); // this is where we will run konfig generate
  if (!fs.existsSync(sdkTmpDir)) fs.mkdirSync(sdkTmpDir, { recursive: true });
  const sdkRepoDir = path.join(repoDir, sdkName); // this is where the repository will be cloned
  if (fs.existsSync(sdkRepoDir)) fs.rmSync(sdkRepoDir, { recursive: true });
  fs.mkdirSync(sdkRepoDir, { recursive: true });

  const repoDescription = data.repositoryDescription.replace("{language}", capitalizedLanguage[language]);

  const repoExists = repositoryExists(sdkName);
  if (!updateExisting && repoExists) {
    result.result = "skip";
    result.reason = "Repository already exists. Use -u flag to update existing repositories.";
    return result;
  } else if (!debug && repoExists) {
    result = handleErrors(() => cloneRepository(sdkName, repoDir), result, "cloning git repo", verbose);
    if (result.reason) return result;
  } else if (!debug) { // repo does not exist
    result = handleErrors(() => createRepository(sdkName, repoDescription, repoDir), result, "creating git repo", verbose);
    if (result.reason) return result;
  }

  // Copy the OAS into the tmp sdk directory
  fs.copyFileSync(pathToOas, path.join(sdkTmpDir, OAS_FILE_NAME));

  // Copy the header image into the tmp sdk directory
  const openapiExamplesSdkDir = path.join(openapiExamplesDir, generateSdkDynamicPath(data.company, data.serviceName));
  if (!fs.existsSync(openapiExamplesSdkDir)) {
    result.reason = `openapi-examples directory not found: ${openapiExamplesSdkDir}`;
    return result;
  }

  const imagePreviewFile = fs.readdirSync(openapiExamplesSdkDir).find((file) => file.match(/imagePreview\.(jpg|png|jpeg|webp)/));
  if (!imagePreviewFile) {
    result.reason = "Image preview not found in openapi-examples directory.";
    return result;
  }

  const headerFileExt = path.extname(imagePreviewFile);
  fs.copyFileSync(
    path.join(openapiExamplesSdkDir, imagePreviewFile),
    path.join(sdkTmpDir, `header${headerFileExt}`)
  );

  writeKonfigYaml(data, sdkName, language, OAS_FILE_NAME, sdkTmpDir, headerFileExt);

  // Run konfig generate. If any errors occur, delete the repository and abort.
  result = handleErrors(() => execa.sync("konfig", ["generate", "-d"], { cwd: sdkTmpDir }), result, "running konfig generate", verbose);
  if (result.reason) {
    if (!debug && !repoExists) deleteRepository(sdkName); // only delete if it was created in this run
    return result;
  }
  fixReadMe(sdkTmpDir, sdkName, language, data);

  // Copy generated sdk into cloned repository
  copySdkToRepository(sdkTmpDir, sdkRepoDir, language);

  // Commit and push to remote
  const commitMessage = (repoExists && updateExisting ? "Update" : "Generate") + ` ${data.company} ${language} SDK`;
  const generateIdFile = path.join(".konfig", "generate-id.txt");
  if (!debug) {
    result = handleErrors(() => {
      execa.sync("git", ["add", "-A"], { cwd: sdkRepoDir });
      execa.sync("git", ["reset", generateIdFile], { cwd: sdkRepoDir });
    }, result, "staging files for commit", verbose);
    if (filesToCommit(sdkRepoDir)) {
      result = handleErrors(() => {
        execa.sync("git", ["commit", "-m", commitMessage], { cwd: sdkRepoDir });
        execa.sync("git", ["push", "origin", "HEAD"], { cwd: sdkRepoDir });
      }, result, "committing and pushing changes", verbose);
    } else {
      result.result = "skip";
      result.reason = "Nothing to commit";
    }
  }
  if (result.reason) return result;

  result.result = "success";
  return result;
}

function fixReadMe(
  sdkDir: string,
  sdkName: string,
  language: string,
  data: Published
) {
  const serviceNameQuery = data.serviceName
    ? `&serviceName=${data.serviceName}`
    : "";
  const capitalizedLang = capitalizedLanguage[language];
  const signupLink = `https://konfigthis.com/sdk-sign-up?company=${data.company}${serviceNameQuery}&language=${capitalizedLang}`.replaceAll(" ", "%20");

  const sdkReadmeFilepath = path.join(sdkDir, language, "README.md");
  let sdkReadme = fs.readFileSync(sdkReadmeFilepath, "utf-8");

  // Remove badges
  const badgesRegex = /(\[!\[(npm|PyPI|Maven Central)\][\s\S]*?)(?=<\/div>)/m;
  const signupBadgeUrl = `https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/${language}-cta.png`;
  const signupBadge = `<div align="center">
  <a href="${signupLink}">
    <img src="${signupBadgeUrl}" width="70%">
  </a>
</div>`;
  const badges = sdkReadme.match(badgesRegex);
  if (!badges) throw Error("Badges not found in README.md");
  sdkReadme = sdkReadme.replace(badges[0], "");

  const installationSectionRegex = /^## Installation([\s\S]*?)(?=\n##)/m;
  const replacementText = `## Installation<a id="installation"></a>\n${signupBadge}\n`;
  sdkReadme = sdkReadme.replace(installationSectionRegex, replacementText);

  // make header image relative for languages that dont use relative path in readme
  const headerImage = `https://raw.githubusercontent.com/konfig-sdks/${sdkName}/HEAD/${language}/header.png`;
  sdkReadme = sdkReadme.replace(headerImage, "./header.png");
  fs.writeFileSync(sdkReadmeFilepath, sdkReadme);
}

function createRepository(name: string, description: string, dir: string) {
  console.log(`Creating repository ${name}...`);
  execa.sync("gh", ["repo", "create", `konfig-sdks/${name}`, "--public", "--clone", "-d", description], { cwd: dir });
}

function cloneRepository(name: string, dir: string) {
  console.log(`Cloning repository ${name}...`);
  execa.sync("gh", ["repo", "clone", `konfig-sdks/${name}`], { cwd: dir });
  // Next, remove everything except the .git directory in the cloned repository
  // Because we run generate in a staging area and then copy the SDK files here,
  // we want to remove any files that may no longer exist after the updated `konfig generate`
  const clonedRepoDir = path.join(dir, name);
  fs.readdirSync(clonedRepoDir).forEach((fileOrDir) => {
    if (fileOrDir !== ".git") fs.rmSync(path.join(clonedRepoDir, fileOrDir), { recursive: true });
  });
}

function deleteRepository(name: string) {
  execa.sync("gh", ["repo", "delete", `konfig-sdks/${name}`, "--yes"]);
}

function copySdkToRepository(
  sdkTmpDir: string,
  sdkRepoDir: string,
  language: string
) {
  const sdkDir = path.join(sdkTmpDir, language);
  fs.readdirSync(sdkDir).forEach((fileOrDir) => {
    fs.copySync(path.join(sdkDir, fileOrDir), path.join(sdkRepoDir, fileOrDir));
  });
}

function writeKonfigYaml(
  data: Published,
  sdkName: string,
  language: string,
  pathToOas: string,
  tmpSdkDir: string,
  headerFileExt: string
) {
  const template = fs.readFileSync(
    path.join(__dirname, "..", "templates", "konfig.yaml.mustache"),
    "utf-8"
  );
  const companyName = data.company.toLowerCase();
  const konfigYaml = mustache.render(template, {
    companyName: capitalize(companyName),
    homepage: data.homepage.replace("https://", ""),
    repoName: sdkName,
    lang: language,
    clientName: capitalize(data.clientNameCamelCase),
    packageName: sdkName.replace(/-/g, "_"),
    oasFileName: path.basename(pathToOas),
    apiVersion: data.apiVersion,
    headerFileExt: headerFileExt,
    ...generateTemplateLanguageData(language),
  });

  fs.writeFileSync(path.join(tmpSdkDir, "konfig.yaml"), konfigYaml);
}

function filesToCommit(dir: string): boolean {
  try {
    execa.sync("git", ["diff", "--cached", "--exit-code", "--quiet"], { cwd: dir });
    return false;
  } catch (error: any) {
    return true;
  }
}

function repositoryExists(name: string): boolean {
  try {
    execa.sync("gh", ["repo", "view", `konfig-sdks/${name}`]);
    return true;
  } catch (error: any) {
    if (error.stderr && error.stderr.includes("Could not resolve to a Repository")) return false;
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

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(results: GenerateSdkResult[]) {
  if (results.length === 0) {
    console.log("Filters did not match any SDKs.");
    return;
  }
  const success = results.filter((r) => r.result === "success");
  const fail = results.filter((r) => r.result === "fail");
  const skip = results.filter((r) => r.result === "skip");

  console.log("\n--------------------------------------------\n");
  success.forEach((r) => console.log(`- ✅ SUCCESS: ${r.key} ${r.language}`));
  skip.forEach((r) => console.log(`- ⏭️ SKIPPED: ${r.key} ${r.language}: ${r.reason}`));
  fail.forEach((r) => console.log(`- ❌ FAILED: ${r.key} ${r.language}: ${r.reason}`));

  console.log("\n--------------------------------------------\n")
  console.log(`SUMMARY: Generated ${results.length} SDKs`);
  console.log(`- SUCCESS: ${success.length}`);
  console.log(`- FAILED: ${fail.length}`);
  console.log(`- SKIPPED: ${skip.length}`);
}

type Arguments = {
  // Flags
  debug: boolean; // If true, repository is not created and code is not pushed to remote
  updateExisting: boolean; // If true, existing repositories are updated. If false, they are skipped
  verbose: boolean; // If true, more detailed logs are printed for sdks with errors
  companyFilter: string | undefined; // If defined, only the company keys that include this string are generated. Otherwise, generate for all companies
  languageFilter: string | undefined; // If defined, only generate for this language. Otherwise, generate for all languages

  // Functions
  updateAllExisting: boolean; // If true, all existing repositories are updated
  deleteAllEmpty: boolean; // If true, all empty repositories are deleted. All other arguments are ignored
  listStatus: boolean; // If true, list the status of all existing sdk repos. All other arguments are ignored
};

function parseArguments(args: string[]): Arguments {
  const debug = args.includes("--debug") || args.includes("-d");
  const updateExisting = args.includes("--update") || args.includes("-u");
  const verbose = args.includes("--verbose") || args.includes("-v");
  const languageFilter = args.find((arg) => arg.startsWith("--language="))?.split("=")[1];
  const companyFilter = args.find((arg) => !arg.startsWith("-"));
  const updateAllExisting = args.includes("--update-all");
  const deleteAllEmpty = args.includes("--delete-empty");
  const listStatus = args.includes("--list-status");
  return { debug, updateExisting, verbose, companyFilter, languageFilter, updateAllExisting, deleteAllEmpty, listStatus };
}

function logArguments(args: Arguments) {
  console.log("Generating SDK Repositories with arguments:");
  if (args.companyFilter) console.log(`* company filter: ${args.companyFilter}`);
  if (args.languageFilter) console.log(`* language filter: ${args.languageFilter}`);
  console.log(`* debug: ${args.debug}`);
  console.log(`* update existing: ${args.updateExisting}`);
  console.log(`* verbose: ${args.verbose}`);
  console.log("\n--------------------------------------------\n");
}

function listAllExistingRepositories(): string[] {
  const filter = [".github", "openapi-examples"];
  const { stdout } = execa.sync("gh", ["repo", "list", "konfig-sdks", "--json", "name", "--limit", "10000"]);
  const repoNames = JSON.parse(stdout).map((repo: any) => repo.name).filter((name: string) => !filter.includes(name));
  return repoNames;
}

async function listRepoStatus() {
  const publishedJsons = fs.readdirSync(publishedDir);
  await Promise.all(
    publishedJsons.map(async (file) => {
      const key = file.replace(".json", "");
      const data: Published = JSON.parse(fs.readFileSync(path.join(publishedDir, file), "utf-8"));
      let result = `- ${key}`;
      LANGUAGES.forEach((lang) => {
        const sdkName = data.sdkName.replace("{language}", lang);
        if (repositoryExists(sdkName))
          result += `\n   - ${lang}: ✅`;
        else
          result += `\n   - ${lang}: ❌`;
      });
      result += "\n";
      console.log(result);
    })
  );
}

async function deleteAllEmptyRepositories() {
  const { stdout } = execa.sync("gh", ["repo", "list", "konfig-sdks", "--json", "name,isEmpty", "--limit", "10000"]);
  const repos = JSON.parse(stdout);
  const emptyRepos = repos.filter((repo: any) => repo.isEmpty).map((repo: any) => repo.name);
  console.log(`Found ${emptyRepos.length} empty repositories: ${emptyRepos.join(", ")}`)
  emptyRepos.forEach((repo: string) => {
    console.log(`Deleting ${repo}...`);
    deleteRepository(repo);
  });
}

async function main() {
  const args = parseArguments(process.argv.slice(2));
  if (args.listStatus) {
    await listRepoStatus();
    return;
  }
  if (args.deleteAllEmpty) {
    await deleteAllEmptyRepositories();
    return;
  }
  const allExistingRepos = listAllExistingRepositories();
  const publishedJsons = fs.readdirSync(publishedDir);
  const result: GenerateSdkResult[] = [];
  logArguments(args);
  await Promise.all(
    publishedJsons.map(async (file) => {
      const key = file.replace(".json", "");
      if (args.companyFilter && !key.includes(args.companyFilter)) return;
      LANGUAGES.forEach((lang) => {
        if (args.languageFilter && lang !== args.languageFilter) return;
        console.log(`💻 Generating ${lang} SDK for ${key}`);
        if (args.updateAllExisting) {
          result.push(updateExisting(key, lang, allExistingRepos));
        } else {
          result.push(generateSdkRepository(key, lang, args.debug, args.updateExisting, args.verbose));
        }
      });
    })
  );
  displayResults(result);
}

main().then(() => console.log(""));