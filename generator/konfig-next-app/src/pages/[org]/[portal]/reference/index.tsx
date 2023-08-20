import { TITLE_OFFSET_PX } from '@/components/DemoTitle'
import { HeaderTabs, TABS } from '@/components/HeaderTabs'
import { LayoutHeader } from '@/components/LayoutHeader'
import { generateShadePalette } from '@/utils/generate-shade-palette'
import {
  AppShell,
  Navbar,
  Text,
  useMantineColorScheme,
  useMantineTheme,
  Header,
  Aside,
  MediaQuery,
  Box,
  Group,
  MantineProvider,
} from '@mantine/core'
import { useState } from 'react'

const Reference = () => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState(false)
  return (
    <MantineProvider
      theme={{
        colorScheme,
        colors: { brand: generateShadePalette('#9fc1be') },
        primaryColor: 'brand',
      }}
    >
      <AppShell
        styles={{
          main: {
            background:
              colorScheme === 'dark' ? theme.colors.dark[8] : undefined,
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
          <Header height={TITLE_OFFSET_PX}>
            <LayoutHeader title="test" />
            <Box
              px="md"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '45%',
              }}
            >
              <HeaderTabs currentTab={TABS.reference} />
              <Group h="100%"></Group>
            </Box>
          </Header>
        }
      >
        Test
      </AppShell>
    </MantineProvider>
  )
}
export default Reference
