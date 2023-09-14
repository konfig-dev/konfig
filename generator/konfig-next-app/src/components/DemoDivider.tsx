import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { Divider } from '@mantine/core'

const _DemoDivider: Components['hr'] = ({
  node,
  className,
  children,
  siblingCount,
}) => {
  return <Divider my="sm" />
}

export const DemoDivider = observer(_DemoDivider)
