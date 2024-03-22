import * as path from "path";
import * as fs from "fs-extra";
import kebabcase from "lodash.kebabcase";
import { Published } from "./util";
import camelcase from "konfig-lib/dist/util/camelcase";
import type { Sdk } from "../../generator/konfig-docs/src/util/Sdk";
import { getParentCategoryFromCategory } from "../src/get-parent-category-from-category";

const publishedDirPath = path.join(path.dirname(__dirname), "db", "published");

type SdkLinks = {
  index: string;
  link: string;
  homepage: string;
  categories: string[];
  parentCategory: string;
  subCategory: string;
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

  const categoryDir = path.join(sdkDir, "category");

  // delete everything under sdkDir except for "index.tsx" and "sdk-links.json"
  const sdkFiles = fs.readdirSync(sdkDir);
  for (const file of sdkFiles) {
    if (
      file !== "index.tsx" &&
      file !== "sdk-links.json" &&
      (process.env.FILTER === undefined || file.includes(process.env.FILTER))
    ) {
      fs.rmSync(path.join(sdkDir, file), { recursive: true });
    }
  }

  const redirectsJson: Record<string, string> = {};
  const sdkLinks: SdkLinks = [];
  const categories: Record<string, string[]> = {};

  const companyApis: Record<string, Published[]> = {};

  for (const file of files) {
    if (
      process.env.FILTER !== undefined &&
      !file.includes(process.env.FILTER)
    ) {
      continue;
    }
    const filePath = path.join(publishedDirPath, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json: Published = JSON.parse(fileContent);

    if (!companyApis[json.company]) {
      companyApis[json.company] = [];
    }
    companyApis[json.company].push(json);

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
    const subCategory = json.category;
    const parentCategory = getParentCategoryFromCategory(json.category);
    categories[parentCategory] = categories[parentCategory] ?? [];
    if (!categories[parentCategory].includes(json.category)) {
      categories[parentCategory].push(json.category);
    }
    addToSdkLinks({
      sdkLinks,
      company,
      service,
      homepage: json.homepage,
      parentCategory,
      subCategory,
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

  for (const company in companyApis) {
    const apis = companyApis[company];
    const indexTsx = generateApiIndexTsx({ apis, company });
    fs.writeFileSync(
      path.join(sdkDir, kebabcase(company), "index.tsx"),
      indexTsx
    );
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

  // write categories.json
  const sortedCategories = Object.entries(categories).sort(([a], [b]) =>
    a.localeCompare(b)
  );
  const formattedCategories = sortedCategories.map(
    ([parentCategory, subCategories]) => ({
      parentCategory,
      subCategories: subCategories.map((category) => ({
        category: category,
        page: generateSubpathForCategory(category),
        subpath: `/sdk/category/${generateSubpathForCategory(category)}`,
      })),
      page: generateSubpathForCategory(parentCategory),
      subpath: `/sdk/category/${generateSubpathForCategory(parentCategory)}`,
    })
  );
  fs.writeFileSync(
    path.join(sdkDir, "categories.json"),
    JSON.stringify(formattedCategories, null, 2)
  );

  // ensure categoryDir exists
  fs.ensureDirSync(categoryDir);

  // generate all /sdk/category/{category} pages
  const allPage = generateCategoryPage({ filter: "all" });
  fs.writeFileSync(path.join(categoryDir, "all.tsx"), allPage);
  for (const parentCategory of formattedCategories) {
    const page = generateCategoryPage({
      filter: parentCategory.parentCategory,
    });
    fs.writeFileSync(
      path.join(categoryDir, `${parentCategory.page}.tsx`),
      page
    );

    for (const subCategory of parentCategory.subCategories) {
      const page = generateCategoryPage({ filter: subCategory.category });
      fs.writeFileSync(path.join(categoryDir, `${subCategory.page}.tsx`), page);
    }
  }

  const companies: {
    parentCategories: string[];
    subCategories: string[];
    favicon: string;
    metaDescription: string;
    company: string;
    numberOfApis: number;
    difficultyScore: number;
    subpath: string;
    keywords: string[];
  }[] = Object.entries(companyApis)
    .map(([company, apis]) => {
      const parentCategories: string[] = [];
      const subCategories: string[] = [];
      for (const api of apis) {
        const subCategory = api.category;
        const parentCategory = getParentCategoryFromCategory(subCategory);
        parentCategories.push(parentCategory);
        subCategories.push(subCategory);
      }
      const averageDifficultyScore =
        apis.reduce((acc, api) => acc + api.difficultyScore, 0) / apis.length;
      const keywords = [...new Set(apis.flatMap((api) => api.categories))];
      // deduplicate parentCategories and subCategories
      return {
        parentCategories: [...new Set(parentCategories)],
        subCategories: [...new Set(subCategories)],
        favicon: apis[0].faviconUrl,
        metaDescription: apis[0].metaDescription,
        company,
        keywords,
        numberOfApis: apis.length,
        difficultyScore: averageDifficultyScore,
        subpath: `/sdk/${kebabcase(company)}`,
      };
    })
    .sort((a, b) => b.difficultyScore - a.difficultyScore);

  // write companies.json
  fs.writeFileSync(
    path.join(sdkDir, "companies.json"),
    JSON.stringify(companies, null, 2)
  );
}

function generateSubpathForCategory(category: string) {
  return kebabcase(category.replace(/&/g, ""));
}

function addToSdkLinks({
  sdkLinks,
  company,
  service,
  homepage,
  categories,
  favicon,
  apiVersion,
  parentCategory,
  subCategory,
}: {
  company: string;
  service?: string;
  categories: string[];
  homepage: string;
  favicon: string;
  parentCategory: string;
  subCategory: string;
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
    parentCategory,
    subCategory,
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
    const serviceRedirectPath = `/sdk/${company}/${service}`;
    redirectsJson[serviceRedirectPath] = `${serviceRedirectPath}/typescript/`;
    redirectsJson[
      serviceRedirectPath + "/"
    ] = `${serviceRedirectPath}/typescript/`;
  }
}

function generateCategoryPage({ filter }: { filter: string }) {
  return `import { SdkDirectory } from "@site/src/components/SdkDirectory";

export default function Sdks() {
  return <SdkDirectory filter="${filter}" />;
}`;
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

function generateApiIndexTsx({
  apis,
  company,
}: {
  apis: Published[];
  company: string;
}): string {
  const codeFriendlyCompanyName =
    company.search(/^[0-9]/) !== -1 ? `Sdk_${company}` : company;
  const previewLinkImage = apis[0].previewLinkImage;
  const faviconUrl = apis[0].faviconUrl;
  const logo = apis[0].logo;
  const metaDescription = apis[0].metaDescription;
  const homepage = apis[0].homepage;
  const sdks: Sdk[] = [];

  /**
   * populate sdks
   */
  for (const api of apis) {
    const languages = ["TypeScript", "Python", "Java"];
    const name = api.serviceName ?? company;
    for (const language of languages) {
      const sdk: Sdk = {
        name,
        numberOfMethods: api.methods.length,
        categories: api.categories,
        index: `${kebabcase(name)}/${language.toLowerCase()}`,
        language,
        link: `/sdk/${kebabcase(company)}${
          api.serviceName ? `/${kebabcase(api.serviceName)}` : ""
        }/${language.toLowerCase()}/`,
        developerDocumentation: api.developerDocumentation,
        openapiGitHubUi: api.openApiGitHubUi,
      };
      sdks.push(sdk);
    }
  }

  return `import React from 'react';
import { Company } from '../../../components/Company';

const sdks = ${JSON.stringify(sdks, null, 2)};

export default function ${camelcase(codeFriendlyCompanyName, {
    pascalCase: true,
  })}() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="${company}"
      previewLinkImage="${previewLinkImage}"
      logo="${logo}"
      favicon="${faviconUrl}"
      sdks={sdks}
      homepage="${homepage}"
      companyKebabCase="${kebabcase(company)}"
      categories={allCategories}
      metaDescription={\`${metaDescription}\`}
    />
  )
}`;
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
      metaDescription={\`${metaDescription}\`}
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
      companyKebabCase="${kebabcase(company)}"
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
