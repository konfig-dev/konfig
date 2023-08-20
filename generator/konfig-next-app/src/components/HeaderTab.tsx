import { Anchor, Group, createStyles, rem } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import { useRouter } from 'next/router'

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
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor:
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
  },
}))
export function HeaderTab({
  active,
  link,
  label,
  external,
  disabled,
}: {
  active: boolean
  link: string
  label: string
  external?: boolean
  disabled?: boolean
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
      {external ? (
        <Group spacing={5}>
          <IconExternalLink size="1rem" />
          <span>{label}</span>
        </Group>
      ) : (
        label
      )}
    </Anchor>
  )
}
