import * as path from "path";
import { SecuritySchemes, Spec, parseSpec } from "konfig-lib";
import * as fs from "fs";
import * as glob from "glob";
import * as math from "mathjs";
import type { SdkPageProps } from "../../generator/konfig-docs/src/components/SdkComponentProps";
import {
  computeDifficultyScore,
  getCategories,
  getInfoContactEmail,
  getInfoContactUrl,
  getKey,
  getNumberOfEndpoints,
  getNumberOfOperations,
  getNumberOfParameters,
  getNumberOfSchemas,
  getOpenApiRaw,
  getProviderName,
  getSecuritySchemes,
  getServiceName,
  getVersion,
  specFolder,
} from "./util";
import {
  CustomRequest,
  collectFromCustomRequests,
} from "../src/collect-from-custom-requests";

type Paths = { oasPath: string }[];

const apiDirectory = path.join(
  path.dirname(__dirname),
  "openapi-directory",
  "APIs"
);

function calculateZScores(numbers: number[]): number[] {
  const mean = math.mean(numbers);
  const stdDev = math.std(numbers) as unknown as number;

  return numbers.map((num) => (num - mean) / stdDev);
}

function collectOasFilePaths(): Paths {
  const paths: Paths = [];
  const pattern = path.join(apiDirectory, "**", "*(openapi|swagger).yaml");
  glob.sync(pattern).forEach((oasPath) => paths.push({ oasPath }));
  return paths;
}

/**
 * Extra or overwrite properties for SdkPageProps
 */
export type AdditionalSpecDataProps = {
  securitySchemes: SecuritySchemes;
  categories?: string[];
  // null means it was not originally from openapi-directory repo
  openapiDirectoryPath?: string;
  originalCustomRequest?: CustomRequest;
  customRequestSpecFilename?: string;
  originalSpecUrl?: string;
  fixedSpecFileName?: string;
};

export type SdkPagePropsWithPropertiesOmitted = Omit<
  SdkPageProps,
  | "previewLinkImage" // DONE IN SEPARATE SCRIPT
  | "metaDescription" // DONE IN SEPARATE SCRIPT
  | "lastUpdated" // PICK UP FROM DIFFERENT FILE
  | "logo" // DONE IN SEPARATE SCRIPT
  | "methods" // DONE IN generate-published.ts
  | "sdkName" // DO MANUALLY
  | "clientName" // DO MANUALLY
  | "clientNameCamelCase" // DO MANUALLY
  | "company" // DO MANUALLY
> &
  AdditionalSpecDataProps;

export type SdkPagePropsWithPropertiesOmittedWithoutDifficulty = Omit<
  SdkPagePropsWithPropertiesOmitted,
  "difficulty"
>;

export type Db = {
  specifications: Record<
    string,
    SdkPagePropsWithPropertiesOmittedWithoutDifficulty
  >;
};

export type DbWithDifficulty = {
  specifications: Record<string, SdkPagePropsWithPropertiesOmitted>;
};

function writeData(db: DbWithDifficulty) {
  let i = 0;
  for (const key in db.specifications) {
    console.log(
      `Writing data to disk for ${key}: ${++i}/${
        Object.keys(db.specifications).length
      }`
    );
    const stringified = JSON.stringify(db.specifications[key], null, 2);
    fs.writeFileSync(path.join(specFolder, `${key}.json`), stringified);
  }
}

const doNotProcess = [
  "bungie.net",
  "presalytics.io",
  "stripe.com",
  "adyen.com",
  "googleapis.com",
  "google.home",
  "google.com",
  "goog.io",
  "azure.com",
  "amazonaws.com",
  "microsoft.com",
  "windows.net",
  "twilio.com",
  "github.com",
  "plaid.com",
  "apisetu.gov.in", // gets 403 forbidden
  "codat.io", // speakeasy customer
];

async function collectFilterAndSave(): Promise<void> {
  const paths = collectOasFilePaths();

  const filteredPaths = paths.filter(
    ({ oasPath }) => !doNotProcess.some((f) => oasPath.includes(f))
  );

  const specsForFilteredPaths: { spec: Spec; oasPath: string }[] = [];

  let i = 0;
  for (const { oasPath } of filteredPaths) {
    const cleanPath = path.relative(apiDirectory, oasPath);
    console.log(
      `Parsing spec for path ${++i}/${filteredPaths.length}: ${cleanPath}`
    );
    const oas = fs.readFileSync(oasPath, "utf-8");
    let spec: Spec;
    try {
      spec = await parseSpec(oas);
    } catch (error) {
      console.log(`❌ Skipping ${cleanPath} due to error while parsing.`);
      continue;
    }
    specsForFilteredPaths.push({ spec, oasPath });
  }

  console.log("Removed paths that timeout when parsing");

  const finalSpecs: { spec: Spec; oasPath: string }[] = [];
  i = 0;
  for (const { spec, oasPath } of specsForFilteredPaths) {
    const cleanPath = path.relative(apiDirectory, oasPath);
    console.log(
      `Checking if origin URL works for path ${cleanPath}: ${++i}/${
        specsForFilteredPaths.length
      }`
    );
    const openApiRaw = getOpenApiRaw(spec);
    if (openApiRaw === undefined) {
      console.log(`❌ Skipping ${cleanPath} due to missing openApiRaw.`);
      continue;
    }

    // check if origin url is working
    try {
      await fetch(openApiRaw);
      finalSpecs.push({ spec, oasPath });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        console.log(
          `❌ Skipping ${cleanPath} due to error ("${error.message}") when checking if origin url works.`
        );
      } else {
        console.log(
          `❌ Skipping ${cleanPath} due to error when checking if origin url works.`
        );
      }
    }
  }

  const oasPaths = specsForFilteredPaths.map(({ oasPath }) => oasPath);
  fs.writeFileSync(
    path.join(path.dirname(__dirname), "db", "filtered.txt"),
    oasPaths.join("\n")
  );
}

async function processFiltered(): Promise<Db> {
  const filtered = fs
    .readFileSync(
      path.join(path.dirname(__dirname), "db", "filtered.txt"),
      "utf-8"
    )
    .split("\n");

  const db: Db = { specifications: {} };
  const select = process.env.SELECT;

  let i = 0;
  for (const oasPath of filtered) {
    const cleanPath = path.relative(apiDirectory, oasPath);

    // skip paths from doNotProcess
    if (doNotProcess.some((f) => oasPath.includes(f))) {
      console.log(`❌ Skipping ${cleanPath} due to doNotProcess.`);
      continue;
    }

    if (select !== undefined && !oasPath.includes(select)) {
      console.log(`❌ Skipping ${cleanPath} due to select.`);
      continue;
    }

    const spec = await parseSpec(fs.readFileSync(oasPath, "utf-8"));

    console.log(`Processing path ${++i}/${filtered.length}: ${cleanPath}`);
    const key = getKey(spec);
    const numberOfEndpoints = getNumberOfEndpoints(spec);
    const numberOfOperations = getNumberOfOperations(spec);
    const numberOfSchemas = getNumberOfSchemas(spec);
    const numberOfParameters = getNumberOfParameters(spec);
    const apiBaseUrl = spec.spec.servers?.[0]?.url;
    if (apiBaseUrl === undefined) {
      console.log(`❌ Skipping ${cleanPath} due to missing apiBaseUrl.`);
      continue;
    }
    db.specifications[key] = {
      openapiDirectoryPath: cleanPath,
      providerName: getProviderName(spec),
      openApiRaw: getOpenApiRaw(spec),
      securitySchemes: getSecuritySchemes(spec),
      categories: getCategories(spec),
      homepage: getProviderName(spec),
      serviceName: getServiceName(spec),
      apiVersion: getVersion(spec),
      apiBaseUrl: apiBaseUrl,
      apiDescription: spec.spec.info.description,
      apiTitle: spec.spec.info.title,
      endpoints: numberOfEndpoints,
      sdkMethods: numberOfOperations,
      schemas: numberOfSchemas,
      parameters: numberOfParameters,
      contactUrl: getInfoContactUrl(spec),
      contactEmail: getInfoContactEmail(spec),
      difficultyScore: computeDifficultyScore(
        numberOfEndpoints,
        numberOfOperations,
        numberOfSchemas,
        numberOfParameters
      ),
    };
  }
  return db;
}

async function addDifficulty(db: Db): Promise<DbWithDifficulty> {
  const difficultyScores = Object.values(db.specifications).map(
    (specification) => specification.difficultyScore
  );
  const zScores = calculateZScores(difficultyScores);
  let i = 0;
  const dbWithDifficulty: DbWithDifficulty = { specifications: {} };
  for (const key in db.specifications) {
    const spec = db.specifications[key];
    const z = zScores[i];
    const difficulty = getDifficulty(z);
    dbWithDifficulty.specifications[key] = {
      ...spec,
      difficulty,
    };
    i++;
  }
  return dbWithDifficulty;
}

function getDifficulty(difficultyScore: number): string {
  if (difficultyScore > 1) return "Very Hard";
  else if (difficultyScore > 0.1) return "Hard";
  else if (difficultyScore > -0.1) return "Medium";
  else if (difficultyScore > -0.3) return "Easy";
  else return "Very Easy";
}

async function main() {
  if (process.env.FILTER !== undefined && process.env.FILTER !== "") {
    await collectFilterAndSave();
    return;
  }
  console.log("Processing custom requests");
  let customRequestDb = await collectFromCustomRequests();
  console.log("Processing filtered specs");
  const openapiDirectoryDb = await processFiltered();
  const mergedDb = {
    specifications: {
      ...openapiDirectoryDb.specifications,
      ...customRequestDb.specifications,
    },
  };
  console.log("Adding difficulty scores");
  const db = await addDifficulty(mergedDb);
  // delete specFolder if it exists
  fs.rmSync(specFolder, { recursive: true });
  // ensure specFolder exists
  fs.mkdirSync(specFolder, { recursive: true });
  console.log("Writing data to disk");
  writeData(db);
  console.log("Done!");
}

main();
