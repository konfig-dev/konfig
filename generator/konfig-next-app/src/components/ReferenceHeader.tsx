import { Header, Box, Group, useMantineTheme } from '@mantine/core'
import { TITLE_OFFSET_PX } from './DemoTitle'
import { HeaderTabs, TABS } from './HeaderTabs'
import { LayoutHeader } from './LayoutHeader'
import { Dispatch, SetStateAction } from 'react'

export function ReferenceHeader({
  opened,
  setOpened,
  demos,
  title,
  hasDocumentation,
}: {
  opened: boolean
  hasDocumentation: boolean
  setOpened: Dispatch<SetStateAction<boolean>>
  demos: string[]
  title: string
}) {
  const theme = useMantineTheme()
  return (
    <Header
      style={{
        color: theme.white,
        background:
          theme.colorScheme === 'dark'
            ? theme.colors.brand[9]
            : theme.colors.brand[7],
      }}
      height={TITLE_OFFSET_PX}
    >
      <LayoutHeader
        breakpoint="lg"
        opened={opened}
        setOpened={setOpened}
        title={title}
      />
      <HeaderTabs
        hasDocumentation={hasDocumentation}
        demos={demos}
        currentTab={TABS.reference}
      />
    </Header>
  )
}
