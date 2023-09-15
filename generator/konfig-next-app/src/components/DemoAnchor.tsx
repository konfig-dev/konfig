import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { Anchor, useMantineTheme } from '@mantine/core'

const _DemoAnchor: Components['a'] = ({
  node,
  className,
  children,
  siblingCount,
  ...props
}) => {
  const { colors } = useMantineTheme()
  return (
    <Anchor color={colors.brand[7]} {...props}>
      {children}
    </Anchor>
  )
}

export const DemoAnchor = observer(_DemoAnchor)
