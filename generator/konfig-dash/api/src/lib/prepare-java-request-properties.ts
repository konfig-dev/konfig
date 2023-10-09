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
 * 2. Run generate-models.sh
 * 3. Make updates to KonfigYaml.ts / KonfigYamlCommon.ts
 * 4. Extract data from body and return as a key-value pair in the properties object
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

  if (body.readmeHeader !== undefined) {
    properties['readmeHeader'] = {
      title: body.readmeHeader.title,
      url: body.readmeHeader.url,
    }
  }

  if ('repoName' in git) {
    properties['gitRepoName'] = git.repoName
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
