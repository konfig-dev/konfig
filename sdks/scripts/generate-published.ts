import * as path from "path";
import * as fs from "fs";

const publishJsonPath = path.join(path.dirname(__dirname), "publish.json");
const specDataDirPath = path.join(path.dirname(__dirname), "db", "spec-data");
const publishedDirPath = path.join(path.dirname(__dirname), "db", "published");

import { z } from "zod";
import { SdkPagePropsWithPropertiesOmitted } from "./collect";
import { SdkPageProps } from "../../generator/konfig-docs/src/components/SdkComponentProps";

const publishJsonSchema = z.object({
  publish: z.record(
    z.object({
      company: z.string(),
      service: z.string(),
      sdkName: z.string(),
      clientName: z.string(),
    })
  ),
});

type SdkPagePropsWithoutScrapedProperties = Omit<
  SdkPageProps,
  | "previewLinkImage" // TODO
  | "metaDescription" // TODO
  | "favicon" // TODO
  | "logo" // TODO
  | "previewLinkImage" // TODO
> & {
  sdkUsageCode: string;
};

type Published = SdkPagePropsWithoutScrapedProperties;

function main() {
  const publishJson = publishJsonSchema.parse(
    JSON.parse(fs.readFileSync(publishJsonPath, "utf-8"))
  );
  const now = new Date();
  for (const spec in publishJson.publish) {
    const specDataPath = path.join(specDataDirPath, spec);
    const publishData = publishJson.publish[spec];
    const specData: SdkPagePropsWithPropertiesOmitted = JSON.parse(
      fs.readFileSync(specDataPath, "utf-8")
    );
    const sdkUsageCode = generateSdkUsageCode(publishData);
    const merged: SdkPagePropsWithoutScrapedProperties = {
      ...specData,
      ...publishData,
      lastUpdated: now,
      sdkUsageCode,
    };
    // write to "published/" directory
    const publishedPath = path.join(publishedDirPath, spec);
    fs.writeFileSync(publishedPath, JSON.stringify(merged, null, 2));
  }
}

function generateSdkUsageCode({
  clientName,
}: {
  sdkName: string;
  clientName: string;
}): string {
  const lines: string[] = [""];
  return lines.join("\n");
}

main();
