import { MantineTheme, MantineThemeColors } from '@mantine/core'
import { generateShadePalette } from './generate-shade-palette'

export function generateMantineThemeColors({
  primaryColor,
  colors,
}: {
  primaryColor?: string | null
  colors: MantineTheme['colors']
}): {
  colors: Partial<MantineThemeColors>
} {
  return {
    colors: {
      brand:
        primaryColor !== undefined && primaryColor != null
          ? generateShadePalette(primaryColor)
          : colors.blue,
    },
  }
}
