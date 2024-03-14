import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React, { useState } from "react";
import sdkLinksJson from "./sdk-links.json";
import { ArrowDown, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@site/src/components/ui/collapsible";

/*
 * https://zapier.com/apps
 */

export default function Sdks() {
  return (
    <Layout
      title={`Explore 50 public APIs`}
      description={`Discover and access over ${sdkLinksJson.length} up-to-date SDKs for 50 public APIs.`}
    >
      <head>
        <style>
          {`
          .navbar__search {
            display: none;
          }
          `}
        </style>
      </head>
      <Head>
        <meta property="og:image" content="/img/sdk-explore-link-preview.png" />
      </Head>
      <div className="px-3 py-8 md:px-8 md:max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <CategoryFilters />
          <div>
            <div>search</div>
            <div>1 - 22 of 7063 APIs</div>
            <div>
              <div>results</div>
              <button>load more</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function CategoryFilters() {
  return (
    <div>
      <h2>Categories</h2>
      <ul className="pl-0 mb-0 list-none">
        <Category />
      </ul>
    </div>
  );
}

function Category() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <CollapsibleTrigger className="group">
        <li>
          <div className="flex items-center justify-between gap-x-2">
            <ChevronDown
              className={`text-slate-400 group-aria-expanded:-rotate-180 duration-150 transition-transform`}
            />
            <div className="font-semibold">Artificial Intelligence</div>
          </div>
        </li>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="mb-0 pl-0 list-none">
          <li>
            <a className="pl-12 block " href="">
              API 1
            </a>
          </li>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
