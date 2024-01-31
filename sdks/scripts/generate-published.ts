import * as path from "path";
import * as fs from "fs";
import snakeCase from "lodash.snakecase";
import { z } from "zod";
import { SdkPagePropsWithPropertiesOmitted } from "./collect";
import { SecuritySchemes, parseSpec } from "konfig-lib";
import camelcase from "konfig-lib/dist/util/camelcase";
import { Published } from "./util";
import kebabcase from "lodash.kebabcase";
import yaml from "js-yaml";
import { getMethodObjects } from "../src/get-method-objects";

const publishJsonPath = path.join(path.dirname(__dirname), "publish.json");
const specDataDirPath = path.join(path.dirname(__dirname), "db", "spec-data");
const publishedDirPath = path.join(path.dirname(__dirname), "db", "published");
const postRequestSpecsDirPath = path.join(
  path.dirname(__dirname),
  "db",
  "post-request-specs"
);
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

const publishJsonSchema = z.object({
  publish: z.record(
    z.object({
      company: z.string(),
      serviceName: z.string().optional(),
      sdkName: z.string(),
      clientName: z.string(),
      metaDescription: z.string().optional(),
      securitySchemes: z
        .record(
          z.object({
            type: z.literal("apiKey"),
            description: z.string().optional(),
            in: z.union([z.literal("query"), z.literal("header")]),
            name: z.string(),
          })
        )
        .optional(),
      homepage: z
        .string()
        // ensure it does not start with https:// or http://
        .refine(
          (url) => !url.startsWith("https://") && !url.startsWith("http://"),
          "URL cannot start with https:// or http://"
        )
        .optional(),
      categories: z.string().array().optional(),
    })
  ),
});

type PublishJson = z.infer<typeof publishJsonSchema>;

async function main() {
  const publishJson: PublishJson = publishJsonSchema.parse(
    JSON.parse(fs.readFileSync(publishJsonPath, "utf-8"))
  );
  const dataFromHtml = JSON.parse(fs.readFileSync(dataFromHtmlPath, "utf-8"));
  // delete and recreate "published/" directory
  fs.rmSync(publishedDirPath, { recursive: true, force: true });
  fs.mkdirSync(publishedDirPath, { recursive: true });
  const now = new Date();
  for (const spec in publishJson.publish) {
    console.log("Generating published data for", spec);

    const specDataPath = path.join(specDataDirPath, spec);
    const publishData = publishJson.publish[spec];
    const { categories, ...specData }: SdkPagePropsWithPropertiesOmitted =
      JSON.parse(fs.readFileSync(`${specDataPath}.json`, "utf-8"));
    const typescriptSdkUsageCode = generateTypescriptSdkUsageCode({
      ...specData,
      ...publishData,
    });

    if (publishData.metaDescription === undefined) {
      publishData.metaDescription = dataFromHtml[spec]?.description;
      if (publishData.metaDescription === undefined) {
        console.log("❌ ERROR: No metaDescription for", spec);
        continue;
      }
    }

    const companyKebabCase = kebabcase(publishData.company.toLowerCase());
    const serviceKebabCase =
      publishData.serviceName !== undefined
        ? kebabcase(publishData.serviceName.toLowerCase())
        : null;
    const servicePath = serviceKebabCase ? `/${serviceKebabCase}` : "";

    const dynamicPath = `${companyKebabCase}${servicePath}`;

    // find existence of files in openapi-examples
    const openapiExamplesDirPath = path.join(openapiExamplesPath, dynamicPath);
    const openapiExamplesDirExists = fs.existsSync(openapiExamplesDirPath);
    if (!openapiExamplesDirExists) {
      throw Error(
        `❌ ERROR: openapi-examples directory does not exist at ${openapiExamplesDirPath}`
      );
    }
    // find file that starts with "logo" in openapiExamplesDirPath
    const logoPath = fs
      .readdirSync(openapiExamplesDirPath)
      .find((file) => file.startsWith("logo"));
    if (logoPath === undefined) {
      throw Error(`❌ ERROR: logo does not exist at ${openapiExamplesDirPath}`);
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

    const nonEmptyCategories = publishData.categories ?? categories ?? [];
    if (nonEmptyCategories.length === 0) {
      throw Error(`❌ ERROR: No categories for ${openapiExamplesDirPath}`);
    }

    let rawSpecString = getRawSpecString(specData);
    const oas = await parseSpec(rawSpecString);

    // if publishData includes securitySchemes then override the securitySchemes in oas
    if (publishData.securitySchemes) {
      if (!oas.spec.components) oas.spec.components = {};
      oas.spec.components.securitySchemes = publishData.securitySchemes;
    }

    // write oas to openapiExamples directory to file openapi.yaml
    fs.writeFileSync(
      path.join(openapiExamplesDirPath, "openapi.yaml"),
      yaml.dump(oas.spec)
    );

    // find file that starts with "openapi" in openapiExamplesDirPath
    const openapiPath = fs
      .readdirSync(openapiExamplesDirPath)
      .find((file) => file.startsWith("openapi"));
    if (openapiPath === undefined) {
      throw Error(
        `❌ ERROR: openapi does not exist at ${openapiExamplesDirPath}`
      );
    }

    const merged: Published = {
      ...specData,
      ...publishData,
      categories: nonEmptyCategories,
      methods: getMethodObjects(oas),
      metaDescription: publishData.metaDescription,
      originalSpecUrl: specData.openApiRaw,
      logo: `${githubUrlPrefix}${logoPath}`,
      openApiRaw: `${githubUrlPrefix}${openapiPath}`,
      previewLinkImage: `${githubUrlPrefix}${imagePreviewPath}`,
      faviconUrl: `${githubUrlPrefix}${faviconPath}`,
      clientNameCamelCase: camelcase(publishData.clientName),
      lastUpdated: now,
      typescriptSdkUsageCode,
    };

    if (
      merged.originalSpecUrl === undefined &&
      merged.originalSpecPostRequest === undefined
    ) {
      throw Error(
        `❌ ERROR: No originalSpecUrl or originalSpecPostRequest for ${spec}`
      );
    }

    // write to "published/" directory
    const publishedPath = path.join(publishedDirPath, spec);
    fs.writeFileSync(`${publishedPath}.json`, JSON.stringify(merged, null, 2));
  }
}

function getRawSpecString(specData: SdkPagePropsWithPropertiesOmitted) {
  if (specData.openapiDirectoryPath) {
    return fs.readFileSync(
      path.join(apiDirPath, specData.openapiDirectoryPath),
      "utf-8"
    );
  } else if (specData.postRequestSpecFilename) {
    return fs.readFileSync(
      path.join(postRequestSpecsDirPath, specData.postRequestSpecFilename),
      "utf-8"
    );
  } else {
    throw Error(`❌ ERROR: No spec found for ${specData}`);
  }
}

function generateTypescriptSdkUsageCode({
  sdkName,
  clientName,
  securitySchemes,
}: {
  sdkName: string;
  clientName: string;
  securitySchemes: SecuritySchemes;
}): string {
  sdkName = sdkName.replace("{language}", "typescript");
  const setupLines: string[] = [];
  const usedKeys = new Set<string>();
  for (const key in securitySchemes) {
    let newLines: string[] = [];
    const addKey = (key: string, value: string) => {
      if (usedKeys.has(key)) {
        // add with comment
        newLines.push(`    // ${key}: "${value}",`);
      } else {
        newLines.push(`    ${key}: "${value}",`);
      }
      usedKeys.add(key);
    };
    const securityScheme = securitySchemes[key];
    if (securityScheme.description !== undefined)
      newLines.push(`    // ${securityScheme.description}`);
    if (securityScheme.type === "apiKey") {
      addKey(securityScheme.name, snakeCase(securityScheme.name).toUpperCase());
    } else if (securityScheme.type === "http") {
      if (securityScheme.scheme.toLocaleLowerCase() === "basic") {
        addKey("username", "USERNAME");
        addKey("password", "PASSWORD");
      } else if (securityScheme.scheme.toLocaleLowerCase() === "bearer") {
        addKey("token", "TOKEN");
      } else if (securityScheme.scheme.toLocaleLowerCase() === "digest") {
        addKey("username", "USERNAME");
        addKey("password", "PASSWORD");
      }
    } else if (securityScheme.type === "oauth2") {
      if ("flows" in securityScheme) {
        if (securityScheme.flows.implicit !== undefined) {
          addKey("clientId", "CLIENT_ID");
          addKey("redirectUri", "REDIRECT_URI");
        } else if (securityScheme.flows.password !== undefined) {
          addKey("username", "USERNAME");
          addKey("password", "PASSWORD");
        } else if (securityScheme.flows.clientCredentials !== undefined) {
          addKey("clientId", "CLIENT_ID");
          addKey("clientSecret", "CLIENT_SECRET");
        } else if (securityScheme.flows.authorizationCode !== undefined) {
          addKey("clientId", "CLIENT_ID");
          addKey("clientSecret", "CLIENT_SECRET");
          addKey("redirectUri", "REDIRECT_URI");
        }
      }
    } else if (securityScheme.type === "openIdConnect") {
      addKey("clientId", "CLIENT_ID");
      addKey("clientSecret", "CLIENT_SECRET");
    }
    setupLines.push(...newLines);
  }

  const lines: string[] = [
    `import { ${clientName} } from '${sdkName}';`,
    "",
    `const ${camelcase(clientName)} = new ${clientName}({`,
    ...setupLines,
    "})",
  ];
  return lines.join("\n");
}

main().then(() => console.log("Done"));
