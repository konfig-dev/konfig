import { Cta } from "@/components/Cta";
import { EnsureHighQualitySdks } from "@/components/EnsureHighQualitySdks/EnsureHighQualitySdks";
import { FooterSimple } from "@/components/FooterSimple/FooterSimple";
import { GeneratedSdkSnippets } from "@/components/GeneratedSdkSnippets";
import { GetSdksWithZeroEffort } from "@/components/GetSdksWithZeroEffort/GetSdksWithZeroEffort";
import { HeaderSimple } from "@/components/HeaderSimple/HeaderSimple";
import { HeroBullets } from "@/components/HeroBullets/HeroBullets";
import { Quotes } from "@/components/Quotes/Quotes";
import { SdkFeatures } from "@/components/SdkFeatures";
import { TrustedBy } from "@/components/TrustedBy/TrustedBy";
import { UpdatingDocs } from "@/components/UpdatingDocs";
import { Box, useMantineTheme } from "@mantine/core";
import Head from "next/head";

export default function Home() {
  const theme = useMantineTheme();
  return (
    <>
      <Head>
        <title>Konfig | Generate SDKs, Docs, and Demos for your REST API</title>
        <meta
          name="description"
          content="Konfig makes it easy for you to onboard external developers.
          Easily publish SDKs in all major languages so your customers can
          quickly integrate your API."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <HeaderSimple />
        <Box pb={100}>
          <HeroBullets />
          <TrustedBy />
        </Box>
        <Box
          className={`px-16 bg-gradient-to-br from-[rgb(8,17,25)] to-[rgb(9,7,48)] overflow-hidden`}
          sx={(theme) => ({ backgroundColor: theme.colors.dark[8] })}
        >
          <GetSdksWithZeroEffort />
          <EnsureHighQualitySdks />
          <SdkFeatures />
        </Box>
        <div className="px-16 bg-gradient-to-b from-[rgb(255,255,255)] to-[rgb(255,255,255)]  overflow-hidden">
          <UpdatingDocs />
          <GeneratedSdkSnippets />
        </div>
        <Quotes />
        <Cta />
        <FooterSimple
          data={[
            {
              title: "Company",
              links: [
                {
                  label: "About",
                  link: "https://konfigthis.com/about",
                },
                {
                  label: "Blog",
                  link: "https://konfigthis.com/blog",
                },
                {
                  label: "Newsletter",
                  link: "https://konfig.substack.com",
                },
              ],
            },
            {
              title: "Resources",
              links: [
                {
                  label: "Documentation",
                  link: "https://konfigthis.com/docs/",
                },
                {
                  label: "Changelog",
                  link: "https://konfigthis.com/blog/tags/changelog",
                },
                {
                  label: "Case Studies",
                  link: "https://konfigthis.com/blog/tags/case-studies",
                },
              ],
            },

            {
              title: "Contact",
              links: [
                {
                  label: "Schedule a Demo",
                  link: "https://konfigthis.com/schedule-demo",
                },
                {
                  label: "founders@konfigthis.com",
                  link: "mailto:founders@konfigthis.com",
                },
              ],
            },
          ]}
        />
      </main>
    </>
  );
}
