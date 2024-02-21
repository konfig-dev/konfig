import {
  IRuleResult,
  Spectral,
  Document,
  Ruleset,
  RulesetDefinition,
} from "@stoplight/spectral-core";
import { httpAndFileResolver } from "@stoplight/spectral-ref-resolver";
import ruleset from "../../src/ruleset";
import { OpenAPI } from "openapi-types";

export type RuleName = keyof Ruleset["rules"];

type Scenario = ReadonlyArray<
  Readonly<{
    name: string;
    document: OpenAPI.Document | Document<unknown, any>;
    errors: ReadonlyArray<Partial<IRuleResult>>;
    mocks?: Record<string, Record<string, unknown>>;
  }>
>;

export default (ruleName: RuleName | true, tests: Scenario): void => {
  describe(`Rule ${ruleName === true ? "all" : ruleName}`, () => {
    const concurrent = tests.every(
      (test) => test.mocks === void 0 || Object.keys(test.mocks).length === 0
    );
    for (const testCase of tests) {
      (concurrent ? it.concurrent : it)(testCase.name, async () => {
        const s = createWithRules(ruleName === true ? ruleName : [ruleName]);
        const doc =
          testCase.document instanceof Document
            ? testCase.document
            : JSON.stringify(testCase.document);
        const errors = await s.run(doc);
        const filteredErrors = errors.filter(({ code }) => code === ruleName);
        expect(filteredErrors).toEqual(
          testCase.errors.map((error) => expect.objectContaining(error))
        );
      });
    }
  });
};

export function createWithRules(
  rules: (keyof Ruleset["rules"])[] | true
): Spectral {
  const s = new Spectral({ resolver: httpAndFileResolver });
  if (rules === true) {
    s.setRuleset({
      extends: ruleset,
    });
  } else {
    s.setRuleset({
      extends: [[ruleset as RulesetDefinition, "off"]],
      rules: rules.reduce((obj: Record<string, boolean>, name) => {
        obj[name] = true;
        return obj;
      }, {}),
    });
  }

  return s;
}
