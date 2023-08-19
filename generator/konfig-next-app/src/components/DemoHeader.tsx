import sandbox from '@/pages/sandbox'
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
  useMantineColorScheme,
} from '@mantine/core'
import {
  IconSun,
  IconMoonStars,
  IconBrandGithub,
  IconRefresh,
} from '@tabler/icons-react'
import { TITLE_OFFSET_PX } from './DemoTitle'
import { Dispatch, SetStateAction } from 'react'
import { PortalState } from './DemoPortal'
import { observer } from 'mobx-react'

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
    const theme = useMantineTheme()
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    return (
      <Header height={{ base: 50, md: TITLE_OFFSET_PX }} p="md">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Group spacing={0}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="md"
              />
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Title order={5}>{state.portalName}</Title>
            </MediaQuery>
          </Group>
          <Group>
            <SegmentedControl
              size="xs"
              color="blue"
              value={state.showCode ? 'show-code' : 'hide-code'}
              data={[
                { label: 'Show Code', value: 'show-code' },
                { label: 'Hide Code', value: 'hide-code' },
              ]}
              onChange={(value) => {
                state.setShowCode(value === 'show-code')
              }}
            />
            <ActionIcon
              variant="default"
              onClick={() => toggleColorScheme()}
              size={30}
            >
              {colorScheme === 'dark' ? (
                <IconSun size="1rem" />
              ) : (
                <IconMoonStars size="1rem" />
              )}
            </ActionIcon>
            {!sandbox && (
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
            )}
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
        </div>
      </Header>
    )
  }
)
