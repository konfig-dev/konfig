import {
  Navbar,
  Group,
  Code,
  ScrollArea,
  createStyles,
  rem,
} from '@mantine/core'
import { LinksGroup, NavbarDataItem } from './LinksGroup'
import { Dispatch, SetStateAction } from 'react'

export const NAVBAR_WIDTH = 350

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    width: '100%',
  },

  linksInner: {
    width: NAVBAR_WIDTH,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}))

export function ReferenceNavbar({
  navbarData,
  setOpened,
  basePath,
}: {
  navbarData: NavbarDataItem[]
  setOpened: Dispatch<SetStateAction<boolean>>
  basePath: string
}) {
  const { classes } = useStyles()
  const links = navbarData.map((item) => (
    <LinksGroup setOpened={setOpened} {...item} key={item.label} />
  ))

  return (
    <>
      <Navbar.Section p="md" className={classes.header}>
        <Code>{basePath}</Code>
      </Navbar.Section>

      <Navbar.Section py="md" grow>
        {links}
      </Navbar.Section>
    </>
  )
}
