import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { domainToRepoMappings } from './utils/domain-to-repo-mappings'

/**
 * This file was inspired by https://github.com/vercel/platforms/blob/main/middleware.ts
 */

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
}

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  console.log('host', host)
  if (host === null) return NextResponse.next()

  if (domainToRepoMappings[host] === undefined) {
    console.log("Couldn't find repo for host", host)
    return NextResponse.next()
  }

  const url = request.nextUrl
  const path = url.pathname
  const rewrittenUrl = new URL(`/${host}${path}`, request.url)
  console.log('rewriting to', rewrittenUrl.href)
  return NextResponse.rewrite(rewrittenUrl)
}
