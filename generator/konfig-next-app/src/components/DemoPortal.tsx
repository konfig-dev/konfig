import {
  Affix,
  HoverCard,
  ThemeIcon,
  AppShell,
  Text,
  Navbar,
  Stack,
  NavLink,
  useMantineColorScheme,
  useMantineTheme,
  Box,
  Divider,
  rem,
  ActionIcon,
  Group,
  SegmentedControl,
} from '@mantine/core'
import { IconBug, IconChevronRight, IconRefresh } from '@tabler/icons-react'
import { observer } from 'mobx-react'
import { useState, createContext, Fragment } from 'react'
import DemoMarkdown, { DemoState } from './DemoMarkdown'
import { makeAutoObservable } from 'mobx'
import { useRouter } from 'next/router'
import { api } from '@/utils/api'
import { v4 as uuid } from 'uuid'
import { Demo } from '@/utils/demos'
import { DemoSiblings, Sibling } from './DemoSiblings'
import { navigateToDemo } from '@/utils/navigate-to-demo'
import { DemoSocials } from './DemoSocials'
import DemoTableOfContents from './DemoTableOfContents'
import { DemoEditThisPage } from './DemoEditThisPage'
import { DemoLastRan } from './DemoLastRan'
import { DemoHeader } from './DemoHeader'
import type { SocialObject } from 'konfig-lib/dist/KonfigYamlCommon'
import Head from 'next/head'

type DemosInput = Demo[]

type Demos = DemoState[]

export class PortalState {
  demos: Demos
  showCode = false
  id: string
  uuid = uuid()
  portalName: string
  portalTitle: string | null
  currentDemoIndex: number
  organizationId: string
  portalId: string
  currentDemo: DemoState
  mainBranch?: string
  socials?: SocialObject

  constructor({
    demos,
    portalName,
    id,
    organizationId,
    portalId,
    demoId,
    socials,
    mainBranch,
    portalTitle,
  }: {
    demos: DemosInput
    portalName: string
    id: string
    organizationId: string
    portalId: string
    demoId: string
    socials?: SocialObject
    mainBranch?: string
    portalTitle: string | null
  }) {
    makeAutoObservable(this)
    this.socials = socials
    this.portalTitle = portalTitle
    this.id = id
    this.portalId = portalId
    this.mainBranch = mainBranch
    this.organizationId = organizationId
    this.demos = demos.map(
      ({ name, markdown, id, showCode }) =>
        new DemoState({
          markdown,
          name,
          portal: this,
          id,
          showCode: showCode ?? undefined,
        })
    )

    this.currentDemoIndex = this.demos.findIndex((demo) => demo.id === demoId)
    if (this.currentDemoIndex === -1)
      throw Error(`Could not find demo with id ${demoId}`)
    this.currentDemo = this.demos[this.currentDemoIndex]

    if (demos[this.currentDemoIndex].showCode) this.setShowCode(true)

    this.portalName = portalName

    // Only start intervals in browser
    if (typeof window !== 'undefined') {
      setInterval(async () => {
        const activeSessions = this.demos.filter(
          ({ sessionId }) => sessionId !== null
        )
        if (activeSessions.length === 0) return
        const { lastSuccessfulExecutions } = await api.pingSessions.query({
          sessions: activeSessions.map((demo) => {
            if (demo.sessionId === null)
              throw Error('Demo sessions must be active')
            if (demo.portal === undefined) throw Error("Demo's portal missing")
            return {
              sessionId: demo.sessionId,
              organizationId: demo.portal.organizationId,
              portalId: demo.portal.id,
              demoId: demo.id,
            }
          }),
        })
        lastSuccessfulExecutions.forEach(({ demoId, when }) => {
          if (when === undefined) return
          this.demos
            .find((demo) => demo.id === demoId)
            ?.setLastSuccessfulExecution(new Date(when))
        })
      }, 30000)
    }
  }

  setShowCode(value: boolean) {
    this.showCode = value
  }

  setCurrentDemoIndex(index: number) {
    this.currentDemoIndex = index
    this.currentDemo = this.demos[this.currentDemoIndex]
  }
}

export const SandboxContext = createContext<boolean>(false)

export const DemoPortal = observer(
  ({
    state,
    sandbox,
    refreshSandbox,
    hasDocumentation,
  }: {
    state: PortalState
    sandbox?: boolean
    refreshSandbox?: () => void
    hasDocumentation: boolean
  }) => {
    const theme = useMantineTheme()
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const [opened, setOpened] = useState(false)
    const router = useRouter()

    return (
      <SandboxContext.Provider value={!!sandbox}>
        {sandbox && (
          <Affix position={{ bottom: '0.5rem', right: '1rem' }}>
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <ThemeIcon size="xs" color="gray">
                  <IconBug />
                </ThemeIcon>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  {JSON.stringify(
                    state.demos.map((demo) => ({
                      name: demo.name,
                      sessionId: demo.sessionId,
                    })),
                    undefined,
                    2
                  )}
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Affix>
        )}
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
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 225, lg: 325 }}
              sx={{
                overflowY: 'scroll',
                height:
                  'calc(100% - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem));',
              }}
            >
              <Navbar.Section
                p="md"
                style={{
                  borderBottom: `${rem(1)} solid ${
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[4]
                      : theme.colors.gray[3]
                  }`,
                }}
              >
                <Group h="100%">
                  <SegmentedControl
                    size="xs"
                    color="brand"
                    value={state.showCode ? 'show-code' : 'hide-code'}
                    styles={{
                      label: {
                        fontSize: `${rem(11)} !important`,
                      },
                    }}
                    data={[
                      { label: 'Hide Code', value: 'hide-code' },
                      { label: 'Show Code', value: 'show-code' },
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
                      variant="filled"
                    >
                      <IconRefresh size="1rem" />
                    </ActionIcon>
                  )}
                </Group>
              </Navbar.Section>
              <Navbar.Section pt="md" grow>
                <Stack spacing="xs">
                  {state.demos.map(({ name }, i) => {
                    const isCurrentlySelected = state.currentDemoIndex === i
                    return (
                      <NavLink
                        key={name}
                        onClick={() => {
                          setOpened(false)
                          navigateToDemo({
                            demoId: state.demos[i].id,
                            demoIndex: i,
                            organizationId: state.organizationId,
                            portal: state,
                            router,
                            sandbox,
                          })
                        }}
                        p="xs"
                        variant={colorScheme === 'dark' ? 'light' : 'filled'}
                        sx={(theme) => ({ borderRadius: theme.radius.xs })}
                        rightSection={
                          isCurrentlySelected ? (
                            <IconChevronRight size="0.8rem" stroke={1.5} />
                          ) : undefined
                        }
                        label={name}
                        active={isCurrentlySelected}
                      />
                    )
                  })}
                </Stack>
              </Navbar.Section>
            </Navbar>
          }
          aside={<DemoTableOfContents demoDiv={state.currentDemo.demoDiv} />}
          header={
            <DemoHeader
              hasDocumentation={hasDocumentation}
              demos={state.demos.map((demo) => demo.id)}
              opened={opened}
              setOpened={setOpened}
              state={state}
              sandbox={sandbox}
            />
          }
        >
          {/* We have to render all demos states at the start so they can each initialize their cells */}
          {state.demos.map((demo, i) => {
            const previousDemoState: DemoState | undefined =
              i === 0 ? undefined : state.demos[i - 1]
            const nextDemoState: DemoState | undefined =
              i === state.demos.length - 1 ? undefined : state.demos[i + 1]

            const previous: Sibling | undefined =
              previousDemoState === undefined ||
              previousDemoState.portal === undefined
                ? undefined
                : {
                    title: previousDemoState.name,
                    organizationId: previousDemoState.portal.organizationId,
                    demoId: previousDemoState.id,
                    demoIndex: i - 1,
                  }
            const next: Sibling | undefined =
              nextDemoState === undefined || nextDemoState.portal === undefined
                ? undefined
                : {
                    title: nextDemoState.name,
                    demoIndex: i + 1,
                    organizationId: nextDemoState.portal.organizationId,
                    demoId: nextDemoState.id,
                  }
            return (
              <Fragment key={i}>
                {state.currentDemoIndex === i && (
                  <Head>
                    <title>{demo.name}</title>
                  </Head>
                )}
                <Box
                  key={demo.name}
                  display={state.currentDemoIndex !== i ? 'none' : undefined}
                >
                  <DemoLastRan demo={demo} />
                  <DemoMarkdown state={demo} />
                  <Box my={rem(40)}>
                    <DemoEditThisPage portalState={state} />
                  </Box>
                  <DemoSiblings
                    portal={state}
                    previous={previous}
                    next={next}
                  />
                  <Divider mt={rem(60)} />
                  <Box my={rem(20)}>
                    <DemoSocials socials={state.socials} />
                  </Box>
                </Box>
              </Fragment>
            )
          })}
        </AppShell>
      </SandboxContext.Provider>
    )
  }
)
