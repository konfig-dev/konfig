import { Dispatch, SetStateAction } from 'react'
import { PortalState } from './DemoPortal'
import { observer } from 'mobx-react'
import { LayoutHeader } from './LayoutHeader'
import { HeaderWrapper } from './HeaderWrapper'
import { TABS } from './HeaderButton'
import { HeaderTabs } from './HeaderTabs'
import type { generateLogoLink } from '@/utils/generate-logo-link'
import { MarkdownPageProps } from '@/utils/generate-props-for-markdown-page'

export const DemoHeader = observer(
  ({
    opened,
    setOpened,
    state,
    sandbox,
    demos,
    hasDocumentation,
    omitOwnerAndRepo,
    owner,
    repo,
    logo,
    allMarkdown,
  }: {
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
    state: PortalState
    allMarkdown: MarkdownPageProps['allMarkdown']
    sandbox?: boolean
    hasDocumentation: boolean
    demos: string[]
    omitOwnerAndRepo: boolean
    owner: string
    repo: string
    logo: ReturnType<typeof generateLogoLink>
  }) => {
    return (
      <HeaderWrapper hasLightAndDarkLogo={typeof logo !== 'string'}>
        <LayoutHeader
          logo={logo}
          breakpoint="sm"
          opened={opened}
          setOpened={setOpened}
          title={state.portalTitle ? state.portalTitle : state.portalName}
        />
        <HeaderTabs
          hasLightAndDarkLogo={typeof logo !== 'string'}
          allMarkdown={allMarkdown}
          hasDocumentation={hasDocumentation}
          demos={demos}
          owner={owner}
          repo={repo}
          currentTab={TABS.demos}
          isSandbox={sandbox}
          omitOwnerAndRepo={omitOwnerAndRepo}
        />
      </HeaderWrapper>
    )
  }
)
