import * as path from "path";
import * as fs from "fs";
import kebabcase from "lodash.kebabcase";
import { Published } from "./util";
import camelcase from "konfig-lib/dist/util/camelcase";

const publishedDirPath = path.join(path.dirname(__dirname), "db", "published");

/**
 * For every JSON under "published/", generate a folder under konfig-docs
 */
function main() {
  // list all files under published/

  const files = fs.readdirSync(publishedDirPath);

  const docsDir = path.join(
    path.dirname(path.dirname(__dirname)),
    "generator",
    "konfig-docs"
  );

  const sdkDir = path.join(docsDir, "src", "pages", "sdk");

  // delete everything under sdkDir and remake the directory
  fs.rmSync(sdkDir, { recursive: true });
  fs.mkdirSync(sdkDir, { recursive: true });

  const redirectsJson: Record<string, string> = {};

  for (const file of files) {
    const filePath = path.join(publishedDirPath, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json: Published = JSON.parse(fileContent);

    const indexTsx = generateIndexTsx(json);

    const company = kebabcase(json.company);
    const service = json.serviceName ? kebabcase(json.serviceName) : undefined;
    const dirPath = path.join(
      sdkDir,
      company,
      service ? service : "",
      "typescript"
    );

    addToRedirectsJson({ redirectsJson, company, service });

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

  // write redirects.json
  fs.writeFileSync(
    path.join(docsDir, "redirects.json"),
    JSON.stringify(redirectsJson, null, 2)
  );
}

function addToRedirectsJson({
  redirectsJson,
  company,
  service,
}: {
  company: string;
  service?: string;
  redirectsJson: Record<string, string>;
}) {
  // add to redirects where:
  // if there is a service name:
  //     "/sdk/company/service" redirects to "/sdk/company/service/typescript"
  //     "/sdk/company" redirects to "/sdk/company/service/typescript"
  // else:
  //     "/sdk/company" redirects to "/sdk/company/typescript" if there is no service
  // Also include a version with and without an ending slash
  if (service !== undefined) {
    const companyRedirectPath = `/sdk/${company}`;
    const serviceRedirectPath = `/sdk/${company}/${service}`;
    const redirectTarget = `${serviceRedirectPath}/typescript`;
    redirectsJson[companyRedirectPath] = redirectTarget;
    redirectsJson[companyRedirectPath + "/"] = redirectTarget;
    redirectsJson[serviceRedirectPath] = `${serviceRedirectPath}/typescript`;
    redirectsJson[
      serviceRedirectPath + "/"
    ] = `${serviceRedirectPath}/typescript`;
  } else {
    const redirectPath = `/sdk/${company}`;
    const redirectTarget = `${redirectPath}/typescript`;
    redirectsJson[redirectPath] = redirectTarget;
    redirectsJson[redirectPath + "/"] = redirectTarget;
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
  metaDescription,
  schemas,
  difficulty,
  contactEmail,
  clientNameCamelCase,
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

export default function ${camelcase(company, { pascalCase: true })}${
    serviceName ? camelcase(serviceName, { pascalCase: true }) : ""
  }TypeScriptSdk() {
  return (
    <Sdk
      sdkName="${sdkName}"
      metaDescription="${metaDescription}"
      company="${company}"
      serviceName="${serviceName}"
      logo="${logo}"
      clientNameCamelCase="${clientNameCamelCase}"
      homepage="${homepage}"
      lastUpdated={new Date("${lastUpdated}")}
      ${
        contactUrl !== undefined
          ? `contactUrl="${contactUrl}"`
          : "// Missing contactUrl"
      }
      ${
        contactEmail !== undefined
          ? `contactEmail="${contactEmail}"`
          : "// Missing contactEmail"
      }
      previewLinkImage="${previewLinkImage}"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={${JSON.stringify(
        methods,
        (key, value) => {
          if (key === "httpMethod") {
            if (value === "get") return "HttpMethodsEnum.GET";
            if (value === "post") return "HttpMethodsEnum.POST";
            if (value === "put") return "HttpMethodsEnum.PUT";
            if (value === "patch") return "HttpMethodsEnum.PATCH";
            if (value === "delete") return "HttpMethodsEnum.DELETE";
            if (value === "head") return "HttpMethodsEnum.HEAD";
            if (value === "options") return "HttpMethodsEnum.OPTIONS";
            if (value === "trace") return "HttpMethodsEnum.TRACE";
          }
          return value;
        },
        2
      )
        // remove quotes for all HttpMethodsEnum values
        .replace(
          /"HttpMethodsEnum.(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS|TRACE)"/g,
          "HttpMethodsEnum.$1"
        )}
    }
      language="typescript"
      apiTitle="${apiTitle}"
      apiBaseUrl="${apiBaseUrl}"
      apiVersion="${apiVersion}"
      endpoints={${endpoints}}
      sdkMethods={${sdkMethods}}
      schemas={${schemas}}
      parameters={${parameters}}
      difficulty="${difficulty}"
      openApiRaw="${openApiRaw}"
    />
  );
}
  `;
}

main();
