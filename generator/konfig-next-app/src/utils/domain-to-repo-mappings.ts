export const domainToRepoMappings: Record<
  string,
  { owner: string; repo: string } | undefined
> = {
  'snaptrade.onkonfig.com': {
    owner: 'passiv',
    repo: 'snaptrade-sdks',
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
}
