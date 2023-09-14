import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { Alert } from '@mantine/core'
import { IconTrafficCone } from '@tabler/icons-react'

const _DemoWarn: Components['div'] = ({
  node,
  className,
  children,
  siblingCount,
  ...props
}) => {
  return (
    <Alert
      color="yellow"
      title={props.title}
      icon={<IconTrafficCone size="1rem" />}
    >
      {children}
    </Alert>
  )
}

export const DemoWarn = observer(_DemoWarn)
