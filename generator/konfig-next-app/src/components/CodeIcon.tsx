import { linkColor } from '@/utils/link-color'
import { useMantineTheme } from '@mantine/core'
import { IconCode } from '@tabler/icons-react'

export function CodeIcon() {
  const theme = useMantineTheme()
  return <IconCode stroke={1.5} size="1.3rem" color={linkColor({ theme })} />
}
