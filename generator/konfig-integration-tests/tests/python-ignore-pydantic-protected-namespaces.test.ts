import { e2e } from "../util";
import { expect, test } from "vitest";

test("python-ignore-pydantic-protected-namespaces", async () => {
  await e2e(4110, {
    customAssertions({ testOutput }) {
      // Ensure testOutput does not contain message:
      // `Support for class-based `config` is deprecated, use ConfigDict instead. Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide`
      const useConfigDictMessage = `Support for class-based \`config\` is deprecated, use ConfigDict instead. Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide`;
      expect(testOutput).not.toContain(useConfigDictMessage);

      // Ensure testOutput does not contain message:
      // `has conflict with protected namespace "model_"`
      const protectedNamespaceMessage = `has conflict with protected namespace "model_"`;
      expect(testOutput).not.toContain(protectedNamespaceMessage);
    },
  });
});
