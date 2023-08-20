import { Anchor, createStyles, rem } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  tab: {
    fontSize: rem(13),
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    padding: `${rem(7)} ${theme.spacing.sm}`,
    fontWeight: 700,
    borderBottom: `${rem(2)} solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  tabActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor:
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
  },
}))
export function HeaderTab({
  active,
  link,
  label,
}: {
  active: boolean
  link: string
  label: string
}) {
  const { classes, cx } = useStyles()

  return (
    <Anchor<'a'>
      href={link}
      key={label}
      className={cx(classes.tab, { [classes.tabActive]: active })}
    >
      {label}
    </Anchor>
  )
}
