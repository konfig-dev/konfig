import * as path from "path";
import * as fs from "fs-extra";
import { SdkPagePropsWithPropertiesOmitted } from "./collect";
import { parseSpec } from "konfig-lib";
import camelcase from "konfig-lib/dist/util/camelcase";
import { Published, customRequestSpecsDir } from "./util";
import yaml from "js-yaml";
import { generateSdkDynamicPath } from "./util";
import { getMethodObjects } from "../src/get-method-objects";
import { generateTypescriptSdkUsageCode } from "../src/generate-typescript-sdk-usage-code";
import execa from "execa";
import kebabcase from "lodash.kebabcase";
import { PublishJson, publishJsonSchema } from "../src/publish-json-schema";

const publishJsonPath = path.join(path.dirname(__dirname), "publish.json");
const specDataDirPath = path.join(path.dirname(__dirname), "db", "spec-data");
const publishedDirPath = path.join(path.dirname(__dirname), "db", "published");
const progressYamlsPath = path.join(path.dirname(__dirname), "db", "progress");
const apiDirPath = path.join(
  path.dirname(__dirname),
  "openapi-directory",
  "APIs"
);
const dataFromHtmlPath = path.join(
  path.dirname(__dirname),
  "db",
  "data-from-html.json"
);
const openapiExamplesPath = path.join(
  path.dirname(__dirname),
  "openapi-examples"
);
const fixedSpecsOutputPath = path.join(
  path.dirname(__dirname),
  "db",
  "fixed-specs"
);
const intermediateFixedSpecsOutputPath = path.join(
  path.dirname(__dirname),
  "db",
  "intermediate-fixed-specs"
);

/**
 * This is the name of the OAS file inside openapi-examples
 */
const openapiFilename = "openapi.yaml";

function collectAllPublishData() {
  const publishJson: PublishJson = publishJsonSchema.parse(
    JSON.parse(fs.readFileSync(publishJsonPath, "utf-8"))
  );
  const dataFromHtml = JSON.parse(fs.readFileSync(dataFromHtmlPath, "utf-8"));

  return Object.fromEntries(
    Object.entries(publishJson.publish).map(([spec, publishData]) => {
      const specDataPath = path.join(specDataDirPath, spec);
      const specData: SdkPagePropsWithPropertiesOmitted = JSON.parse(
        fs.readFileSync(`${specDataPath}.json`, "utf-8")
      );

      if (publishData.metaDescription === undefined) {
        publishData.metaDescription = dataFromHtml[spec]?.description;
        if (publishData.metaDescription === undefined) {
          throw Error(`❌ ERROR: No metaDescription for ${spec}`);
        }
      }

      const companyKebabCase = kebabcase(publishData.company.toLowerCase());
      const serviceName = getServiceName({ publishData, specData });
      const serviceKebabCase =
        serviceName !== undefined
          ? kebabcase(serviceName.toLowerCase())
          : undefined;

      const dynamicPath = generateSdkDynamicPath(
        publishData.company,
        serviceKebabCase
      );

      // find existence of files in openapi-examples
      const openapiExamplesDirPath = path.join(
        openapiExamplesPath,
        dynamicPath
      );
      if (!fs.existsSync(openapiExamplesDirPath)) {
        throw Error(
          `❌ ERROR: openapi-examples directory does not exist at ${openapiExamplesDirPath}`
        );
      }

      // find file that starts with "logo" in openapiExamplesDirPath
      const logoPath = fs
        .readdirSync(openapiExamplesDirPath)
        .find((file) => file.startsWith("logo"));
      if (logoPath === undefined) {
        throw Error(
          `❌ ERROR: logo does not exist at ${openapiExamplesDirPath}`
        );
      }

      // find file that starts with "favicon" in openapiExamplesDirPath
      const faviconPath = fs
        .readdirSync(openapiExamplesDirPath)
        .find((file) => file.startsWith("favicon"));
      if (faviconPath === undefined) {
        throw Error(
          `❌ ERROR: favicon does not exist at ${openapiExamplesDirPath}`
        );
      }

      // find file that starts with "imagePreview" in openapiExamplesDirPath
      const imagePreviewPath = fs
        .readdirSync(openapiExamplesDirPath)
        .find((file) => file.startsWith("imagePreview"));
      if (imagePreviewPath === undefined) {
        throw Error(
          `❌ ERROR: imagePreview does not exist at ${openapiExamplesDirPath}`
        );
      }

      const githubUrlPrefix = `https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/${dynamicPath}/`;

      const nonEmptyCategories =
        publishData.categories ?? specData.categories ?? [];
      if (nonEmptyCategories.length === 0) {
        throw Error(`❌ ERROR: No categories for ${openapiExamplesDirPath}`);
      }
      return [
        spec,
        {
          companyKebabCase,
          serviceKebabCase,
          dynamicPath,
          openapiExamplesDirPath,
          publishData,
          githubUrlPrefix,
          imagePreviewPath,
          faviconPath,
          logoPath,
          specData,
          nonEmptyCategories,
          apiDescription: publishData.apiDescription,
          metaDescription: publishData.metaDescription,
        },
      ];
    })
  );
}

/**
 * Handle the overwrite/cancel logic of the serviceName property
 */
function getServiceName({
  publishData,
  specData,
}: {
  publishData: { serviceName?: string | false };
  specData: { serviceName?: string };
}): string | undefined {
  if (publishData.serviceName === false) {
    return undefined;
  }
  if (publishData.serviceName !== undefined) {
    return publishData.serviceName;
  }
  return specData.serviceName;
}

async function main() {
  const publishJson: PublishJson = publishJsonSchema.parse(
    JSON.parse(fs.readFileSync(publishJsonPath, "utf-8"))
  );
  const now = new Date();
  const publishedJsons: Set<string> = new Set();

  if (!fs.existsSync(fixedSpecsOutputPath))
    fs.mkdirSync(fixedSpecsOutputPath), { recursive: true };
  if (!fs.existsSync(progressYamlsPath))
    fs.mkdirSync(progressYamlsPath), { recursive: true };

  const publishDatum = collectAllPublishData();
  const fixedSpecFileNames: Record<string, string> = {};

  /**
   * First pass: fix specs
   */
  const promises: Promise<void>[] = [];
  const fixSpecNotWorkingList = ["ably.io_platform_1.1.0"];
  for (const spec in publishDatum) {
    const publishData = publishJson.publish[spec];
    const { dynamicPath, specData } = publishDatum[spec];

    let rawSpecString = getRawSpecString(specData);
    const oas = await parseSpec(rawSpecString);

    // if publishData includes securitySchemes then override the securitySchemes in oas
    if (publishData.securitySchemes) {
      if (!oas.spec.components) oas.spec.components = {};
      oas.spec.components.securitySchemes = publishData.securitySchemes;
      oas.spec.security = Object.keys(publishData.securitySchemes).map(
        (key) => ({ [key]: [] })
      );
    }

    if (publishData.apiStatusUrls !== undefined) {
      if (!oas.spec.info) oas.spec.info = {} as any;
      (oas.spec.info as any)["x-api-status-urls"] = publishData.apiStatusUrls;
    }

    const openapiFilename = "openapi.yaml";
    const fixedSpecFileName = getFixedSpecFileName(publishData.sdkName);
    fixedSpecFileNames[spec] = fixedSpecFileName;
    const specIntermediatePathDirectory = path.join(
      intermediateFixedSpecsOutputPath,
      dynamicPath
    );
    fs.ensureDirSync(specIntermediatePathDirectory);
    const specIntermediatePath = path.join(
      specIntermediatePathDirectory,
      openapiFilename
    );

    // write oas to openapiExamples directory to file openapi.yaml
    // Dylan: The reason why we do this is so we can author "securitySchemes" in
    // the publish.json and then override the securitySchemes in the OAS before
    // fixing it
    fs.writeFileSync(specIntermediatePath, yaml.dump(oas.spec));

    if (fixSpecNotWorkingList.includes(spec)) {
      console.log(`🟡 Skipping ${spec} because it is in fixSpecNotWorkingList`);
      fs.writeFileSync(specIntermediatePath, rawSpecString);
      continue;
    }

    promises.push(
      fixSpec(
        specIntermediatePath,
        path.join(fixedSpecsOutputPath, fixedSpecFileName)
      )
    );
  }
  await Promise.all(promises);

  /**
   * Second pass: write to published/
   */
  for (const spec in publishDatum) {
    const {
      openapiExamplesDirPath,
      nonEmptyCategories,
      publishData,
      githubUrlPrefix,
      logoPath,
      imagePreviewPath,
      faviconPath,
      metaDescription,
    } = publishDatum[spec];
    const specDataPath = path.join(specDataDirPath, spec);
    const { categories, ...specData }: SdkPagePropsWithPropertiesOmitted =
      JSON.parse(fs.readFileSync(`${specDataPath}.json`, "utf-8"));

    const typescriptSdkUsageCode = generateTypescriptSdkUsageCode({
      ...specData,
      ...publishData,
    });

    // write fixed oas to openapiExamples directory to file openapi.yaml
    const fixedSpecFileName = fixedSpecFileNames[spec];
    const fixedSpecPath = path.join(fixedSpecsOutputPath, fixedSpecFileName);
    const fixedSpecString = fs.readFileSync(fixedSpecPath, "utf-8");
    if (fixedSpecString === "") {
      throw Error(`❌ ERROR: ${fixedSpecPath} is empty`);
    }
    const oas = await parseSpec(fixedSpecString);
    fs.writeFileSync(
      path.join(openapiExamplesDirPath, "openapi.yaml"),
      yaml.dump(oas.spec)
    );

    const serviceName = getServiceName({ publishData, specData });

    const merged: Published = {
      ...specData,
      ...publishData,
      categories: nonEmptyCategories,
      methods: getMethodObjects(oas),
      metaDescription,
      originalSpecUrl: specData.openApiRaw,
      logo: `${githubUrlPrefix}${logoPath}`,
      openApiRaw: `${githubUrlPrefix}${openapiFilename}`,
      previewLinkImage: `${githubUrlPrefix}${imagePreviewPath}`,
      faviconUrl: `${githubUrlPrefix}${faviconPath}`,
      clientNameCamelCase: camelcase(publishData.clientName),
      lastUpdated: now,
      typescriptSdkUsageCode,
      fixedSpecFileName: fixedSpecFileNames[spec],
      serviceName,
    };

    if (
      merged.originalSpecUrl === undefined &&
      merged.originalCustomRequest === undefined
    ) {
      throw Error(
        `❌ ERROR: No originalSpecUrl or originalSpecPostRequest for ${spec}`
      );
    }

    const publishedPath = path.join(publishedDirPath, spec);
    publishedJsons.add(`${publishedPath}.json`);

    // check if JSON in published/ is exactly the same besides the "lastUpdated" property
    const exists = fs.existsSync(`${publishedPath}.json`);
    if (exists) {
      const existing = JSON.parse(
        fs.readFileSync(`${publishedPath}.json`, "utf-8")
      );

      // temporarily "lastUpdated" property
      // copy and delete the property to preserve lastUpdated for merged
      delete existing.lastUpdated;
      const mergedCopy: any = { ...merged };
      delete mergedCopy.lastUpdated;

      if (JSON.stringify(existing) === JSON.stringify(mergedCopy)) {
        console.log("⚪️ No changes detected for", spec);
        continue;
      }
    }

    // write to "published/" directory
    console.log(`🔵 Writing ${publishedPath} to disk`);
    fs.writeFileSync(`${publishedPath}.json`, JSON.stringify(merged, null, 2));
  }

  // delete any specs that are not in publishedJsons
  const publishedFiles = fs.readdirSync(publishedDirPath);
  for (const file of publishedFiles) {
    if (!publishedJsons.has(path.join(publishedDirPath, file))) {
      console.log("🔴 Deleting old file", file);
      fs.unlinkSync(path.join(publishedDirPath, file));
    }
  }
}

function getFixedSpecFileName(sdkName: string) {
  const companyAndPlatform = sdkName.replace("-{language}-sdk", "");
  return `${companyAndPlatform}-fixed-spec.yaml`;
}

async function fixSpec(
  specInputPath: string,
  specOutputPath: string
): Promise<void> {
  if (!fs.existsSync(specOutputPath)) fs.writeFileSync(specOutputPath, "");
  const progressYamlPath = path.join(
    progressYamlsPath,
    path.basename(specOutputPath.replace("-fixed-spec", "-progress"))
  );
  // const cliName = "konfig";
  const cliName = path.join(
    path.dirname(path.dirname(__dirname)),
    "generator",
    "konfig-dash",
    "packages",
    "konfig-cli",
    "bin",
    "run"
  ); // for development
  const args = [
    "fix",
    "--noInput",
    "-i",
    specInputPath,
    "-s",
    specOutputPath,
    "-p",
    progressYamlPath,
  ];
  if (process.env.DEBUG !== undefined) {
    console.debug(`🟢 Running "${cliName} ${args.join(" ")}"`);
  }
  try {
    await execa(cliName, args, { env: { ALLOW_INVALID_REF: "1" } });
  } catch (err) {
    console.log(`❌ ERROR: ${err}`);
  }
  console.log(`✅ Fixed spec ${path.dirname(specInputPath)}/openapi.yaml`);
}

function getSpecPathFromSpecData(
  specData: SdkPagePropsWithPropertiesOmitted
): string {
  if (specData.openapiDirectoryPath) {
    return path.join(apiDirPath, specData.openapiDirectoryPath);
  } else if (specData.customRequestSpecFilename) {
    return path.join(customRequestSpecsDir, specData.customRequestSpecFilename);
  } else {
    throw Error(`❌ ERROR: No spec found for ${specData}`);
  }
}

function getRawSpecString(specData: SdkPagePropsWithPropertiesOmitted) {
  const specPath = getSpecPathFromSpecData(specData);
  return fs.readFileSync(specPath, "utf-8");
}

main().then(() => console.log("Done"));
