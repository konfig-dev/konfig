import { z } from "zod";
export const dbSchema = z.object({
  specifications: z.record(
    z.object({
      providerName: z.string(),
      serviceName: z.string(),
      version: z.string(),
      servers: z.array(z.object({ url: z.string() })).optional(),
      description: z.string().optional(),
      title: z.string(),
      spec: z.object({
        raw: z.string(),
      }),
      numberOfEndpoints: z.number(),
      numberOfOperations: z.number(),
      numberOfSchemas: z.number(),
      numberOfParameters: z.number(),
    })
  ),
});

export type Db = z.infer<typeof dbSchema>;
