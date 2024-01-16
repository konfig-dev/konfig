import * as path from "path";
import { Spec, getOperations, parseSpec } from "konfig-lib";
import * as fs from "fs";
import * as glob from "glob";

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

function writeSkipped(writeStream: fs.WriteStream) {
  writeStream.write('"skipped": [');
  for (let i = 0; i < skip.length; i++) {
    writeStream.write(`"${skip[i]}"` + (i < skip.length - 1 ? "," : ""));
  }
  writeStream.write("]");
}

async function main() {
  const paths = collectOasFilePaths();
  fs.truncateSync(dbFile);
  const writeStream = fs.createWriteStream(dbFile, { flags: "a" });
  writeStream.write('{"specifications": {');
  let i = 0;

  for (const { oasPath } of paths) {
    const cleanPath = path.relative(apiDirectory, oasPath);
    console.log(`Processing path ${++i}/${paths.length}: ${cleanPath}`);
    if (skip.includes(cleanPath)) continue;
    const oas = fs.readFileSync(oasPath, "utf-8");
    let spec;
    try {
      spec = await timeout(5000, parseSpec(oas));
    } catch (error) {
      skip.push(cleanPath);
      console.log(`❌ Skipping ${cleanPath} due to error or timeout.`);
      continue;
    }
    const key = getKey(spec);

    const data = {
      providerName: getProviderName(spec),
      serviceName: getServiceName(spec),
      version: getVersion(spec),
      servers: spec.spec.servers,
      description: spec.spec.info.description,
      title: spec.spec.info.title,
      numberOfEndpoints: getNumberOfEndpoints(spec),
      numberOfOperations: getNumberOfOperations(spec),
      numberOfSchemas: getNumberOfSchemas(spec),
      numberOfParameters: getNumberOfParameters(spec),
      contactUrl: getInfoContactUrl(spec),
      contactEmail: getInfoContactEmail(spec),
    };
    writeStream.write(
      `"${key}": ${JSON.stringify(data, null, 2)}` +
        (i < paths.length ? "," : "")
    );
  }
  writeStream.write("},");
  writeSkipped(writeStream);
  writeStream.write("}");
  writeStream.end();
}

main();
