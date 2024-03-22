import Link from "@docusaurus/Link";
import { IconChevronRight } from "@tabler/icons-react";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { cn } from "../util/util";

/**
 * Responsive breadcrumbs for the pSEO page.
 */
export function Breadcrumbs({
  company,
  companyKebabCase,
  language,
  serviceName,
  dark,
  className,
}: {
  company: string;
  companyKebabCase?: string;
  language?: string;
  serviceName?: string;
  dark?: boolean;
  className?: string;
}) {
  if (company === "all") {
    return null;
  }
  return (
    <DarkModeContext.Provider value={{ dark }}>
      <div
        data-dark={dark}
        className={cn(
          "data-[dark=true]:text-black text-white mx-0 sm:mx-auto px-3 max-w-[375px] sm:max-w-none sm:px-24 text-lg font-semibold",
          className
        )}
      >
        <nav>
          <ol className="px-0 mb-0 flex gap-1 list-none items-center">
            <li>
              <BreadcrumbLink href="/sdk/category/all">SDKs</BreadcrumbLink>
            </li>
            <BreadcrumbSeparator />
            <li>
              {language && companyKebabCase ? (
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
      </div>
    </DarkModeContext.Provider>
  );
}

function BreadcrumbLink({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  const { dark } = useContext(DarkModeContext);
  return (
    <Link
      data-dark={dark}
      className="data-[dark=true]:text-black text-white border-b data-[dark=true]:border-blue-800 border-b-blue-200 hover:border-b-2 hover:no-underline hover:text-white"
      to={href}
    >
      {children}
    </Link>
  );
}

function BreadcrumbNonLink({ children }: PropsWithChildren<{}>) {
  const { dark } = useContext(DarkModeContext);
  return (
    <span
      data-dark={dark}
      className="data-[dark=true]:text-slate-500 text-blue-200"
    >
      {children}
    </span>
  );
}

function BreadcrumbSeparator() {
  const { dark } = useContext(DarkModeContext);
  return (
    <IconChevronRight
      data-dark={dark}
      className="h-5 data-[dark=true]:text-slate-800 text-blue-200"
    />
  );
}

const DarkModeContext = createContext<{
  dark: boolean;
}>({
  dark: false,
});
