import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { useMantineTheme, Text, Button, rem } from '@mantine/core'
import Link from 'next/link'
import { IconCode, IconTerminal } from '@tabler/icons-react'

const _DemoAnchor: Components['a'] = ({
  node,
  className,
  children,
  siblingCount,
  href,
  ...props
}) => {
  const { colors } = useMantineTheme()
  if (href === 'javascript:void(0)')
    return (
      <Text span color="red" td="line-through">
        {children}
      </Text>
    )
  if (href?.includes('/demo/')) {
    return (
      <Link
        href={href ?? '#'}
        style={{ color: colors.brand[7], textDecoration: 'none' }}
        {...props}
      >
        <Button
          leftIcon={<IconTerminal size={rem(12)} />}
          variant="light"
          compact
          size="sm"
        >
          {children}
        </Button>
      </Link>
    )
  }

  if (href?.includes('/reference/')) {
    return (
      <Link
        href={href ?? '#'}
        style={{ color: colors.brand[7], textDecoration: 'none' }}
        {...props}
      >
        <Button
          leftIcon={<IconCode size={rem(12)} />}
          variant="light"
          compact
          size="sm"
        >
          {children}
        </Button>
      </Link>
    )
  }
  return (
    <Link
      href={href ?? '#'}
      style={{ color: colors.brand[7], textDecoration: 'none' }}
      {...props}
    >
      {children}
    </Link>
  )
}

export const DemoAnchor = observer(_DemoAnchor)
