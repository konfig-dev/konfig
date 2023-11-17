import {
  GenerateRequestBodyType,
  GeneratorGitConfig,
  KonfigYamlAdditionalGeneratorConfig,
  KonfigYamlGeneratorConfig,
} from 'konfig-lib'

/**
 * Used in preparation to send a request to the Java generator API for all
 * generators. This function keeps the code DRY by handling the common
 * properties for all generators here. This code is untyped but I think its
 * worth it to keep the code DRY.
 *
 * Now all thats necessary to give the Java Generator more context is:
 *
 * 1. Modify the AdditionalProperties schema in the Java API's OpenAPI specification at api.yaml
 *    (file located at: [KONFIG REPO]/misc/openapi-generator-configs/openapi-generator-api/api.yaml)
 * 2. Update JavaGenerateApiRequestBody.ts file with same changes as api.yaml
 * 3. Run generate-models.sh
 *    (file located at: [KONFIG REPO]/misc/openapi-generator-configs/openapi-generator-api/generate-models.sh)
 * 4. Make updates to KonfigYaml.ts / KonfigYamlCommon.ts
 * 5. In this file, extract data from body and return as a key-value pair in the properties object (in this function implementation)
 * 6. In GenerateApi.java, add the new property to additional properties map
 *
 * Note: If you are adding a configuration that points to a file like "readmeHeaderSnippet", you need to add code to
 * "/generator/konfig-dash/packages/konfig-cli/src/commands/generate.ts" to read the file contents and send the contents
 * to the generator api instead.
 */
export function prepareJavaRequestProperties({
  body,
  git,
  generatorConfig,
}: {
  body: GenerateRequestBodyType
  git: GeneratorGitConfig
  generatorConfig:
    | KonfigYamlGeneratorConfig
    | KonfigYamlAdditionalGeneratorConfig
}): Record<string, unknown> {
  const properties: Record<string, unknown> = {}

  if (body.useSecurityKeyName !== undefined) {
    properties['useSecurityKeyName'] = body.useSecurityKeyName
  }

  if (body.readmeHeader !== undefined) {
    properties['readmeHeader'] = {
      title: body.readmeHeader.title,
      url: body.readmeHeader.url,
    }
  }

  if ('defaultAsyncTimeout' in generatorConfig) {
    properties['defaultAsyncTimeout'] = generatorConfig.defaultAsyncTimeout
  }

  if ('repoName' in git) {
    properties['gitRepoName'] = git.repoName
  }

  if ('readmeHeaderSnippet' in generatorConfig) {
    properties['readmeHeaderSnippet'] = generatorConfig.readmeHeaderSnippet
  }

  if ('outputDirectory' in generatorConfig) {
    properties['outputDirectory'] = generatorConfig.outputDirectory
  }

  if ('defaultBranch' in git) {
    properties['gitDefaultBranch'] = git.defaultBranch
  }

  if ('isGitSubmodule' in git) {
    properties['isGitSubmodule'] = git.isGitSubmodule
  }

  return properties
}
