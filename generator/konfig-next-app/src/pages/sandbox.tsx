import {
  Button,
  Center,
  MantineProvider,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { observer } from 'mobx-react'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { makeAutoObservable, observable } from 'mobx'
import {
  DemoInput,
  generateDemosFromFilenameAndContent,
} from '@/utils/generate-demos-from-file-name-and-content'
import { Organization, Portal } from '@/utils/demos'
import { DemoPortal, PortalState } from '@/components/DemoPortal'
import * as yaml from 'js-yaml'
import {
  DEMO_YAML_FILE_NAME,
  SocialObject,
  demoYamlSchema,
} from '@/utils/generate-demos-from-github'
import { notifications } from '@mantine/notifications'
import { generateShadePalette } from '@/utils/generate-shade-palette'

/**
 * This is here to force this page to be SSR only so Next.js doesn't try to make
 * network requests at build time
 */
export const getServerSideProps: GetServerSideProps<{}> =
  async ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return { props: {} }
  }

async function open(parameters?: { showPicker?: boolean }) {
  try {
    if (parameters?.showPicker !== false)
      state.setDirectoryHandle(await (window as any).showDirectoryPicker())
    const files: DemoInput[] = []

    for await (const entry of state.directoryHandle.get().values()) {
      if (entry.kind !== 'file') {
        continue
      }
      const file = await entry.getFile()
      files.push({ fileName: file.name, content: await file.text() })
    }
    return files
  } catch (error) {}
}

class SandboxState {
  files: DemoInput[] = []
  directoryHandle = observable.box<any>()

  constructor() {
    makeAutoObservable(this)
  }

  setFiles(files: DemoInput[]) {
    this.files = files
  }

  get demoYaml() {
    const demoYamlFile = this.files.find(
      (di) => di.fileName === DEMO_YAML_FILE_NAME
    )
    if (demoYamlFile === undefined) return undefined
    const demoYaml = demoYamlSchema.parse(yaml.load(demoYamlFile.content))
    return demoYaml
  }

  get demos() {
    if (this.demoYaml === undefined) return []
    return generateDemosFromFilenameAndContent({
      demos: this.files.filter((di) => di.fileName.endsWith('.md')),
      demoYaml: this.demoYaml,
    })
  }

  get socials(): SocialObject | undefined {
    return this.demoYaml?.socials
  }

  get organization(): Organization {
    return {
      id: 'sandbox',
      organizationName: 'Sandbox',
      portals: [this.portal],
    }
  }

  get portal(): Portal {
    return {
      id: 'demo',
      portalName: 'Sandbox',
      demos: this.demos,
    }
  }

  get portalState() {
    if (state.demos.length === 0) return null
    const portalState = new PortalState({
      ...state.portal,
      portalId: 'demos',
      organizationId: state.organization.id,
      demoId: state.demos[0].id,
      socials: this.socials,
    })
    return portalState
  }

  setDirectoryHandle(directoryHandle: any) {
    this.directoryHandle.set(directoryHandle)
  }
}

const state = new SandboxState()

const DemoPortalWrapper = observer(() => {
  const { colorScheme, colors } = useMantineTheme()
  if (state.portalState === null) return null
  return (
    <MantineProvider
      theme={{
        colorScheme,
        colors: { brand: generateShadePalette('#1d344e') },
        primaryColor: 'brand',
      }}
    >
      <DemoPortal
        refreshSandbox={async () => {
          const files = await open({ showPicker: false })
          if (files === undefined) return

          // Preserve current demo index
          const currentDemoIndex = state.portalState?.currentDemoIndex
          const showCode = state.portalState?.showCode

          state.setFiles(files)

          // Restore current demo index
          if (currentDemoIndex !== undefined)
            state.portalState?.setCurrentDemoIndex(currentDemoIndex)
          if (showCode !== undefined) state.portalState?.setShowCode(showCode)

          notifications.show({
            id: 'refresh-sandbox',
            title: 'Sandbox Refreshed',
            message: 'Files successfully reloaded from local file system',
            autoClose: 3000,
          })
        }}
        sandbox
        state={state.portalState}
      />
    </MantineProvider>
  )
})

const MarkdownSandboxPage = observer(() => {
  return (
    <>
      <Head>
        <title>Demo Sandbox | Konfig</title>
      </Head>
      {state.directoryHandle.get() === undefined && (
        <Center pt="xl">
          <Button
            onClick={async () => {
              const files = await open()
              if (files === undefined) return
              state.setFiles(files)
            }}
          >
            {`Specify directory with "${DEMO_YAML_FILE_NAME}"`}
          </Button>
        </Center>
      )}
      {state.directoryHandle.get() !== undefined && <DemoPortalWrapper />}
    </>
  )
})

export default MarkdownSandboxPage
