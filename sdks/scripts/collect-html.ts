import * as path from "path";
import * as fs from "fs";
import { specFolder, dbFolder } from "./util";
import axios from "axios";

async function collectData(): Promise<Record<string, object>> {
  const dataFiles = fs.readdirSync(specFolder, "utf-8");
  const data: Record<string, object> = {};
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
    try {
      const html = await axios.get("https://" + site, { timeout: 1000 });
      htmlData = html.data;
    } catch (e) {
      console.log("Error fetching HTML for " + site);
    }
    const descriptionRegex: RegExp =
      /<meta\s+name=["']description["']\s+content=["'](.*?)["']\s*\/?>/;
    const imagePreviewRegex: RegExp =
      /<meta\s+property="og:image"\s+content="([^"]+)">/;
    const logoRegex: RegExp =
      /<img\b(?:[^>]*\blogo\b[^>]*\bsrc="([^"]*)"[^>]*|[^>]*\bsrc="([^"]*)"[^>]*\blogo\b[^>]*)>/;
    const siteData = { description: "", imagePreview: "", logo: "" };

    const description = htmlData.match(descriptionRegex);
    const imagePreview = htmlData.match(imagePreviewRegex);
    const logo = htmlData.match(logoRegex);

    if (description) siteData.description = description[1];
    if (imagePreview) siteData.imagePreview = imagePreview[1];
    if (logo) siteData.logo = logo[1];

    data[key] = siteData;
  }
  return data;
}

async function writeData(data: Record<string, object>) {
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
