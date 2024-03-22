import Link from "@docusaurus/Link";
import { IconChevronRight } from "@tabler/icons-react";
import React, { PropsWithChildren } from "react";

/**
 * Responsive breadcrumbs for the pSEO page.
 */
export function Breadcrumbs({
  company,
  companyKebabCase,
  language,
  serviceName,
}: {
  company: string;
  companyKebabCase: string;
  language?: string;
  serviceName?: string;
}) {
  return (
    <div className="text-white mx-auto px-3 max-w-[375px] sm:max-w-none sm:px-8 text-lg font-semibold">
      {/* Desktop */}
      <nav className="hidden lg:block">
        <ol className="px-0 flex gap-1 list-none items-center">
          <li>
            <BreadcrumbLink href="/sdk/category/all">SDKs</BreadcrumbLink>
          </li>
          <BreadcrumbSeparator />
          <li>
            {language ? (
              <BreadcrumbLink href={`/sdk/${companyKebabCase}`}>
                {company}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbNonLink>{company}</BreadcrumbNonLink>
            )}
          </li>
          {(serviceName || language) && <BreadcrumbSeparator />}
          {serviceName && (
            <>
              <li>
                <BreadcrumbNonLink>{serviceName}</BreadcrumbNonLink>
              </li>
              <BreadcrumbSeparator />
            </>
          )}
          {language && (
            <li>
              <BreadcrumbNonLink>{language}</BreadcrumbNonLink>
            </li>
          )}
        </ol>
      </nav>
      {/* Mobile */}
      <nav className="sm:mx-auto w-fit flex gap-1 lg:hidden">
        <BreadcrumbNonLink>{company}</BreadcrumbNonLink>+
        <BreadcrumbNonLink>{language}</BreadcrumbNonLink>
      </nav>
    </div>
  );
}

function BreadcrumbLink({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      className="text-white border-b border-b-blue-200 hover:border-b-2 hover:no-underline hover:text-white"
      to={href}
    >
      {children}
    </Link>
  );
}

function BreadcrumbNonLink({ children }: PropsWithChildren<{}>) {
  return <span className="text-blue-200">{children}</span>;
}

function BreadcrumbSeparator() {
  return <IconChevronRight className="h-5 text-blue-300" />;
}
