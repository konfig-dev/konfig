import {
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons-react'

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()
  return (
    <ActionIcon
      color={colorScheme === 'light' ? 'brand' : undefined}
      variant={colorScheme === 'light' ? 'filled' : 'light'}
      onClick={() => toggleColorScheme()}
      size={25}
    >
      {colorScheme === 'dark' ? (
        <IconSun size="1rem" />
      ) : (
        <IconMoonStars size="1rem" />
      )}
    </ActionIcon>
  )
}
