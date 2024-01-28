import * as path from "path";
import { SdkPageProps } from "../../generator/konfig-docs/src/components/SdkComponentProps";
import { AdditionalSpecDataProps } from "./collect";

export const dbFolder = path.join(path.dirname(__dirname), "db");
export const specFolder = path.join(dbFolder, "spec-data");

export type Published = SdkPageProps & {
  typescriptSdkUsageCode: string;
  originalSpecUrl: string;
} & AdditionalSpecDataProps;

export type HtmlData = {
  description?: string;
  imagePreview?: string;
  logo?: string;
};
