import * as path from "path";
import { Spec, getOperations, parseSpec } from "konfig-lib";
import * as fs from "fs";
import * as glob from "glob";

type Paths = { path: string }[];

function collectOasFilePaths(): Paths {
  const apiDirectory = path.join(
    path.dirname(__dirname),
    "openapi-directory",
    "APIs"
  );
  const paths: Paths = [];
  const pattern = path.join(apiDirectory, "**", "openapi.yaml");
  glob.sync(pattern).forEach((path) => paths.push({ path }));
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
  return `${getProviderName(spec)}-${getServiceName(spec)}-${getVersion(spec)}`;
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

async function main() {
  const paths = collectOasFilePaths();
  const dbFilePath = path.join(path.dirname(__dirname), "db", "data.json");
  fs.truncateSync(dbFilePath);
  const writeStream = fs.createWriteStream(dbFilePath, { flags: "a" });
  writeStream.write('{"specifications": {');
  let i = 0;
  // These ones stall on parseSpec
  const skip = [179, 286, 424, 425, 898, 1220];

  for (const { path } of paths) {
    console.log(`Processing path ${i}/${paths.length}`);
    if (skip.includes(++i)) continue;
    const oas = fs.readFileSync(path, "utf-8");
    const spec = await parseSpec(oas);
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
    writeStream.write(`"${key}": ${JSON.stringify(data, null, 2)},`);
  }
  writeStream.write("}}");
  writeStream.end();
}

main();
