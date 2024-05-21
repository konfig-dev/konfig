import { e2e } from "../util";
import { test } from "vitest";

test("python-circular-reference-2", async () => {
  await e2e(4090);
});

/**
 * Reproducing the bug:
 * The bug arises when you have a circular reference between 2 schemas, where one reference (A to B) is an 
 * optional variable, and the other (B to A) is a required variable.
 * 
 * The reason for the bug:
 * When we search for circular dependencies and update the isCircularReference property on the CodeGenProperty,
 * we do so separately for allVars, optionalVars, and requiredVars on each model. These vars are actually represented 
 * as DIFFERENT CodeGenProperty objects in memory on the model. Thus, in this scenario, the circular reference
 * will be properly found for allVars, but NOT for requiredVars - because there is only a ONE WAY dependency amongst
 * the required vars. Thus, in the CodeGenProperty object representing the requiredVar, we do not flag it as a circular
 * dependency, even though it is.
 * 
 * The fix:
 * One potential solution could have been to simply copy the circular dependencies found in the allVars search onto
 * the requiredVars and optionalVars CodeGenProperty objects as well. However, instead of mucking around with the 
 * java code for circular dependency search, which had the potential to get really ugly, I thought of a simpler solution.
 * In the offending templates, we can simply iterate over allVars and filter for required/optional - thus using the 
 * isCircularReference property computed using all variables - instead of interating over requiredVars/optionalVars, which,
 * as previously mentioned, references different CodeGenProperty objects in the JVM.
 */