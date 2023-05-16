import { z } from './zod'

const testScript = z
  .string()
  .array()
  .describe('Series of commands that are sequentially executed to test the SDK')
const requiredEnvironmentVariables = z.string().array()

export const requiredEnvironmentVariablesConfig = z.object({
  requiredEnvironmentVariables: requiredEnvironmentVariables.optional(),
})

export const testConfig = z.object({
  test: z
    .object({
      script: testScript,
    })
    .merge(requiredEnvironmentVariablesConfig)
    .describe(`Configuration of "konfig test"`)
    .optional(),
})

export type RequiredEnvironmentVariablesConfig = z.infer<
  typeof requiredEnvironmentVariablesConfig
>
