export const domainToRepoMappings: Record<
  string,
  { owner: string; repo: string } | undefined
> = {
  // *.localhost:3000 domains
  'groundx.localhost:3000': {
    owner: 'groundxai',
    repo: 'groundx-sdks',
  },
  'splitit.localhost:3000': {
    owner: 'konfig-dev',
    repo: 'splitit-web-sdks',
  },
  'leap.localhost:3000': {
    owner: 'leap-ai',
    repo: 'leap-sdks',
  },
  'snaptrade.localhost:3000': {
    owner: 'passiv',
    repo: 'snaptrade-sdks',
  },
  'dev.konfigthis.com:3000': {
    owner: 'konfig-dev',
    repo: 'acme-sdks',
  },
  'acme.localhost:3000': {
    owner: 'konfig-dev',
    repo: 'acme-sdks',
  },

  // *.onkonfig.com
  'leap.onkonfig.com': {
    owner: 'leap-ai',
    repo: 'leap-sdks',
  },
  'splitit.onkonfig.com': {
    owner: 'konfig-dev',
    repo: 'splitit-web-sdks',
  },
  'snaptrade.onkonfig.com': {
    owner: 'passiv',
    repo: 'snaptrade-sdks',
  },
  'groundx.onkonfig.com': {
    owner: 'groundxai',
    repo: 'groundx-sdks',
  },

  // *.konfigthis.com
  'snaptrade.konfigthis.com': {
    owner: 'passiv',
    repo: 'snaptrade-sdks',
  },

  // custom domain
  'docs.snaptrade.com': {
    owner: 'passiv',
    repo: 'snaptrade-sdks',
  },
  'docs-v2.snaptrade.com': {
    owner: 'passiv',
    repo: 'snaptrade-sdks',
  },
}
