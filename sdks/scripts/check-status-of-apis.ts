/**
 * This script checks the status of the APIs in openapi-examples by collecting all
 * OpenAPI specifications and checking the status of the server URLs in the specs.
 */
import { z } from "zod";
import axios, { AxiosError } from "axios";
import * as path from "path";
import * as fs from "fs-extra";
import * as yaml from "js-yaml";
import { Listr, delay } from "listr2";
import { OpenAPIV3_XDocument } from "konfig-lib";

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
type ApiStatusLog = z.infer<typeof ApiStatusLogSchema>;

// Function to check the status of an API
async function checkApiStatus(url: string): Promise<ApiStatusEntry> {
  const start = Date.now();
  let entry: ApiStatusEntry = {
    timestamp: new Date().toISOString(),
    reachable: true, // Assume reachable until proven otherwise
  };

  const urlWithProtocol = url.startsWith("https://") ? url : `https://${url}`;

  try {
    const response = await axios.get(urlWithProtocol);
    entry.status = response.status;
    entry.responseTime = `${Date.now() - start}ms`;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        entry.status = error.response.status;
        entry.responseTime = `${Date.now() - start}ms`;
        entry.reachable = true; // Update to true as we did get a response
      } else {
        entry.reachable = false; // The API is not reachable
        entry.responseTime = `N/A`;
      }
    } else {
      throw error;
    }
  }

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

type SubtaskCtx = {
  spec: OpenAPIV3_XDocument;
  logs: ApiStatusLog;
  logFilePath: string;
};
type Ctx = {
  apis: Record<string, SubtaskCtx>;
};

const STATUS_LOG_FILENAME = "status_log.yaml";

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
    .filter(
      (dirent) =>
        dirent.isFile() &&
        dirent.name.endsWith(".yaml") &&
        !dirent.name.endsWith(STATUS_LOG_FILENAME)
    )
    .map((dirent) => {
      // get the absolute path of file
      const absolutePathToFile = path.join(dirent.path, dirent.name);
      return {
        absolutePathToFile: absolutePathToFile,
        relativePathToFile: path.relative(
          OPENAPI_EXAMPLES_PATH,
          absolutePathToFile
        ),
        absolutePathToDirectory: path.dirname(absolutePathToFile),
        relativePathToDirectory: path.relative(
          OPENAPI_EXAMPLES_PATH,
          path.dirname(absolutePathToFile)
        ),
      };
    });

  const openapiFilesFiltered = openapiFiles.filter(
    ({ relativePathToDirectory }) => {
      if (process.env.FILTER) {
        return relativePathToDirectory.includes(process.env.FILTER);
      }
      return true;
    }
  );

  if (openapiFilesFiltered.length === 0) {
    console.log("No files to process");
    return;
  }

  const initialContext: Ctx = {
    apis: Object.fromEntries(
      openapiFilesFiltered.map(
        ({ absolutePathToDirectory, absolutePathToFile }) => [
          absolutePathToFile,
          {
            spec: {} as OpenAPIV3_XDocument,
            logs: { logs: {} },
            logFilePath: path.join(
              absolutePathToDirectory,
              STATUS_LOG_FILENAME
            ),
          },
        ]
      )
    ),
  };

  const tasks = new Listr<Ctx>(
    openapiFilesFiltered.map(
      ({ absolutePathToFile, relativePathToFile, relativePathToDirectory }) => {
        return {
          title: `Processing ${relativePathToFile}`,
          task: (_ctx, task) =>
            task.newListr(
              [
                {
                  title: `Loading OpenAPI spec ${relativePathToFile}`,
                  task: async (ctx) => {
                    const openapiSpec = fs.readFileSync(
                      absolutePathToFile,
                      "utf8"
                    );
                    ctx.apis[absolutePathToFile].spec = yaml.load(
                      openapiSpec
                    ) as OpenAPIV3_XDocument;
                  },
                  rendererOptions: {},
                },
                {
                  title: `Reading existing log file if exists ${relativePathToDirectory}`,
                  task: async (ctx) => {
                    if (
                      fs.existsSync(ctx.apis[absolutePathToFile].logFilePath)
                    ) {
                      const existingLog = yaml.load(
                        fs.readFileSync(
                          ctx.apis[absolutePathToFile].logFilePath,
                          "utf8"
                        )
                      );
                      ctx.apis[absolutePathToFile].logs =
                        ApiStatusLogSchema.parse(existingLog);
                    }
                  },
                },
                {
                  title: "Checking server statuses",
                  task: async (ctx, task) => {
                    const servers = ctx.apis[absolutePathToFile].spec.servers;
                    const apiStatusUrls: string[] | false = (
                      ctx.apis[absolutePathToFile].spec.info as any
                    )["x-api-status-urls"];
                    if (servers === undefined && apiStatusUrls === undefined) {
                      return task.skip(
                        "No servers defined in the OpenAPI spec"
                      );
                    }
                    if (apiStatusUrls === false) {
                      return task.skip(
                        "API status check is disabled for this API"
                      );
                    }

                    const urls =
                      apiStatusUrls ?? servers?.map(({ url }) => url);

                    return task.newListr<SubtaskCtx>(
                      urls.map((serverUrl) => ({
                        title: `Checking status of ${serverUrl}`,
                        task: async (subtaskCtx, task) => {
                          const statusEntry = await checkApiStatus(serverUrl);
                          if (!statusEntry.reachable) {
                            task.output = `❌ Unreachable ${serverUrl} for "${relativePathToDirectory}"`;
                          } else {
                            task.output = `✅ ${serverUrl} - ${statusEntry.status} - ${statusEntry.responseTime}`;
                          }
                          subtaskCtx.logs = updateLogWithNewEntry(
                            subtaskCtx.logs,
                            serverUrl,
                            statusEntry
                          );
                        },
                        rendererOptions: {
                          persistentOutput: true,
                          bottomBar: Infinity,
                        },
                        retry: 3,
                      })),
                      {
                        ctx: ctx.apis[absolutePathToFile],
                        concurrent: true,
                      }
                    );
                  },
                },
                {
                  title: `Writing logs to file ${relativePathToDirectory}`,
                  task: async (ctx) => {
                    for (const context of Object.values(ctx.apis)) {
                      fs.writeFileSync(
                        context.logFilePath,
                        yaml.dump(context.logs)
                      );
                    }
                  },
                },
              ],
              { concurrent: false, exitOnError: true }
            ),
        };
      }
    ),
    {
      ctx: initialContext,
      concurrent: true,
      exitOnError: false,
      registerSignalListeners: true,
      rendererOptions: {
        collapseSubtasks: false,
        collapseSkips: false,
      },
    }
  );

  await tasks.run();
}

main()
  .then(() => console.log("Done!"))
  .catch(console.error);
