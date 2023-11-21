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

/**
 * converts "python-pydantic-test" to "pythonpydantictest"
 */
function toLowercaseOnlyAlphanumeric(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

/**
 * converts "python-pydantic-test" to "python_pydantic_test"
 */
function toSnakeCase(str) {
  return str.replace(/-/g, "_");
}

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

function generateJavaTest({ testName, port }) {
  const test = `package com.konfigthis.${toLowercaseOnlyAlphanumeric(
    testName
  )}.client;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.Assert.assertNotNull;

public class ${toCamelCase(testName)}Test {
    static final String MOCK_SERVER_URL = "http://localhost:${port}";
    static ${toCamelCase(testName)}Client client;

    @BeforeAll
    public static void setUp() throws Exception {
        Configuration configuration = new Configuration();
        configuration.host = MOCK_SERVER_URL;
        configuration.apiKey = "YOUR API KEY";
        client = new ${toCamelCase(testName)}Client(configuration);
    }

    @Test
    public void testFetch() throws ApiException {
        Object response = client.test.fetch().execute();
        assertNotNull(response);
    }

}
`;
  return {
    test,
    path: `java/src/test/java/com/konfigthis/${toLowercaseOnlyAlphanumeric(
      testName
    )}/client/${toCamelCase(testName)}Test.java`,
    konfigIgnore: `src/test/java/com/konfigthis/${toLowercaseOnlyAlphanumeric(
      testName
    )}/client/${toCamelCase(testName)}Test.java`,
  };
}

function generatePythonTest({ testName, port }) {
  const test = `import unittest

import os
from pprint import pprint
from ${toSnakeCase(testName)} import ${toCamelCase(testName)}Client

class Test${toCamelCase(testName)}(unittest.TestCase):
    def setUp(self):
        pass

    def test_${toSnakeCase(testName)}(self):
        client = ${toCamelCase(testName)}Client(
            host="http://127.0.0.1:${port}",
            api_key='YOUR_API_KEY',
        )
        resp = client.test.fetch()
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
`;
  return {
    test,
    path: `python/test/test_${toSnakeCase(testName)}.py`,
    konfigIgnore: `test/test_${toSnakeCase(testName)}.py`,
  };
}

function generateKonfigYamlFieldsForLanguage(language, testName) {
  if (language == "python") {
    return `packageName: ${testName.replace(/-/g, "_")}
    projectName: ${testName}`;
  } else if (language == "typescript") {
    return `npmName: ${testName}`;
  } else if (language == "csharp") {
    return `packageName: ${toCamelCase(testName)}.Net
    logoPath: ../../logo.png`;
  } else if (language == "java") {
    return `groupId: com.konfigthis
    packageName: ${toLowercaseOnlyAlphanumeric(testName)}
    artifactId: ${testName}`;
  }
}

const supportedLanguages = ["python", "typescript", "csharp", "java"];
// Prompt for language
rl.question(
  `Which language would you like to create a test for? (${supportedLanguages.join(
    "/"
  )}) `,
  (languageInput) => {
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
        // add random number between 1 and 50
        unusedPort += Math.floor(Math.random() * 50) + 1;
      }

      // Create test file
      const testContent = `import { e2e } from "../util";
import { test } from "vitest";

test("${testName}", async () => {
  await e2e(${unusedPort});
});`;
      fs.writeFileSync(`tests/${testName}.test.ts`, testContent);

      // if language is python, bootstrap a test
      if (language === "python") {
        const { test, path, konfigIgnore } = generatePythonTest({
          testName,
          port: unusedPort,
        });
        // ensure directories exist
        const directories = path.split("/");
        directories.pop();
        // push testName to beginning of directories
        directories.unshift(testName);
        ensureDirectory({ directories, cwd: "sdks" });

        fs.writeFileSync(`sdks/${testName}/${path}`, test);
        fs.writeFileSync(`sdks/${testName}/python/.konfigignore`, konfigIgnore);
      }

      if (language === "java") {
        const { test, path, konfigIgnore } = generateJavaTest({
          testName,
          port: unusedPort,
        });
        // ensure directories exist
        const directories = path.split("/");
        directories.pop();
        // push testName to beginning of directories
        directories.unshift(testName);
        ensureDirectory({ directories, cwd: "sdks" });

        fs.writeFileSync(`sdks/${testName}/${path}`, test);
        fs.writeFileSync(`sdks/${testName}/java/.konfigignore`, konfigIgnore);
      }

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

function ensureDirectory({ directories, cwd }) {
  directories.reduce((prev, curr) => {
    const directory = `${prev}/${curr}`;
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
    return directory;
  }, cwd);
}
