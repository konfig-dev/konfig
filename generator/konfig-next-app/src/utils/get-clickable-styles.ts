import { MantineTheme } from '@mantine/core'

export function getClickableStyles(theme: MantineTheme) {
  return {
    backgroundColor: `${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
    }`,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
    }` as const,
  }
}
