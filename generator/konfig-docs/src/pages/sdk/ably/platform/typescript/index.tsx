import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function AblyTypeScriptSdk() {
  return (
    <Sdk
      sdkName="ably-platform-typescript-sdk"
      metaDescription="Ably provides a suite of APIs to build, extend, and deliver powerful digital experiences in realtime. Organizations like Toyota, Bloomberg, HubSpot, and Hopin depend on Ably’s platform to offload the growing complexity of business-critical realtime data synchronization at global scale."
      company="Ably"
      serviceName="platform"
      logo="https://voltaire.ably.com/static/ably-logo-46433d9937b94509fc62ef6dd6d94ff1.png"
      homepage="https://ably.com/"
      lastUpdated={new Date("2021-10-13T00:00:00Z")}
      contactUrl="https://www.ably.io/contact"
      previewLinkImage="https://voltaire.ably.com/static/ably-generic-53a7dd8e38ba16fd0190ec91150dad0a.jpeg"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
        {
          tag: "status",
          method: "getMetadataOfAllChannels",
          url: "https://rest.ably.io/channels",
          description: "Enumerate all active channels of the application",
          httpMethod: HttpMethodsEnum.GET,
          parameters: [
            {
              name: "prefix",
              schema: "string",
              required: true,
              description:
                "Optionally limits the query to only those channels whose name starts with the given prefix",
            },
            {
              name: "by",
              schema: "string",
              description:
                "optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)",
            },
          ],
          responses: [
            {
              statusCode: "2XX",
            },
            {
              statusCode: "default",
              description: "Returned error from failed REST.",
            },
          ],
        },
      ]}
      apiTitle="Platform API"
      apiBaseUrl="https://rest.ably.io"
      apiVersion="1.1.0"
      endpoints={14}
      sdkMethods={36}
      schemas={14}
      parameters={42}
      difficulty="hard"
      contactEmail="support@ably.io"
      openApiRaw="https://raw.githubusercontent.com/ably/open-specs/main/definitions/platform-v1.yaml"
    />
  );
}
