import React, { useEffect, useState, useMemo } from 'react'
import {
  Text,
  ScrollArea,
  useMantineTheme,
  rem,
  createStyles,
  em,
  getBreakpointValue,
  Aside,
  MediaQuery,
} from '@mantine/core'
import { IconList } from '@tabler/icons-react'
import { TITLE_OFFSET_PX } from './DemoTitle'

const useStyles = createStyles((theme) => ({
  wrapper: {
    boxSizing: 'border-box',

    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.sm) - 1)})`]:
      {
        display: 'none',
      },
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  items: {
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  link: {
    display: 'block',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    borderLeft: `${rem(1)} solid transparent`,
    padding: `${rem(8)} ${theme.spacing.md}`,
    marginLeft: -1,
  },

  linkActive: {
    borderLeftColor: theme.colors.blue[5],
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors.blue[9], 0.45)
        : theme.colors.blue[0],
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.blue[1]
        : theme.colors.blue[8],
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },

  title: {
    marginLeft: theme.spacing.md,
  },
}))

interface TableOfContentsProps {
  demoDiv: HTMLDivElement | null
}

function getActiveElement(rects: DOMRect[]) {
  if (rects.length === 0) {
    return -1
  }

  const y = (rect: DOMRect) => {
    return Math.abs(rect.y - TITLE_OFFSET_PX)
  }

  const closest = rects.reduce(
    (acc, item, index) => {
      if (Math.abs(acc.position) < y(item)) {
        return acc
      }

      return {
        index,
        position: y(item),
      }
    },
    { index: 0, position: y(rects[0]) }
  )

  return closest.index
}

function getHeadingElementsFromDiv(div: HTMLDivElement): HTMLHeadingElement[] {
  const headingElements: HTMLHeadingElement[] = []

  // Iterate over the children of the div
  for (let i = 0; i < div.children.length; i++) {
    const child = div.children[i]

    // Check if the child is an HTMLHeadingElement
    if (child instanceof HTMLHeadingElement) {
      headingElements.push(child)
    }
  }

  return headingElements
}

function getHeadingOrder(headingElement: HTMLHeadingElement): number {
  const tagName = headingElement.tagName.toLowerCase()
  const order = parseInt(tagName.replace('h', ''), 10)

  return isNaN(order) ? 0 : order
}

export default function DemoTableOfContents({ demoDiv }: TableOfContentsProps) {
  const headings: HTMLHeadingElement[] =
    demoDiv !== null ? getHeadingElementsFromDiv(demoDiv) : []

  const theme = useMantineTheme()
  const { classes, cx } = useStyles()
  const [active, setActive] = useState(0)

  const filteredHeadings = headings.filter(
    (heading) => getHeadingOrder(heading) > 1
  )

  const handleScroll = useMemo(
    () => () => {
      setActive(
        getActiveElement(filteredHeadings.map((d) => d.getBoundingClientRect()))
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filteredHeadings, demoDiv]
  )

  // trigger active element computation when component mounts
  // this ensures table of contents is highlighting the right section when you navigate to something with a slug like:
  // https://demo.konfigthis.com/konfig-dev/konfig-demo-docs/demo#demo:create-user
  useEffect(() => handleScroll(), [handleScroll])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  if (filteredHeadings.length === 0) {
    return null
  }

  const items = filteredHeadings.map((heading, index) => {
    return (
      <Text<'a'>
        key={heading.id}
        component="a"
        size="sm"
        className={cx(classes.link, { [classes.linkActive]: active === index })}
        href={`#${heading.id}`}
        sx={{
          paddingLeft: `calc(${getHeadingOrder(heading) - 1} * ${
            theme.spacing.lg
          })`,
        }}
      >
        {heading.innerText}
      </Text>
    )
  })

  if (headings.length === 0) return null

  return (
    <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
      <Aside
        style={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
          border: 'none',
        }}
        p="sm"
        hiddenBreakpoint="lg"
        width={{ base: 300 }}
      >
        <nav className={cx(classes.wrapper)}>
          <div className={classes.inner}>
            <div>
              <div className={classes.header}>
                <IconList size={20} stroke={1.5} />
                <Text className={classes.title}>Table of contents</Text>
              </div>
              <ScrollArea.Autosize
                mah={`calc(100vh - ${rem(140)})`}
                type="scroll"
                offsetScrollbars
              >
                <div className={classes.items}>{items}</div>
              </ScrollArea.Autosize>
            </div>
          </div>
        </nav>
      </Aside>
    </MediaQuery>
  )
}
