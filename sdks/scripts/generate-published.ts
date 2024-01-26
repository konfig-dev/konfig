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

const publishJsonSchema = z.object({
  publish: z.record(
    z.object({
      company: z.string(),
      serviceName: z.string().optional(),
      language: z.string(),
      sdkName: z.string(),
      clientName: z.string(),
      metaDescription: z.string().optional(),
      homepage: z.string().optional(),
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
    const specData: SdkPagePropsWithPropertiesOmitted = JSON.parse(
      fs.readFileSync(`${specDataPath}.json`, "utf-8")
    );
    const sdkUsageCode = generateSdkUsageCode({ ...publishData, ...specData });

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

    const merged: Published = {
      ...specData,
      ...publishData,
      metaDescription: publishData.metaDescription,
      logo: `https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/${dynamicPath}/logo.png`,
      openApiRaw: `https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/${dynamicPath}/api.yaml`,
      previewLinkImage: `https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/${dynamicPath}/imagePreview.png`,
      faviconUrl: `https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/${dynamicPath}/favicon.png`,
      clientNameCamelCase: camelcase(publishData.clientName),
      lastUpdated: now,
      sdkUsageCode,
    };

    // write to "published/" directory
    const publishedPath = path.join(publishedDirPath, spec);
    fs.writeFileSync(`${publishedPath}.json`, JSON.stringify(merged, null, 2));
  }
}

function generateSdkUsageCode({
  sdkName,
  clientName,
  securitySchemes,
}: {
  sdkName: string;
  clientName: string;
  securitySchemes: SecuritySchemes;
}): string {
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
        ).toUpperCase()}"}`
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
