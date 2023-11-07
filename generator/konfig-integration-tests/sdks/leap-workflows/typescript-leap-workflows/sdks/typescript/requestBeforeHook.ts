import { Configuration } from "./configuration";
import { AxiosRequestConfig } from "axios";

export function requestBeforeHook({
  requestBody,
  queryParameters,
  path,
  requestConfig,
  configuration,
}: {
  requestBody?: any;
  queryParameters: Record<string, any>;
  path: string;
  requestConfig: AxiosRequestConfig;
  configuration?: Configuration;
}): void {}
