import { Anchor, createStyles, rem, useMantineTheme } from '@mantine/core'
import { useRouter } from 'next/router'
import {
  HeaderButton,
  Tab,
  useColorStyles,
  useLightDarkModeColorStyles,
} from './HeaderButton'

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

const useTabActiveLightDarkStyles = createStyles((theme) => ({
  tabActive: {
    borderBottomColor:
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 8],
  },
}))
export function HeaderTab({
  active,
  link,
  label,
  external,
  disabled,
  hasLightAndDarkLogo,
}: {
  active: boolean
  link: string
  label: Tab
  external?: boolean
  disabled?: boolean
  hasLightAndDarkLogo: boolean
}) {
  const { classes, cx } = useStyles()
  const router = useRouter()
  const colorStyles = useColorStyles()
  const hasLightDarkModeStyles = useLightDarkModeColorStyles()
  const tabLightDarkModeStyles = useTabActiveLightDarkStyles()

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
      data-active={active}
      aria-disabled={disabled}
      onClick={handleClick}
      style={{
        marginBottom: hasLightAndDarkLogo ? -1 : undefined,
      }}
      className={cx(classes.tab, {
        [hasLightDarkModeStyles.classes.color]: hasLightAndDarkLogo,
        [colorStyles.classes.color]: !hasLightAndDarkLogo,
        [classes.tabActive]: active && !hasLightAndDarkLogo,
        [tabLightDarkModeStyles.classes.tabActive]:
          active && hasLightAndDarkLogo,
        [classes.tabDisabled]: disabled,
      })}
    >
      <HeaderButton
        hasLightDarkMode={hasLightAndDarkLogo}
        noColor
        active={active}
        tab={label}
      />
    </Anchor>
  )
}
