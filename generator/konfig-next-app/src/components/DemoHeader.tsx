import {
  Header,
  Group,
  MediaQuery,
  Burger,
  Title,
  SegmentedControl,
  ActionIcon,
  Button,
  useMantineTheme,
  Box,
} from '@mantine/core'
import { IconBrandGithub, IconRefresh } from '@tabler/icons-react'
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
    refreshSandbox,
    sandbox,
  }: {
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
    state: PortalState
    refreshSandbox?: () => void
    sandbox?: boolean
  }) => {
    return (
      <Header height={TITLE_OFFSET_PX}>
        <LayoutHeader title={state.portalName} />
        <Box
          px="md"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '45%',
          }}
        >
          {/* <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="md"
              />
            </MediaQuery> */}
          <HeaderTabs currentTab={TABS.demos} />
          <Group h="100%">
            <SegmentedControl
              size="xs"
              color="brand"
              value={state.showCode ? 'show-code' : 'hide-code'}
              data={[
                { label: 'Show Code', value: 'show-code' },
                { label: 'Hide Code', value: 'hide-code' },
              ]}
              onChange={(value) => {
                state.setShowCode(value === 'show-code')
              }}
            />
            {/* {!sandbox && (
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Button
                  component="a"
                  target="_blank"
                  size="xs"
                  leftIcon={<IconBrandGithub size="1rem" />}
                  href={`https://github.com/${state.organizationId}/${state.portalId}/tree/${state.mainBranch}/demos`}
                  color="gray"
                  variant="default"
                >
                  Source
                </Button>
              </MediaQuery>
            )} */}
            {refreshSandbox && (
              <ActionIcon
                onClick={refreshSandbox}
                color="green"
                variant="light"
              >
                <IconRefresh size="1rem" />
              </ActionIcon>
            )}
          </Group>
        </Box>
      </Header>
    )
  }
)
