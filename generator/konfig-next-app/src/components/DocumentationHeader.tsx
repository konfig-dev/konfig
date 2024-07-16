import { LayoutHeader } from './LayoutHeader'
import { Dispatch, SetStateAction } from 'react'
import { HeaderWrapper } from './HeaderWrapper'
import { navbarOffsetBreakpoint } from '@/utils/navbar-offset-breakpoint'
import { HeaderTabs } from './HeaderTabs'
import { TABS } from './HeaderButton'
import type { GenerateLogoLinkResponse } from '@/utils/generate-logo-link'
import { MarkdownPageProps } from '@/utils/generate-props-for-markdown-page'
import { KonfigYamlCommonType } from 'konfig-lib'

export function DocumentationHeader({
  opened,
  setOpened,
  demos,
  title,
  omitOwnerAndRepo,
  owner,
  repo,
  logo,
  allMarkdown,
  cta,
}: {
  opened: boolean
  setOpened: Dispatch<SetStateAction<boolean>>
  demos: string[]
  title: string
  omitOwnerAndRepo?: boolean
  owner: string
  repo: string
  logo: GenerateLogoLinkResponse
  allMarkdown: MarkdownPageProps['allMarkdown']
  cta: NonNullable<KonfigYamlCommonType['portal']>['cta'] | null
}) {
  return (
    <HeaderWrapper
      allMarkdown={allMarkdown}
      hasLightAndDarkLogo={typeof logo !== 'string'}
    >
      <LayoutHeader
        allMarkdown={allMarkdown}
        breakpoint={navbarOffsetBreakpoint}
        opened={opened}
        setOpened={setOpened}
        title={title}
        logo={logo}
        cta={cta}
      />
      <HeaderTabs
        hasLightAndDarkLogo={typeof logo !== 'string'}
        owner={owner}
        repo={repo}
        hasDocumentation={true}
        demos={demos}
        currentTab={TABS.documentation}
        omitOwnerAndRepo={omitOwnerAndRepo}
        allMarkdown={allMarkdown}
      />
    </HeaderWrapper>
  )
}
