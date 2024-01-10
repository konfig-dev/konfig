import * as execa from "execa";
import * as fs from "fs";
import * as path from "path";

export function createRepository(name: string, description: string) {
  execa.sync("gh", [
    "repo",
    "create",
    `konfig-sdks/${name}`,
    "--public",
    "--clone",
    "-d",
    description,
  ]);
}

// TODO: maybe move the template to a mustache file in order to better handle the language-specific fields
export function writeKonfigYaml(name: string, language: string) {
  const template = fs.readFileSync(
    path.join(__dirname, "..", "templates", "konfig.yaml.template"),
    "utf-8"
  );
  const konfigYaml = template
    .replace(/{{name}}/g, name)
    .replace(/{{lang}}/g, language)
    .replace(/{{clientName}}/g, generateClientName());

  fs.writeFileSync("konfig.yaml", konfigYaml);
}

function generateClientName(): string {
  return "Client";
}

function toCamelCase(str: string): string {
  return str
    .split(/[-_ ]+/)
    .map((word, index) =>
      index === 0
        ? word[0].toUpperCase() + word.slice(1)
        : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
