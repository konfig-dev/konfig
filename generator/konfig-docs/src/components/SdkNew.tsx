/**
 * This is a redesign of the pSEO page based on the conversation with Sam Young and inspiration by Zapier's
 * pSEO pages. Specifically the ones where this list an integration between two different services like:
 * https://zapier.com/apps/airtable/integrations/google-sheets.
 *
 * For an explanation of the new pSEO page, see the ticket here:
 * https://www.notion.so/konfigthis/Restructure-pSEO-pages-based-on-Zapier-5ff64f53351a4ae2bf728e338b56e57d?pvs=4
 */
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Sdk, SdkMethod } from "./Sdk";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import {
  IconArrowsDownUp,
  IconChevronRight,
  IconExternalLink,
  IconPencil,
} from "@tabler/icons-react";
import { TsIcon } from "./TsIcon";
import { useSdkSignup } from "../util/use-sdk-signup";
import clsx from "clsx";
import { LoadingIcon } from "./LoadingIcon";
import { Method } from "./SdkComponentProps";
import camelcase from "camelcase";

type InputPropsFromOriginalSdkComponent = React.ComponentProps<typeof Sdk>;

export function SdkNew({
  serviceName,
  company,
  language,
  methods,
  logo,
  previewLinkImage,
  GettingStarted,
  FirstRequest,
  clientNameCamelCase,
  homepage,
  metaDescription,
  categories,
}: InputPropsFromOriginalSdkComponent) {
  const serviceNameSubstring =
    serviceName !== undefined ? ` ${serviceName}` : "";
  const description = `Explore the ${company}${serviceNameSubstring} TypeScript SDK. Dive into comprehensive documentation and utilize ${methods.length} methods to integrate ${company}'s${serviceNameSubstring} API into your application.`;
  if (FirstRequest === undefined) {
    throw new Error(
      "FirstRequest is required for the SdkNew component. It is used to render the 'MakeYourFirstRequest' section."
    );
  }
  if (categories === undefined) {
    throw new Error("categories is required for the SdkNew component");
  }
  return (
    <Layout
      title={`${company}${serviceNameSubstring} API - ${language} SDK, Documentation, and OpenAPI Specification`}
      description={description}
    >
      <Head>
        <meta property="og:image" content={previewLinkImage} />
        <meta property="og:description" content={description} />
        <style>
          {`p {
            margin-bottom: 0px;
          }`}
        </style>
      </Head>
      <div className="pt-8 bg-gradient-to-tl from-[var(--ifm-color-primary-darkest)] to-[var(--ifm-color-primary)]">
        <Breadcrumbs
          serviceName={serviceName}
          company={company}
          language={language}
        />
        <HeroSection
          logo={logo}
          company={company}
          language={language}
          serviceNameSubstring={serviceNameSubstring}
        />
      </div>
      <TrustedBy />
      <MakeYourFirstRequest
        clientNameCamelCase={clientNameCamelCase}
        GettingStarted={GettingStarted}
        company={company}
        serviceNameSubstring={serviceNameSubstring}
        language={language}
        methods={methods}
        FirstRequest={FirstRequest}
      />
      <HowKonfigWorks />
      <AboutCompany
        homepage={homepage}
        metaDescription={metaDescription}
        logo={logo}
        company={company}
        categories={categories}
      />
      <BottomCTA
        company={company}
        language={language}
        serviceNane={serviceName}
        serviceNameSubString={serviceNameSubstring}
      />
    </Layout>
  );
}

function BottomCTA({
  company,
  language,
  serviceNane,
  serviceNameSubString,
}: {
  company: string;
  language: string;
  serviceNane?: string;
  serviceNameSubString?: string;
}) {
  return (
    <div className="py-16 px-8 md:px-48 bg-gradient-to-tl from-[var(--ifm-color-primary-darkest)] to-[var(--ifm-color-primary)]">
      <h2 className="text-3xl text-white">
        Start integrating {company}'s{serviceNameSubString} API with Konfig
      </h2>
      <SignupForm
        company={company}
        language={language}
        serviceName={serviceNane}
        serviceNameSubString={serviceNameSubString}
        doNotShowQuestion
      />
    </div>
  );
}

function AboutCompany({
  company,
  logo,
  metaDescription,
  homepage,
  categories,
}: {
  company: string;
  logo: string;
  metaDescription: string;
  homepage: string;
  categories: string[];
}) {
  return (
    <div className="py-20 px-8 md:px-32">
      <div className="w-fit">
        <div className="shadow-inner w-fit rounded-md border p-4">
          <img className="max-w-[200px]" src={logo} alt={company} />
        </div>
        <div className="flex items-end gap-4">
          <h2 className="mt-4 mb-0 text-3xl text-slate-800">About {company}</h2>
          <a
            className="flex w-fit items-center group/link text-slate-400 hover:text-slate-700 hover:no-underline"
            target="_blank"
            href={`https://${homepage}`}
          >
            <div>{homepage}</div>
            <IconExternalLink height="11.5" />
          </a>
        </div>
        <p className="mt-2">{metaDescription}</p>
      </div>
      <div className="mt-4">
        <h3 className="mb-2">Categories</h3>
        <div className="flex gap-4">
          {categories.map((category) => {
            return (
              <button className="z-10 flex items-center gap-1 border font-medium rounded-md text-xs px-2 py-1 transition-all bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-800">
                <span>{category}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HowKonfigWorks() {
  return (
    <div className="py-20 px-3 bg-gradient-to-br from-[rgb(8,17,25)] to-[hsl(243_75%_20%)]">
      <h2 className="text-2xl sm:text-3xl text-white text-center font-bold">
        How Konfig Works
      </h2>
      <p className="px-8 mx-auto text-base sm:text-xl text-center max-w-[550px] text-[hsl(243_75%_95%)]">
        Konfig collects APIs and automatically generates SDKs so you can focus
        on building your application.
      </p>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-24 px-16 py-20 items-center">
        <div className="shadow-xl  lg:w-[500px] shrink-0 rounded-md overflow-hidden">
          <a
            target="_blank"
            href="https://github.com/konfig-sdks/openapi-examples"
          >
            <img src="/img/openapi-examples.png" alt="openapi-examples" />
          </a>
        </div>
        <div className="grow-0">
          <h3 className="text-[hsl(243_75%_97%)] text-2xl leading-tight sm:text-3xl">
            Konfig maintains the highest quality collection of OpenAPI
            Specifications on the internet in a{" "}
            <a
              target="_blank"
              className="text-white hover:text-white hover:no-underline border-b-2 hover:border-b-4 border-b-[hsl(243_75%_70%)]"
              href="https://github.com/konfig-sdks/openapi-examples"
            >
              GitHub repository
            </a>
          </h3>
          <p className="text-xl text-[hsl(243_75%_95%)]">
            We pull OpenAPI Specifications from public sources, fix any errors,
            and make sure they pass our{" "}
            <a
              className="text-white hover:text-white hover:no-underline border-b hover:border-b-2 border-b-[hsl(243_75%_70%)]"
              href="/docs/lint-rules/"
            >
              lint rules
            </a>
            . We continually make sure the repository is up-to-date and collect
            up-time and response time metrics for every API.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-24 px-16 py-20 items-center">
        <div className="shadow-xl  lg:w-[500px] shrink-0 rounded-md overflow-hidden">
          <img
            src="/img/openapi-examples-to-konfig.png"
            alt="openapi-examples-to-konfig"
          />
        </div>
        <div className="grow-0">
          <h3 className="text-[hsl(243_75%_97%)] text-2xl leading-tight sm:text-3xl">
            Generates SDKs from{" "}
            <span className="font-mono whitespace-nowrap">
              openapi-examples
            </span>
          </h3>
          <p className="text-xl text-[hsl(243_75%_95%)]">
            Our SDK generator is trusted by growing API companies and goes
            through a rigorous testing process to ensure the generated SDKs are
            high-quality and easy to use.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-24 px-16 py-20 items-center">
        <div className="shadow-xl  lg:w-[500px] shrink-0 rounded-md overflow-hidden">
          <img
            src="/img/konfig-to-package-managers.png"
            alt="konfig-to-package-managers"
          />
        </div>
        <div className="grow-0">
          <h3 className="text-[hsl(243_75%_97%)] text-2xl leading-tight sm:text-3xl">
            Publishes to standard package managers
          </h3>
          <p className="text-xl text-[hsl(243_75%_95%)]">
            We publish to standard package managers like npm, PyPI, and Maven so
            you can easily integrate the SDK into your application.
          </p>
        </div>
      </div>
    </div>
  );
}

function MakeYourFirstRequest({
  GettingStarted,
  FirstRequest,
  company,
  serviceNameSubstring,
  language,
  methods,
  clientNameCamelCase,
}: {
  GettingStarted: React.ComponentType;
  FirstRequest: React.ComponentType;
  company: string;
  serviceNameSubstring?: string;
  language: string;
  methods: Method[];
  clientNameCamelCase: string;
}) {
  const [showMore, setShowMore] = useState(false);
  const numberOfMethods = methods.length;
  methods = showMore ? methods : methods.slice(0, 6);
  return (
    <div className="bg-white py-10 px-3">
      <h2 className="text-2xl mb-0 sm:text-3xl text-slate-800 text-center font-bold">
        First, instantiate the SDK
      </h2>
      <p className="px-8 text-lg sm:text-xl text-center text-slate-600">
        It only takes a few lines of code.
      </p>
      <div className="sm:w-fit w-full mx-auto">
        <GettingStarted />
      </div>
      <h2 className="mt-16 mb-0 text-2xl sm:text-3xl text-slate-800 text-center font-bold">
        Then, send your first request
      </h2>
      <p className="px-8 text-lg sm:text-xl text-center text-slate-600">
        We made it really easy.
      </p>
      <div className="sm:w-fit w-full mx-auto">
        <FirstRequest />
      </div>
      <h2 className="mt-16 mb-4 text-2xl sm:text-3xl text-slate-800 text-center font-bold">
        Enjoy a buttery developer experience with {numberOfMethods} SDK methods
      </h2>
      <div className="container">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {methods.map((method) => {
            return (
              <div className="h-fit">
                <SdkMethod {...{ ...method, company, clientNameCamelCase }} />
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setShowMore(!showMore)}
          aria-hidden={showMore}
          className="aria-hidden:hidden mt-4 mx-auto group flex gap-3 hover:gap-2 items-center transition-all bg-gradient-to-br text-white w-fit text-center font-semibold px-3 py-2 from-blue-600 to-blue-800 rounded-md text-1xl"
        >
          Show More
        </button>
      </div>
    </div>
  );
}

function TrustedBy() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-lg text-slate-600 font-medium text-center mb-8">
          Growing API Companies trust Konfig's SDKs to onboard developers to
          their API.
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img
            className="h-[35px]"
            src="/img/snaptrade-g.png"
            alt="SnapTrade"
          />
          <img
            className="h-[40px]"
            src="/img/humanloop-g.png"
            alt="Humanloop"
          />
          <img className="h-[40px]" src="/img/splitit-g.png" alt="Splitit" />
          <img className="h-[31px]" src="/img/leap-g.png" alt="Leap" />
          <img className="h-[32px]" src="/img/groundx-g.png" alt="Groundx" />
        </div>
      </div>
    </div>
  );
}

function HeroSection({
  language,
  company,
  serviceNameSubstring,
  serviceName,
  logo,
}: {
  language: string;
  company: string;
  serviceName?: string;
  serviceNameSubstring?: string;
  logo: string;
}) {
  const [showGraphic, setShowGraphic] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowGraphic(true);
    }, 500);
  }, []);
  return (
    <div className="mx-auto max-w-[375px] px-3 sm:max-w-none sm:px-8 lg:px-20 py-12">
      <div className="mx-auto flex flex-col items-center sm:max-w-[625px] lg:max-w-none lg:flex-row gap-2 lg:gap-20">
        <div className="text-left sm:text-center lg:text-left lg:w-full">
          <h1 className="mb-8 text-3xl sm:text-4xl leading-tight lg:text-5xl lg:leading-tight text-blue-200">
            Easily Integrate{" "}
            <span className="text-white">
              {" "}
              {company}'s{serviceNameSubstring} API{" "}
            </span>{" "}
            into your application using{" "}
            <span className="text-white">Konfig's {language} SDK</span>
          </h1>
          <SignupForm
            language={language}
            company={company}
            serviceName={serviceName}
            serviceNameSubString={serviceNameSubstring}
          />
        </div>
        <div
          aria-hidden={!showGraphic}
          className="opacity-1 aria-hidden:opacity-0 flex items-center flex-col lg:min-w-[400px] xl:min-w-[540px] transition-all duration-1000"
        >
          <div className="my-5 bg-white p-4 shadow-xl rounded-sm w-fit">
            <img className="sm:h-16" src={logo} alt={`${company} logo`} />
          </div>
          <IconArrowsDownUp className="text-blue-200" />
          <div className="my-5 flex items-center bg-white shadow-xl rounded-sm">
            <div className="bg-blue-200 rounded-sm">
              <TsIcon className="h-36" />
            </div>
            <div className="px-4 text-sm md:text-base lg:text-xl">
              <div className="font-bold text-slate-600 leading-tight mb-4">
                Your {language} Application
              </div>
              <div className="font-medium text-slate-400">+ Less code</div>
              <div className="font-medium text-slate-400">
                + Always up-to-date
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignupForm({
  company,
  serviceName,
  language,
  serviceNameSubString,
  doNotShowQuestion,
}: {
  company: string;
  serviceName?: string;
  language: string;
  serviceNameSubString?: string;
  doNotShowQuestion?: boolean;
}) {
  const { setEmail, signedUp, signedUpEmail, loading, handleSubmit, email } =
    useSdkSignup({
      company,
      serviceName,
      language,
    });

  return (
    <form
      onSubmit={handleSubmit}
      id="signup"
      className="p-8 rounded-md bg-blue-100 ring-1 transition-all hover:scale-[1.01] hover:shadow-lg shadow-md mb-8"
    >
      <div className="flex flex-col">
        {((!signedUp && !doNotShowQuestion) || signedUp) && (
          <h2
            className={clsx("text-base md:text-lg text-blue-900 font-bold", {
              "mb-3": !signedUp,
            })}
          >
            {signedUp
              ? `Thanks for signing up for access to ${company}'s ${language} SDK 🎉!`
              : `Need a ${language} SDK for ${company}'s${serviceNameSubString} API?`}
          </h2>
        )}
        {signedUp ? (
          <>
            <p className="mb-4">{`Your email, ${signedUpEmail}, has been successfully registered for access to the ${language} SDK. We will notify you by email soon.`}</p>
            <p className="mb-0">
              For inquiries or support, please contact us at{" "}
              <a href="mailto:sdks@konfigthis.com">sdks@konfigthis.com</a>
            </p>
          </>
        ) : null}
        {signedUp ? null : (
          <input
            type="email"
            name="email"
            className="rounded-md px-2 py-1 w-full mb-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        {signedUp ? null : (
          <button
            type="submit"
            className="font-medium group flex gap-3 hover:gap-2 items-center transition-all bg-gradient-to-br text-white w-fit text-center px-3 py-2 from-blue-600 to-blue-800 rounded-md text-sm"
          >
            {loading ? (
              <LoadingIcon />
            ) : (
              <>
                <div>
                  Sign up for access to {company}'s {language} SDK
                </div>
                <IconPencil
                  size="1rem"
                  className="transition-all group-hover:text-blue-50 text-blue-300"
                />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}

/**
 * Responsive breadcrumbs for the pSEO page.
 */
function Breadcrumbs({
  company,
  language,
  serviceName,
}: {
  company: string;
  language: string;
  serviceName?: string;
}) {
  return (
    <div className="text-white mx-auto px-3 max-w-[375px] sm:max-w-none sm:px-8 text-lg font-semibold">
      {/* Desktop */}
      <nav className="hidden lg:block">
        <ol className="px-0 flex gap-1 list-none items-center">
          <li>
            <BreadcrumbLink href="/sdk">SDKs</BreadcrumbLink>
          </li>
          <BreadcrumbSeparator />
          <li>
            <BreadcrumbNonLink>{company}</BreadcrumbNonLink>
          </li>
          <BreadcrumbSeparator />
          {serviceName && (
            <>
              <li>
                <BreadcrumbNonLink>{serviceName}</BreadcrumbNonLink>
              </li>
              <BreadcrumbSeparator />
            </>
          )}
          <li>
            <BreadcrumbNonLink>{language}</BreadcrumbNonLink>
          </li>
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
    <a
      className="text-white border-b border-b-blue-200 hover:border-b-2 hover:no-underline hover:text-white"
      href={href}
    >
      {children}
    </a>
  );
}

function BreadcrumbNonLink({ children }: PropsWithChildren<{}>) {
  return <span className="text-blue-200">{children}</span>;
}

function BreadcrumbSeparator() {
  return <IconChevronRight className="h-5 text-blue-300" />;
}
