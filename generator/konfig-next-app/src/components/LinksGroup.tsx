import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import type { HttpMethods } from 'konfig-lib'
import {
  Group,
  Box,
  Collapse,
  UnstyledButton,
  createStyles,
  rem,
} from '@mantine/core'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { HttpMethodBadge } from './HttpMethodBadge'
import { NavbarLink, navbarLinkColor } from './NavbarLink'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    borderRadius: theme.radius.sm,
    display: 'block',
    width: '100%',
    padding: `8px ${theme.spacing.sm}`,
    fontSize: theme.fontSizes.sm,

    // https://github.com/mantinedev/mantine/blob/6.0.13/src/mantine-core/src/NavLink/NavLink.styles.ts#L52
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  linkWrapper: {
    paddingLeft: rem(12),
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}))

export interface LinksGroupProps {
  label: string
  initiallyOpened?: boolean
  links?: {
    label: string
    link: string
    httpMethod: HttpMethods
    active?: boolean
    metadata?: {
      operationId?: string
    }
  }[]
}

export interface NavbarDataItem {
  label: LinksGroupProps['label']
  initiallyOpened?: LinksGroupProps['initiallyOpened']
  links: NonNullable<LinksGroupProps['links']>
}

export function LinksGroup({
  label,
  initiallyOpened,
  links,
  setOpened: setNavbarOpen,
}: LinksGroupProps & {
  setOpened: Dispatch<SetStateAction<boolean>>
}) {
  const { classes, theme } = useStyles()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft
  const ref = useRef<HTMLAnchorElement>(null)

  const router = useRouter()
  useEffect(() => {
    if (router.query.tag === label) {
      setOpened(true)
    }
  }, [router.query])

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    })
  }, [])
  const items = (hasLinks ? links : []).map((link, i) => {
    return (
      <Box className={classes.linkWrapper} key={`${link.label}:${i}`}>
        <NavbarLink
          className="flex-wrap"
          onClick={() => setNavbarOpen(false)}
          ref={ref}
          href={link.link}
          label={link.label}
          active={link.active}
          rightSection={<HttpMethodBadge httpMethod={link.httpMethod} />}
        />
      </Box>
    )
  })

  const anyActiveLinks = links?.find((link) => link.active) !== undefined

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
        lh={theme.lineHeight}
        style={{
          color: navbarLinkColor({ theme, active: anyActiveLinks }),
        }}
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
