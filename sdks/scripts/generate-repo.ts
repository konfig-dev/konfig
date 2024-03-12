import * as execa from "execa";
import * as fs from "fs-extra";
import * as path from "path";
import * as mustache from "mustache";
import { Published, generateSdkDynamicPath } from "./util";

const capitalizedLanguage: Record<string, string> = {
  typescript: "TypeScript",
  java: "Java",
  python: "Python",
};

const OAS_FILE_NAME = "openapi.yaml";
const publishedDir = path.join(path.dirname(__dirname), "db", "published");

type GenerateSdkResult = {
  key: string;
  language: string;
  result: "success" | "fail" | "skip";
  reason?: string;
};

async function generateSdkRepositories(
  key: string,
  debug: boolean = false
): Promise<GenerateSdkResult[]> {
  const languages = ["typescript", "java", "python"];
  const result: GenerateSdkResult[] = [];

  try {
    languages.forEach((language) => {
      console.log(`Generating ${language} SDK for ${key}...`);
      result.push(generateSdkRepository(key, language, debug));
    });
  } catch (error) {
    console.log(`Uncaught exception in ${key} generation: ${error}`);
  }
  return result;
}

// In debug mode, repository is not created and code is not pushed to remote
function generateSdkRepository(
  key: string,
  language: string,
  debug: boolean = false
): GenerateSdkResult {
  const result: GenerateSdkResult = { key, language, result: "fail" };
  const data: Published = JSON.parse(
    fs.readFileSync(path.join(publishedDir, `${key}.json`), "utf-8")
  );
  const sdkName = data.sdkName.replace("{language}", language);
  const sdksDir = path.join(path.dirname(__dirname), "sdks");
  const repoDir = path.join(sdksDir, sdkName);
  const tmpSdkDir = path.join(path.dirname(__dirname), "tmp", sdkName);
  if (data.fixedSpecFileName === undefined) {
    result.reason = "Fixed spec not found.";
    return result;
  }
  const pathToOas = path.join(
    path.dirname(__dirname),
    "db",
    "fixed-specs",
    data.fixedSpecFileName
  );

  if (repositoryExists(sdkName)) {
    result.result = "skip";
    result.reason = "Repository already exists.";
    return result;
  }

  // Create tmp directory where sdk will be generated
  if (!fs.existsSync(tmpSdkDir)) fs.mkdirSync(tmpSdkDir, { recursive: true });

  // Create and clone repository
  if (!fs.existsSync(sdksDir)) fs.mkdirSync(sdksDir);
  const repoDescription = data.repositoryDescription.replace(
    "{language}",
    capitalizedLanguage[language]
  );
  if (!debug) createRepository(sdkName, repoDescription, sdksDir);
  else if (!fs.existsSync(repoDir)) fs.mkdirSync(repoDir);

  // Copy the OAS into the tmp sdk directory
  fs.copyFileSync(pathToOas, path.join(tmpSdkDir, OAS_FILE_NAME));

  // Copy the header image into the tmp sdk directory
  const openapiExamplesDir = path.join(
    path.dirname(__dirname),
    "openapi-examples",
    generateSdkDynamicPath(data.company, data.serviceName)
  );
  if (!fs.existsSync(openapiExamplesDir)) {
    result.reason = `openapi-examples directory not found: ${openapiExamplesDir}`;
    return result;
  }
  const imagePreviewFile = fs
    .readdirSync(openapiExamplesDir)
    .find((file) => file.match(/imagePreview\.(jpg|png|jpeg)/));
  if (!imagePreviewFile) {
    result.reason = "Image preview not found";
    return result;
  }
  const headerFileExt = path.extname(imagePreviewFile);
  fs.copyFileSync(
    path.join(openapiExamplesDir, imagePreviewFile),
    path.join(tmpSdkDir, `header${headerFileExt}`)
  );

  writeKonfigYaml(
    data,
    sdkName,
    language,
    OAS_FILE_NAME,
    tmpSdkDir,
    headerFileExt
  );

  // Run konfig generate. If any errors occur, delete the repository and abort.
  try {
    execa.sync("konfig", ["generate", "-d"], { cwd: tmpSdkDir });
  } catch (error: any) {
    if (!debug) deleteRepository(sdkName);
    result.reason = `Error occurred during generate: ${error.message}`;
    return result;
  }
  fixReadMe(tmpSdkDir, sdkName, language, data);

  // Copy generated sdk into cloned repository
  copySdkToRepository(tmpSdkDir, repoDir, language);

  // Commit and push to remote
  if (!debug) {
    execa.sync("git", ["add", "-A"], { cwd: repoDir });
    execa.sync(
      "git",
      ["commit", "-m", `Generate ${data.company} ${language} SDK`],
      { cwd: repoDir }
    );
    execa.sync("git", ["push", "origin", "HEAD"], { cwd: repoDir });
  }

  // Remove local directory
  execa.sync("rm", ["-rf", sdkName], { cwd: sdksDir });
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
  const signupLink =
    `https://konfigthis.com/sdk-sign-up?company=${data.company}${serviceNameQuery}&language=${capitalizedLang}`.replaceAll(
      " ",
      "%20"
    );

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
    { cwd: dir }
  );
}

function deleteRepository(name: string) {
  execa.sync("gh", ["repo", "delete", `konfig-sdks/${name}`, "--yes"]);
}

function copySdkToRepository(
  tmpSdkDir: string,
  repoDir: string,
  language: string
) {
  console.log(`Copying SDK to repository...`);
  const sdkDir = path.join(tmpSdkDir, language);
  fs.readdirSync(sdkDir).forEach((fileOrDir) => {
    fs.copySync(path.join(sdkDir, fileOrDir), path.join(repoDir, fileOrDir));
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

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(results: GenerateSdkResult[]) {
  const success: GenerateSdkResult[] = results.filter(
    (r) => r.result === "success"
  );
  const fail: GenerateSdkResult[] = results.filter((r) => r.result === "fail");
  const skip: GenerateSdkResult[] = results.filter((r) => r.result === "skip");
  console.log(
    `Generated ${results.length} SDKs: ${success.length} successful, ${fail.length} failed, ${skip.length} skipped`
  );
  success.forEach((r) => console.log(`- ✅ SUCCESS: ${r.key} ${r.language}`));
  skip.forEach((r) =>
    console.log(`- ⏭️ SKIPPED: ${r.key} ${r.language}: ${r.reason}`)
  );
  fail.forEach((r) =>
    console.log(`- ❌ FAILED: ${r.key} ${r.language}: ${r.reason}`)
  );
}

function listRepositories() {
  const { stdout } = execa.sync("gh", ["repo", "list", "konfig-sdks"]);
  const lines = stdout.split("\n");
  const repositoryNames = lines.map((line) => {
    const [repositoryName, _] = line.trim().split(/\s+/);
    return repositoryName.replace("konfig-sdks/", "");
  });
  return repositoryNames;
}

async function main() {
  const arg = process.argv[2];
  const publishedJsons = fs.readdirSync(publishedDir);
  const result: GenerateSdkResult[] = [];
  await Promise.all(
    publishedJsons.map(async (file) => {
      const key = file.replace(".json", "");
      if (!arg || key.includes(arg)) {
        const res = await generateSdkRepositories(key, true);
        result.push(...res);
      }
    })
  );
  displayResults(result);
}

main().then(() => console.log("Done!"));
