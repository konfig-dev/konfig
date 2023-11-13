import { IconBook, IconCode, IconTerminal, IconBox } from '@tabler/icons-react'
import { Group, createStyles, rem } from '@mantine/core'
import { linkColor } from '@/utils/link-color'
import { inactiveColor } from '@/utils/inactive-color'

export const TABS = {
  documentation: 'Documentation',
  reference: 'API Reference',
  demos: 'Demos',
  sdks: 'SDKs',
} as const

export type TabType = typeof TABS
export type Tab = (typeof TABS)[keyof typeof TABS]

export const ICONS = {
  [TABS.documentation]: IconBook,
  [TABS.reference]: IconCode,
  [TABS.demos]: IconTerminal,
  [TABS.sdks]: IconBox,
} as const

export const useColorStyles = createStyles((theme) => ({
  color: {
    // transition color
    transition: 'color 200ms ease',
    '&[data-active="true"]': {
      color: theme.white,
    },
    '&[data-active="false"]': {
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.brand[6]
          : theme.colors.brand[4],
    },
    '&:hover': {
      color: theme.white,
    },
  },
}))

/**
 * This is a special color style for when the user provides light/dark mode versions of their logo. In this case,
 * we are using a dark/light background to contrast the logo so we need to use different text colors to accomodate
 * the dark/light background.
 */
export const useLightDarkModeColorStyles = createStyles((theme) => ({
  color: {
    // transition color
    transition: 'color 200ms ease',
    '&[data-active="true"]': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
    '&[data-active="false"]': {
      color: inactiveColor(theme),
    },
    '&:hover': {
      color: linkColor({ theme }),
    },
  },
}))

export function HeaderButton({
  tab,
  hasLightDarkMode,
  active,
  noColor,
}: {
  tab: Tab
  hasLightDarkMode: boolean
  active?: boolean
  noColor?: boolean
}) {
  const Icon = ICONS[tab]
  const { classes } = useColorStyles()
  const { classes: lightDarkModeClasses, cx } = useLightDarkModeColorStyles()
  active = active === undefined ? true : active
  return (
    <Group
      fz={rem(13)}
      fw={700}
      data-active={noColor ? undefined : active || active === undefined}
      noWrap
      spacing={5}
      className={
        noColor
          ? undefined
          : cx({
              [classes.color]: !hasLightDarkMode,
              [lightDarkModeClasses.color]: hasLightDarkMode,
            })
      }
    >
      <Icon size="1rem" />
      <span style={{ whiteSpace: 'nowrap' }}>{tab}</span>
    </Group>
  )
}
