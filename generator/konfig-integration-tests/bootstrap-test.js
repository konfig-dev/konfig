#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const toCamelCase = (str) => {
    return str.split(/[-_ ]+/)
      .map((word, index) => index === 0 ? word[0].toUpperCase() + word.slice(1) : word[0].toUpperCase() + word.slice(1))
      .join('');
  };

// Prompt for language
rl.question('Which language would you like to create a test for? (Python/TypeScript) ', (languageInput) => {
  const language = (languageInput === 'Python') ? 'python' : 'typescript';

  // Prompt for test name
  rl.question('What would you like to name your test? ', (testName) => {
    const testFiles = fs.readdirSync('tests').filter(file => file.endsWith('.test.ts'));
    let ports = [];

    // Extract ports
    testFiles.forEach(file => {
      const content = fs.readFileSync(path.join('tests', file), 'utf-8');
      const matches = content.match(/(?<=e2e\()\d+/g);
      if (matches) {
        ports.push(...matches.map(match => parseInt(match.replace(/\D/g, ''))));
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

test("${testName}", async () => {
  await e2e(${unusedPort});
});`;
    fs.writeFileSync(`tests/${testName}.test.ts`, testContent);

    // Create directory and konfig.yaml file
    const sdkPath = `sdks/${testName}`;
    fs.mkdirSync(sdkPath, { recursive: true });

    const konfigContent = `outputDirectory: /tmp/${testName}-sdks-out
specPath: api.yaml
generators:
  ${language}:
    version: 1.0.0
    packageName: ${testName.replace(/-/g, '_')}
    projectName: ${testName}
    outputDirectory: ${language}
    clientName: ${toCamelCase(testName)}
    git:
      userId: konfig-dev
      repoId: konfig/tree/main/${language}`;
    fs.writeFileSync(`${sdkPath}/konfig.yaml`, konfigContent);

    // Copy api-template.yaml and replace {test_name} with actual test name
    const apiTemplate = fs.readFileSync('api-template.yaml', 'utf-8');
    const apiContent = apiTemplate.replace(/{test_name}/g, testName);
    fs.writeFileSync(`${sdkPath}/api.yaml`, apiContent);

    // Close interface
    rl.close();
  });
});
