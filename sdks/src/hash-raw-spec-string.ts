import * as crypto from "crypto";
import { PublishJson } from "./publish-json-schema";
import stringify from "json-stable-stringify";
import { SdkPagePropsWithPropertiesOmitted } from "../scripts/collect";

/**
 * Deterministic hash of the raw spec string
 */
export function hashRawSpecString(
  rawSpecString: string,
  publishData: PublishJson["publish"][string],
  specData: SdkPagePropsWithPropertiesOmitted
) {
  return crypto
    .createHash("sha256")
    .update(rawSpecString)
    .update(stringify(publishData))
    .update(stringify(specData))
    .digest("hex");
}
