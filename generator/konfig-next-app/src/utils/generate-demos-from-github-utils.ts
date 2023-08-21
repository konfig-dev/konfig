import { z } from 'zod'

export const DEMO_YAML_FILE_NAME = 'demo.yaml'

const socialObjectSchema = z.object({
  website: z.string().optional(),
  documentation: z.string().optional(),
})

export type SocialObject = z.infer<typeof socialObjectSchema>

export const demoYamlSchema = z.object({
  organizationName: z.string(),
  portalName: z.string(),
  socials: socialObjectSchema.optional(),
  demos: z
    .object({
      id: z.string(),
      showCode: z.boolean().optional(),
    })
    .array()
    .optional(),
})

export type DemoYaml = z.infer<typeof demoYamlSchema>
