import { TITLE_OFFSET_PX } from '@/components/DemoTitle'
import { LayoutHeader } from '@/components/LayoutHeader'
import {
  AppShell,
  Navbar,
  Text,
  useMantineColorScheme,
  useMantineTheme,
  Header,
  Aside,
  MediaQuery,
} from '@mantine/core'
import { useState } from 'react'

const Reference = () => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState(false)
  return (
    <AppShell
      styles={{
        main: {
          background: colorScheme === 'dark' ? theme.colors.dark[8] : undefined,
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="lg"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 225, lg: 325 }}
          sx={{ overflowY: 'scroll' }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      header={
        <Header height={{ base: 50, md: TITLE_OFFSET_PX }}>
          <LayoutHeader />
        </Header>
      }
    >
      Test
    </AppShell>
  )
}
export default Reference
