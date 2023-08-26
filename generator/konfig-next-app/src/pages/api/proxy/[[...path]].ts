import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { URL } from "url";

// CORS middleware
function handleCors(req: NextApiRequest, res: NextApiResponse) {
  const allowedOrigin =
    process.env.NODE_ENV === "production" ? "https://demo.konfigthis.com" : "*";

  const requestHeaders = req.headers["access-control-request-headers"];

  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", requestHeaders || "*");

  if (req.method === "OPTIONS") {
    // Preflight request. Reply successfully:
    res.status(204).send("");
    return false;
  }

  return true;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!handleCors(req, res)) return; // handle preflight CORS requests

  const targetUrl = req.headers["x-proxy-target"];

  if (!targetUrl || typeof targetUrl !== "string") {
    return res
      .status(400)
      .json({ error: "Missing or invalid x-proxy-target header" });
  }

  // Construct the full URL including any subpaths and query parameters
  const url = new URL(targetUrl);
  const extraPath = ((req.query.path as string[]) || []).join("/"); // Added check for undefined
  if (extraPath) {
    url.pathname += "/" + extraPath;
  }

  // Append any query parameters
  if (req.url) {
    url.search = req.url.split("?")[1] || "";
  }

  // Fixes: Hostname/IP does not match certificate's altnames: Host: localhost.
  // is not in the cert's altnames: DNS:*.passiv.com, DNS:passiv.com"
  delete req.headers["host"];

  // remove other headers that should be generated when making request by axios
  // delete req.headers["accept-encoding"];
  // delete req.headers["content-length"];
  // delete req.headers["transfer-encoding"];
  // delete req.headers["content-type"];

  try {
    const response = await axios({
      method: req.method as any,
      url: url.toString(),
      headers: req.headers,
      data: req.body,
      validateStatus: () => true, // ensure all responses are forwarded, not just successful ones
    });

    // Forward status code
    res.status(response.status);

    // Forward headers
    for (const [key, value] of Object.entries(response.headers)) {
      // skip content-length
      if (key === "content-length") continue;
      if (key === "transfer-encoding") continue;

      res.setHeader(key, value as any);
    }

    // Forward response
    res.send(response.data);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        error: `Fetching from the target URL failed with message: ${error.message}`,
      });
    } else {
      return res.status(500).json({ error: "An unknown error occurred." });
    }
  }
}
