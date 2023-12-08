import { ExecaChildProcess, execa } from "execa";
import * as path from "path";
import yaml from "js-yaml";
import { expect } from "vitest";
import * as fs from "fs";
import killPort from "konfig-kill-port";
import {
  KONFIG_YAML_NAME,
  KonfigYaml,
  KonfigYamlAdditionalGeneratorConfig,
  KonfigYamlGeneratorConfig,
  KonfigYamlType,
} from "konfig-lib";
import waitOn from "wait-on";

const USE_RUN =
  process.env.GITHUB_ACTIONS === "true" ||
  (process.env.RUN && process.env.RUN.trim() !== "");

const USE_GLOBAL_CLI = process.env.GLOBAL && process.env.GLOBAL.trim() !== "";

console.log("USE_RUN", USE_RUN);
console.log("USE_GLOBAL_CLI", USE_GLOBAL_CLI);

// relative path from this file to: ""../konfig-dash/packages/konfig-cli/bin/dev""
// use nodejs __dirname to get the current directory of this file
const KONFIG_CLI_PATH = USE_GLOBAL_CLI
  ? "konfig"
  : path.join(
      __dirname,
      `../konfig-dash/packages/konfig-cli/bin/${USE_RUN ? "run" : "dev"}`
    );

/**
 * parse 'python-pydantic-empty-response' from 'tests/python-pydantic-empty-response.test.ts > python-pydantic-empty-response'
 */
function getCurrentTestName(): string {
  const currentTestName = expect.getState().currentTestName;
  const parsed = currentTestName?.split(" > ")[1];
  if (!parsed) {
    throw new Error(`Unable to parse current test name: ${currentTestName}`);
  }
  return parsed;
}

export async function e2e(
  mockServerPort: number,
  options?: {
    customAssertions?: () => void;
    customServer?: ServerConfig;
  }
) {
  if (!getCurrentTestName()) {
    throw new Error("Unable to get current test name");
  }
  const sdkDir = path.join(__dirname, "sdks", getCurrentTestName());

  const apiUrl = process.env.KONFIG_API_URL ?? "http://127.0.0.1:8911";

  // wait until KONFIG_API_URL/healthz is available
  await waitOn({
    resources: [`${apiUrl}/healthz`],
    timeout: 100000,
  });

  const env = {
    // This ensure oclif doesn't bug out
    // See: https://github.com/oclif/oclif/issues/1161#issuecomment-1661372245
    NODE_ENV: "",
  };

  // run "konfig generate -d -I" inside the path
  await callAndLogExeca(KONFIG_CLI_PATH, ["generate", "-d", "-I"], {
    cwd: sdkDir,
    env,
  });

  // run "konfig test" inside the path
  const testArgs = options?.customServer
    ? ["-x"]
    : ["-p", mockServerPort.toString()];
  let pid: number | null = null;
  console.log("Killing port", mockServerPort);
  if (options?.customServer) {
    await killPort(mockServerPort);
    pid = spawnServer({ port: mockServerPort, ...options.customServer });
    console.log("Waiting for server to start");
    await waitOn({
      resources: [`http://127.0.0.1:${mockServerPort}/healthz`],
      timeout: 100000,
    });
  }

  try {
    await callAndLogExeca(KONFIG_CLI_PATH, ["test", ...testArgs], {
      cwd: sdkDir,
      env,
    });
  } finally {
    if (pid !== null) {
      // kill the server
      console.log("Killing server with pid", pid);
      try {
        process.kill(pid);
      } catch (e) {
        if (isSigTermError(e)) {
          console.log("Process was successfully killed");
        } else {
          // error is not a process termination error
          throw e;
        }
      }
    }
  }

  // validate top-level README.md
  const konfigYamlPath = path.join(sdkDir, KONFIG_YAML_NAME);
  if (!fs.existsSync(konfigYamlPath))
    throw new Error(
      `Make sure you are in same directory as '${KONFIG_YAML_NAME}'`
    );
  const konfigYamlRaw = fs.readFileSync(konfigYamlPath, "utf-8");
  const loadedKonfigYaml: KonfigYamlType = yaml.load(
    konfigYamlRaw
  ) as KonfigYamlType;
  const parsedKonfigYaml = KonfigYaml.parse(loadedKonfigYaml);

  // Tests will just timeout if you have requiredEnvironmentVariables,
  // so we throw an error here so you don't waste time debugging
  if (parsedKonfigYaml.requiredEnvironmentVariables !== undefined) {
    throw new Error(
      "requiredEnvironmentVariables is not supported in e2e tests"
    );
  }

  const generators: (
    | KonfigYamlGeneratorConfig
    | KonfigYamlAdditionalGeneratorConfig
  )[] = [
    ...Object.values(parsedKonfigYaml.generators),
    ...(parsedKonfigYaml.additionalGenerators !== undefined
      ? Object.values(parsedKonfigYaml.additionalGenerators)
      : []),
  ];
  for (const generator of generators) {
    expect(
      normalizeDocumentation(
        fs.readFileSync(
          path.join(sdkDir, generator.outputDirectory, "README.md"),
          "utf-8"
        )
      )
    ).toMatchSnapshot();
  }

  if (options?.customAssertions) {
    options.customAssertions();
  }
}

interface RouteConfig {
  path: string;
  method: "get" | "post" | "put" | "delet"; // Extend as needed
  isMultipartFormData?: boolean;
  response: object | "echo";
}

type ServerConfigWithPort = ServerConfig & {
  port: number;
};

type ServerConfig = {
  routes: RouteConfig[];
};

const spawnServer = (config: ServerConfigWithPort): number => {
  const serverPath = path.resolve(__dirname, "apiServer.js");

  // escape the quotes in the config
  console.log("Copy the following command to run the server:");
  console.log(
    `node ${serverPath} '${JSON.stringify(config).replace(/'/g, "\\'")}'`
  );

  const serverProcess = execa("node", [serverPath, JSON.stringify(config)]);

  console.log(`Server spawned with PID: ${serverProcess.pid}`);

  // Pipe the output to the parent process
  serverProcess.stdout?.pipe(process.stdout);
  serverProcess.stderr?.pipe(process.stderr);

  // Handling potential errors
  serverProcess.catch((error) => {
    if (isSigTermError(error)) {
      // do nothing
    } else {
      console.error("Failed to spawn server process:", error);
    }
  });

  const pid = serverProcess.pid;
  if (!pid) {
    throw new Error("Unable to get server process pid");
  }
  return pid;
};

async function callAndLogExeca(command: string, args: string[], options: any) {
  console.log(`Running: ${command} ${args.join(" ")}`);

  // Stream that simply console.logs everything from the child process

  const p = execa(command, args, {
    ...options,
  });
  p.stdout?.pipe(process.stdout);
  p.stderr?.pipe(process.stderr);

  await p;
}

// Removes the [GitHub last commit] line from the README
function normalizeDocumentation(readme: string) {
  // matches [GitHub last commit] to the end of the line
  const pattern = /\[!\[GitHub last commit\].*$\n?/gm;
  return readme.replace(pattern, "");
}

function isSigTermError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "signal" in error &&
    error.signal === "SIGTERM"
  );
}
