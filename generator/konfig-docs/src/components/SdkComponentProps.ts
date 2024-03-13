export type ParameterExampleOrDefault =
  | string
  | number
  | null
  | boolean
  | object
  | undefined;
export type Parameter = {
  name: string;
  schema: string;
  required?: boolean;
  description: string;
  default: ParameterExampleOrDefault;
  example: ParameterExampleOrDefault;
};

export type Response = {
  statusCode: string;
  description?: string;
};

export type Method = {
  tag?: string;
  typeScriptTag?: string;
  method: string;
  description: string;
  parameters: Parameter[];
  responses: Response[];
  url: string;
  httpMethod: HttpMethods;
};

export type SdkPageProps = {
  metaDescription: string;
  repositoryDescription?: string;
  company: string;
  logo: string;
  homepage: string;
  lastUpdated: Date;
  methods: Method[];
  serviceName?: string;
  apiTitle: string;
  difficultyScore: number;
  apiBaseUrl: string;
  faviconUrl?: string;
  apiVersion?: string;
  endpoints: number;
  apiDescription?: string;
  sdkMethods: number;
  schemas: number;
  parameters: number;
  clientNameCamelCase: string;
  difficulty: string;
  contactUrl?: string;
  contactEmail?: string;
  openApiRaw?: string;
  openApiGitHubUi?: string;
  developerDocumentation?: string;
  providerName: string;
  previewLinkImage: string;
  sdkName: string;
  language?: string;
};

export enum HttpMethods {
  GET = "get",
  PUT = "put",
  POST = "post",
  DELETE = "delete",
  OPTIONS = "options",
  HEAD = "head",
  PATCH = "patch",
  TRACE = "trace",
}
