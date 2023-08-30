import { Box, Group, Title } from '@mantine/core'
import { ColorSchemeToggle } from './ColorSchemeToggle'
import { observer } from 'mobx-react'

export const LayoutHeader = observer(({ title }: { title: string }) => {
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
      <Group>
        <Title order={4}>{title}</Title>
      </Group>
      <Group>
        <ColorSchemeToggle />
      </Group>
    </Box>
  )
})
