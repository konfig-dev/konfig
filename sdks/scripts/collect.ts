import * as path from "path";
import { Spec, getOperations, parseSpec } from "konfig-lib";
import * as fs from "fs";
import { Db } from "../src/db-schema";

type Paths = { path: string }[];

function collectOasFilePaths(): Paths {
  const apiDirectory = path.join(
    path.dirname(__dirname),
    "openapi-directory",
    "APIs"
  );
  const paths: Paths = [];
  const ablyIo = {
    path: path.join(
      apiDirectory,
      "ably.io",
      "platform",
      "1.1.0",
      "openapi.yaml"
    ),
  };
  paths.push(ablyIo);
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
  const db: Db = { specifications: {} };

  for (const { path } of paths) {
    const oas = fs.readFileSync(path, "utf-8");
    const spec = await parseSpec(oas);
    const key = getKey(spec);
    if (key in db.specifications) {
      continue;
    }
    db.specifications[key] = {
      providerName: getProviderName(spec),
      serviceName: getServiceName(spec),
      version: getVersion(spec),
      servers: spec.spec.servers,
      description: spec.spec.info.description,
      title: spec.spec.info.title,
      spec: { raw: oas },
      numberOfEndpoints: getNumberOfEndpoints(spec),
      numberOfOperations: getNumberOfOperations(spec),
      numberOfSchemas: getNumberOfSchemas(spec),
      numberOfParameters: getNumberOfParameters(spec),
    };
  }

  fs.writeFileSync(dbFilePath, JSON.stringify(db, null, 2));
}

main();
