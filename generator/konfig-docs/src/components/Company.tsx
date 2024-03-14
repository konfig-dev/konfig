import Head from '@docusaurus/Head'
import Layout from '@theme/Layout'
import React, { useState } from 'react'
import { Breadcrumbs } from './Breadcrumbs'
import { LogoBox } from './LogoBox'
import { useSdkSignup } from '../util/use-sdk-signup'
import clsx from 'clsx'
import { LoadingIcon } from './LoadingIcon'
import {
  IconCheck,
  IconChevronDown,
  IconChevronRight,
  IconExternalLink,
  IconPencil,
} from '@tabler/icons-react'
import useContentLoaded from '../util/use-content-loaded'
import { TsIcon } from './TsIcon'
import { AboutCompany } from './SdkNew'

type APIProps = {
  company: string
  previewLinkImage: string
  logo: string
  favicon: string
  homepage: string
  categories: string[]
  openApiGitHubUi: string
  metaDescription: string
  services: {
    name: string
    numberOfMethods: number
    categories: string[]
    index: string
    link: string
  }[]
}

export function Company({
  company,
  previewLinkImage,
  logo,
  services,
  favicon,
  homepage,
  categories,
  openApiGitHubUi,
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
        <SDKs favicon={favicon} services={services} />
        <BottomCTA company={company} />
        <AboutCompany
          company={company}
          logo={logo}
          metaDescription={metaDescription}
          homepage={homepage}
          categories={categories}
          openApiGitHubUi={openApiGitHubUi}
        />
      </div>
    </Layout>
  )
}

function BottomCTA({ company }: { company: string }) {
  return (
    <div className="py-32 px-8 md:px-48 bg-gradient-to-tl from-[var(--ifm-color-primary-darkest)] to-[var(--ifm-color-primary)]">
      <h2 className="text-3xl sm:text-4xl text-white">
        Start integrating {company} with Konfig
      </h2>
      <SignupForm company={company} doNotShowQuestion />
    </div>
  )
}

function SDKs({
  services,
  favicon,
}: {
  services: APIProps['services']
  favicon: string
}) {
  return (
    <div className="mx-3 sm:mx-auto sm:w-[480px] md:w-[600px] lg:w-[768px] flex flex-col bg-gradient-to-b from-slate-50 to-white relative px-8 py-10 top-[-75px] rounded-sm bg-white shadow-xl">
      <div className="absolute flex flex-col z-0 inset-0 m-auto w-fit text-blue-300 font-bold text-sm top-[-50px]">
        <div>Explore {services.length * 3} SDKs 👀</div>
        <IconChevronDown className="mx-auto" />
      </div>
      {services.flatMap(({ index, link, categories }, i) => {
        return (
          <SdkLinkItem
            index={index}
            link={link}
            favicon={favicon}
            categories={categories}
            isLastItem={i === services.length - 1}
          />
        )
      })}
    </div>
  )
}

function CategoryFilter({ category }: { category: string }) {
  return (
    <button
      className={clsx(
        'z-10 flex items-center gap-1 border font-medium rounded-md text-xs px-2 py-1 transition-all bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-800',
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
}: {
  index: string
  link: string
  favicon: string
  categories: string[]
  isLastItem: boolean
}) {
  return (
    <a className="hover:no-underline z-10" href={link}>
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
              <TsIcon />
            </div>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            {categories.map((category) => {
              return <CategoryFilter category={category} />
            })}
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
}: {
  company: string
  doNotShowQuestion?: boolean
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
      className="py-4 px-8 rounded-md bg-blue-100 ring-1 transition-all hover:scale-[1.01] hover:shadow-lg shadow-md my-8"
    >
      <div className="flex flex-col">
        {((!signedUp && !doNotShowQuestion) || signedUp) && (
          <h2
            className={clsx('text-base md:text-lg text-blue-900 font-bold', {
              'mb-3': !signedUp,
            })}
          >
            {signedUp
              ? `Thanks for signing up for access to ${company}'s SDKs 🎉!`
              : `Want SDKs for ${company}?`}
          </h2>
        )}
        {signedUp ? (
          <>
            <p className="mb-4">{`Your email, ${signedUpEmail}, has been successfully registered for access to ${company}'s SDKs. We will notify you by email soon.`}</p>
            <p className="mb-0">
              For inquiries or support, please contact us at{' '}
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
