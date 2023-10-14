import { Dispatch, SetStateAction } from 'react'
import { PortalState } from './DemoPortal'
import { observer } from 'mobx-react'
import { LayoutHeader } from './LayoutHeader'
import { HeaderWrapper } from './HeaderWrapper'
import { TABS } from './HeaderButton'
import { HeaderTabs } from './HeaderTabs'
import type { generateLogoLink } from '@/utils/generate-logo-link'

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
  }: {
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
    state: PortalState
    sandbox?: boolean
    hasDocumentation: boolean
    demos: string[]
    omitOwnerAndRepo: boolean
    owner: string
    repo: string
    logo: ReturnType<typeof generateLogoLink>
  }) => {
    return (
      <HeaderWrapper>
        <LayoutHeader
          logo={logo}
          breakpoint="sm"
          opened={opened}
          setOpened={setOpened}
          title={state.portalTitle ? state.portalTitle : state.portalName}
        />
        <HeaderTabs
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
