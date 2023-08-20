import { Group } from '@mantine/core'
import { HeaderTab } from './HeaderTab'
import { useRouter } from 'next/router'

export const TABS = {
  reference: 'API Reference',
  demos: 'Demos',
  sdks: 'SDKs',
} as const

export type Tab = (typeof TABS)[keyof typeof TABS]

export function HeaderTabs({ currentTab }: { currentTab: Tab }) {
  const referencePath = useReferencePath()
  const basePath = useBasePath()
  return (
    <Group
      h="100%"
      style={{ display: 'flex', alignItems: 'flex-end' }}
      spacing={0}
    >
      <HeaderTab
        label={TABS.reference}
        active={currentTab === TABS.reference}
        link={referencePath}
      />
      <HeaderTab
        label={TABS.demos}
        active={currentTab === TABS.demos}
        link={basePath}
      />
      <HeaderTab label={TABS.sdks} active={currentTab === TABS.sdks} link="#" />
    </Group>
  )
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
