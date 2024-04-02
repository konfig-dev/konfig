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
    repo: 'workflows-sdks',
  },
  'snaptrade.localhost:3000': {
    owner: 'passiv',
    repo: 'snaptrade-sdks',
  },
  'bellhop.localhost:3000': {
    owner: 'konfig-dev',
    repo: 'bellhop-sdks',
  },
  'humanloop.localhost:3000': {
    owner: 'humanloop',
    repo: 'humanloop-sdks',
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
  'bellhop.onkonfig.com': {
    owner: 'konfig-dev',
    repo: 'bellhop-sdks',
  },
  'acme.onkonfig.com': {
    owner: 'konfig-dev',
    repo: 'acme-sdks',
  },
  'leap.onkonfig.com': {
    owner: 'leap-ai',
    repo: 'workflows-sdks',
  },
  'splitit.onkonfig.com': {
    owner: 'konfig-dev',
    repo: 'splitit-web-sdks',
  },
  'snaptrade.onkonfig.com': {
    owner: 'passiv',
    repo: 'snaptrade-sdks',
  },
  'humanloop.onkonfig.com': {
    owner: 'humanloop',
    repo: 'humanloop-sdks',
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
  'docs.workflows.tryleap.ai': {
    owner: 'leap-ai',
    repo: 'workflows-sdks',
  },
  'docs.snaptrade.com': {
    owner: 'passiv',
    repo: 'snaptrade-sdks',
  },
  'docs-v2.snaptrade.com': {
    owner: 'passiv',
    repo: 'snaptrade-sdks',
  },
  'documentation.groundx.ai': {
    owner: 'groundxai',
    repo: 'groundx-sdks',
  },
  'd.groundx.ai': {
    owner: 'groundxai',
    repo: 'groundx-sdks',
  },
}
