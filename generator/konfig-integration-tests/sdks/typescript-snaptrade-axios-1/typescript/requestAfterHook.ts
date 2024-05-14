import * as crypto from "crypto";
import { RequestArgs } from "./base";
import { Configuration } from "./configuration";

// Function to check if the code is running in a Node.js environment
function isNodeEnvironment() {
  return (
    typeof process !== "undefined" && process.versions && process.versions.node
  );
}

// Compute HMAC SHA256
async function computeHmacSha256(
  message: string,
  key: string
): Promise<string> {
  if (isNodeEnvironment()) {
    // Node.js environment
    const crypto = require("crypto");
    const hmac = crypto.createHmac("sha256", key);
    hmac.update(message);
    return hmac.digest("base64"); // or return Buffer if you want raw bytes
  } else {
    // Browser environment
    const encoder = new TextEncoder();
    const keyBuffer = encoder.encode(key);
    const msgBuffer = encoder.encode(message);
    const cryptoKey = await window.crypto.subtle.importKey(
      "raw",
      keyBuffer,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const signature = await window.crypto.subtle.sign(
      "HMAC",
      cryptoKey,
      msgBuffer
    );
    const byteArray = Array.from(new Uint8Array(signature));
    // Convert byte array to base64
    const base64 = btoa(String.fromCharCode.apply(null, byteArray));
    return base64;
  }
}

const JSONstringifyOrder = (obj: any) => {
  var allKeys: any = [];
  var seen: any = {};
  JSON.stringify(obj, function (key, value) {
    if (!(key in seen)) {
      allKeys.push(key);
      seen[key] = null;
    }
    return value;
  });
  allKeys.sort();
  return JSON.stringify(obj, allKeys);
};

export async function requestAfterHook(request: {
  axiosArgs: RequestArgs;
  basePath: string;
  url: string;
  configuration?: Configuration;
}): Promise<void> {
  const { configuration, basePath, axiosArgs, url } = request;
  if (configuration?.consumerKey === undefined)
    throw Error("Consumer key is required");
  const consumerKey = encodeURI(configuration.consumerKey);
  const requestData =
    axiosArgs.options.data === undefined || axiosArgs.options.data === "{}"
      ? null
      : JSON.parse(axiosArgs.options.data);
  const path =
    axiosArgs.url.indexOf("?") === -1
      ? `${axiosArgs.url}`
      : `${axiosArgs.url.split("?")[0]}`;
  const requestPath = `/api/v1${path}`;
  const requestQuery = url
    .replace(basePath, "")
    .replace(path, "")
    .replace("?", "");
  const sigObject = {
    content: requestData,
    path: requestPath,
    query: requestQuery,
  };
  const sigContent = JSONstringifyOrder(sigObject);
  const signature = await computeHmacSha256(sigContent, consumerKey);

  if (axiosArgs.options.headers)
    axiosArgs.options.headers["Signature"] = signature;
}
