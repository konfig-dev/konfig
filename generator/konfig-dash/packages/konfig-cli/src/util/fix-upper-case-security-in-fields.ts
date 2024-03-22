import { Spec } from 'konfig-lib'

export async function fixUpperCaseSecurityInFields({
    spec,
  }: {
    spec: Spec
  }): Promise<number> {
    let numberOfSecurityInFieldsLowercased = 0;
    if (spec.spec.components?.securitySchemes === undefined)
      return numberOfSecurityInFieldsLowercased;
    for (const [_, value] of Object.entries(spec.spec.components?.securitySchemes)) {
      const security = value as any;
      if (security.in && security.in.toLowerCase() !== security.in) {
        security.in = security.in.toLowerCase();
        numberOfSecurityInFieldsLowercased++;
      }
    }
    return numberOfSecurityInFieldsLowercased;
  }