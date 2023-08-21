import { useState } from 'react'
import type { HttpMethods } from 'konfig-lib'
import { HttpMethodsEnum } from 'konfig-lib/dist/forEachOperation'
import {
  Group,
  Box,
  Collapse,
  UnstyledButton,
  createStyles,
  rem,
  NavLink,
  Badge,
  MantineColor,
} from '@mantine/core'
import {
  IconCalendarStats,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkWrapper: {
    paddingLeft: rem(20),
  },

  link: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}))

export interface LinksGroupProps {
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string; httpMethod: HttpMethods }[]
}

export interface NavbarDataItem {
  label: LinksGroupProps['label']
  links: NonNullable<LinksGroupProps['links']>
}

export function LinksGroup({ label, initiallyOpened, links }: LinksGroupProps) {
  const { classes, theme } = useStyles()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft
  const items = (hasLinks ? links : []).map((link) => {
    const httpMethodColor = (method: HttpMethods): MantineColor => {
      if (method === HttpMethodsEnum.GET) return 'green'
      if (method === HttpMethodsEnum.POST) return 'blue'
      if (method === HttpMethodsEnum.PUT) return 'blue'
      if (method === HttpMethodsEnum.DELETE) return 'red'
      if (method === HttpMethodsEnum.PATCH) return 'yellow'
      if (method === HttpMethodsEnum.OPTIONS) return 'yellow'
      if (method === HttpMethodsEnum.TRACE) return 'yellow'
      return 'gray'
    }
    return (
      <Box className={classes.linkWrapper} key={link.label}>
        <NavLink<typeof Link>
          component={Link}
          className={classes.link}
          href={link.link}
          label={link.label}
          rightSection={
            <Badge
              variant={theme.colorScheme === 'light' ? 'filled' : 'light'}
              color={httpMethodColor(link.httpMethod)}
              radius="xs"
            >
              {link.httpMethod}
            </Badge>
          }
        />
      </Box>
    )
  })

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box>{label}</Box>
          {hasLinks && (
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
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}

const mockdata = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
}
