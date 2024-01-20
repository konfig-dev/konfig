import * as path from "path";
import * as fs from "fs";
import { Published } from "./generate-published";
import { SdkPageProps } from "../../generator/konfig-docs/src/components/SdkComponentProps";
import kebabcase from "lodash.kebabcase";
import { parameterStateConfig } from "konfig-lib";

const publishedDirPath = path.join(path.dirname(__dirname), "db", "published");

/**
 * For every JSON under "published/", generate a folder under konfig-docs
 */
function main() {
  // list all files under published/

  const files = fs.readdirSync(publishedDirPath);

  for (const file of files) {
    const filePath = path.join(publishedDirPath, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json: Published = JSON.parse(fileContent);

    const indexTsx = generateIndexTsx(json);

    const dirPath = path.join(
      path.dirname(__dirname),
      "konfig-docs",
      "src",
      "pages",
      kebabcase(json.company),
      kebabcase(json.serviceName),
      "typescript"
    );

    fs.mkdirSync(dirPath, { recursive: true });

    const indexTsxPath = path.join(dirPath, "index.tsx");
    fs.writeFileSync(indexTsxPath, indexTsx);

    // write to _description.mdx
    const descriptionMdx = generateDescriptionMdx(json);
    fs.writeFileSync(path.join(dirPath, "_description.mdx"), descriptionMdx);

    // write to _getting-started.mdx
    const gettingStartedMdx = generateGettingStartedMdx(json);
    fs.writeFileSync(
      path.join(dirPath, "_getting-started.mdx"),
      gettingStartedMdx
    );
  }
}

function generateGettingStartedMdx({ sdkUsageCode }: Published): string {
  return `\`\`\`typescript index.ts
${sdkUsageCode}`;
}

function generateDescriptionMdx({ apiDescription }: Published): string {
  if (apiDescription === undefined) {
    return "";
  }
  return apiDescription;
}

function generateIndexTsx({
  company,
  sdkName,
  serviceName,
  logo,
  homepage,
  lastUpdated,
  contactUrl,
  previewLinkImage,
  methods,
  apiTitle,
  apiBaseUrl,
  apiVersion,
  endpoints,
  sdkMethods,
  schemas,
  difficulty,
  contactEmail,
  openApiRaw,
  parameters,
}: Published): string {
  return `import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function ${company}TypeScriptSdk() {
  return (
    <Sdk
      sdkName="${sdkName}"
      metaDescription="Ably provides a suite of APIs to build, extend, and deliver powerful digital experiences in realtime. Organizations like Toyota, Bloomberg, HubSpot, and Hopin depend on Ably’s platform to offload the growing complexity of business-critical realtime data synchronization at global scale."
      company="${company}"
      serviceName="${serviceName}"
      logo="${logo}"
      homepage="${homepage}"
      lastUpdated={new Date("${lastUpdated}")}
      contactUrl="${contactUrl}"
      previewLinkImage="${previewLinkImage}"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={${JSON.stringify(methods, null, 2)}}
      apiTitle="${apiTitle}"
      apiBaseUrl="${apiBaseUrl}"
      apiVersion="${apiVersion}"
      endpoints={${endpoints}}
      sdkMethods={${sdkMethods}}
      schemas={${schemas}}
      parameters={${parameters}}
      difficulty="${difficulty}"
      contactEmail="${contactEmail}"
      openApiRaw="${openApiRaw}"
    />
  );
}
  `;
}

main();
