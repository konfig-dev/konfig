import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { useMantineTheme, Text, Button, rem } from '@mantine/core'
import Link from 'next/link'
import { IconCode, IconTerminal } from '@tabler/icons-react'
import { DemoInlineLinkButton } from './DemoInlineLinkButton'

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
      <DemoInlineLinkButton
        label={children}
        leftIcon={<IconTerminal size={rem(12)} />}
        href={href ?? '#'}
        {...props}
      />
    )
  }

  if (href?.includes('/reference/')) {
    return (
      <DemoInlineLinkButton
        label={children}
        leftIcon={<IconCode size={rem(12)} />}
        href={href ?? '#'}
        {...props}
      />
    )
  }
  return (
    <Link
      href={href ?? '#'}
      style={{
        color: colors.brand[7],
        textDecoration: 'none',
        wordWrap: 'break-word',
      }}
      {...props}
    >
      {children}
    </Link>
  )
}

export const DemoAnchor = observer(_DemoAnchor)
