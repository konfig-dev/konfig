import * as fs from "fs";
import * as path from "path";
import { Db } from "../scripts/collect";

export function getSdkData(): Db {
  const dataJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "db", "data.json"), "utf8")
  );
  return dataJson;
}
