import * as fs from "fs";
import * as path from "path";
import type { Db } from "./util/schemas";

const OPENAPI_EXAMPLES_API_PATH = path.dirname(import.meta.dir);
const SDKS_DIR_PATH = path.dirname(OPENAPI_EXAMPLES_API_PATH);
const DIRECTORY_PATH = path.join(SDKS_DIR_PATH, "openapi-examples");
export const DB_PATH = path.join(OPENAPI_EXAMPLES_API_PATH, "db", "db.json");

// (1) Collect directories inside openapi-examples
console.log("🔎 Reading directory:", DIRECTORY_PATH);
const directories = fs
  .readdirSync(DIRECTORY_PATH, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);
console.log(`✅ Found ${directories.length} directories`);

// (2) Write to db.json
console.log("📝 Writing to db.json:", DB_PATH);
const db: Db = {
  companies: directories.map((name) => ({ nameInKebabCase: name })),
};
fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
console.log("✅ Done");
