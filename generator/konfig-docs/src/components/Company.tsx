import Head from '@docusaurus/Head'
import Layout from '@theme/Layout'
import React, { useState } from 'react'
import { Breadcrumbs } from './Breadcrumbs'
import { LogoBox } from './LogoBox'
import { useSdkSignup } from '../util/use-sdk-signup'
import clsx from 'clsx'
import { LoadingIcon } from './LoadingIcon'
import { IconPencil } from '@tabler/icons-react'
import useContentLoaded from '../util/use-content-loaded'

type APIProps = {
  company: string
  previewLinkImage: string
  logo: string
  services: { name: string; numberOfMethods: number }[]
}

export function Company({
  company,
  previewLinkImage,
  logo,
  services,
}: APIProps) {
  const title = `Integrate ${company}'s API using Konfig's SDKs`
  const description = `Explore SDKs for ${company}'s API. Discover 100 ways to easily integrate ${company}'s API using Konfig.`
  return (
    <Layout title={title} description={description}>
      <Head>
        <meta property="og:image" content={previewLinkImage} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="pt-8 bg-gradient-to-tl from-[var(--ifm-color-primary-darkest)] to-[var(--ifm-color-primary)]">
        <Breadcrumbs company={company} />
        <HeroSection
          logo={logo}
          company={company}
          metaDescription={description}
        />
      </div>
      <SDKs services={services} />
    </Layout>
  )
}

function SDKs({
  services,
}: {
  services: { name: string; numberOfMethods: number }[]
}) {
  const languages = ['TypeScript', 'Python', 'Java']
  return (
    <div className="py-16">
      <h2 className="text-slate-600 mx-auto w-fit font-medium">
        Choose an SDK
      </h2>
      {languages.flatMap((language) => {
        return services.map(({ name, numberOfMethods }) => {
          return (
            <SDKCard
              language={language}
              name={name}
              numberOfMethods={numberOfMethods}
            />
          )
        })
      })}
    </div>
  )
}

function SDKCard({
  language,
  name,
  numberOfMethods,
}: {
  language: string
  name: string
  numberOfMethods: number
}) {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
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
        <div className="w-fit mx-auto text-center">
          <LogoBox logo={logo} company={company} />
        </div>
        <h1 className="mt-8 text-white text-3xl sm:text-4xl leading-tight">
          Move faster with {company} SDKs
        </h1>
        <p className="text-[hsl(214_97%_90%)] text-lg max-w-[550px] mx-auto font-semibold">
          Konfig helps you integrate {company}'s API into your application with
          less code by generating SDKs in your language of choice.
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
              : `Want SDKs for ${company}'s API?`}
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
