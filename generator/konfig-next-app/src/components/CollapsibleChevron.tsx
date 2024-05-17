import { createStyles } from '@mantine/core'
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react'

const useStyles = createStyles(() => ({
  chevron: {
    transition: 'transform 200ms ease',
  },
}))

export function CollapsibleChevron({ opened }: { opened: boolean }) {
  const { classes, theme } = useStyles()
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft
  return (
    <ChevronIcon
      className={classes.chevron}
      size="1rem"
      stroke={1.5}
      style={{
        transform: opened
          ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
          : 'none',
      }}
    />
  )
}
