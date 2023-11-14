import { inactiveColor } from '@/utils/inactive-color'
import {
  MantineTheme,
  NavLink,
  NavLinkProps,
  useMantineTheme,
} from '@mantine/core'
import Link, { LinkProps } from 'next/link'
import { forwardRef } from 'react'

export const NavbarLink = forwardRef<
  HTMLAnchorElement,
  NavLinkProps & LinkProps
>((props, ref) => {
  const theme = useMantineTheme()
  return (
    <NavLink<typeof Link>
      ref={ref}
      {...props}
      component={Link}
      styles={{
        label: {
          color: navbarLinkColor({ theme, active: props.active }),
        },
      }}
    />
  )
})

export function navbarLinkColor({
  theme,
  active,
}: {
  theme: MantineTheme
  active?: boolean
}) {
  return active
    ? theme.colorScheme === 'dark'
      ? theme.colors.brand[4]
      : theme.colors.brand[8]
    : inactiveColor(theme)
}
