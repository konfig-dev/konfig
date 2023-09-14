import { Anchor, Group, createStyles, rem } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  tab: {
    fontSize: rem(13),
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[5]
        : theme.colors.gray[4],
    padding: `${rem(7)} ${theme.spacing.sm}`,
    fontWeight: 700,
    borderBottom: `${rem(2)} solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: theme.white,
      textDecoration: 'none',
    },
  },

  tabDisabled: {
    cursor: 'not-allowed',
    color: 'grey',
    textDecoration: 'none',
    opacity: 0.5,

    '&:hover': {
      color: 'grey', // Override the hover color
      textDecoration: 'none', // Override the hover text decoration
    },
  },

  tabActive: {
    color: `${theme.white} !important`,
    borderBottomColor:
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 3],
  },
}))
export function HeaderTab({
  active,
  link,
  label,
  external,
  disabled,
  icon,
}: {
  active: boolean
  link: string
  label: string
  external?: boolean
  disabled?: boolean
  icon?: React.ReactNode
}) {
  const { classes, cx } = useStyles()
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault()
      return
    }

    if (external) return

    e.preventDefault()
    router.push(link, undefined)
  }

  return (
    <Anchor<'a'>
      key={label}
      href={external ? link : undefined}
      target="_blank"
      aria-disabled={disabled}
      onClick={handleClick}
      className={cx(classes.tab, {
        [classes.tabActive]: active,
        [classes.tabDisabled]: disabled,
      })}
    >
      <Group noWrap spacing={5}>
        {icon}
        <span style={{ whiteSpace: 'nowrap' }}>{label}</span>
      </Group>
    </Anchor>
  )
}
