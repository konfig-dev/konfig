import { Configuration } from "./configuration";
import { AxiosRequestConfig } from "axios";
import { ProviderApiKeys } from "./models";
import { operationParameterMap } from "./operationParameterMap";

export function requestBeforeHook({
  requestBody,
  queryParameters,
  path,
  requestConfig,
  configuration,
  pathTemplate,
  httpMethod,
}: {
  requestBody?: any;
  queryParameters: Record<string, any>;
  path: string;
  requestConfig: AxiosRequestConfig;
  configuration?: Configuration;
  pathTemplate?: string;
  httpMethod?: string;
  [key: string]: any;
}): void {
  if (typeof requestBody !== "object") return;
  if (requestBody === null) return;

  const providerApiKeysParameter = operationParameterMap[
    `${pathTemplate}-${httpMethod}`
  ].parameters.find((param) => param.name === "provider_api_keys");
  if (providerApiKeysParameter === undefined) return;

  const providerApiKeys: ProviderApiKeys =
    requestBody["provider_api_keys"] !== undefined
      ? requestBody["provider_api_keys"]
      : {};

  // anthropic
  if (
    configuration?.anthropicApiKey &&
    providerApiKeys["anthropic"] === undefined
  )
    providerApiKeys["anthropic"] = configuration?.anthropicApiKey;

  // openai
  if (configuration?.openaiApiKey && providerApiKeys["openai"] === undefined)
    providerApiKeys["openai"] = configuration?.openaiApiKey;

  // openai_azure
  if (
    configuration?.openaiAzureApiKey &&
    providerApiKeys["openai_azure"] === undefined
  )
    providerApiKeys["openai_azure"] = configuration?.openaiAzureApiKey;

  // openai_azure_endpoint
  if (
    configuration?.openaiAzureEndpointApiKey &&
    providerApiKeys["openai_azure_endpoint"] === undefined
  )
    providerApiKeys["openai_azure_endpoint"] =
      configuration?.openaiAzureEndpointApiKey;

  // cohere
  if (configuration?.cohereApiKey && providerApiKeys["cohere"] === undefined)
    providerApiKeys["cohere"] = configuration?.cohereApiKey;

  // ai21
  if (configuration?.ai21ApiKey && providerApiKeys["ai21"] === undefined)
    providerApiKeys["ai21"] = configuration.ai21ApiKey;

  // mock
  if (configuration?.mockApiKey && providerApiKeys["mock"] === undefined)
    providerApiKeys["mock"] = configuration.mockApiKey;

  requestBody["provider_api_keys"] = providerApiKeys;
}
