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

export async function e2e(mockServerPort: number) {
  const currentTestName = expect.getState().currentTestName;
  if (!currentTestName) {
    throw new Error("Unable to get current test name");
  }
  const sdkDir = path.join(__dirname, "sdks", currentTestName);

  // run "konfig generate -d" inside the path
  await execa(KONFIG_CLI_PATH, ["generate", "-d"], {
    cwd: sdkDir,
    stdio: "inherit",
  });

  // run "konfig test" inside the path
  await execa(KONFIG_CLI_PATH, ["test", "-p", mockServerPort.toString()], {
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
