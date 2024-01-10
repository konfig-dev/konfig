import { Db, dbSchema } from "./db-schema";
import * as fs from "fs";
import * as path from "path";

export function getSdkData(): Db {
  const dataJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "db", "data.json"), "utf8")
  );
  return dbSchema.parse(dataJson);
}
