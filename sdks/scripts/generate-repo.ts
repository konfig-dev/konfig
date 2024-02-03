import * as execa from "execa";
import * as fs from "fs-extra";
import * as path from "path";
import * as mustache from "mustache";
import { Published, generateSdkDynamicPath } from "./util";

function generateSdkRepositories(key: string, debug: boolean = false) {
  const languages = ["typescript", "java", "python"];

  languages.forEach((language) => {
    generateSdkRepository(key, language, debug);
  });
}

const capitalizedLanguage: Record<string, string> = {
  typescript: "TypeScript",
  java: "Java",
  python: "Python",
};

const OAS_FILE_NAME = "openapi.yaml";

// In debug mode, repository is not created and code is not pushed to remote
function generateSdkRepository(
  key: string,
  language: string,
  debug: boolean = false
) {
  const data: Published = JSON.parse(
    fs.readFileSync(
      path.join(path.dirname(__dirname), "db", "published", `${key}.json`),
      "utf-8"
    )
  );
  const sdkName = data.sdkName.replace("{language}", language);
  const repoDescription = generateRepositoryDescription(data, language);
  const sdksDir = path.join(path.dirname(__dirname), "sdks");
  const repoDir = path.join(sdksDir, sdkName);
  const tmpSdkDir = path.join(path.dirname(__dirname), "tmp", sdkName);
  if (data.fixedSpecFileName === undefined)
    throw new Error(`Fixed spec file name not found for ${key}`);
  const pathToOas = path.join(
    path.dirname(__dirname),
    "db",
    "fixed-specs",
    data.fixedSpecFileName
  );

  if (!debug && repositoryExists(sdkName)) {
    console.log(`Repository ${sdkName} already exists. Aborting...`);
    return;
  }

  // Create tmp directory where sdk will be generated
  if (!fs.existsSync(tmpSdkDir)) fs.mkdirSync(tmpSdkDir, { recursive: true });

  // Create and clone repository
  if (!fs.existsSync(sdksDir)) fs.mkdirSync(sdksDir);
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
  const imagePreviewFile = fs
    .readdirSync(openapiExamplesDir)
    .find((file) => file.match(/imagePreview\.(jpg|png)/));
  if (!imagePreviewFile) throw new Error(`Image preview not found for ${key}`);
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
    execa.sync("konfig", ["generate"], {
      cwd: tmpSdkDir,
      stdio: "inherit",
    });
  } catch (error: any) {
    console.log("Error occurred during konfig generate.");
    console.log("Aborting process and deleting repository...");
    if (!debug) deleteRepository(sdkName);
    console.log("Repository deleted.");
    return;
  }
  addSignupToReadme(tmpSdkDir, language, data);

  // Copy generated sdk into cloned repository
  copySdkToRepository(tmpSdkDir, repoDir, language);

  // Commit and push to remote
  if (!debug) {
    execa.sync("git", ["add", "-A"], { cwd: repoDir, stdio: "inherit" });
    execa.sync(
      "git",
      ["commit", "-m", `Generate ${data.company} ${language} SDK`],
      { cwd: repoDir, stdio: "inherit" }
    );
    execa.sync("git", ["push", "origin", "HEAD"], {
      cwd: repoDir,
      stdio: "inherit",
    });
  }

  // Remove local directory
  execa.sync("rm", ["-rf", sdkName], {
    cwd: sdksDir,
    stdio: "inherit",
  });
}

function addSignupToReadme(sdkDir: string, language: string, data: Published) {
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

  // Replace badges
  const badgesRegex = /(\[!\[(npm|PyPI|Maven Central)\][\s\S]*?)(?=<\/div>)/m;
  const signupBadgeUrl = `https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/${language}-cta.png`;
  const singupBadge = `[![Sign up](${signupBadgeUrl})](${signupLink})`;
  const badges = sdkReadme.match(badgesRegex);
  if (!badges) throw Error("Badges not found in README.md");
  sdkReadme = sdkReadme.replace(badges[0], `${singupBadge}\n`);

  const installationSectionRegex = /^## Installation([\s\S]*?)(?=\n##)/m;
  const replacementText = `## Installation<a id="installation"></a>\n${singupBadge}\n`;
  sdkReadme = sdkReadme.replace(installationSectionRegex, replacementText);
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
    { cwd: dir, stdio: "inherit" }
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

function generateRepositoryDescription(data: Published, language: string) {
  const serviceNameSuffix = data.serviceName
    ? `for ${data.serviceName} API `
    : "";
  let companyDescription = data.metaDescription.trim();
  if (!companyDescription.endsWith("."))
    companyDescription = companyDescription + ".";
  const description = `${data.company}'s ${capitalizedLanguage[language]} SDK ${serviceNameSuffix}generated by Konfig (https://konfigthis.com/).`;
  return `${companyDescription} ${description}`;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

generateSdkRepositories("openbanking.org.uk_account-info-openapi_3.1.7", true);
// generateSdkRepository("wikimedia.org_1.0.0", "typescript", true);
// generateSdkRepository(
//   "openbanking.org.uk_account-info-openapi_3.1.7",
//   "typescript",
//   true
// );
