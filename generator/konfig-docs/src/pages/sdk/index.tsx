import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React, { useState } from "react";
import sdkLinksJson from "./sdk-links.json";
import { ChevronDown } from "lucide-react";

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
          <CategoryFilters
            categories={{
              "Artificial Intelligence": [
                "Computer Vision",
                "Natural Language Processing",
              ],
            }}
          />
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

type CategoryFiltersProps = {
  categories: Record<string, string[]>;
};

function CategoryFilters({ categories }: CategoryFiltersProps) {
  return (
    <div>
      <h3>API Categories</h3>
      <ul className="pl-0 mb-0 list-none">
        {Object.entries(categories).map(([parentCategory, categories]) => (
          <Category parentCategory={parentCategory} categories={categories} />
        ))}
      </ul>
    </div>
  );
}

type CategoryProps = {
  parentCategory: string;
  categories: string[];
};
function Category({ parentCategory, categories }: CategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px]">
      <CollapsibleTrigger className="group text-slate-500 hover:text-slate-800 rounded-md py-2 px-2 w-full hover:bg-slate-100 transition-all">
        <li>
          <div className="flex items-center gap-x-2">
            <ChevronDown
              className={`text-slate-400 group-aria-expanded:-rotate-180 duration-150 transition-transform`}
            />
            <div className="font-semibold">{parentCategory}</div>
          </div>
        </li>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-0">
        <ul className="mb-0 pl-0 list-none">
          {categories.map((category) => (
            <SubCategory category={category} />
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

type SubCategoryProps = {
  category: string;
};
function SubCategory({ category }: SubCategoryProps) {
  return (
    <li>
      <a
        className="pl-12 rounded-md text-slate-500 hover:text-slate-800 hover:no-underline block py-2 hover:bg-slate-100 transition-all"
        href=""
      >
        {category}
      </a>
    </li>
  );
}
