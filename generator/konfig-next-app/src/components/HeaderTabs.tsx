import { Group } from '@mantine/core'
import { HeaderTab } from './HeaderTab'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const TABS = {
  reference: 'API Reference',
  demos: 'Demos',
  sdks: 'SDKs',
} as const

export type Tab = (typeof TABS)[keyof typeof TABS]

export function HeaderTabs({
  currentTab,
  isSandbox,
  hideDemoTab,
}: {
  currentTab: Tab
  isSandbox?: boolean
  hideDemoTab?: boolean
}) {
  const referencePath = useReferencePath()
  const basePath = useBasePath()
  const githubUrl = useGithubUrl()
  return (
    <Group
      h="100%"
      style={{ display: 'flex', alignItems: 'flex-end' }}
      spacing={0}
    >
      <HeaderTab
        disabled={isSandbox}
        label={TABS.reference}
        active={currentTab === TABS.reference}
        link={referencePath}
      />
      {!hideDemoTab && (
        <HeaderTab
          label={TABS.demos}
          active={currentTab === TABS.demos}
          link={basePath}
          disabled={isSandbox}
        />
      )}
      <HeaderTab
        external
        disabled={isSandbox}
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
