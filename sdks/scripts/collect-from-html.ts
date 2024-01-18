import axios from "axios";
import jsdom from "jsdom";
import * as path from "path";
import * as fs from "fs";
import { Db, dbFile } from "./util";
import { log } from "console";

const dataFromHtmlFile = path.join(
  __dirname,
  "..",
  "db",
  "data-from-html.json"
);

async function getHtml(url: string): Promise<string | null> {
  const fullUrl = url.startsWith("https://") ? url : `https://${url}`;
  return await axios
    .get(fullUrl)
    .then((response) => response.data)
    .catch((_) => null);
}

async function findLogoImageSrc(html: string): Promise<string | null> {
  const { JSDOM } = jsdom;
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const imgTags = doc.getElementsByTagName("img");

  for (const imgTag of imgTags) {
    const rawTag = imgTag.outerHTML.toLowerCase();
    if (rawTag.includes("logo") && imgTag.getAttribute("src")) {
      return imgTag.getAttribute("src");
    }
  }
  return null;
}

async function collectData(): Promise<Record<string, object>> {
  const rawData = fs.readFileSync(dbFile, "utf-8");
  const data: Db = JSON.parse(rawData);
  const dataFromHtml: Record<string, object> = {};
  const n = Object.keys(data.specifications).length;
  let i = 0;

  for (const [key, spec] of Object.entries(data.specifications)) {
    console.log(`Processing spec ${++i}/${n}: ${key}`);
    let logoSrc = null;
    const html = await getHtml(spec.providerName);
    if (html) {
      logoSrc = await findLogoImageSrc(html);
    }
    dataFromHtml[key] = {
      logoSrc: logoSrc,
    };
    if (logoSrc) console.log(logoSrc);
  }

  return dataFromHtml;
}

async function writeData(data: Record<string, object>) {
  fs.truncateSync(dataFromHtmlFile);
  const ws = fs.createWriteStream(dataFromHtmlFile, { flags: "a" });
  ws.write("{");

  const n = Object.keys(data).length;
  let i = 0;
  for (const [key, dataFromHtml] of Object.entries(data)) {
    const isLast = i++ === n - 1;
    ws.write(
      `"${key}": ${JSON.stringify(dataFromHtml, null, 2)}` + (isLast ? "" : ",")
    );
  }
  ws.write("}");
  ws.end();
}

async function main() {
  const data = await collectData();
  await writeData(data);
}

main();
