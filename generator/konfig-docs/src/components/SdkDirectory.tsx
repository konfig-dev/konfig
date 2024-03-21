import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React, { PropsWithChildren, useState } from "react";
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
import companies from "@site/src/pages/sdk/companies.json";

type Company = (typeof companies)[number];

type Filter = "all" | string;

/*
 * https://zapier.com/apps
 */

export function SdkDirectory({ filter }: { filter: Filter }) {
  const numberOfApis = companies.reduce(
    (acc, company) => acc + company.numberOfApis,
    0
  );

  const [numberOfCompaniesToShow, setNumberOfCompaniesToShow] = useState(6);

  // filter companies by provided filter
  const filteredCompanies = companies.filter((company) => {
    if (filter === "all") return true;
    return (
      company.subCategories.includes(filter) ||
      company.parentCategories.includes(filter)
    );
  });

  // show a limited number of companies
  const visibleCompanies = filteredCompanies.slice(0, numberOfCompaniesToShow);

  return (
    <Layout
      title={`Explore ${numberOfApis} public APIs`}
      description={`Discover over ${sdkLinksJson.length} up-to-date SDKs for ${numberOfApis} public APIs.`}
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
        <div className="px-3 pt-3 pb-16 md:px-8 md:max-w-6xl mx-auto">
          <div className="mb-4">
            <CommandMenu />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <CategoryFilters filter={filter} categories={categories} />
            <div className="flex-grow">
              <div className="mb-5">
                1 - {numberOfCompaniesToShow} of {companies.length} Companies
              </div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {visibleCompanies.map((company) => (
                  <Company key={company.company} {...company} />
                ))}
              </div>
              <LoadMoreButton
                onClick={() =>
                  setNumberOfCompaniesToShow(numberOfCompaniesToShow + 6)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function LoadMoreButton({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="secondary" className="w-full" onClick={onClick}>
      Load More
    </Button>
  );
}

function Company({
  metaDescription,
  company,
  favicon,
  subCategories,
  subpath,
}: Company) {
  const maxLength = 120;
  const shortenedDescription =
    metaDescription.length > maxLength
      ? `${metaDescription.substring(0, maxLength)}...`
      : metaDescription;
  return (
    <a
      href={subpath}
      className="select-none flex-grow rounded-md hover:no-underline p-4 hover:shadow-xl hover:ring-1 ring-slate-200 transition-shadow"
    >
      <div className="flex flex-row items-start gap-4">
        <div className="h-16 w-16">
          <img className="h-auto w-full" src={favicon} />
        </div>
        <div>
          <h3 className="mb-2">{company}</h3>
          <p className="m-0 mb-2 text-sm text-slate-600">
            {shortenedDescription}
          </p>
          <div className="flex flex-row flex-wrap gap-2">
            {subCategories.map((category) => (
              <button
                key={category}
                className="z-10 flex text-xs items-center gap-1 border font-medium rounded-md px-2 py-1 transition-all bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-800"
              >
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

type CategoryFiltersProps = {
  categories: {
    parentCategory: string;
    subCategories: { category: string; subpath: string }[];
    subpath: string;
  }[];
  filter: Filter;
};

function CategoryFilters({ categories, filter }: CategoryFiltersProps) {
  return (
    <div>
      <h3>API Categories</h3>
      <ul className="pl-0 mb-0 list-none">
        <li>
          <CategoryLink
            selected={filter === "all"}
            indented={false}
            category="All Categories"
            subpath="/sdk/category/all"
          />
        </li>
        {categories.map(({ parentCategory, subCategories, subpath }, i) => (
          <Category
            filter={filter}
            key={i}
            parentCategory={parentCategory}
            subCategories={subCategories}
            subpath={subpath}
          />
        ))}
      </ul>
    </div>
  );
}

type CategoryProps = {
  parentCategory: string;
  subCategories: { category: string; subpath: string }[];
  filter: Filter;
  subpath: string;
};
function Category({
  parentCategory,
  subCategories,
  filter,
  subpath,
}: CategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[300px]">
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
            filter={filter}
            label={`All ${parentCategory}`}
            category={parentCategory}
            subpath={subpath}
          />
          {subCategories.map(({ category, subpath }) => (
            <SubCategory
              subpath={subpath}
              filter={filter}
              key={category}
              category={category}
            />
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

type SubCategoryProps = {
  category: string;
  label?: string;
  filter: string;
  subpath: string;
};
function SubCategory({ category, label, filter, subpath }: SubCategoryProps) {
  return (
    <li>
      <CategoryLink
        subpath={subpath}
        selected={filter === category}
        category={category}
        label={label}
      />
    </li>
  );
}

function CategoryLink({
  category,
  label,
  indented,
  selected = false,
  subpath,
}: {
  category: string;
  label?: string;
  selected?: boolean;
  indented?: boolean;
  subpath: string;
}) {
  return (
    <a
      aria-selected={selected}
      data-indent={indented}
      className={
        "pl-12 rounded-md data-[indent=false]:pl-2 aria text-slate-500 hover:text-slate-800 hover:no-underline block py-2 hover:bg-slate-100 transition-all aria-selected:hover:bg-blue-100 aria-selected:bg-blue-100 aria-selected:text-blue-800"
      }
      href={subpath}
    >
      {label ?? category}
    </a>
  );
}
