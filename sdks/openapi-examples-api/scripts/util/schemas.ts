import { z } from "zod";

export const companiesSchema = z.array(
  z.object({ nameInKebabCase: z.string() })
);
export const dbSchema = z.object({
  companies: companiesSchema,
});
export type Db = z.infer<typeof dbSchema>;
