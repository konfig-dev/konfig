import { MantineTheme, MantineThemeColors } from '@mantine/core'
import { generateShadePalette } from './generate-shade-palette'

export function generateMantineThemeColors({
  primaryColor,
  colors,
  label = 'brand',
}: {
  primaryColor?: string | null
  colors: MantineTheme['colors']
  label?: string
}): {
  colors: Partial<MantineThemeColors>
} {
  const seedColor =
    primaryColor !== null && primaryColor !== undefined
      ? primaryColor
      : colors.blue[6]

  const color = generateShadePalette(seedColor)
  const rgbColors = generateShadePalette(seedColor, true)

  if (typeof window !== 'undefined') {
    // create CSS variables for every color shade labeled as --color-brand-50, --color-brand-100, etc.
    for (const [key, value] of Object.entries(rgbColors)) {
      document.documentElement.style.setProperty(
        `--color-${label}-${key}00`,
        value
      )
    }
  }

  return {
    colors: {
      [label]: color,
    },
  }
}
