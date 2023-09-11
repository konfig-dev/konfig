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
    <ActionIcon variant="sublte" onClick={() => toggleColorScheme()} size={25}>
      {colorScheme === 'dark' ? (
        <IconSun color={theme.white} size="1rem" />
      ) : (
        <IconMoonStars color={theme.white} size="1rem" />
      )}
    </ActionIcon>
  )
}
