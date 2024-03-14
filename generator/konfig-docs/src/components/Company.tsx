import Head from '@docusaurus/Head'
import Layout from '@theme/Layout'
import React, { useState } from 'react'
import { Breadcrumbs } from './Breadcrumbs'
import { LogoBox } from './LogoBox'
import { useSdkSignup } from '../util/use-sdk-signup'
import clsx from 'clsx'
import { LoadingIcon } from './LoadingIcon'
import {
  IconChevronDown,
  IconChevronRight,
  IconExternalLink,
  IconPencil,
} from '@tabler/icons-react'
import useContentLoaded from '../util/use-content-loaded'
import { TsIcon } from './TsIcon'
import { AboutCompany } from './SdkNew'
import PythonIcon from './PythonIcon'

type APIProps = {
  company: string
  previewLinkImage: string
  logo: string
  favicon: string
  homepage: string
  categories: string[]
  metaDescription: string
  sdks: {
    name: string
    numberOfMethods: number
    categories: string[]
    index: string
    link: string
    openapiGitHubUi?: string
    developerDocumentation?: string
    language: string
  }[]
}

export function Company({
  company,
  previewLinkImage,
  logo,
  sdks,
  favicon,
  homepage,
  categories,
  metaDescription,
}: APIProps) {
  const title = `Integrate ${company}'s API using Konfig's SDKs`
  const description = `Explore SDKs for ${company}'s API. Discover 100 ways to easily integrate ${company}'s API using Konfig.`
  return (
    <Layout title={title} description={description}>
      <Head>
        <meta property="og:image" content={previewLinkImage} />
        <meta property="og:description" content={description} />
      </Head>
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.29'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        className="bg-slate-100"
      >
        <div className="pt-8 pb-24 bg-gradient-to-tl from-[var(--ifm-color-primary-darkest)] to-[var(--ifm-color-primary)]">
          <Breadcrumbs company={company} />
          <HeroSection
            logo={logo}
            company={company}
            metaDescription={description}
          />
        </div>
        <SDKs favicon={favicon} sdks={sdks} />
        <BottomCTA company={company} />
        <AboutCompany
          company={company}
          logo={logo}
          metaDescription={metaDescription}
          homepage={homepage}
          categories={categories}
        />
      </div>
    </Layout>
  )
}

function BottomCTA({ company }: { company: string }) {
  return (
    <div className="py-32 px-8 md:px-48 bg-gradient-to-tl from-[var(--ifm-color-primary-darkest)] to-[var(--ifm-color-primary)]">
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-3xl mb-2 sm:text-4xl text-white">
          Start integrating {company} with Konfig
        </h2>
        <SignupForm bottomCTA company={company} doNotShowQuestion />
      </div>
    </div>
  )
}

function SDKs({ sdks, favicon }: { sdks: APIProps['sdks']; favicon: string }) {
  const [amountToShow, setAmountToShow] = useState(3)
  const numberOfSdks = sdks.length
  sdks = sdks.slice(0, amountToShow)
  return (
    <div className="mx-3 sm:mx-auto sm:w-[480px] md:w-[600px] lg:w-[768px] flex flex-col bg-gradient-to-b from-slate-50 to-white relative px-8 py-10 top-[-75px] rounded-sm bg-white shadow-xl">
      <div className="absolute flex flex-col z-0 inset-0 m-auto w-fit text-blue-300 font-bold text-sm top-[-50px]">
        <div>Explore {numberOfSdks} SDKs 👀</div>
        <IconChevronDown className="mx-auto" />
      </div>
      {sdks.flatMap(
        (
          {
            index,
            link,
            categories,
            openapiGitHubUi,
            developerDocumentation,
            language,
            name,
          },
          i,
        ) => {
          return (
            <SdkLinkItem
              index={index}
              link={link}
              favicon={favicon}
              categories={categories}
              openApiGitHubUi={openapiGitHubUi}
              developerDocumentation={developerDocumentation}
              language={language}
              isLastItem={i === sdks.length - 1}
              service={name}
            />
          )
        },
      )}
      {amountToShow < numberOfSdks && (
        <button
          onClick={() => {
            setAmountToShow((amount) => amount + 3)
          }}
          aria-hidden={amountToShow >= numberOfSdks}
          className="aria-hidden:hidden mt-4 mx-auto group flex gap-3 hover:gap-2 items-center transition-all bg-gradient-to-br text-white w-fit text-center font-semibold px-3 py-2 from-blue-600 to-blue-800 rounded-md text-1xl cursor-pointer z-10"
        >
          Show More
        </button>
      )}
    </div>
  )
}

function CategoryFilter({ category }: { category: string }) {
  return (
    <button
      className={clsx(
        'z-10 flex items-center gap-1 border font-medium rounded-md text-xs px-2 py-1 transition-all bg-slate-50 border-slate-300 text-slate-600',
      )}
    >
      <span>{category}</span>
    </button>
  )
}

function SdkLinkItem({
  index,
  link,
  favicon,
  categories,
  isLastItem,
  openApiGitHubUi,
  developerDocumentation,
  language,
  service,
}: {
  index: string
  link: string
  favicon: string
  categories: string[]
  isLastItem: boolean
  openApiGitHubUi?: string
  developerDocumentation?: string
  language: string
  service?: string
}) {
  return (
    <a
      className={clsx('hover:no-underline z-10', {
        'cursor-not-allowed': language !== 'TypeScript',
      })}
      href={language === 'TypeScript' ? link : undefined}
    >
      <div
        className={clsx(
          'group hover:bg-slate-200 px-4 py-6 flex items-center gap-6 justify-between',
          {
            'border-b': !isLastItem,
          },
        )}
      >
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="shrink-0 h-4 w-4">
              <img className="w-full h-full object-cover" src={favicon} />
            </div>
            <div className="font-mono font-semibold text-sm sm:text-base">
              {index}
            </div>
            <div className="shrink-0 h-5 w-5">
              {language === 'Python' ? <PythonIcon /> : <TsIcon />}
            </div>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            {categories.map((category) => {
              return <CategoryFilter category={category} />
            })}
            {developerDocumentation && (
              <a
                className="flex w-fit items-center group/link text-slate-400 hover:text-slate-700 text-xs sm:text-sm hover:no-underline"
                target="_blank"
                href={developerDocumentation}
              >
                <div>{service !== undefined ? `${service} ` : ``}API Docs</div>
                <IconExternalLink height="11.5" />
              </a>
            )}
            {openApiGitHubUi && (
              <a
                className="flex w-fit items-center group/link text-slate-400 hover:text-slate-700 text-xs sm:text-sm hover:no-underline"
                target="_blank"
                href={openApiGitHubUi}
              >
                <div>OpenAPI</div>
                <IconExternalLink height="11.5" />
              </a>
            )}
            {language !== 'TypeScript' && (
              <div className="text-slate-400 text-xs sm:text-sm">
                Coming soon!
              </div>
            )}
          </div>
        </div>
        <IconChevronRight className="shrink-0 text-slate-400 group-hover:text-slate-500 relative group-hover:translate-x-1 group-hover:scale-110 transition-all" />
      </div>
    </a>
  )
}

function HeroSection({
  logo,
  company,
  metaDescription,
}: {
  logo: string
  company: string
  metaDescription: string
}) {
  const [showContent, setShowContent] = useState(false)
  useContentLoaded(() => {
    setShowContent(true)
  })

  return (
    <div
      className={`aria-hidden:opacity-0 opacity-1 duration-500 mx-auto max-w-[375px] px-3 sm:max-w-none sm:px-8 lg:px-20 py-12`}
      aria-hidden={!showContent}
    >
      <div className="w-fit mx-auto text-center">
        <div className="w-fit mx-auto text-center rounded-md">
          <LogoBox logo={logo} company={company} />
        </div>
        <h1 className="mt-8 text-white text-5xl sm:text-6xl leading-tight">
          Move faster with {company} SDKs
        </h1>
        <p className="text-[hsl(214_97%_90%)] text-xl sm:text-2xl max-w-[550px] mx-auto font-semibold">
          Konfig generates SDKs to help you easily integrate {company} into your
          application.
        </p>
      </div>
      <div className="mx-auto max-w-[400px]">
        <SignupForm company={company} />
      </div>
    </div>
  )
}

function SignupForm({
  company,
  doNotShowQuestion,
  bottomCTA,
}: {
  company: string
  doNotShowQuestion?: boolean
  bottomCTA?: boolean
}) {
  const {
    setEmail,
    signedUp,
    signedUpEmail,
    loading,
    handleSubmit,
    email,
  } = useSdkSignup({
    company,
  })

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
              'text-base md:text-lg text-blue-900 data-[bottom=true]:text-white font-bold',
              {
                'mb-3': !signedUp,
              },
            )}
          >
            {signedUp
              ? `Thanks for signing up for access to ${company} SDKs 🎉!`
              : `Want SDKs for ${company}?`}
          </h2>
        )}
        {signedUp ? (
          <>
            <p
              data-bottom={bottomCTA}
              className="mb-4 data-[bottom=true]:text-white"
            >{`Your email, ${signedUpEmail}, has been successfully registered for access to ${company} SDKs. We will notify you by email soon.`}</p>
            <p
              data-bottom={bottomCTA}
              className="mb-0 data-[bottom=true]:text-white"
            >
              For inquiries or support, please contact us at{' '}
              <a
                data-bottom={bottomCTA}
                href="mailto:sdks@konfigthis.com"
                className="data-[bottom=true]:text-white font-bold"
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
                <div>Sign up for access to {company} SDKs</div>
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
  )
}
