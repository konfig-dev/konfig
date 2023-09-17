import React, { useContext } from 'react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'

import { Box, Text, createStyles, getStylesRef, rem } from '@mantine/core'
import { Sibling } from './DemoSiblings'
import { useRouter } from 'next/router'
import { PortalState, SandboxContext } from './DemoPortal'
import { navigateToDemo } from '@/utils/navigate-to-demo'
import { useWindowScroll } from '@mantine/hooks'

const useStyles = createStyles((theme) => ({
  control: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    textDecoration: 'none',
    justifyContent: 'space-between',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    transition: 'box-shadow 100ms ease, transform 100ms ease',

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      boxShadow: theme.shadows.md,
      transform: theme.colorScheme === 'dark' ? 'none' : 'scale(1.01)',
    }),
  },

  body: {
    ref: getStylesRef('body'),
  },

  next: {
    [`& .${getStylesRef('body')}`]: {
      marginRight: theme.spacing.md,
    },
  },
}))

interface Props {
  data: Sibling
  type: 'next' | 'prev'
  className?: string
  portal: PortalState
  omitOwnerAndRepo: boolean
}

export function DemoSibling({
  data: { organizationId, demoId, title, demoIndex },
  type,
  className,
  portal,
  omitOwnerAndRepo,
}: Props) {
  const { classes, cx } = useStyles()
  const router = useRouter()
  const sandbox = useContext(SandboxContext)

  return (
    <Box
      onClick={() => {
        navigateToDemo({
          demoId,
          demoIndex,
          organizationId,
          portal,
          router,
          sandbox,
          omitOwnerAndRepo,
        })
      }}
      className={cx(
        classes.control,
        type === 'next' ? classes[type] : undefined,
        className
      )}
    >
      {type === 'prev' && <IconArrowLeft size={rem(22)} stroke={1.5} />}

      <div className={classes.body}>
        <Text size="lg" align={type === 'next' ? 'left' : 'right'}>
          {type === 'next' ? 'Up next' : 'Go back'}
        </Text>
        <Text
          color="dimmed"
          size="sm"
          align={type === 'next' ? 'left' : 'right'}
        >
          {title}
        </Text>
      </div>

      {type === 'next' && <IconArrowRight size={rem(22)} stroke={1.5} />}
    </Box>
  )
}
