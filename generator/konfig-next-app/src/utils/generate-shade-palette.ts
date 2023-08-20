import { Tuple } from '@mantine/core'
import chroma from 'chroma-js'

export const generateShadePalette = (color: string): Tuple<string, 10> => {
  const baseColor = chroma(color)
  const lightness = baseColor.get('hsl.l')
  const targetIndex = Math.round(lightness * 9)
  const scale = chroma
    .scale([baseColor.brighten(1.5), baseColor, baseColor.darken(1.5)])
    .mode('lab')
  const shades = Array.from({ length: 10 }, (_, i) => {
    if (i === targetIndex) {
      return baseColor.hex()
    }
    return scale(i / 9).hex()
  })
  return shades as Tuple<string, 10>
}
