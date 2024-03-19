import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

interface GoogleAnalyticsProviderProps {
  googleAnalyticsId: string | null | undefined
  customSnippet: string | null | undefined
}

export const GoogleAnalyticsProvider: React.FC<
  GoogleAnalyticsProviderProps
> = ({ googleAnalyticsId, customSnippet }) => {
  const googleAnalyticsSnippet = googleAnalyticsId ? (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-${googleAnalyticsId}`}
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${googleAnalyticsId}');`}
      </script>
    </>
  ) : null
  const customSnippetComponent = customSnippet ? (
    <Head>
      {customSnippet.startsWith('<script') ? (
        <script
          id="custom-snippet"
          dangerouslySetInnerHTML={{
            __html:
              customSnippet.match(/<script.*?>(.*?)<\/script>/s)?.[1] || '',
          }}
        />
      ) : (
        <script
          id="custom-snippet"
          dangerouslySetInnerHTML={{ __html: customSnippet }}
        />
      )}
    </Head>
  ) : null
  return (
    <>
      <Head>{googleAnalyticsSnippet}</Head>
      {customSnippetComponent}
    </>
  )
}
