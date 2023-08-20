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
} from '@mantine/core'
import { IconBug, IconChevronRight } from '@tabler/icons-react'
import { observer } from 'mobx-react'
import { useState, createContext } from 'react'
import DemoMarkdown, { DemoState } from './DemoMarkdown'
import { makeAutoObservable } from 'mobx'
import { useRouter } from 'next/router'
import { api } from '@/utils/api'
import { v4 as uuid } from 'uuid'
import { Demo } from '@/utils/demos'
import { DemoSiblings, Sibling } from './DemoSiblings'
import { navigateToDemo } from '@/utils/navigate-to-demo'
import { DemoSocials } from './DemoSocials'
import { SocialObject } from '@/utils/generate-demos-from-github'
import DemoTableOfContents from './DemoTableOfContents'
import { DemoEditThisPage } from './DemoEditThisPage'
import { DemoLastRan } from './DemoLastRan'
import { DemoHeader } from './DemoHeader'

type DemosInput = Demo[]

type Demos = DemoState[]

export class PortalState {
  demos: Demos
  showCode = false
  id: string
  uuid = uuid()
  portalName: string
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
  }: {
    demos: DemosInput
    portalName: string
    id: string
    organizationId: string
    portalId: string
    demoId: string
    socials?: SocialObject
    mainBranch?: string
  }) {
    makeAutoObservable(this)
    this.socials = socials
    this.id = id
    this.portalId = portalId
    this.mainBranch = mainBranch
    this.organizationId = organizationId
    this.demos = demos.map(
      ({ name, markdown, id, showCode }) =>
        new DemoState({ markdown, name, portal: this, id, showCode })
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
  }: {
    state: PortalState
    sandbox?: boolean
    refreshSandbox?: () => void
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
              p="md"
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 225, lg: 325 }}
              sx={{ overflowY: 'scroll' }}
            >
              <Navbar.Section>
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
              refreshSandbox={refreshSandbox}
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
              previousDemoState === undefined
                ? undefined
                : {
                    title: previousDemoState.name,
                    organizationId: previousDemoState.portal.organizationId,
                    demoId: previousDemoState.id,
                    demoIndex: i - 1,
                  }
            const next: Sibling | undefined =
              nextDemoState === undefined
                ? undefined
                : {
                    title: nextDemoState.name,
                    demoIndex: i + 1,
                    organizationId: nextDemoState.portal.organizationId,
                    demoId: nextDemoState.id,
                  }
            return (
              <Box
                key={demo.name}
                display={state.currentDemoIndex !== i ? 'none' : undefined}
              >
                <DemoLastRan demo={demo} />
                <DemoMarkdown state={demo} />
                <Box my={rem(40)}>
                  <DemoEditThisPage portalState={state} />
                </Box>
                <DemoSiblings portal={state} previous={previous} next={next} />
                <Divider mt={rem(60)} />
                <Box my={rem(20)}>
                  <DemoSocials socials={state.socials} />
                </Box>
              </Box>
            )
          })}
        </AppShell>
      </SandboxContext.Provider>
    )
  }
)
