export type Parameter = {
  name: string;
  schema: string;
  required?: boolean;
  description: string;
};

export type Response = {
  statusCode: string;
  description?: string;
};

export type Method = {
  tag?: string;
  method: string;
  description: string;
  parameters: Parameter[];
  responses: Response[];
  url: string;
  httpMethod: HttpMethods;
};

export type SdkPageProps = {
  metaDescription: string;
  company: string;
  favicon: string;
  logo: string;
  homepage: string;
  lastUpdated: Date;
  methods: Method[];
  serviceName: string;
  apiTitle: string;
  difficultyScore: number;
  apiBaseUrl: string;
  apiVersion: string;
  endpoints: number;
  apiDescription?: string;
  sdkMethods: number;
  schemas: number;
  parameters: number;
  difficulty?: string;
  contactUrl?: string;
  contactEmail?: string;
  openApiRaw: string;
  openApiUi: string;
  providerName: string;
  previewLinkImage: string;
  sdkName: string;
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
