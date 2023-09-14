import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { Alert } from '@mantine/core'
import { IconNote } from '@tabler/icons-react'

const _DemoNote: Components['div'] = ({
  node,
  className,
  children,
  siblingCount,
  ...props
}) => {
  return (
    <Alert title={props.title} icon={<IconNote size="1rem" />}>
      {children}
    </Alert>
  )
}

export const DemoNote = observer(_DemoNote)
