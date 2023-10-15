import { useHeaderColor } from '@/utils/use-header-color'
import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons-react'

export function ColorSchemeToggle({
  hasLightAndDarkLogo,
}: {
  hasLightAndDarkLogo: boolean
}) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const color = useHeaderColor({ hasLightAndDarkLogo })
  return (
    <ActionIcon variant="sublte" onClick={() => toggleColorScheme()} size={25}>
      {colorScheme === 'dark' ? (
        <IconSun color={color} size="1rem" />
      ) : (
        <IconMoonStars color={color} size="1rem" />
      )}
    </ActionIcon>
  )
}
