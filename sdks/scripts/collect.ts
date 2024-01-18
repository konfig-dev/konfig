import * as path from "path";
import { Spec, getOperations, parseSpec } from "konfig-lib";
import * as fs from "fs";
import * as glob from "glob";
import * as math from "mathjs";
import type {
  Method,
  SdkPageProps,
} from "../../generator/konfig-docs/src/components/SdkComponentProps";

type Paths = { oasPath: string }[];

const specFolder = path.join(path.dirname(__dirname), "db", "spec-data");
const apiDirectory = path.join(
  path.dirname(__dirname),
  "openapi-directory",
  "APIs"
);

// Some paths hang on parsing, even with a timeout, so we hardcode them here to skip them
const skip: string[] = [
  "stripe.com/2022-11-15/openapi.yaml",
  "presalytics.io/ooxml/0.1.0/openapi.yaml",
  "microsoft.com/graph-beta/1.0.1/openapi.yaml",
  "microsoft.com/graph/1.0.1/openapi.yaml",
  "bungie.net/2.18.0/openapi.yaml",
];

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

function getProviderName(spec: Spec): string {
  const info = spec.spec.info as any;
  return info["x-providerName"];
}

function getServiceName(spec: Spec): string {
  const info = spec.spec.info as any;
  return info["x-serviceName"];
}

// See generator/konfig-docs/src/components/Sdk.tsx#Method
function getMethodsObject(spec: Spec): Method[] {
  const info = spec.spec.info as any;
  return info["x-serviceName"];
}

function getVersion(spec: Spec): string {
  const info = spec.spec.info;
  return info.version;
}

function getInfoContactUrl(spec: Spec): string | undefined {
  const info = spec.spec.info;
  return info.contact?.url;
}

function getInfoContactEmail(spec: Spec): string | undefined {
  const info = spec.spec.info;
  return info.contact?.email;
}

function computeDifficultyScore(
  numberOfEndpoints: number,
  numberOfOperations: number,
  numberOfSchemas: number,
  numberOfParameters: number
): number {
  return numberOfOperations + 0.5 * numberOfSchemas + 0.25 * numberOfParameters;
}

function getKey(spec: Spec): string {
  const serviceName = getServiceName(spec);
  if (serviceName === undefined)
    return `${getProviderName(spec)}-${getVersion(spec)}`;
  return `${getProviderName(spec)}-${serviceName}-${getVersion(spec)}`;
}

function getNumberOfEndpoints(spec: Spec): number {
  if (spec.spec.paths === undefined) return 0;
  const numberOfEndpoints = Object.keys(spec.spec.paths).length;
  return numberOfEndpoints;
}

function getNumberOfOperations(spec: Spec): number {
  if (spec.spec.paths === undefined) return 0;
  let numberOfOperations = 0;
  for (const path of Object.values(spec.spec.paths)) {
    if (path === undefined) continue;
    numberOfOperations += Object.keys(path).length;
  }
  return numberOfOperations;
}

function getNumberOfSchemas(spec: Spec): number {
  if (spec.spec.components === undefined) return 0;
  if (spec.spec.components.schemas === undefined) return 0;
  const numberOfSchemas = Object.keys(spec.spec.components.schemas).length;
  return numberOfSchemas;
}

function getOpenApiRaw(spec: Spec): string {
  const info = spec.spec.info as any;
  const origin = info["x-origin"];
  const url = origin[0].url;

  // remove duplicate h at beginning of https if detected
  // for: watchful.li/1.0.0/swagger.yaml
  const cleanUrl = url.replace("hhttps", "https");

  return cleanUrl;
}

function getNumberOfParameters(spec: Spec): number {
  if (spec.spec.components === undefined) return 0;
  if (spec.spec.components.parameters === undefined) return 0;

  // iterate over all operations and count parameters
  let numberOfParameters = 0;
  getOperations(spec).forEach(({ operation }) => {
    if (operation.parameters === undefined) return;
    numberOfParameters += operation.parameters.length;
  });

  return numberOfParameters;
}

type SdkPagePropsWithPropertiesOmitted = Omit<
  SdkPageProps,
  | "methods" // TODO
  | "previewLinkImage" // DONE IN SEPARATE SCRIPT
  | "metaDescription" // DONE IN SEPARATE SCRIPT
  | "favicon" // DONE IN SEPARATE SCRIPT
  | "logo" // DONE IN SEPARATE SCRIPT
  | "sdkName" // DO MANUALLY
  | "company" // DO MANUALLY
>;

export type Db = {
  specifications: Record<string, SdkPagePropsWithPropertiesOmitted>;
};

function writeData(db: Db) {
  console.log(`Turning data into JSON string`);
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

const filter = [
  "googleapis.com",
  "azure.com",
  "amazonaws.com",
  "microsoft.com",
  "windows.net",
  "twilio.com",
  "github.com",
  "plaid.com",
  "codat.io", // speakeasy customer
];

async function collectFilterAndSave(): Promise<void> {
  const paths = collectOasFilePaths();

  const filteredPaths = paths.filter(
    ({ oasPath }) =>
      !filter.some((f) => oasPath.includes(f)) &&
      skip.every((s) => !oasPath.includes(s))
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

  const now = new Date();
  let i = 0;
  for (const oasPath of filtered) {
    const cleanPath = path.relative(apiDirectory, oasPath);

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
      providerName: getProviderName(spec),
      openApiRaw: getOpenApiRaw(spec),
      homepage: getProviderName(spec),
      serviceName: getServiceName(spec),
      apiVersion: getVersion(spec),
      lastUpdated: now,
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

async function addDifficulty(db: Db): Promise<Db> {
  const difficultyScores = Object.values(db.specifications).map(
    (specification) => specification.difficultyScore
  );
  const zScores = calculateZScores(difficultyScores);
  let i = 0;
  for (const spec of Object.values(db.specifications)) {
    const z = zScores[i];
    if (z > 1) spec.difficulty = "Very Hard";
    else if (z > 0.1) spec.difficulty = "Hard";
    else if (z > -0.1) spec.difficulty = "Medium";
    else if (z > -0.3) spec.difficulty = "Easy";
    else spec.difficulty = "Very Easy";
    i++;
  }
  return db;
}

async function main() {
  if (process.env.FILTER !== "") {
    await collectFilterAndSave();
    return;
  }
  let db = await processFiltered();
  console.log("Adding difficulty scores");
  db = await addDifficulty(db);
  console.log("Writing data to disk");
  writeData(db);
  console.log("Done!");
}

main();
