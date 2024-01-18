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

const dbFile = path.join(path.dirname(__dirname), "db", "data.json");
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

function timeout(ms: number, promise: Promise<any>) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), ms)
  );
  return Promise.race([promise, timeoutPromise]);
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
  | "openApiRaw" // TODO
  | "openApiUi" // TODO
  | "previewLinkImage" // TODO
  | "metaDescription" // TODO
  | "favicon" // TODO
  | "logo" // TODO
  | "homepage" // TODO
  | "methods" // TODO
  | "lastUpdated" // TODO
  | "sdkName" // DO MANUALLY
  | "company" // DO MANUALLY
>;

export type Db = {
  specifications: Record<string, SdkPagePropsWithPropertiesOmitted>;
  skipped: string[];
};

async function writeData(db: Db) {
  fs.truncateSync(dbFile);
  const ws = fs.createWriteStream(dbFile, { flags: "a" });
  ws.write('{"specifications": {');
  let i = 0;
  for (const [key, data] of Object.entries(db.specifications)) {
    const isLast = i++ === Object.keys(db.specifications).length - 1;
    ws.write(
      `"${key}": ${JSON.stringify(data, null, 2)}` + (isLast ? "" : ",")
    );
  }
  ws.write('}, "skipped": [');
  for (let i = 0; i < db.skipped.length; i++) {
    const isLast = i === db.skipped.length - 1;
    ws.write(`"${skip[i]}"` + (isLast ? "" : ","));
  }
  ws.write("]}");
  ws.end();
}

async function collectData(): Promise<Db> {
  const paths = collectOasFilePaths();
  const db: Db = { specifications: {}, skipped: [...skip] };
  let i = 0;

  for (const { oasPath } of paths) {
    const cleanPath = path.relative(apiDirectory, oasPath);
    console.log(`Processing path ${++i}/${paths.length}: ${cleanPath}`);
    if (skip.includes(cleanPath)) continue;
    const oas = fs.readFileSync(oasPath, "utf-8");
    let spec: Spec;
    try {
      spec = await timeout(5000, parseSpec(oas));
    } catch (error) {
      db.skipped.push(cleanPath);
      console.log(`❌ Skipping ${cleanPath} due to error or timeout.`);
      continue;
    }
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
  let db = await collectData();
  db = await addDifficulty(db);
  await writeData(db);
}

main();
