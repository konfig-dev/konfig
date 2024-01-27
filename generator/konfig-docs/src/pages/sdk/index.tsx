import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React, { PropsWithChildren } from "react";
import { isMacOs, isMobile } from "react-device-detect";
import sdkLinksJson from "./sdk-links.json";
import clsx from "clsx";
import { IconChevronRight } from "@tabler/icons-react";

export default function Sdks() {
  const sdkLinks = sdkLinksJson as Record<
    string,
    { link: string; homepage: string }
  >;
  return (
    <Layout
      title={`SDKs`}
      description={`An up-to-date and relevant index of SDKs for up-to-date and relevant APIs.`}
    >
      {/* <Head>
        <meta property="og:image" content={previewLinkImage} />
        <meta property="og:description" content={metaDescription} />
      </Head> */}
      <div className="bg-slate-100 border-b">
        <div className="py-44 pb-56 bg-gradient-to-br from-blue-950 to-blue-700">
          <div className="mx-auto text-center">
            <h1 className="text-blue-300 text-3xl">
              Explore{" "}
              <span className="text-white">{Object.keys(sdkLinks).length}</span>{" "}
              SDKs from <br />
              <span className="whitespace-nowrap">
                <span className="italic">up-to-date</span> and{" "}
                <span className="italic">relevant</span> APIs
              </span>
            </h1>
            <div className="text-blue-300">
              <Hotkey />
              for{" "}
              <span className="text-sm rounded-full bg-gradient-to-r from-blue-400/30 via-blue-400 to-sky-blue/30 px-[1px] py-[5px] font-medium text-blue-300">
                <span className="rounded-full px-2 py-1 bg-slate-800">{`"{company}-{api}-{language}"`}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-b from-slate-50 to-white mx-auto w-fit relative px-5 py-10 top-[-75px] rounded-sm bg-white shadow-xl">
          {Object.entries(sdkLinks).map(([label, { link, homepage }], idx) => (
            <a className="hover:no-underline" href={link}>
              <div
                className={clsx(
                  "group hover:bg-slate-200 px-4 py-6 flex items-center gap-6 justify-between",
                  {
                    "border-b": idx !== Object.keys(sdkLinks).length - 1,
                  }
                )}
                key={label}
              >
                <div className="">
                  <div className="font-mono text-sm sm:text-base">{label}</div>
                  <a
                    className="text-xs sm:text-sm"
                    target="_blank"
                    href={homepage}
                  >
                    {homepage}
                  </a>
                </div>
                <IconChevronRight className="shrink-0 text-slate-400 group-hover:text-slate-500 relative group-hover:translate-x-1 group-hover:scale-110 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}

function Hotkey() {
  if (isMobile) <Key>{"Find in page..."}</Key>;
  if (isMacOs)
    return (
      <>
        <Key>Cmd</Key>
        <Key className="ml-[3px] mr-2">F</Key>
      </>
    );
  return (
    <>
      <Key>Ctrl</Key>
      <Key className="ml-[3px] mr-2">F</Key>
    </>
  );
}

function Key({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <kbd
      className={clsx(
        "px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500",
        className
      )}
    >
      {children}
    </kbd>
  );
}
