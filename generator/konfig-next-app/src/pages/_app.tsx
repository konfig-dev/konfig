import { AppProps } from 'next/app'
import Head from 'next/head'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { trpc } from '../utils/trpc'
import '@/styles/globals.css'
import { Notifications } from '@mantine/notifications'
import { Tuple, DefaultMantineColor } from '@mantine/core'
import { getClickableStyles } from '@/utils/get-clickable-styles'

type ExtendedCustomColors = 'brand' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}

function App(props: AppProps) {
  const { Component, pageProps } = props

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  })
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            components: {
              NavLink: {
                styles: (theme) => ({
                  label: {
                    fontSize: theme.fontSizes.sm,
                    fontWeight: 500,
                  },
                }),
              },
              Input: {
                styles: (theme) => ({
                  input: getClickableStyles(theme),
                }),
              },
              Badge: {
                styles: (theme) => ({
                  root: {
                    borderRadius: theme.radius.xs,
                  },
                }),
                defaultProps: (theme) => ({
                  variant: theme.colorScheme === 'dark' ? 'light' : 'filled',
                  size: 'xs',
                }),
                // <Badge radius="xs" color="blue" size="xs">
              },
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Notifications />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default trpc.withTRPC(App)
