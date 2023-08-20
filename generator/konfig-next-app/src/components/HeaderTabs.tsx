import { Group } from '@mantine/core'
import { HeaderTab } from './HeaderTab'

export const TABS = {
  reference: 'API Reference',
  demos: 'Demos',
  sdks: 'SDKs',
} as const

export type Tab = (typeof TABS)[keyof typeof TABS]

export function HeaderTabs({ currentTab }: { currentTab: Tab }) {
  return (
    <Group
      h="100%"
      style={{ display: 'flex', alignItems: 'flex-end' }}
      spacing={0}
    >
      <HeaderTab
        label={TABS.reference}
        active={currentTab === TABS.reference}
        link="#"
      />
      <HeaderTab
        label={TABS.demos}
        active={currentTab === TABS.demos}
        link="#"
      />
      <HeaderTab label={TABS.sdks} active={currentTab === TABS.sdks} link="#" />
    </Group>
  )
}
