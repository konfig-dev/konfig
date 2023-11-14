import { Header, useMantineTheme } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { TITLE_OFFSET_PX } from './DemoTitle'
import { MarkdownPageProps } from '@/utils/generate-props-for-markdown-page'
import { SpotlightProvider } from './SpotlightProvider'

export function HeaderWrapper({
  children,
  hasLightAndDarkLogo,
  allMarkdown,
}: PropsWithChildren<{
  hasLightAndDarkLogo: boolean
  allMarkdown: MarkdownPageProps['allMarkdown']
}>) {
  const theme = useMantineTheme()
  return (
    <Header
      style={{
        background: hasLightAndDarkLogo
          ? theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.white
          : theme.colorScheme === 'dark'
          ? `${theme.colors.brand[9]}`
          : `${theme.colors.brand[7]}`,
        borderBottom: hasLightAndDarkLogo ? undefined : 'none',
      }}
      height={TITLE_OFFSET_PX}
    >
      <SpotlightProvider allMarkdown={allMarkdown}>
        {children}
      </SpotlightProvider>
    </Header>
  )
}
