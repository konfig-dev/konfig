import execa from "execa";
import * as path from "path";
import yaml from "js-yaml";
import * as fs from "fs";
import {
  KONFIG_YAML_NAME,
  KonfigYaml,
  KonfigYamlAdditionalGeneratorConfig,
  KonfigYamlGeneratorConfig,
  KonfigYamlType,
} from "konfig-lib";

// relative path from this file to: ""../konfig-dash/packages/konfig-cli/bin/dev""
// use nodejs __dirname to get the current directory of this file
const KONFIG_CLI_PATH = path.join(
  __dirname,
  "../konfig-dash/packages/konfig-cli/bin/dev"
);

async function e2e({ sdkDir }: { sdkDir?: string }) {
  if (!sdkDir) {
    throw new Error("Path is required");
  }

  // run "konfig generate -d" inside the path
  execa.sync(KONFIG_CLI_PATH, ["generate", "-d"], {
    cwd: sdkDir,
    stdio: "inherit",
  });

  // run "konfig test" inside the path
  execa.sync(KONFIG_CLI_PATH, ["test"], {
    cwd: sdkDir,
    stdio: "inherit",
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
      fs.readFileSync(
        path.join(sdkDir, generator.outputDirectory, "README.md"),
        "utf-8"
      )
    ).toMatchSnapshot();
  }
}

test("python-dataclass-responses", async () => {
  e2e({ sdkDir: expect.getState().currentTestName });
});
