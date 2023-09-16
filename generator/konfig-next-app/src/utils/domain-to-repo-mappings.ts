export const domainToRepoMappings: Record<
  string,
  { owner: string; repo: string } | undefined
> = {
  'dev.konfigthis.com:3000': {
    owner: 'konfig-dev',
    repo: 'acme-sdks',
  },
  'acme.localhost:3000': {
    owner: 'konfig-dev',
    repo: 'acme-sdks',
  },
}
