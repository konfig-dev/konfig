import * as path from "path";
import { SdkPageProps } from "../../generator/konfig-docs/src/components/SdkComponentProps";

export const dbFolder = path.join(path.dirname(__dirname), "db");
export const specFolder = path.join(dbFolder, "spec-data");

export type Published = SdkPageProps & {
  sdkUsageCode: string;
};

export type HtmlData = {
  description?: string;
  imagePreview?: string;
  logo?: string;
};
