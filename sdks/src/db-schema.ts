import { z } from "zod";

const securityScheme = z.union([
  z.object({
    type: z.literal("apiKey"),
    description: z.string(),
  }),
  z.object({}),
]);
export const dbSchema = z.object({
  specifications: z.record(
    z.object({
      providerName: z.string(),
      serviceName: z.string(),
      version: z.string(),
      servers: z.array(z.object({ url: z.string() })).optional(),
      description: z.string().optional(),
      title: z.string(),
      contactUrl: z.string().optional(),
      contactEmail: z.string().optional(),
      numberOfEndpoints: z.number(),
      numberOfOperations: z.number(),
      numberOfSchemas: z.number(),
      numberOfParameters: z.number(),
      difficultyScore: z.number(),
      difficulty: z
        .enum(["Very Easy", "Easy", "Medium", "Hard", "Very Hard"])
        .optional(),
    })
  ),
  skipped: z.array(z.string()),
});

export type Db = z.infer<typeof dbSchema>;
