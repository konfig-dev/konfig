import { Configuration } from "./configuration";
import { AxiosRequestConfig } from "axios";

export function requestBeforeHook({
  requestBody,
  queryParameters,
  path,
  requestConfig,
  configuration,
  pathTemplate,
  httpMethod
}: {
  requestBody?: any;
  queryParameters: Record<string, any>;
  path: string;
  requestConfig: AxiosRequestConfig;
  configuration?: Configuration;
  pathTemplate: string;
  httpMethod: string;
  [key: string]: any;
}): void {}
