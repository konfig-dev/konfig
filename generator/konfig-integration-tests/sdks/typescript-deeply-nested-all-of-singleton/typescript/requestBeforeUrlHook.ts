import { RequestArgs } from "./base";
import { Configuration } from "./configuration";

export function requestBeforeUrlHook(request: {
  axiosArgs: RequestArgs;
  basePath: string;
  configuration?: Configuration;
}): void {}
