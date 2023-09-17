import { observer } from 'mobx-react'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { makeAutoObservable, observable } from 'mobx'
import { Demo, Organization, Portal } from '@/utils/demos'
import { DemoPortal, PortalState } from '@/components/DemoPortal'
import * as yaml from 'js-yaml'
import { notifications } from '@mantine/notifications'
import { generateShadePalette } from '@/utils/generate-shade-palette'
import { type KonfigYamlType, type SocialObject } from 'konfig-lib'
import { KonfigYaml } from 'konfig-lib/dist/KonfigYaml'
import { KONFIG_YAML_NAME } from 'konfig-lib/dist/util/konfig-yaml-name'
import { Button, Center, MantineProvider, useMantineTheme } from '@mantine/core'
import {
  DemoInput,
  generateDemosFromFilenameAndContent,
} from '@/utils/generate-demos-from-file-name-and-content'

/**
 * This is here to force this page to be SSR only so Next.js doesn't try to make
 * network requests at build time
 */
export const getServerSideProps: GetServerSideProps<{}> =
  async ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return { props: {} }
  }

type FileOrDirInfo = {
  name: string
  path: string
} & (
  | {
      handle: FileSystemDirectoryHandle
      kind: Extract<FileSystemHandleKind, 'directory'>
    }
  | {
      handle: FileSystemFileHandle
      kind: Extract<FileSystemHandleKind, 'file'>
    }
)

async function listAllFilesAndDirs(
  dirHandle: FileSystemDirectoryHandle,
  path: string[] = []
): Promise<FileOrDirInfo[]> {
  const files: FileOrDirInfo[] = []
  for await (let [name, handle] of dirHandle as any) {
    const newPath = [...path, name]
    const { kind } = handle
    if (handle.kind === 'directory') {
      const directoryHandle = handle as FileSystemDirectoryHandle // Type assertion
      files.push({ name, handle, kind, path: newPath.join('/') })
      files.push(...(await listAllFilesAndDirs(directoryHandle, newPath)))
    } else {
      files.push({ name, handle, kind, path: newPath.join('/') })
    }
  }
  return files
}

async function rescursivelyReadAllFiles(parameters?: {
  showPicker?: boolean
}): Promise<FileOrDirInfo[]> {
  try {
    if (parameters?.showPicker !== false)
      state.setDirectoryHandle(await (window as any).showDirectoryPicker())
    return await listAllFilesAndDirs(state.directoryHandle.get())
  } catch (error) {}
  return []
}

async function generateDemos(files: FileOrDirInfo[]): Promise<Demo[]> {
  const demos: DemoInput[] = []
  const konfigYamlFile = files.find((file) => file.name === KONFIG_YAML_NAME)
  if (konfigYamlFile && konfigYamlFile.kind === 'file') {
    const file = await konfigYamlFile.handle.getFile()
    const konfigYaml = KonfigYaml.parse(yaml.load(await file.text()))
    state.setKonfigYaml(konfigYaml)
    for (const demo of konfigYaml.portal?.demos ?? []) {
      const demoFile = files.find((file) => file.path === demo.path)
      if (demoFile === undefined) continue
      if (demoFile.kind !== 'file') continue
      demos.push({
        id: demo.id,
        content: await (await demoFile.handle.getFile()).text(),
        showCode: demo.showCode,
      })
    }
  }
  return generateDemosFromFilenameAndContent({ demos })
}

class SandboxState {
  demos: Demo[] = []
  directoryHandle = observable.box<any>()
  konfigYaml: KonfigYamlType | undefined

  constructor() {
    makeAutoObservable(this)
  }

  setDemos(demos: Demo[]) {
    this.demos = demos
  }

  setKonfigYaml(konfigYaml: KonfigYamlType) {
    this.konfigYaml = konfigYaml
  }

  get socials(): SocialObject | undefined {
    return this.konfigYaml?.portal?.socials
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

  get brandColor(): string {
    return this.konfigYaml?.portal?.primaryColor ?? '#1d344e'
  }

  get portalState() {
    if (state.demos.length === 0) return null
    const portalState = new PortalState({
      ...state.portal,
      portalId: 'demos',
      organizationId: state.organization.id,
      demoId: state.demos[0].id,
      socials: this.socials,
      portalTitle: 'Sandbox',
      omitOwnerAndRepo: true,
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
        colors: { brand: generateShadePalette(state.brandColor) },
        primaryColor: 'brand',
      }}
    >
      <DemoPortal
        owner="sandbox"
        repo="sandbox"
        omitOwnerAndRepo={true}
        hasDocumentation={false}
        refreshSandbox={async () => {
          const files = await rescursivelyReadAllFiles({ showPicker: false })
          if (files === undefined) return

          // Preserve current demo index
          const currentDemoIndex = state.portalState?.currentDemoIndex
          const showCode = state.portalState?.showCode

          state.setDemos(await generateDemos(files))

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
              const files = await rescursivelyReadAllFiles()
              if (files === undefined) return

              state.setDemos(await generateDemos(files))
            }}
          >
            {`Specify directory with "${KONFIG_YAML_NAME}"`}
          </Button>
        </Center>
      )}
      {state.directoryHandle.get() !== undefined && <DemoPortalWrapper />}
    </>
  )
})

export default MarkdownSandboxPage
