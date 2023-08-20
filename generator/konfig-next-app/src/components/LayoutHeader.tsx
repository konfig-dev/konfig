import { Box, Group, MediaQuery, rem, useMantineTheme } from '@mantine/core'
import { ColorSchemeToggle } from './ColorSchemeToggle'

export function LayoutHeader() {
  const theme = useMantineTheme()
  return (
    <Box
      h="55%"
      px="md"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Group></Group>
      <Group>
        <ColorSchemeToggle />
      </Group>
    </Box>
  )
}
