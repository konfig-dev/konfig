import { Group, Text, rem } from '@mantine/core'
import { useContext } from 'react'
import { SandboxContext } from './DemoPortal'
import { observer } from 'mobx-react'
import { DemoState } from './DemoMarkdown'

export const DemoLastRan = observer(({ demo }: { demo: DemoState }) => {
  const sandbox = useContext(SandboxContext)
  if (sandbox) return null
  if (demo.portal === undefined) return null
  return (
    <Group mx={rem(5)} position="apart">
      <Text weight="bolder" sx={{ color: 'gray' }} size={rem(14)}>
        {demo.portal.portalName}
      </Text>

      {demo.howLongAgoLastSuccessfulExecution && (
        <Text sx={{ color: 'gray' }} size={rem(12)}>
          Ran {demo.howLongAgoLastSuccessfulExecution}
        </Text>
      )}
    </Group>
  )
})
