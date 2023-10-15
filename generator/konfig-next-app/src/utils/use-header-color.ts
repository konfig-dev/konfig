import { useMantineTheme } from '@mantine/core'
export function useHeaderColor({
  hasLightAndDarkLogo,
}: {
  hasLightAndDarkLogo: boolean
}) {
  const theme = useMantineTheme()
  return hasLightAndDarkLogo
    ? theme.colorScheme === 'dark'
      ? theme.white
      : theme.black
    : theme.white
}
