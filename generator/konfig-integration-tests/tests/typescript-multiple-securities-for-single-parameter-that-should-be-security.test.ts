import { e2e } from "../util";
import { expect, test } from "vitest";
import * as fs from "fs";
import * as path from "path";
import * as yaml from "js-yaml";

test("typescript-multiple-securities-for-single-parameter-that-should-be-security", async () => {
  await e2e(4087, {
    customAssertions() {
      const rawYamlString = fs.readFileSync(
        path.join(
          path.dirname(__dirname),
          "sdks",
          "typescript-multiple-securities-for-single-parameter-that-should-be-security",
          "api-fixed.yaml"
        ),
        "utf-8"
      );
      const parsed: any = yaml.load(rawYamlString);
      const securityRequirements =
        parsed.paths["/simple-endpoint"].get.security;

      const requirements = securityRequirements.flatMap(
        (securityRequirement: any) => {
          return Object.keys(securityRequirement);
        }
      );
      expect(securityRequirements.length).toBe(6);

      // expect requirements to contain:
      // - Bearer: []
      // - api_key: []
      // - basic_auth: []
      // - justeat_adfs: []
      // - restaurantsignup_jwt: []
      // - daas_jwt: []
      expect(requirements).toContain("Bearer");
      expect(requirements).toContain("api_key");
      expect(requirements).toContain("basic_auth");
      expect(requirements).toContain("justeat_adfs");
      expect(requirements).toContain("restaurantsignup_jwt");
      expect(requirements).toContain("daas_jwt");
    },
  });
});
