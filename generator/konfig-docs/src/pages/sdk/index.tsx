import { LayoutWithoutNav } from "@site/src/components/LayoutWithoutNav/LayoutWithoutNav";
import Index from "./_index.mdx";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

export default function SdkPage() {
  return (
    <LayoutWithoutNav>
      <Head>
        <title>Konfig SDKs for Public APIs</title>
        <meta property="og:image" content="/img/konfig-sdks.png" />
        <meta property="og:title" content="Konfig SDKs for Public APIs" />
        <meta
          property="og:description"
          content="Konfig SDKs is a one-of-a-kind service for developers that want to write and maintain less API integration code. If you're ready to simplify your API integrations, get started with Konfig today!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@konfig" />
        <meta name="twitter:title" content="Konfig SDKs for Public APIs" />
        <meta
          name="twitter:description"
          content="Konfig SDKs is a one-of-a-kind service for developers that want to write and maintain less API integration code. If you're ready to simplify your API integrations, get started with Konfig today!"
        />
        <meta name="twitter:image" content="/img/konfig-sdks.png" />
      </Head>
      <Index />
    </LayoutWithoutNav>
  );
}
