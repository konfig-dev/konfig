import * as path from "path";
import { SdkPageProps } from "../../generator/konfig-docs/src/components/SdkComponentProps";
import { AdditionalSpecDataProps } from "./collect";

export const dbFolder = path.join(path.dirname(__dirname), "db");
export const specFolder = path.join(dbFolder, "spec-data");
export const postRequestSpecsDir = path.join(dbFolder, "post-request-specs");
export const getRequestSpecsDir = path.join(dbFolder, "get-request-specs");

/**
 * Sometimes the published properties should be always defined so this type is
 * used to overwrite the properties from SdkPageProps so downstream code can
 * assume that the properties are always defined
 */
type ExtraOrOverwriteProperties = {
  categories: string[];
  faviconUrl: string;
};

export type Published = SdkPageProps & {
  typescriptSdkUsageCode: string;
  originalSpecUrl?: string;
} & AdditionalSpecDataProps &
  ExtraOrOverwriteProperties;

export type HtmlData = {
  description?: string;
  imagePreview?: string;
  logo?: string;
};
