import {
  Box,
  Burger,
  Group,
  MantineNumberSize,
  MediaQuery,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { ColorSchemeToggle } from './ColorSchemeToggle'
import { observer } from 'mobx-react'
import { Dispatch, SetStateAction } from 'react'

export const LayoutHeader = observer(
  ({
    title,
    opened,
    setOpened,
    breakpoint,
  }: {
    title: string
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
    breakpoint: MantineNumberSize
  }) => {
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
        <Group>
          <MediaQuery largerThan={breakpoint} styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="md"
            />
          </MediaQuery>
          <Title order={4}>{title}</Title>
        </Group>
        <Group>
          <ColorSchemeToggle />
        </Group>
      </Box>
    )
  }
)
