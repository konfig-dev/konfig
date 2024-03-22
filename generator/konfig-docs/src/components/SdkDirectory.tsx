import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React, { useState } from "react";
import categories from "@site/src/pages/sdk/categories.json";
import { CommandMenu } from "@site/src/components/CommandMenu";
import { Button } from "@site/src/components/ui/button";
import companies from "@site/src/pages/sdk/companies.json";
import { CategoryFilters, Filter } from "./CategoryFilters";
import { useMediaQuery } from "../util/use-media-query";
import { Breadcrumbs } from "./Breadcrumbs";
import Link from "@docusaurus/Link";

type Company = (typeof companies)[number];

/*
 * https://zapier.com/apps
 */

export function SdkDirectory({ filter }: { filter: Filter }) {
  const [numberOfCompaniesToShow, setNumberOfCompaniesToShow] = useState(22);

  // filter companies by provided filter
  const filteredCompanies = companies.filter((company) => {
    if (filter === "all") return true;
    return (
      company.subCategories.includes(filter) ||
      company.parentCategories.includes(filter)
    );
  });

  const numberOfApis = filteredCompanies.reduce(
    (acc, company) => acc + company.numberOfApis,
    0
  );

  // show a limited number of companies
  const visibleCompanies = filteredCompanies.slice(0, numberOfCompaniesToShow);

  return (
    <Layout
      title={filter === "all" ? "Explore All APIs" : `${filter} APIs`}
      description={`Discover ${
        numberOfApis * 3
      } up-to-date SDKs for ${numberOfApis} ${
        filter !== "all" ? filter : "public"
      } API${numberOfApis > 1 ? "s" : ""}.`}
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
        <div className="px-3 pt-5 pb-16 md:px-8 md:max-w-6xl mx-auto">
          <Breadcrumbs className="px-0 sm:px-0 mb-8" dark company={filter} />
          <div className="mb-4">
            <CommandMenu />
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
            <CategoryFilters filter={filter} categories={categories} />
            <div className="flex-grow">
              {filter !== "all" && <h1>{filter} APIs</h1>}
              <div className="mb-5">
                1 -{" "}
                {Math.min(numberOfCompaniesToShow, filteredCompanies.length)} of{" "}
                {filteredCompanies.length}{" "}
                {filter === "all" ? "" : `${filter} `}API
                {numberOfApis > 1 ? "s" : ""}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
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
    <Link
      to={subpath}
      className="select-none flex-grow rounded-md hover:no-underline p-4 hover:shadow-xl hover:ring-1 ring-slate-200 transition-shadow"
    >
      <div className="flex flex-row items-start gap-4">
        <div className="h-8 w-8 shrink-0">
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
                className="z-10 text-xs border border-slate-200 rounded-md font-medium px-2 py-1 text-slate-500"
              >
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
