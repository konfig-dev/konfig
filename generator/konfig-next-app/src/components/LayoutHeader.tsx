import {
  Box,
  Burger,
  Group,
  MantineNumberSize,
  MediaQuery,
  Title,
  rem,
  useMantineColorScheme,
  Image as MantineImage,
  useMantineTheme,
} from '@mantine/core'
import { ColorSchemeToggle } from './ColorSchemeToggle'
import { observer } from 'mobx-react'
import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

export const LayoutHeader = observer(
  ({
    title,
    opened,
    setOpened,
    breakpoint,
    logo,
  }: {
    title: string
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
    breakpoint: MantineNumberSize
    logo: string | null
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
        <Group spacing="xs">
          <MediaQuery largerThan={breakpoint} styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.white}
            />
          </MediaQuery>
          {logo !== null ? (
            // <MantineImage height={24} mx="auto" src={logo} alt="Random image" />
            <div
              style={{ position: 'relative', height: rem(24), width: rem(140) }}
            >
              <Image
                style={{
                  objectFit: 'contain',
                }}
                fill
                alt="logo"
                priority
                src={logo}
              />
            </div>
          ) : (
            <Title order={4}>{title}</Title>
          )}
        </Group>
        <Group>
          <ColorSchemeToggle />
        </Group>
      </Box>
    )
  }
)
