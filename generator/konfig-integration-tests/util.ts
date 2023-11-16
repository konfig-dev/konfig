import { execa } from "execa";
import * as path from "path";
import yaml from "js-yaml";
import { expect } from "vitest";
import * as fs from "fs";
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

console.log("USE_RUN", USE_RUN);

// relative path from this file to: ""../konfig-dash/packages/konfig-cli/bin/dev""
// use nodejs __dirname to get the current directory of this file
const KONFIG_CLI_PATH = path.join(
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
  customAssertions?: () => void
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
  await execa(KONFIG_CLI_PATH, ["generate", "-d", "-I"], {
    cwd: sdkDir,
    stdio: "inherit",
    env,
  });

  // run "konfig test" inside the path
  await execa(KONFIG_CLI_PATH, ["test", "-p", mockServerPort.toString()], {
    cwd: sdkDir,
    stdio: "inherit",
    env,
  });

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

  if (customAssertions) {
    customAssertions();
  }
}

// Removes the [GitHub last commit] line from the README
function normalizeDocumentation(readme: string) {
  // matches [GitHub last commit] to the end of the line
  const pattern = /\[!\[GitHub last commit\].*$\n?/gm;
  return readme.replace(pattern, "");
}
