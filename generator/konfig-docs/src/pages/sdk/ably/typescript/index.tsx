import React, { PropsWithChildren } from "react";
import Layout from "@theme/Layout";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import clsx from "clsx";
import {
  IconCode,
  IconFileCode2,
  IconInfoCircle,
  TablerIconsProps,
} from "@tabler/icons-react";

export default function AblyTypeScriptSdk() {
  return (
    <Layout
      title="Ably API TypeScript SDK"
      description="A TypeScript SDK for Ably's API"
    >
      <div className="py-8 mx-4 lg:mx-auto lg:w-[960px] xl:w-[1152px]">
        <div className="mb-2">
          <h3 className="mb-1 flex gap-2">
            <span>ably-typescript-sdk</span>
            <TsIcon className="h-5 w-5" />
          </h3>
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
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <div className="grow pb-4 border-b md:border-none">
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
      <Tab Icon={IconInfoCircle} active={true}>
        About
      </Tab>
      <Tab Icon={IconFileCode2} active={false}>
        OpenAPI Specification
      </Tab>
      <Tab Icon={IconCode} active={false}>
        Code
      </Tab>
    </div>
  );
}

function Tab({
  children,
  active,
  Icon,
}: PropsWithChildren<{
  active: boolean;
  Icon: (props: TablerIconsProps) => JSX.Element;
}>) {
  return (
    <button
      className={clsx("p-4 font-semibold items-center flex gap-2 mb-[-1px]", {
        "border-b-2 border-[var(--ifm-menu-color-active)] bg-blue-50 rounded-t-lg text-[var(--ifm-menu-color-active)]":
          active,
        "text-gray-400 transition-all hover:text-[var(--ifm-menu-color-active)]":
          !active,
      })}
    >
      <Icon />
      <span>{children}</span>
    </button>
  );
}

function SignupForm() {
  return (
    <form className="p-8 rounded-md shadow-md bg-green-100 mb-8">
      <div className="grow flex flex-col">
        <div className="text-gray-700 text-lg font-bold">
          Using TypeScript to integrate Ably's API?
        </div>
        <p className="mb-2 text-sm text-gray-600">
          <a href="https://konfigthis.com" target="_blank">
            Konfig
          </a>{" "}
          maintains high-quality SDKs for APIs to make it easy for developers to
          integrate
        </p>
        <input
          className="border rounded-md px-2 py-1 w-full mb-1"
          placeholder="Email"
        />
        <button className="w-full font-medium text-center px-3 py-2 text-white bg-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-primary-darker)] rounded-md text-sm">
          Sign up for access to Ably's TypeScript SDK
        </button>
      </div>
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
          <SidebarSectionTitle>API Base URL</SidebarSectionTitle>
          <SidebarSectionContent>
            <a href="https://rest.ably.io" target="_blank">
              https://rest.ably.io
            </a>
          </SidebarSectionContent>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionTitle>Homepage</SidebarSectionTitle>
          <SidebarSectionContent>
            <a href="https://ably.com/" target="_blank">
              https://ably.com/
            </a>
          </SidebarSectionContent>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionTitle>Contact URL</SidebarSectionTitle>
          <SidebarSectionContent>
            <a href="https://www.ably.io/contact" target="_blank">
              https://www.ably.io/contact
            </a>
          </SidebarSectionContent>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionTitle>Contact Email</SidebarSectionTitle>
          <SidebarSectionContent>
            <a href="mailto:support@ably.io">support@ably.io</a>
          </SidebarSectionContent>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionTitle>
            <div className="flex items-end gap-1">
              <div>Difficulty</div>
              <a
                target="_blank"
                href="/sdk-difficulty"
                className="text-xs font-normal"
              >
                (What is this?)
              </a>
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
    <div className={clsx("py-3 mb-2", { "border-b": !noBorder })}>
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

function TsIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path fill="#1976d2" d="M6 6h36v36H6z" />
      <path
        fill="#fff"
        d="M27.49 22H14.227v3.264h4.757V40h3.769V25.264h4.737zM39.194 26.084s-1.787-1.192-3.807-1.192-2.747.96-2.747 1.986c0 2.648 7.381 2.383 7.381 7.712 0 8.209-11.254 4.568-11.254 4.568V35.22s2.152 1.622 4.733 1.622 2.483-1.688 2.483-1.92c0-2.449-7.315-2.449-7.315-7.878 0-7.381 10.658-4.469 10.658-4.469l-.132 3.509z"
      />
    </svg>
  );
}
