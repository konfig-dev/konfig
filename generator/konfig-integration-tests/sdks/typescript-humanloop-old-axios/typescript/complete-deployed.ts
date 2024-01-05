import {
  CompletionResponse,
  CompletionsApiCreateDeployedRequest,
  DataResponse,
  Humanloop,
  LogRequest,
} from "./index";
import { ModelConfigResponse } from "./models/model-config-response";
import { OpenAI } from "openai";
import { AxiosRequestConfig } from "axios";
import { ChatCompletionMessageParam } from "openai/resources/chat";
import { ConfigCache } from "./cache";

// Singleton config cache, created at module load time.
export const configCache = new ConfigCache();

const _CHAT_MODELS = [
  "gpt-3.5-turbo",
  "gpt-35-turbo",
  "gpt-3.5-turbo-0613",
  "gpt-3.5-turbo-0301",
  "gpt-3.5-turbo-16k",
  "gpt-3.5-turbo-16k-0613",
  "gpt-3.5-turbo-0613",
  "gpt-3.5-turbo-instruct",
  "gpt-3.5-turbo-1106",
  "gpt-4",
  "gpt-4-0613",
  "gpt-4-0314",
  "gpt-4-32k",
  "gpt-4-32k-0613",
  "gpt-4-32k-0314",
  "gpt-4-1106-preview",
];

export type CompletionDeployedRequestNoProxy =
  CompletionsApiCreateDeployedRequest & {
    // In a normal call to complete deployed, there is no `reference_id` field. However, for the non-
    // proxying case, we can provide the ability to do this since we are effectively logging.
    reference_id?: string;
  };

/**
 * Intended to be a drop-in replacement for `humanloop.completeDeployed`.
 *
 * Notes:
 * - only supports OpenAI models.
 * - `requestParameters` matches the type of normal SDK `requestParameters`, but some combinations of
 *      parameters are not supported by this script. See below.
 *    - `stream` is not supported.
 *    - `inputs` must be an object with string keys and values, or undefined.
 *    - `provider_api_keys` is supported, but if not provided and `process.env["OPENAI_API_KEY"]` is set,
 *         that will be used instead.
 * - `options` parameter is not supported.
 * - `refreshInterval` is in milliseconds, and defaults to 60 seconds if not provided. Any call to
 *      `completeDeployed` will setup a periodic refresh of the deployed config at the defined interval,
 *      preventing round trips to the Humanloop API on every call. Note that a roundtrip to retrieve the
 *      deployed config _will_ still be made on the first call to `completeDeployed` for any given combination
 *      of `project_id` and `environment`.
 * -  The return type is no longer wrapped in an `AxiosResponse`.
 */
export async function completeDeployed(
  humanloopConnectionParams: { apiKey: string; basePath?: string },
  requestParameters: CompletionDeployedRequestNoProxy,
  options?: AxiosRequestConfig,
  refreshInterval?: number
): Promise<CompletionResponse> {
  if (options) {
    throw new Error("`options` not supported");
  }

  // Handle request parameters.
  const {
    project_id,
    inputs,
    metadata,
    provider_api_keys,
    num_samples = 1,
    logprobs,
    stream,
    suffix,
    user,
    environment,
  } = requestParameters;

  if (!project_id) {
    throw new Error("`project_id` required");
  }
  if (stream) {
    throw new Error("streaming responses not supported");
  }

  // 1. Retrieve the deployed model config.
  const deployedConfig = await configCache.getConfig(
    project_id,
    environment,
    humanloopConnectionParams,
    refreshInterval
  );

  // 2. Check the config is a model config.
  if (deployedConfig.type !== "model") {
    throw new Error(
      `Deployed config for project ${project_id} is not a model config`
    );
  }

  // 3. Validate that the model config is a complete endpoint.
  if (deployedConfig.endpoint !== "complete") {
    throw new Error(
      `Deployed config for project ${project_id} is not a completion model config`
    );
  }

  // 4. Validate that there are no tools in the model config.
  if (deployedConfig.tool_configs && deployedConfig.tool_configs.length > 0) {
    throw new Error(
      `Deployed config for project ${project_id} contains tools; tools are not supported`
    );
  }

  // 5. Validate that the model is an OpenAI model.
  if (deployedConfig.provider !== "openai") {
    throw new Error(
      `Deployed config for project ${project_id} is not an OpenAI model`
    );
  }

  // 6. Validate that a prompt template is present. Since it is a complete endpoint, this must be the case
  //    but we check anyway.
  const promptTemplate = deployedConfig.prompt_template;
  if (!promptTemplate) {
    throw new Error(
      `Deployed config for project ${project_id} does not have a prompt template`
    );
  }

  // 7. Validate that `chat_template` is not present, since this is a complete endpoint.
  if (deployedConfig.chat_template) {
    throw new Error(
      `Deployed config for project ${project_id} has \`chat_template\`; this is not supported on completion endpoint`
    );
  }

  // 8. Validate that, if `inputs` is present, it is an object of string keys and values.
  if (!validateInputs(inputs)) {
    throw new Error(
      "`inputs` must be an object with string keys and values, or undefined"
    );
  }

  // 9. Populate prompt template.
  const re = /{{\s?([a-zA-Z_\d]+)\s?}}/g;
  const templateVariables = [...promptTemplate.matchAll(re)].map(
    (match) => match[1] as string
  );

  let prompt: string = promptTemplate;
  const missingVariables = [];

  for (const variable of templateVariables) {
    if (!inputs || !(variable in inputs)) {
      missingVariables.push(variable);
    }
    // Assertion is safe as we have validated `inputs` above.
    const variableValue = inputs[variable] as string;
    prompt = prompt.replace(
      new RegExp(`{{\\s?${variable}\\s?}}`, "g"),
      variableValue
    );
  }

  if (missingVariables.length > 0) {
    throw new Error(
      `Missing input variables: ${missingVariables.slice().sort().join(", ")}`
    );
  }

  // 10. Create the OpenAI client.
  let openaiApiKey: { apiKey: string } | undefined = undefined;
  if (provider_api_keys && "openai" in provider_api_keys) {
    openaiApiKey = {
      // Assertion is safe as we have validated `provider_api_keys` above.
      apiKey: provider_api_keys["openai"] as string,
    };
  }
  const openai = new OpenAI(openaiApiKey);

  // 11. Construct the OpenAI request parameters.
  if (!_CHAT_MODELS.includes(deployedConfig.model)) {
    // The model is not a chat model. This requires making an `openai.completions.create` request, which
    // is sync. The completions API does not offer an async `acreate` method.
    // TODO: support this path, and note that `suffix` param _is_ supported for completion models.
    throw new Error(
      `Deployed config for project ${project_id} is not a chat model. This is not supported.`
    );
  }

  // In this path, the model being used is a chat model, so we create a chat message with the prompt as
  // its content.
  const messages: ChatCompletionMessageParam[] = [
    { role: "user", content: prompt },
  ];

  const {
    max_tokens,
    temperature,
    top_p,
    stop,
    presence_penalty,
    frequency_penalty,
    tool_configs,
    other,
  } = deployedConfig;

  if (suffix) {
    throw new Error(
      `Deployed config for project ${project_id} has \`suffix\`; this is not supported for chat models (using model ${deployedConfig.model})`
    );
  }
  if (logprobs) {
    throw new Error(
      `Deployed config for project ${project_id} has \`logprobs\`; this is not supported for chat models (using model ${deployedConfig.model})`
    );
  }

  // 12. Make the request to OpenAI directly.
  let res: OpenAI.Chat.Completions.ChatCompletion;
  let providerLatency; // seconds
  try {
    const start_time = performance.now();
    res = await openai.chat.completions.create({
      model: deployedConfig.model,
      messages,

      // Parameters passed per request and not part of Humanloop's model config.
      n: num_samples,
      user,

      // Direct pass-through parameters
      temperature,
      top_p,
      stop,
      presence_penalty,
      frequency_penalty,
      ...other,

      // Humanloop's `max_tokens=-1` corresponds to passing `undefined` to OpenAI.
      max_tokens: max_tokens === -1 ? undefined : max_tokens,
    });
    const end_time = performance.now();
    providerLatency = (end_time - start_time) / 1000;
  } catch (e: any) {
    // Log the error. Don't await this call so that it doesn't block the main execution path.
    logCompletionError(
      requestParameters,
      `OpenAI error: ${e instanceof Error ? e.message : "unknown"}`,
      deployedConfig,
      0,
      humanloopConnectionParams
    );
    throw e;
  }

  // 13. Map the response to the Humanloop response format.
  const humanloopGenerateOutput = {
    inputs,
    messages,
    samples: res.choices.map((choice) => ({
      id: `data_${nanoid(
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        21
      )}`,
      raw_output: choice.message.content || "", // Not clear why `content` can be null here. Use empty string as a fallback.
      output: choice.message.content?.trim() || "",
      index: choice.index,
      finish_reason: choice.finish_reason,
      provider_response: res,
      model_config: deployedConfig,
      tool_results: null,
    })),
  };

  const completionResponse: CompletionResponse = {
    data: humanloopGenerateOutput.samples.map((sample) => ({
      id: String(sample.id),
      index: sample.index,
      output: sample.output,
      raw_output: sample.raw_output,
      inputs: humanloopGenerateOutput.inputs,
      tool_results: sample.tool_results ?? undefined,
      model_config_id: deployedConfig.id,
      finish_reson: sample.finish_reason,
    })),
    project_id,
    num_samples,
    logprobs,
    user,
    suffix,
    metadata,
    provider_responses: [res],
    usage: res.usage
      ? {
          prompt_tokens: res.usage.prompt_tokens,
          generation_tokens: res.usage.completion_tokens,
          total_tokens: res.usage.total_tokens,
        }
      : undefined,
  };

  // Don't await this call so that it doesn't block the main execution path.
  logCompletion(
    requestParameters,
    completionResponse,
    deployedConfig,
    providerLatency,
    humanloopConnectionParams
  );

  return completionResponse;
}

const validateInputs = (
  inputs: object | undefined
): inputs is Record<string, string> => {
  if (inputs) {
    if (typeof inputs !== "object") {
      throw new Error("`inputs` is not an object");
    }
    if (Object.keys(inputs).some((key) => typeof key !== "string")) {
      throw new Error("`inputs` must be an object with string keys and values");
    }
  }
  return true;
};

const logCompletion = async (
  request: CompletionDeployedRequestNoProxy,
  completion: CompletionResponse,
  modelConfig: ModelConfigResponse,
  providerLatency: number,
  humanloopConnectionParams?: { apiKey: string; basePath?: string }
) => {
  const humanloop = new Humanloop(humanloopConnectionParams);

  const { id, tool_configs, ...modelConfigRequest } = modelConfig;
  const logRequests: LogRequest[] = completion.data.map(
    (data: DataResponse): LogRequest => {
      return {
        project_id: request.project_id,
        session_id: request.session_id,
        session_reference_id: request.session_reference_id,
        parent_id: request.parent_id,
        parent_reference_id: request.parent_reference_id,
        inputs: request.inputs,
        source: request.source,
        metadata: { ...request.metadata, noProxy: true },
        reference_id: request.reference_id,
        output: data.output,
        config: { ...modelConfigRequest, tools: tool_configs }, // TODO: maybe be better to just provide a model config id here, but API does not yet support this.
        created_at: new Date().toISOString(),
        duration: providerLatency,
      };
    }
  );

  try {
    await humanloop.logs.log(logRequests);
  } catch (e: any) {
    console.error(`Failed to log completion: ${e}`);
  }
};

const logCompletionError = async (
  request: CompletionDeployedRequestNoProxy,
  error: string,
  modelConfig: ModelConfigResponse,
  providerLatency?: number,
  humanloopConnectionParams?: { apiKey: string; basePath?: string }
) => {
  const humanloop = new Humanloop(humanloopConnectionParams);

  const { id, tool_configs, ...modelConfigRequest } = modelConfig;
  const logRequests: LogRequest[] = [
    {
      // TODO: would be better to pass the client-side generated datapoint ID here, but API does not yet support this.
      project_id: request.project_id,
      session_id: request.session_id,
      session_reference_id: request.session_reference_id,
      parent_id: request.parent_id,
      parent_reference_id: request.parent_reference_id,
      inputs: request.inputs,
      source: request.source,
      metadata: { ...request.metadata, noProxy: true },
      reference_id: request.reference_id,
      output: undefined,
      error,
      config: { ...modelConfigRequest, tools: tool_configs }, // TODO: would be better to just provide a model config id here, but API does not yet support this.
      created_at: new Date().toISOString(),
      duration: providerLatency,
    },
  ];

  try {
    await humanloop.logs.log(logRequests);
    console.log("Logged completion error");
  } catch (e: any) {
    console.error(`Failed to log completion error: ${e}`);
  }
};

const nanoid = (alphabet: string, size: number): string => {
  let id = "";
  while (size--) {
    id += alphabet[(Math.random() * alphabet.length) | 0];
  }
  return id;
};
