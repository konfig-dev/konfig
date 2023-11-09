import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

interface GoogleAnalyticsProviderProps {
  googleAnalyticsId: string | null | undefined
}

export const GoogleAnalyticsProvider: React.FC<
  PropsWithChildren<GoogleAnalyticsProviderProps>
> = ({ children, googleAnalyticsId }) => {
  if (!googleAnalyticsId) {
    return <>{children}</>
  }
  return (
    <>
      <Head>
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
      </Head>
      {children}
    </>
  )
}
