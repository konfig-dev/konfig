import * as path from "path";
import * as fs from "fs";
import { specFolder, dbFolder } from "./util";

async function collectData(): Promise<Record<string, string>> {
  const dataFiles = fs.readdirSync(specFolder, "utf-8");
  const data: Record<string, string> = {
    key: "siteUrl",
  };
  const n = dataFiles.length;
  let i = 0;

  for (const file of dataFiles) {
    console.log(`Processing spec ${++i}/${n}: ${file}`);
    const spec = JSON.parse(
      fs.readFileSync(path.join(specFolder, file), "utf-8")
    );
    const key = file.replace(".json", "");
    data[key] = spec.homepage ?? spec.providerName;
  }
  return data;
}

async function writeData(data: Record<string, string>) {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const csvContent = keys
    .map((key, index) => `${key},${values[index]}`)
    .join("\n");

  const outputPath = path.join(dbFolder, "sites.csv");
  fs.writeFileSync(outputPath, csvContent);
}

async function main() {
  const data = await collectData();
  await writeData(data);
}

main();
