import React, { PropsWithChildren } from "react";
import Layout from "@theme/Layout";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import clsx from "clsx";

export default function AblyTypeScriptSdk() {
  return (
    <Layout
      title="Ably API TypeScript SDK"
      description="A TypeScript SDK for Ably's API"
    >
      <div className="py-8 mx-4 lg:mx-auto lg:w-[960px] xl:w-[1152px]">
        <div className="mb-2">
          <h3 className="mb-1">ably-typescript-sdk</h3>
          <div className="flex items-center gap-3">
            <div className="font-mono text-gray-500">1.0.0</div>
            <Dot />
            <div className="font-mono text-blue-600">Auto-Generated</div>
            <Dot />
            <div className="font-mono text-gray-500">
              Last Updated 1 week ago
            </div>
          </div>
        </div>
        <Tabs />
        <div className="flex gap-10 justify-between">
          <div className="grow">
            <SignupForm />
            <h4 className="text-gray-600">Description</h4>
            <Description />
            <h4 className="text-gray-600">Initialization</h4>
            <GettingStarted />
            <h4 className="text-gray-600">Operations</h4>
            <div>
              <div className="flex mb-2 text-sm gap-1 items-center font-mono">
                <div className="font-bold">getMetadataOfAllChannels</div>
                <Dot />
                <div className="font-semibold text-gray-500">/channels</div>
                <Dot />
                <div className="font-semibold text-gray-500">GET</div>
              </div>
              <div className="flex mb-2 text-sm gap-1 text-gray-500 items-center">
                <Chip>Tag: Status</Chip>
                <Dot />
                <Chip>4 Parameters</Chip>
              </div>
              <p>Enumerate all active channels of the application</p>
            </div>
            <div>
              <div className="flex mb-2 text-sm gap-1 items-center font-mono">
                <div className="font-bold">publishMessagesToChannel</div>
                <Dot />
                <div className="font-semibold text-gray-500">
                  {"/channels/{channel_id}/messages"}
                </div>
                <Dot />
                <div className="font-semibold text-gray-500">POST</div>
              </div>
              <div className="flex mb-2 text-sm gap-1 text-gray-500 items-center">
                <Chip>Tag: Publishing</Chip>
                <Dot />
                <Chip>1 Parameter</Chip>
                <Dot />
                <Chip>Request Body</Chip>
              </div>
              <p>Enumerate all active channels of the application</p>
            </div>
            <div>
              <div className="flex mb-2 text-sm gap-1 items-center font-mono">
                <div className="font-bold">deletePushDeviceDetails</div>
                <Dot />
                <div className="font-semibold text-gray-500">
                  {"/push/channelSubscriptions"}
                </div>
                <Dot />
                <div className="font-semibold text-gray-500">DELETE</div>
              </div>
              <div className="flex mb-2 text-sm gap-1 text-gray-500 items-center">
                <Chip>Tag: Push</Chip>
                <Dot />
                <Chip>3 Parameter</Chip>
              </div>
              <p>Delete a device details object.</p>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
}

function Chip({ children }: PropsWithChildren<{}>) {
  return (
    <div className="px-2 py-1 bg-gray-100 rounded-md text-xs">{children}</div>
  );
}

function Tabs() {
  return (
    <div className="border-b flex mb-4">
      <Tab active={true}>About</Tab>
      <Tab active={false}>OpenAPI Specification</Tab>
    </div>
  );
}

function Tab({ children, active }: PropsWithChildren<{ active: boolean }>) {
  return (
    <button
      className={clsx("p-4 font-semibold mb-[-1px]", {
        "border-b-2 border-[var(--ifm-menu-color-active)] bg-blue-50 rounded-t-lg text-[var(--ifm-menu-color-active)]":
          active,
        "text-gray-400 transition-all hover:text-[var(--ifm-menu-color-active)]":
          !active,
      })}
    >
      {children}
    </button>
  );
}

function SignupForm() {
  return (
    <form className="mb-6 flex flex-col gap-1">
      <div className="text-gray-800 text-lg font-semibold">
        Using TypeScript to integrate Ably's API?
      </div>
      <input
        className="border rounded-md px-2 py-1 w-full"
        placeholder="Email"
      />
      <button className="w-full font-medium text-center px-3 py-2 text-white bg-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-primary-darker)] rounded-md text-sm">
        Sign up for access to Ably's TypeScript SDK
      </button>
    </form>
  );
}

function Sidebar() {
  return (
    <div>
      <div>
        <SidebarSection>
          <SidebarSectionTitle>API Title</SidebarSectionTitle>
          <SidebarSectionContent>Platform API</SidebarSectionContent>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionTitle>Base URL</SidebarSectionTitle>
          <SidebarSectionContent>
            <a>https://rest.ably.io</a>
          </SidebarSectionContent>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionTitle>Homepage</SidebarSectionTitle>
          <SidebarSectionContent>
            <a>https://ably.com/</a>
          </SidebarSectionContent>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionTitle>Contact URL</SidebarSectionTitle>
          <SidebarSectionContent>
            <a>https://www.ably.io/contact</a>
          </SidebarSectionContent>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionTitle>Contact Email</SidebarSectionTitle>
          <SidebarSectionContent>
            <a>support@ably.io</a>
          </SidebarSectionContent>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionTitle>
            <div className="flex items-end gap-1">
              <div>Difficulty</div>
              <div className="text-xs font-normal text-gray-500">
                (What is this?)
              </div>
            </div>
          </SidebarSectionTitle>
          <SidebarSectionContent>
            <div className="text-red-500">Hard</div>
          </SidebarSectionContent>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionTitle>API Version</SidebarSectionTitle>
          <SidebarSectionContent>1.1.14</SidebarSectionContent>
        </SidebarSection>
        <SidebarSection>
          <div className="flex justify-between">
            <div className="w-1/2">
              <SidebarSectionTitle>Endpoints</SidebarSectionTitle>
              <SidebarSectionContent>14</SidebarSectionContent>
            </div>
            <div className="w-1/2">
              <SidebarSectionTitle>Operations</SidebarSectionTitle>
              <SidebarSectionContent>36</SidebarSectionContent>
            </div>
          </div>
        </SidebarSection>
        <SidebarSection noBorder>
          <div className="flex justify-between">
            <div className="w-1/2">
              <SidebarSectionTitle>Schemas</SidebarSectionTitle>
              <SidebarSectionContent>14</SidebarSectionContent>
            </div>
            <div className="w-1/2">
              <SidebarSectionTitle>Parameters</SidebarSectionTitle>
              <SidebarSectionContent>42</SidebarSectionContent>
            </div>
          </div>
        </SidebarSection>
      </div>
    </div>
  );
}

function SidebarSection({
  children,
  noBorder,
}: PropsWithChildren<{ noBorder?: boolean }>) {
  return (
    <div className={clsx("pb-2 mb-2", { "border-b": !noBorder })}>
      {children}
    </div>
  );
}

function SidebarSectionTitle({
  children,
  large,
}: PropsWithChildren<{ large?: boolean }>) {
  return (
    <h5 className={clsx("mb-1 text-gray-500", { "text-lg text-black": large })}>
      {children}
    </h5>
  );
}

function SidebarSectionContent({ children }: PropsWithChildren<{}>) {
  return <div className="text font-semibold">{children}</div>;
}

function Dot() {
  return <div className="h-[3px] w-[3px] bg-gray-300 rounded-full" />;
}
