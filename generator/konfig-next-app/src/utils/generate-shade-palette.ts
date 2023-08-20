import { Tuple } from '@mantine/core'
import chroma from 'chroma-js'
const LIGHTNESS_MAP = [0.97, 0.94, 0.9, 0.85, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3]
const SATURATION_MAP = [0.32, 0.16, 0.08, 0.04, 0, 0, 0.04, 0.08, 0.16, 0.32]

export const generateShadePalette = (color: string): Tuple<string, 10> => {
  const colorChroma = chroma(color)

  const lightnessGoal = colorChroma.get('hsl.l')
  const closestLightness = LIGHTNESS_MAP.reduce((prev, curr) =>
    Math.abs(curr - lightnessGoal) < Math.abs(prev - lightnessGoal)
      ? curr
      : prev
  )

  const baseColorIndex = LIGHTNESS_MAP.findIndex((l) => l === closestLightness)

  const colors = LIGHTNESS_MAP.map((l) => colorChroma.set('hsl.l', l))
    .map((color) => chroma(color))
    .map((color, i) => {
      const saturationDelta = SATURATION_MAP[i] - SATURATION_MAP[baseColorIndex]
      return saturationDelta >= 0
        ? color.saturate(saturationDelta)
        : color.desaturate(saturationDelta * -1)
    })

  return colors.map((color) => color.hex()) as Tuple<string, 10>
}
