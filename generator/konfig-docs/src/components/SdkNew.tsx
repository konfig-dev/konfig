/**
 * This is a redesign of the pSEO page based on the conversation with Sam Young and inspiration by Zapier's
 * pSEO pages. Specifically the ones where this list an integration between two different services like:
 * https://zapier.com/apps/airtable/integrations/google-sheets.
 *
 * For an explanation of the new pSEO page, see the ticket here:
 * https://www.notion.so/konfigthis/Restructure-pSEO-pages-based-on-Zapier-5ff64f53351a4ae2bf728e338b56e57d?pvs=4
 */
import React, { useEffect, useState } from "react";
import { Sdk, SdkMethod } from "./Sdk";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import {
  IconArrowsDownUp,
  IconExternalLink,
  IconPencil,
} from "@tabler/icons-react";
import { TsIcon } from "./TsIcon";
import { useSdkSignup } from "../util/use-sdk-signup";
import clsx from "clsx";
import { LoadingIcon } from "./LoadingIcon";
import { Method } from "./SdkComponentProps";
import { Breadcrumbs } from "./Breadcrumbs";
import { LogoBox } from "./LogoBox";
import useContentLoaded from "../util/use-content-loaded";
import { HowKonfigWorks } from "./HowKonfigWorks";

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
  openApiGitHubUi,
  developerDocumentation,
  companyKebabCase,
}: InputPropsFromOriginalSdkComponent) {
  const serviceNameSubstring =
    serviceName !== undefined ? ` ${serviceName}` : "";
  const description = `Explore the ${company}${serviceNameSubstring} TypeScript SDK. Discover SDK ${methods.length} methods to integrate ${company}'s${serviceNameSubstring} API into your application.`;
  if (FirstRequest === undefined) {
    throw new Error(
      "FirstRequest is required for the SdkNew component. It is used to render the 'MakeYourFirstRequest' section."
    );
  }
  if (categories === undefined) {
    throw new Error("categories is required for the SdkNew component");
  }
  const title = `Integrate ${company}'s${serviceNameSubstring} API using Konfig's ${language} SDK`;
  /*
Easily Integrate
            <br />
            <span className="text-white">
              {" "}
              {company}'s{serviceNameSubstring} API{" "}
            </span>{" "}
            using <span className="text-white">Konfig's {language} SDK</span>
  */
  return (
    <Layout title={title} description={description}>
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
          companyKebabCase={companyKebabCase}
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
        openApiGitHubUi={openApiGitHubUi}
        developerDocumentation={developerDocumentation}
      />
      <BottomCTA
        company={company}
        language={language}
        serviceName={serviceName}
        serviceNameSubString={serviceNameSubstring}
      />
    </Layout>
  );
}

function BottomCTA({
  company,
  language,
  serviceName,
  serviceNameSubString,
}: {
  company: string;
  language: string;
  serviceName?: string;
  serviceNameSubString?: string;
}) {
  return (
    <div className="py-32 px-8 md:px-48 bg-gradient-to-tl from-[var(--ifm-color-primary-darkest)] to-[var(--ifm-color-primary)]">
      <h2 className="text-3xl sm:text-4xl text-white">
        Start integrating {company}'s{serviceNameSubString} API with Konfig
      </h2>
      <SignupForm
        bottomCTA
        company={company}
        language={language}
        serviceName={serviceName}
        serviceNameSubString={serviceNameSubString}
        doNotShowQuestion
      />
    </div>
  );
}

export function AboutCompany({
  company,
  logo,
  metaDescription,
  homepage,
  categories,
  openApiGitHubUi,
  developerDocumentation,
}: {
  company: string;
  logo: string;
  metaDescription: string;
  homepage: string;
  categories: string[];
  openApiGitHubUi?: string;
  developerDocumentation?: string;
}) {
  return (
    <div className="py-20 px-8 md:px-32 bg-white">
      <div className="w-fit">
        <div className="relative shadow-inner w-fit rounded-md border p-4">
          <img
            className="max-h-[80px] max-w-[200px]"
            src={logo}
            alt={company}
          />
        </div>
        <h2 className="mt-4 mb-0 text-3xl text-slate-800">About {company}</h2>
        <p className="mt-2 max-w-[800px]">{metaDescription}</p>
      </div>
      <div className="mt-4 flex gap-2 flex-wrap">
        <ExternalLinkButton label={homepage} url={homepage} />
        {openApiGitHubUi && (
          <ExternalLinkButton label={"OpenAPI"} url={openApiGitHubUi} />
        )}
        {developerDocumentation && (
          <ExternalLinkButton
            label="API Documentation"
            url={developerDocumentation}
          />
        )}
      </div>
      <div className="mt-6">
        <h3 className="mb-3">Keywords</h3>
        <div className="flex gap-x-4 gap-y-2 flex-wrap">
          {categories.map((category) => {
            return (
              <div
                key={category}
                className="z-10 flex text-sm items-center gap-1 border font-medium rounded-md px-2 py-1 transition-all bg-slate-50 border-slate-300 text-slate-600"
              >
                <span>{category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ExternalLinkButton({ url, label }: { url: string; label: string }) {
  const withHttps = url.startsWith("https://") ? url : `https://${url}`;
  const withoutHttps = label.startsWith("https://") ? label.slice(8) : label;
  return (
    <a
      href={withHttps}
      className="hover:no-underline text-sm lg:text-base"
      target="_blank"
    >
      <button className="border hover:shadow-xl hover:bg-blue-50 border-blue-700 text-blue-700 transition-all hover:border-blue-900 hover:text-blue-900 rounded-md px-2 py-1 items-center flex gap-2">
        <span className="font-semibold whitespace-nowrap">{withoutHttps}</span>
        <IconExternalLink className="h-5" />
      </button>
    </a>
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
  const [amountToShow, setAmountToShow] = useState(6);
  const numberOfMethods = methods.length;
  methods = methods.slice(0, amountToShow);
  return (
    <div className="bg-white pt-10 pb-20 px-3">
      <h2 className="text-2xl mb-0 sm:text-3xl text-slate-800 text-center font-bold">
        First, instantiate the SDK
      </h2>
      <p className="px-8 text-lg sm:text-xl text-center text-slate-600">
        It only takes a few lines of code.
      </p>
      <div className="px-8 sm:max-w-[640px] mx-auto">
        <GettingStarted />
      </div>
      <h2 className="mt-16 mb-0 text-2xl sm:text-3xl text-slate-800 text-center font-bold">
        Then, send your first request
      </h2>
      <p className="px-8 text-lg sm:text-xl text-center text-slate-600">
        We made it really easy.
      </p>
      <div className="sm:max-w-[640px] px-8 mx-auto">
        <FirstRequest />
      </div>
      <h2 className="mt-16 mb-4 text-2xl sm:text-3xl text-slate-800 text-center font-bold">
        Enjoy a buttery smooth developer experience with {numberOfMethods} SDK
        methods
      </h2>
      <div className="container">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {methods.map((method, i) => {
            return (
              <div key={i} className="h-fit">
                <SdkMethod {...{ ...method, company, clientNameCamelCase }} />
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            setAmountToShow((amount) => amount + 6);
          }}
          aria-hidden={amountToShow >= numberOfMethods}
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
  useContentLoaded(() => {
    setShowGraphic(true);
  });
  return (
    <div className="mx-auto max-w-[375px] px-3 sm:max-w-none sm:px-8 lg:px-20 py-12">
      <div className="mx-auto flex flex-col items-center sm:max-w-[625px] lg:max-w-none lg:flex-row gap-2 lg:gap-20">
        <div className="text-left sm:text-center lg:text-left lg:w-full">
          <h1 className="mb-8 text-3xl sm:text-4xl leading-tight lg:text-5xl lg:leading-tight text-blue-200">
            Easily Integrate
            <br />
            <span className="text-white">
              {" "}
              {company}'s{serviceNameSubstring} API{" "}
            </span>{" "}
            using <span className="text-white">Konfig's {language} SDK</span>
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
          <LogoBox logo={logo} company={company} />
          <IconArrowsDownUp className="text-blue-200" />
          <div className="my-5 flex items-center bg-white shadow-xl rounded-md">
            <div className="bg-blue-200 rounded-tl-md rounded-bl-md">
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
  bottomCTA,
}: {
  company: string;
  serviceName?: string;
  language: string;
  serviceNameSubString?: string;
  doNotShowQuestion?: boolean;
  bottomCTA?: boolean;
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
      data-windowed={!bottomCTA}
      className="data-[windowed=true]:py-4 data-[windowed=true]:px-8 rounded-md data-[windowed=true]:bg-blue-100 data-[windowed=true]:ring-1 data-[windowed=true]:transition-all data-[windowed=true]:hover:scale-[1.01] data-[windowed=true]:hover:shadow-lg data-[windowed=true]:shadow-md data-[windowed=true]:my-8"
    >
      <div className="flex flex-col">
        {((!signedUp && !doNotShowQuestion) || signedUp) && (
          <h2
            data-bottom={bottomCTA}
            className={clsx(
              "text-base md:text-lg text-blue-900 data-[bottom=true]:text-white font-bold",
              {
                "mb-3": !signedUp,
              }
            )}
          >
            {signedUp
              ? `Thanks for signing up for access to ${company}'s ${language} SDK 🎉!`
              : `Need a ${language} SDK for ${company}'s${serviceNameSubString} API?`}
          </h2>
        )}
        {signedUp ? (
          <>
            <p
              data-bottom={bottomCTA}
              className="mb-4 data-[bottom=true]:text-white"
            >{`Your email, ${signedUpEmail}, has been successfully registered for access to the ${language} SDK. We will notify you by email soon.`}</p>
            <p
              data-bottom={bottomCTA}
              className="mb-0 data-[bottom=true]:text-white"
            >
              For inquiries or support, please contact us at{" "}
              <a
                data-bottom={bottomCTA}
                href="mailto:sdks@konfigthis.com"
                className="data-[bottom=true]:text-blue-100 font-bold"
              >
                sdks@konfigthis.com
              </a>
            </p>
          </>
        ) : null}
        {signedUp ? null : (
          <input
            type="email"
            name="email"
            className="rounded-md border px-2 py-1 w-full mb-2"
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
