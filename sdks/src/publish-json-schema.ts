import { z } from "zod";

export const publishJsonSchema = z.object({
  publish: z.record(
    z
      .object({
        company: z.string(),
        serviceName: z.string().or(z.literal(false)).optional(),
        sdkName: z.string(),
        clientName: z.string(),
        metaDescription: z.string().optional(),
        apiDescription: z.string().optional(),
        securitySchemes: z
          .record(
            z.union([
              z.object({
                type: z.literal("apiKey"),
                description: z.string().optional(),
                in: z.union([z.literal("query"), z.literal("header")]),
                name: z.string(),
              }),
              z.object({
                type: z.literal("http"),
                description: z.string().optional(),
                scheme: z.union([
                  z.literal("basic"),
                  z.literal("bearer"),
                  z.literal("digest"),
                ]),
              }),
            ])
          )
          .optional(),
        homepage: z
          .string()
          // ensure it does not start with https:// or http://
          .refine(
            (url) => !url.startsWith("https://") && !url.startsWith("http://"),
            "URL cannot start with https:// or http://"
          )
          .optional(),
        categories: z.string().array().optional(),
      })
      .passthrough()
  ),
});

export type PublishJson = z.infer<typeof publishJsonSchema>;
