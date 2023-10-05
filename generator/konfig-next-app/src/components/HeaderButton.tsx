import { IconBook, IconCode, IconTerminal, IconBox } from '@tabler/icons-react'
import { Group, rem, useMantineTheme } from '@mantine/core'
import { navLinkColor } from '@/utils/nav-link-color'

export const TABS = {
  documentation: 'Documentation',
  reference: 'API Reference',
  demos: 'Demos',
  sdks: 'SDKs',
} as const

export type Tab = (typeof TABS)[keyof typeof TABS]

const ICONS = {
  [TABS.documentation]: IconBook,
  [TABS.reference]: IconCode,
  [TABS.demos]: IconTerminal,
  [TABS.sdks]: IconBox,
} as const

export function HeaderButton({
  tab,
  active,
  noColor,
}: {
  tab: Tab
  active?: boolean
  noColor?: boolean
}) {
  const Icon = ICONS[tab]
  const theme = useMantineTheme()
  active = active === undefined ? true : active
  const labelColor =
    theme.colorScheme === 'dark'
      ? navLinkColor({ active, theme: { ...theme, colorScheme: 'dark' } })
      : active || active === undefined
      ? theme.colors.gray[0]
      : theme.colors.gray[4]
  return (
    <Group
      style={{ color: noColor ? undefined : labelColor }}
      fz={rem(13)}
      fw={700}
      noWrap
      spacing={5}
    >
      <Icon size="1rem" />
      <span style={{ whiteSpace: 'nowrap' }}>{tab}</span>
    </Group>
  )
}
