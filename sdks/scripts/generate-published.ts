import * as path from "path";
import * as fs from "fs";
import snakeCase from "lodash.snakecase";
import { z } from "zod";
import { SdkPagePropsWithPropertiesOmitted } from "./collect";
import { SecuritySchemes } from "konfig-lib";
import camelcase from "konfig-lib/dist/util/camelcase";
import { Published } from "./util";
import kebabcase from "lodash.kebabcase";

const publishJsonPath = path.join(path.dirname(__dirname), "publish.json");
const specDataDirPath = path.join(path.dirname(__dirname), "db", "spec-data");
const publishedDirPath = path.join(path.dirname(__dirname), "db", "published");
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
      homepage: z.string().optional(),
      categories: z.string().array().optional(),
    })
  ),
});

function main() {
  const publishJson = publishJsonSchema.parse(
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
      ...publishData,
      ...specData,
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
    // find file that starts with "openapi" in openapiExamplesDirPath
    const openapiPath = fs
      .readdirSync(openapiExamplesDirPath)
      .find((file) => file.startsWith("openapi"));
    if (openapiPath === undefined) {
      throw Error(
        `❌ ERROR: openapi does not exist at ${openapiExamplesDirPath}`
      );
    }

    const githubUrlPrefix = `https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/${dynamicPath}/`;

    const nonEmptyCategories = publishData.categories ?? categories ?? [];
    if (nonEmptyCategories.length === undefined) {
      throw Error(`❌ ERROR: No categories for ${openapiExamplesDirPath}`);
    }

    const merged: Published = {
      ...specData,
      ...publishData,
      categories: nonEmptyCategories,
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

    // write to "published/" directory
    const publishedPath = path.join(publishedDirPath, spec);
    fs.writeFileSync(`${publishedPath}.json`, JSON.stringify(merged, null, 2));
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
  let i = 0;
  for (const key in securitySchemes) {
    let newLines: string[] = [];
    const securityScheme = securitySchemes[key];
    if (securityScheme.description !== undefined)
      newLines.push(`    // ${securityScheme.description}`);
    if (securityScheme.type === "apiKey") {
      newLines.push(
        `    ${securityScheme.name}: "${snakeCase(
          securityScheme.name
        ).toUpperCase()}"`
      );
    } else if (securityScheme.type === "http") {
      if (securityScheme.scheme.toLocaleLowerCase() === "basic") {
        newLines.push(`    username: "USERNAME",`);
        newLines.push(`    password: "PASSWORD",`);
      } else if (securityScheme.scheme.toLocaleLowerCase() === "bearer") {
        newLines.push(`    token: "TOKEN",`);
      } else if (securityScheme.scheme.toLocaleLowerCase() === "digest") {
        newLines.push(`    username: "USERNAME",`);
        newLines.push(`    password: "PASSWORD",`);
      }
    } else if (securityScheme.type === "oauth2") {
      if ("flows" in securityScheme) {
        if (securityScheme.flows.implicit !== undefined) {
          newLines.push(`    clientId: "CLIENT_ID",`);
          newLines.push(`    redirectUri: "REDIRECT_URI",`);
        } else if (securityScheme.flows.password !== undefined) {
          newLines.push(`    username: "USERNAME",`);
          newLines.push(`    password: "PASSWORD",`);
        } else if (securityScheme.flows.clientCredentials !== undefined) {
          newLines.push(`    clientId: "CLIENT_ID",`);
          newLines.push(`    clientSecret: "CLIENT_SECRET",`);
        } else if (securityScheme.flows.authorizationCode !== undefined) {
          newLines.push(`    clientId: "CLIENT_ID",`);
          newLines.push(`    clientSecret: "CLIENT_SECRET",`);
          newLines.push(`    redirectUri: "REDIRECT_URI",`);
        }
      }
    } else if (securityScheme.type === "openIdConnect") {
      newLines.push(`    clientId: "CLIENT_ID",`);
      newLines.push(`    clientSecret: "CLIENT_SECRET",`);
    }

    // Comment out all but the first security scheme
    if (i++ > 0) {
      newLines = newLines.map((line) => {
        // strip spaces at beginning of line
        line = line.replace(/^ +/, "");

        // if line starts with comment already, don't add another comment
        if (line.startsWith("//")) return `    ${line}`;
        return `    // ${line}`;
      });
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

main();
