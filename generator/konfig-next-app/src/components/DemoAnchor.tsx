import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { useMantineTheme } from '@mantine/core'
import Link from 'next/link'

const _DemoAnchor: Components['a'] = ({
  node,
  className,
  children,
  siblingCount,
  href,
  ...props
}) => {
  const { colors } = useMantineTheme()
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
