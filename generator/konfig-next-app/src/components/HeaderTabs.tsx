import { Group, useMantineTheme } from '@mantine/core'
import { HeaderTab } from './HeaderTab'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IconBook, IconBox, IconCode, IconTerminal } from '@tabler/icons-react'

export const TABS = {
  documentation: 'Documentation',
  reference: 'API Reference',
  demos: 'Demos',
  sdks: 'SDKs',
} as const

export type Tab = (typeof TABS)[keyof typeof TABS]

export function HeaderTabs({
  currentTab,
  isSandbox,
  demos,
  hasDocumentation,
}: {
  currentTab: Tab
  isSandbox?: boolean
  demos: string[]
  hasDocumentation?: boolean
}) {
  const docsPath = useDocsPath()
  const referencePath = useReferencePath()
  const basePath = useBasePath()
  const githubUrl = useGithubUrl()
  const theme = useMantineTheme()
  return (
    <Group
      h="45%"
      style={{
        color: theme.white,
        background:
          theme.colorScheme === 'dark'
            ? theme.colors.brand[9]
            : theme.colors.brand[7],
        alignItems: 'flex-end',
        overflowX: 'scroll',
      }}
      pl="sm"
      noWrap
      spacing={0}
    >
      {hasDocumentation && (
        <HeaderTab
          disabled={isSandbox}
          label={TABS.documentation}
          active={currentTab === TABS.documentation}
          icon={<IconBook size="1rem" />}
          link={docsPath}
        />
      )}
      <HeaderTab
        disabled={isSandbox}
        label={TABS.reference}
        active={currentTab === TABS.reference}
        icon={<IconCode size="1rem" />}
        link={referencePath}
      />
      {demos.length > 0 && (
        <HeaderTab
          label={TABS.demos}
          active={currentTab === TABS.demos}
          link={`${basePath}/${demos[0]}`}
          icon={<IconTerminal size="1rem" />}
          disabled={isSandbox}
        />
      )}
      <HeaderTab
        disabled={isSandbox}
        external
        icon={<IconBox size="1rem" />}
        label={TABS.sdks}
        active={currentTab === TABS.sdks}
        link={githubUrl ?? '#'}
      />
    </Group>
  )
}

function useGithubUrl(): string | null {
  const router = useRouter()
  const [githubUrl, setGithubUrl] = useState<string | null>(null)

  useEffect(() => {
    if (router.isReady) {
      const subpaths = router.asPath.split('/').filter((p) => p !== '')

      if (subpaths.length >= 2) {
        setGithubUrl(
          `https://github.com/${subpaths[0]}/${subpaths[1]}#${subpaths[1]}`
        )
      }
    }
  }, [router])

  return githubUrl
}

function useBasePath() {
  const router = useRouter()
  const parts = router.asPath.split('/')

  // Keeping the first two sections and appending /reference
  return `/${parts[1]}/${parts[2]}`
}

function useReferencePath() {
  const basePath = useBasePath()
  return `${basePath}/reference`
}

function useDocsPath() {
  const basePath = useBasePath()
  return `${basePath}/docs`
}
