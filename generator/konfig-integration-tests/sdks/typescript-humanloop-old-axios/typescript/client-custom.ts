import { AxiosPromise, AxiosRequestConfig } from "axios";
import {
  ChatsApi,
  ChatsApiAxiosParamCreator,
  ChatsApiCreateDeployedRequest,
  ChatsApiCreateExperimentRequest,
  ChatsApiCreateModelConfigRequest,
  ChatsApiCreateRequest,
  CompletionsApi,
  CompletionsApiAxiosParamCreator,
  CompletionsApiCreateDeployedRequest,
  CompletionsApiCreateExperimentRequest,
  CompletionsApiCreateModelConfigRequest,
  CompletionsApiCreateRequest,
  ProjectsApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { createParser, EventSourceParseCallback } from "eventsource-parser";
import globalAxios, { AxiosResponse } from "axios";
import fetchAdapter from "konfig-axios-fetch-adapter";
import { createRequestFunction } from "./common";
import { BASE_PATH, RequestArgs } from "./base";
import {
  CompletionDeployedRequestNoProxy,
  completeDeployed,
} from "./complete-deployed";

export class HumanloopCustom {
  readonly _complete: CompletionsApi;
  readonly _chat: ChatsApi;
  readonly _projects: ProjectsApi;
  readonly _configuration: Configuration;
  constructor(configurationParameters: ConfigurationParameters) {
    this._configuration = new Configuration(configurationParameters);
    this._complete = new CompletionsApi(this._configuration);
    this._chat = new ChatsApi(this._configuration);
    this._projects = new ProjectsApi(this._configuration);
  }

  private _setup<T extends { stream?: boolean }>(
    requestParameters: T,
    options?: AxiosRequestConfig
  ) {
    requestParameters.stream = true;
    if (options === undefined) options = {};
    options.responseType = "stream";
    options.adapter = fetchAdapter;
    return { requestParameters, options };
  }

  private async _request(args: RequestArgs) {
    const request = createRequestFunction(
      args,
      globalAxios,
      BASE_PATH,
      this._configuration
    );
    const response: AxiosPromise<ReadableStream<Uint8Array>> =
      request(globalAxios);
    return response.then((res) => {
      return {
        ...res,
        data: createStream({ response: res }),
      };
    });
  }

  async listConfigs({ projectId }: { projectId: string }) {
    return this._projects.listConfigs({ id: projectId });
  }

  async completeDeployedNoProxy(
    requestParameters: CompletionDeployedRequestNoProxy,
    options?: AxiosRequestConfig,
    refreshInterval?: number
  ) {
    if (typeof this._configuration.apiKey !== "string")
      throw Error("API key is not a string");
    return completeDeployed(
      {
        apiKey: this._configuration.apiKey,
        basePath: this._configuration.basePath,
      },
      requestParameters,
      options,
      refreshInterval
    );
  }

  async chatStream(
    requestParameters: ChatsApiCreateRequest,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ReadableStream>> {
    const { requestParameters: rp, options: o } = this._setup(
      requestParameters,
      options
    );
    const args = await ChatsApiAxiosParamCreator(this._configuration).create(
      rp,
      o
    );
    return this._request(args);
  }

  async chatDeployedStream(
    requestParameters: ChatsApiCreateDeployedRequest,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ReadableStream>> {
    const { requestParameters: rp, options: o } = this._setup(
      requestParameters,
      options
    );
    const args = await ChatsApiAxiosParamCreator(
      this._configuration
    ).createDeployed(rp, o);
    return this._request(args);
  }

  async chatExperimentStream(
    requestParameters: ChatsApiCreateExperimentRequest,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ReadableStream>> {
    const { requestParameters: rp, options: o } = this._setup(
      requestParameters,
      options
    );
    const args = await ChatsApiAxiosParamCreator(
      this._configuration
    ).createExperiment(rp, o);
    return this._request(args);
  }

  async chatModelConfigurationStream(
    requestParameters: ChatsApiCreateModelConfigRequest,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ReadableStream>> {
    const { requestParameters: rp, options: o } = this._setup(
      requestParameters,
      options
    );
    const args = await ChatsApiAxiosParamCreator(
      this._configuration
    ).createModelConfig(rp, o);
    return this._request(args);
  }

  async completeStream(
    requestParameters: CompletionsApiCreateRequest,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ReadableStream>> {
    const { requestParameters: rp, options: o } = this._setup(
      requestParameters,
      options
    );
    const args = await CompletionsApiAxiosParamCreator(
      this._configuration
    ).create(rp, o);
    return this._request(args);
  }

  async completeDeployedStream(
    requestParameters: CompletionsApiCreateDeployedRequest,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ReadableStream>> {
    const { requestParameters: rp, options: o } = this._setup(
      requestParameters,
      options
    );
    const args = await CompletionsApiAxiosParamCreator(
      this._configuration
    ).createDeployed(rp, o);
    return this._request(args);
  }

  async completeExperimentStream(
    requestParameters: CompletionsApiCreateExperimentRequest,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ReadableStream>> {
    const { requestParameters: rp, options: o } = this._setup(
      requestParameters,
      options
    );
    const args = await CompletionsApiAxiosParamCreator(
      this._configuration
    ).createExperiment(rp, o);
    return this._request(args);
  }

  async completeModelConfigurationStream(
    requestParameters: CompletionsApiCreateModelConfigRequest,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ReadableStream>> {
    const { requestParameters: rp, options: o } = this._setup(
      requestParameters,
      options
    );
    const args = await CompletionsApiAxiosParamCreator(
      this._configuration
    ).createModelConfig(rp, o);
    return this._request(args);
  }
}

const decoder = new TextDecoder();
const encoder = new TextEncoder();

function createStream({
  response,
}: {
  response: AxiosResponse<ReadableStream<Uint8Array>>;
}) {
  return new ReadableStream({
    async start(controller) {
      const parser = createParser(createOnParse({ controller }));

      const reader = response.data.getReader();
      let done = false;
      while (!done) {
        const { value: chunk, done: doneReading } = await reader.read();
        done = doneReading;
        parser.feed(decoder.decode(chunk));
      }
      controller.close();
    },
  });
}

export function createOnParse({
  controller,
}: {
  controller: ReadableStreamDefaultController;
}): EventSourceParseCallback {
  return (event) => {
    if (event.type === "event") {
      const data = event.data;
      try {
        const json = JSON.parse(data);
        const chunk = json.data[0];
        const {
          output,
          id,
          index,
          finish_reason,
          model_config_id,
          tool_calls,
          output_message,
          tool_results,
        } = chunk;
        const project_id = json["project_id"];
        if (output === undefined) return;
        if (id === undefined) return;
        const queue = encoder.encode(
          JSON.stringify({
            output,
            id,
            index,
            finish_reason,
            model_config_id,
            tool_calls,
            output_message,
            project_id,
            tool_results,
          })
        );
        controller.enqueue(queue);
      } catch (e) {
        // catch silently
      }
    }
  };
}
