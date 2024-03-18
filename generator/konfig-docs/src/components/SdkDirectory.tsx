import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React, { useState } from "react";
import sdkLinksJson from "@site/src/pages/sdk/sdk-links.json";
import categories from "@site/src/pages/sdk/categories.json";
import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@site/src/components/ui/collapsible";
import { CommandMenu } from "@site/src/components/CommandMenu";
import { Button } from "@site/src/components/ui/button";

/*
 * https://zapier.com/apps
 */

export default function Sdks() {
  return (
    <Layout
      title={`Explore 50 public APIs`}
      description={`Discover and access over ${sdkLinksJson.length} up-to-date SDKs for 50 public APIs.`}
    >
      <Head>
        <style>
          {`
          .navbar__search {
            display: none;
          }
          `}
        </style>
      </Head>
      <Head>
        <meta property="og:image" content="/img/sdk-explore-link-preview.png" />
      </Head>
      <div className="border-b">
        <div className="px-3 py-3 md:px-8 md:max-w-6xl mx-auto">
          <div className="mb-4">
            <CommandMenu />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <CategoryFilters categories={categories} />
            <div className="flex-grow">
              <div className="mb-5">1 - 22 of 7063 APIs</div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <Api />
                <Api />
                <Api />
                <Api />
                <Api />
                <Api />
              </div>
              <LoadMoreButton />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function LoadMoreButton() {
  return (
    <Button variant="secondary" className="w-full">
      Load More
    </Button>
  );
}

function Api() {
  const metaDescription =
    "Asana helps teams orchestrate their work, from small projects to strategic initiatives. Headquartered in San Francisco, CA, Asana has more than 131,000 paying customers and millions of free organizations across 190 countries. Global customers such as Amazon, Japan Airlines, Sky, and Affirm rely on Asana to manage everything from company objectives to digital transformation to product launches and marketing campaigns. For more information, visit www.asana.com.";
  const maxLength = 105;
  const limitedMetaDescription =
    metaDescription.length > maxLength
      ? `${metaDescription.substring(0, maxLength)}...`
      : metaDescription;
  return (
    <a
      href="#"
      className="flex-grow rounded-md hover:no-underline p-4 hover:shadow-xl hover:ring-1 ring-slate-200 transition-shadow"
    >
      <div className="flex flex-row items-start gap-4">
        <div className="h-16 w-16">
          <img
            className="h-auto w-full"
            src="https://github.com/konfig-sdks/openapi-examples/blob/main/asana/favicon.png?raw=true"
          />
        </div>
        <div>
          <h3 className="mb-2">API Name</h3>
          <p className="m-0 text-sm text-slate-600">{limitedMetaDescription}</p>
        </div>
      </div>
    </a>
  );
}

type CategoryFiltersProps = {
  categories: { parentCategory: string; subCategories: string[] }[];
};

function CategoryFilters({ categories }: CategoryFiltersProps) {
  return (
    <div>
      <h3>API Categories</h3>
      <ul className="pl-0 mb-0 list-none">
        <li>
          <CategoryLink selected indented={false} category="All Categories" />
        </li>
        {categories.map(({ parentCategory, subCategories }, i) => (
          <Category
            key={i}
            parentCategory={parentCategory}
            subCategories={subCategories}
          />
        ))}
      </ul>
    </div>
  );
}

type CategoryProps = {
  parentCategory: string;
  subCategories: string[];
};
function Category({ parentCategory, subCategories }: CategoryProps) {
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
          <SubCategory
            label={`All ${parentCategory}`}
            category={parentCategory}
          />
          {subCategories.map((category) => (
            <SubCategory key={category} category={category} />
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

type SubCategoryProps = {
  category: string;
  label?: string;
};
function SubCategory({ category, label }: SubCategoryProps) {
  return (
    <li>
      <CategoryLink category={category} label={label} />
    </li>
  );
}

function CategoryLink({
  category,
  label,
  indented,
  selected = false,
}: {
  category: string;
  label?: string;
  selected?: boolean;
  indented?: boolean;
}) {
  return (
    <a
      aria-selected={selected}
      data-indent={indented}
      className={
        "pl-12 rounded-md data-[indent=false]:pl-2 aria text-slate-500 hover:text-slate-800 hover:no-underline block py-2 hover:bg-slate-100 transition-all aria-selected:hover:bg-blue-100 aria-selected:bg-blue-100 aria-selected:text-blue-800"
      }
      href=""
    >
      {label ?? category}
    </a>
  );
}
