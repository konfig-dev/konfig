import * as path from "path";
import * as fs from "fs";
import { specFolder, dbFolder } from "./util";
import axios from "axios";

async function collectData(): Promise<Record<string, string>> {
  const dataFiles = fs.readdirSync(specFolder, "utf-8");
  const data: Record<string, string> = {};
  const n = dataFiles.length;
  let i = 0;

  for (const file of dataFiles) {
    console.log(`Processing spec ${++i}/${n}: ${file}`);
    const spec = JSON.parse(
      fs.readFileSync(path.join(specFolder, file), "utf-8")
    );
    const key = file.replace(".json", "");
    const site = spec.homepage ?? spec.providerName;
    let htmlData = "";
    let start = performance.now();
    try {
      const html = await axios.get("https://" + site, { timeout: 1000 });
      htmlData = html.data;
    } catch (e) {
      console.log("Error fetching HTML for " + site);
    }
    let end = performance.now();
    console.log(`      - Fetching HTML took ${(end - start) / 1000}s`);
    start = performance.now();
    const pattern: RegExp =
      /<meta\s+name=["']description["']\s+content=["'](.*?)["']\s*\/?>/;
    const match = htmlData.match(pattern);
    end = performance.now();
    console.log(`      - Parsing HTML took ${(end - start) / 1000}s`);
    if (match) data[key] = match[1];
    else data[key] = "";
  }
  return data;
}

async function writeData(data: Record<string, string>) {
  fs.writeFileSync(
    path.join(dbFolder, "data-from-html.json"),
    JSON.stringify(data, null, 2)
  );
}

async function main() {
  const data = await collectData();
  await writeData(data);
}

main();
