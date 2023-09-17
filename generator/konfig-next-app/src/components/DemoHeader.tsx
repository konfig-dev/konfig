import {
  Header,
  Group,
  SegmentedControl,
  ActionIcon,
  Box,
  useMantineTheme,
  rem,
} from '@mantine/core'
import { IconRefresh } from '@tabler/icons-react'
import { TITLE_OFFSET_PX } from './DemoTitle'
import { Dispatch, SetStateAction } from 'react'
import { PortalState } from './DemoPortal'
import { observer } from 'mobx-react'
import { LayoutHeader } from './LayoutHeader'
import { HeaderTabs, TABS } from './HeaderTabs'

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
  }) => {
    const theme = useMantineTheme()
    return (
      <Header
        style={{
          color: 'white',
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.brand[9]
              : theme.colors.brand[7],
        }}
        height={TITLE_OFFSET_PX}
      >
        <LayoutHeader
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
      </Header>
    )
  }
)
