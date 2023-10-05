import { linkColor } from '@/utils/link-color'
import { Anchor, createStyles, rem, useMantineTheme } from '@mantine/core'
import { useRouter } from 'next/router'
import { HeaderButton, Tab } from './HeaderButton'

const useStyles = createStyles((theme) => ({
  tab: {
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `${rem(2)} solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: linkColor({ theme: { ...theme, colorScheme: 'dark' } }),
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
}: {
  active: boolean
  link: string
  label: Tab
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
      <HeaderButton active={active} tab={label} />
    </Anchor>
  )
}
