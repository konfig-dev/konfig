import {
  Box,
  Burger,
  Group,
  MantineNumberSize,
  MediaQuery,
  Title,
  rem,
  useMantineTheme,
} from '@mantine/core'
import { ColorSchemeToggle } from './ColorSchemeToggle'
import { observer } from 'mobx-react'
import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { useBaseUrl } from '@/utils/use-base-url'
import Link from 'next/link'

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
    const baseUrl = useBaseUrl()
    return (
      <Box
        h="55%"
        px="md"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          // borderBottom: `1px solid ${
          //   theme.colorScheme === 'dark'
          //     ? theme.colors.brand[8]
          //     : theme.colors.brand[6]
          // }`,
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
              <Link href={baseUrl}>
                <Image
                  style={{
                    objectFit: 'contain',
                  }}
                  fill
                  alt="logo"
                  priority
                  src={logo}
                />
              </Link>
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
