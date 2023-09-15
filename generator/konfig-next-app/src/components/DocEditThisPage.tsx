import { Anchor, Group, Text, rem } from '@mantine/core'
import { useContext } from 'react'
import { useSubtleLinkStyles } from './DemoSocials'
import { IconEdit } from '@tabler/icons-react'
import { SandboxContext } from './DemoPortal'
import { observer } from 'mobx-react'

export const DocEditThisPage = observer(
  ({
    owner,
    repo,
    defaultBranch,
    path,
  }: {
    owner: string
    repo: string
    defaultBranch: string
    path: string
  }) => {
    const styles = useSubtleLinkStyles()
    const sandbox = useContext(SandboxContext)
    if (sandbox) return null
    return (
      <Group mx={rem(5)} position="left">
        <Anchor
          target="_blank"
          className={styles.classes.subtleLink}
          unstyled
          href={`https://github.com/${owner}/${repo}/tree/${defaultBranch}/${path}`}
        >
          <Group spacing={rem(5)}>
            <IconEdit size={rem(14)} />
            <Text>Edit this page</Text>
          </Group>
        </Anchor>
      </Group>
    )
  }
)
