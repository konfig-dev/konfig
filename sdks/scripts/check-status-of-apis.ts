/**
 * This script checks the status of the APIs in openapi-examples by collecting all
 * OpenAPI specifications and checking the status of the server URLs in the specs.
 */
import { z } from "zod";
import axios from "axios";
import * as path from "path";
import * as fs from "fs";
import * as yaml from "js-yaml";

// Define Zod schemas
const ApiStatusEntrySchema = z.object({
  timestamp: z.string(),
  status: z.number().optional(),
  responseTime: z.string().optional(),
  reachable: z.boolean(),
});

const ServerStatusLogSchema = z.object({
  status: z.array(ApiStatusEntrySchema),
});

const ApiStatusLogSchema = z.object({
  logs: z.record(ServerStatusLogSchema),
});

// Define TypeScript types
type ApiStatusEntry = z.infer<typeof ApiStatusEntrySchema>;
type ServerStatusLog = z.infer<typeof ServerStatusLogSchema>;
type ApiStatusLog = z.infer<typeof ApiStatusLogSchema>;

// Function to check the status of an API
async function checkApiStatus(url: string): Promise<ApiStatusEntry> {
  const start = Date.now();
  let entry: ApiStatusEntry = {
    timestamp: new Date().toISOString(),
    reachable: true, // Assume reachable until proven otherwise
  };

  try {
    const response = await axios.get(url);
    entry.status = response.status;
    entry.responseTime = `${Date.now() - start}ms`;
  } catch (error: any) {
    entry.reachable = false; // The API is not reachable
    entry.responseTime = `N/A`;

    if (error.response) {
      // Server responded with a status code outside the 2xx range
      entry.status = error.response.status;
      entry.reachable = true; // Update to true as we did get a response
    }
  }

  console.log(`Checked ${url} - ${entry.reachable ? "✅" : "❌"}`);

  return entry;
}

// Function to update the log with a new entry for a specific URL
function updateLogWithNewEntry(
  log: ApiStatusLog,
  url: string,
  newEntry: ApiStatusEntry
): ApiStatusLog {
  if (!log.logs) {
    log.logs = {};
  }
  if (!log.logs[url]) {
    log.logs[url] = { status: [] };
  }
  log.logs[url].status.push(newEntry);
  return log;
}

async function main() {
  const OPENAPI_EXAMPLES_PATH = path.join(
    path.dirname(__dirname),
    "openapi-examples"
  );

  const openapiFiles = fs
    .readdirSync(OPENAPI_EXAMPLES_PATH, {
      withFileTypes: true,
      recursive: true,
    })
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".yaml"))
    .map((dirent) => path.join(OPENAPI_EXAMPLES_PATH, dirent.name));

  // Assume openapiFiles array is populated as before
  await Promise.all(
    openapiFiles.map(async (openapiFile) => {
      const openapiSpec = fs.readFileSync(openapiFile, "utf8");
      const spec: any = yaml.load(openapiSpec);

      if (spec.servers) {
        const logFilePath = path.join(
          path.dirname(openapiFile),
          "status_log.yaml"
        );
        let log: ApiStatusLog = { logs: {} };

        if (fs.existsSync(logFilePath)) {
          const existingLog = yaml.load(fs.readFileSync(logFilePath, "utf8"));
          log = ApiStatusLogSchema.parse(existingLog);
        }

        for (const server of spec.servers) {
          const statusEntry = await checkApiStatus(server.url);
          log = updateLogWithNewEntry(log, server.url, statusEntry);
        }
        fs.writeFileSync(logFilePath, yaml.dump(log));
      }
    })
  );
}

main()
  .then(() => console.log("Done!"))
  .catch(console.error);
