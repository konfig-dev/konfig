import { Header, useMantineTheme } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { TITLE_OFFSET_PX } from './DemoTitle'

export function HeaderWrapper({
  children,
  hasLightAndDarkLogo,
}: PropsWithChildren<{ hasLightAndDarkLogo: boolean }>) {
  const theme = useMantineTheme()
  return (
    <Header
      style={{
        background: hasLightAndDarkLogo
          ? undefined
          : theme.colorScheme === 'dark'
          ? `${theme.colors.brand[9]}`
          : `${theme.colors.brand[7]}`,
        // backdropFilter: 'blur(4px)',
        // WebkitBackdropFilter: 'blur(4px)',
      }}
      height={TITLE_OFFSET_PX}
    >
      {children}
    </Header>
  )
}
