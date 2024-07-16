import {
  Box,
  Burger,
  Button,
  Group,
  MantineNumberSize,
  MediaQuery,
  Title,
  createStyles,
  rem,
  useMantineTheme,
} from '@mantine/core'
import { ColorSchemeToggle } from './ColorSchemeToggle'
import { observer } from 'mobx-react'
import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { useBaseUrl } from '@/utils/use-base-url'
import Link from 'next/link'
import type { GenerateLogoLinkResponse } from '@/utils/generate-logo-link'
import { useHeaderColor } from '@/utils/use-header-color'
import { MarkdownPageProps } from '@/utils/generate-props-for-markdown-page'
import { Search } from './Search'
import { KonfigYamlCommonType } from 'konfig-lib'

const useLogoStyles = createStyles(() => ({
  logo: {
    position: 'relative !important' as any,
  },
}))

export const LayoutHeader = observer(
  ({
    title,
    opened,
    setOpened,
    breakpoint,
    allMarkdown,
    logo,
    cta,
  }: {
    title: string
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
    breakpoint: MantineNumberSize
    logo: GenerateLogoLinkResponse
    allMarkdown: MarkdownPageProps['allMarkdown']
    cta: NonNullable<KonfigYamlCommonType['portal']>['cta'] | null
  }) => {
    const theme = useMantineTheme()
    const baseUrl = useBaseUrl()
    const hasLightAndDarkLogo = typeof logo !== 'string'
    const color = useHeaderColor({ hasLightAndDarkLogo })
    const { classes } = useLogoStyles()
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
              color={color}
            />
          </MediaQuery>
          {logo !== null ? (
            // <MantineImage height={24} mx="auto" src={logo} alt="Random image" />
            <div
              style={{
                display: 'flex',
                position: 'relative',
                height: 24,
                width: rem(140),
              }}
            >
              <Link style={{ position: 'relative' }} href={baseUrl}>
                <Image
                  className={classes.logo}
                  sizes="20vw"
                  style={{
                    objectFit: 'contain',
                  }}
                  fill
                  alt="logo"
                  priority
                  src={
                    typeof logo === 'string'
                      ? logo
                      : theme.colorScheme === 'dark'
                      ? logo.dark
                      : logo.light
                  }
                />
              </Link>
            </div>
          ) : (
            <Title order={4}>{title}</Title>
          )}
        </Group>
        <Group>
          <div className="sm:hidden">
            <Search />
          </div>
          {cta ? (
            <Button
              variant={
                !hasLightAndDarkLogo
                  ? 'filled'
                  : theme.colorScheme === 'dark'
                  ? 'light'
                  : 'filled'
              }
              component="a"
              target="_blank"
              className="hidden sm:block"
              color={
                !hasLightAndDarkLogo
                  ? 'dark'
                  : theme.colorScheme === 'dark'
                  ? 'brand'
                  : 'dark'
              }
              href={cta.url}
            >
              {cta.label}
            </Button>
          ) : null}
          <ColorSchemeToggle hasLightAndDarkLogo={typeof logo !== 'string'} />
        </Group>
      </Box>
    )
  }
)
