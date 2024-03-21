import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React, { PropsWithChildren, useState } from "react";
import sdkLinksJson from "@site/src/pages/sdk/sdk-links.json";
import categories from "@site/src/pages/sdk/categories.json";
import { CommandMenu } from "@site/src/components/CommandMenu";
import { Button } from "@site/src/components/ui/button";
import companies from "@site/src/pages/sdk/companies.json";
import { CategoryFilters, Filter } from "./CategoryFilters";
import { useMediaQuery } from "../util/use-media-query";

type Company = (typeof companies)[number];

/*
 * https://zapier.com/apps
 */

export function SdkDirectory({ filter }: { filter: Filter }) {
  const numberOfApis = companies.reduce(
    (acc, company) => acc + company.numberOfApis,
    0
  );

  const [numberOfCompaniesToShow, setNumberOfCompaniesToShow] = useState(22);

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
      title={filter === "all" ? "Explore All APIs" : `${filter} APIs`}
      description={`Discover ${sdkLinksJson.length} up-to-date SDKs for ${numberOfApis} public APIs.`}
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
        <div className="px-3 pt-7 pb-16 md:px-8 md:max-w-6xl mx-auto">
          {/* <div className="mb-4">
            <CommandMenu />
          </div> */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <CategoryFilters filter={filter} categories={categories} />
            <div className="flex-grow">
              <div className="mb-5">
                1 -{" "}
                {Math.min(numberOfCompaniesToShow, filteredCompanies.length)} of{" "}
                {filteredCompanies.length} Companies
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                {visibleCompanies.map((company) => (
                  <Company key={company.company} {...company} />
                ))}
              </div>
              {filteredCompanies.length > numberOfCompaniesToShow && (
                <LoadMoreButton
                  onClick={() =>
                    setNumberOfCompaniesToShow(numberOfCompaniesToShow + 22)
                  }
                />
              )}
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
  const mdBreakpoint = useMediaQuery("(min-width: 768px)");
  const maxLength = mdBreakpoint ? 120 : 200;
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
