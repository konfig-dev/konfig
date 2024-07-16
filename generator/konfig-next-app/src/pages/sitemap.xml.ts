// pages/sitemap.xml.ts

import { domainToRepoMappings } from '@/utils/domain-to-repo-mappings'
import { generateOwnerAndRepoFromDomain } from '@/utils/generate-owner-and-repo-from-domain'
import { generatePropsForSitemapXml } from '@/utils/generate-props-for-sitemap-xml'
import { GetServerSideProps } from 'next'
import { NextResponse } from 'next/server'

interface PageData {
  slug: string
}

function generateSitemapXml(host: string, pages: PageData[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
        <url>
          <loc>${`https://${host}${page.slug}`}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join('')}
    </urlset>`
}

const SiteMap: React.FC = () => {
  // getServerSideProps will do the heavy lifting
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  if (!res) {
    return {
      props: {},
    }
  }
  const host = req?.headers?.host
  if (host === undefined)
    return {
      notFound: true,
    }
  if (domainToRepoMappings[host] === undefined) {
    return {
      notFound: true,
    }
  }

  const { owner, repo } = generateOwnerAndRepoFromDomain(host)
  const { slugs } = await generatePropsForSitemapXml({ owner, repo })

  // Fetch your dynamic data
  const pages: PageData[] = slugs.map((slug) => ({ slug: slug.id }))

  // Generate the XML sitemap with the pages data
  const sitemap = generateSitemapXml(host, pages)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
