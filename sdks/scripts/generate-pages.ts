import * as path from "path";
import * as fs from "fs";
import kebabcase from "lodash.kebabcase";
import { Published } from "./util";
import camelcase from "konfig-lib/dist/util/camelcase";

const publishedDirPath = path.join(path.dirname(__dirname), "db", "published");

type SdkLinks = {
  index: string;
  link: string;
  homepage: string;
  categories: string[];
  favicon: string;
  apiVersion: string;
}[];

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

  // delete everything under sdkDir except for "index.tsx" and "sdk-links.json"
  const sdkFiles = fs.readdirSync(sdkDir);
  for (const file of sdkFiles) {
    if (file !== "index.tsx" && file !== "sdk-links.json") {
      fs.rmSync(path.join(sdkDir, file), { recursive: true });
    }
  }

  const redirectsJson: Record<string, string> = {};
  const sdkLinks: SdkLinks = [];

  for (const file of files) {
    const filePath = path.join(publishedDirPath, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json: Published = JSON.parse(fileContent);

    // set all pages to refactored page
    json.useNewPage = true;

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
    addToSdkLinks({
      sdkLinks,
      company,
      service,
      homepage: json.homepage,
      categories: json.categories,
      favicon: json.faviconUrl,
      apiVersion: json.apiVersion,
    });

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

    if (json.useNewPage) {
      const firstRequestMdx = generateFirstRequestMdx(json);
      fs.writeFileSync(
        path.join(dirPath, "_first-request.mdx"),
        firstRequestMdx
      );
    }
  }

  // write redirects.json
  fs.writeFileSync(
    path.join(docsDir, "redirects.json"),
    JSON.stringify(redirectsJson, null, 2)
  );

  // write sdk-links.json
  fs.writeFileSync(
    path.join(sdkDir, "sdk-links.json"),
    JSON.stringify(sdkLinks, null, 2)
  );
}

function addToSdkLinks({
  sdkLinks,
  company,
  service,
  homepage,
  categories,
  favicon,
  apiVersion,
}: {
  company: string;
  service?: string;
  categories: string[];
  homepage: string;
  favicon: string;
  sdkLinks: SdkLinks;
  apiVersion?: string;
}) {
  const link = `/sdk/${company}/${service ? `${service}/` : ""}typescript/`;
  const index = `${company}/${service ? `${service}/` : ""}typescript`;
  sdkLinks.push({
    index,
    link,
    homepage,
    categories,
    favicon,
    apiVersion: apiVersion ?? "",
  });
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
    const redirectTarget = `${serviceRedirectPath}/typescript/`;
    redirectsJson[companyRedirectPath] = redirectTarget;
    redirectsJson[companyRedirectPath + "/"] = redirectTarget;
    redirectsJson[serviceRedirectPath] = `${serviceRedirectPath}/typescript/`;
    redirectsJson[
      serviceRedirectPath + "/"
    ] = `${serviceRedirectPath}/typescript/`;
  } else {
    const redirectPath = `/sdk/${company}`;
    const redirectTarget = `${redirectPath}/typescript/`;
    redirectsJson[redirectPath] = redirectTarget;
    redirectsJson[redirectPath + "/"] = redirectTarget;
  }
}

function generateGettingStartedMdx({
  typescriptSdkUsageCode,
}: Published): string {
  return `\`\`\`typescript index.ts
${typescriptSdkUsageCode}
\`\`\``;
}

function generateFirstRequestMdx({
  typescriptSdkFirstRequestCode,
}: Published): string {
  return `\`\`\`typescript index.ts
${typescriptSdkFirstRequestCode}
\`\`\``;
}

function generateDescriptionMdx({ apiDescription }: Published): string {
  if (apiDescription === undefined) {
    return "";
  }
  if (apiDescription === "Missing description placeholder") {
    return "";
  }
  // replace any strings wrapped in curly braces with brackets (e.g. {foo} -> [foo])
  apiDescription = apiDescription.replace(/{/g, "[").replace(/}/g, "]");

  // replace any usage of html style attributes with JSX style attributes
  // e.g. `style="width: 75px"` --> `style={{ width: "75px" }}`
  // find all style attributes using html style
  const styleRegex = /style="([^"]+)"/g;
  apiDescription = apiDescription.replace(styleRegex, (match, style) => {
    // replace the style attribute with JSX style
    return `style={{ ${style
      .split(";")
      .map((style: string) => {
        const [key, value] = style.split(":");
        return `${key.trim()}: "${value.trim()}"`;
      })
      .join(", ")} }}`;
  });

  // convert "<https://docs.gitlab.com/ee/api/>" to
  // "[docs.gitlab.com/ee/api](https://docs.gitlab.com/ee/api/)"
  // Specifically only match links that start with "http" or "https" inside angle brackets
  const linkRegex = /<(https?:\/\/[^>]+)>/g;
  apiDescription = apiDescription.replace(linkRegex, (match, link) => {
    return `[${link}](${link})`;
  });

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
  faviconUrl,
  clientNameCamelCase,
  openApiRaw,
  openApiGitHubUi,
  parameters,
  apiDescription,
  useNewPage,
  categories,
  developerDocumentation,
}: Published): string {
  // If name starts with a number or contains special characters, prepend a "Sdk_"
  const codeFriendlyCompanyName =
    company.search(/^[0-9]/) !== -1 ? `Sdk_${company}` : company;
  const reactComponent = useNewPage ? "SdkNew" : "Sdk";
  return `import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
${
  useNewPage
    ? `// @ts-ignore
import FirstRequest from "./_first-request.mdx"`
    : ""
}
import { ${reactComponent} } from "@site/src/components/${reactComponent}";

export default function ${camelcase(codeFriendlyCompanyName, {
    pascalCase: true,
  })}${
    serviceName ? camelcase(serviceName, { pascalCase: true }) : ""
  }TypeScriptSdk() {
  return (
    <${reactComponent}
      sdkName="${sdkName.replace("{language}", "typescript")}"
      metaDescription="${metaDescription}"
      company="${company}"${
    apiDescription === "" || apiDescription === undefined
      ? `
      doesNotHaveApiDescription={true}`
      : ""
  }
      ${
        serviceName !== undefined
          ? `serviceName="${serviceName}"`
          : "// Missing serviceName"
      }
      logo="${logo}"
      clientNameCamelCase="${clientNameCamelCase}"
      homepage="${homepage}"
      lastUpdated={new Date("${lastUpdated}")}
      faviconUrl="${faviconUrl}"
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
      ${useNewPage ? `FirstRequest={FirstRequest}` : ""}
      categories={${JSON.stringify(categories)}}
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
      language="TypeScript"
      apiTitle="${apiTitle}"
      apiBaseUrl="${apiBaseUrl}"
      ${apiVersion !== undefined ? `apiVersion="${apiVersion}"` : ""}
      endpoints={${endpoints}}
      sdkMethods={${sdkMethods}}
      schemas={${schemas}}
      parameters={${parameters}}
      difficulty="${difficulty}"
      openApiRaw="${openApiRaw}"
      openApiGitHubUi="${openApiGitHubUi}"
      ${
        developerDocumentation !== undefined
          ? `developerDocumentation="${developerDocumentation}"`
          : ""
      }
    />
  );
}
  `;
}

main();
