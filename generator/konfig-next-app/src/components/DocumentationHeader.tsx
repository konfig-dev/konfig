import { LayoutHeader } from './LayoutHeader'
import { Dispatch, SetStateAction } from 'react'
import { HeaderWrapper } from './HeaderWrapper'
import { navbarOffsetBreakpoint } from '@/utils/navbar-offset-breakpoint'
import { HeaderTabs } from './HeaderTabs'
import { TABS } from './HeaderButton'
import type { generateLogoLink } from '@/utils/generate-logo-link'
import { MarkdownPageProps } from '@/utils/generate-props-for-markdown-page'

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
}: {
  opened: boolean
  setOpened: Dispatch<SetStateAction<boolean>>
  demos: string[]
  title: string
  omitOwnerAndRepo?: boolean
  owner: string
  repo: string
  logo: ReturnType<typeof generateLogoLink>
  allMarkdown: MarkdownPageProps['allMarkdown']
}) {
  return (
    <HeaderWrapper hasLightAndDarkLogo={typeof logo !== 'string'}>
      <LayoutHeader
        breakpoint={navbarOffsetBreakpoint}
        opened={opened}
        setOpened={setOpened}
        title={title}
        logo={logo}
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
