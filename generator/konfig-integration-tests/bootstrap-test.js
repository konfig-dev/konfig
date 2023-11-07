#!/usr/bin/env node

/**
 * Makes it easy to create new tests
 */

const fs = require("fs");
const readline = require("readline");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const toCamelCase = (str) => {
  return str
    .split(/[-_ ]+/)
    .map((word, index) =>
      index === 0
        ? word[0].toUpperCase() + word.slice(1)
        : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

function generateKonfigYamlString(language, testName) {
  const languageSpecificFields = generateKonfigYamlFieldsForLanguage(
    language,
    testName
  );
  return `outputDirectory: /tmp/${testName}-sdks-out
specPath: api.yaml
generators:
  ${language}:
    version: 1.0.0
    outputDirectory: ${language}
    clientName: ${toCamelCase(testName)}Client
    ${languageSpecificFields}
    git:
      userId: konfig-dev
      repoId: konfig/tree/main/${language}`;
}

function generateKonfigYamlFieldsForLanguage(language, testName) {
  if (language == 'python') {
    return `packageName: ${testName.replace(/-/g, '_')}
    projectName: ${testName}`
  } else if (language == 'typescript') {
    return `npmName: ${testName}`
  } else if (language == 'csharp') {
    return `packageName: ${toCamelCase(testName)}.Net
    logoPath: ../../logo.png`
  } else if (language == 'java') {
    return `groupId: com.konfigthis
    packageName: ${toCamelCase(testName)}
    artifactId: ${test}`
  }
}

const supportedLanguages = ['python', 'typescript', 'csharp', 'java'];
// Prompt for language
rl.question(`Which language would you like to create a test for? (${supportedLanguages.join("/")}) `, (languageInput) => {
  const language = languageInput.toLowerCase();
  if (!supportedLanguages.includes(language)) {
    console.error(`Language ${language} is not supported.`);
    process.exit(1);
  }

    // Prompt for test name
    rl.question("What would you like to name your test? ", (testName) => {
      const testFiles = fs
        .readdirSync("tests")
        .filter((file) => file.endsWith(".test.ts"));
      let ports = [];

      // Extract ports
      testFiles.forEach((file) => {
        const content = fs.readFileSync(path.join("tests", file), "utf-8");
        const matches = content.match(/(?<=e2e\()\d+/g);
        if (matches) {
          ports.push(
            ...matches.map((match) => parseInt(match.replace(/\D/g, "")))
          );
        }
      });

      // Find unused port
      ports = ports.sort((a, b) => a - b);
      let unusedPort = 4000;
      while (ports.includes(unusedPort)) {
        unusedPort++;
      }

      // Create test file
      const testContent = `import { e2e } from "../util";
import { test } from "vitest";

test("${testName}", async () => {
  await e2e(${unusedPort});
});`;
      fs.writeFileSync(`tests/${testName}.test.ts`, testContent);

      // Create directory and konfig.yaml file
      const sdkPath = `sdks/${testName}`;
      fs.mkdirSync(sdkPath, { recursive: true });
      fs.writeFileSync(
        `${sdkPath}/konfig.yaml`,
        generateKonfigYamlString(language, testName)
      );

      // Copy api-template.yaml and replace {test_name} with actual test name
      const apiTemplate = fs.readFileSync("api-template.yaml", "utf-8");
      const apiContent = apiTemplate.replace(/{test_name}/g, testName);
      fs.writeFileSync(`${sdkPath}/api.yaml`, apiContent);

      // Close interface
      rl.close();
    });
  }
);
