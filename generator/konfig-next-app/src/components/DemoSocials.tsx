import { ActionIcon, Anchor, Group, createStyles, rem } from '@mantine/core'
import { IconBook, IconWorld } from '@tabler/icons-react'
import type { SocialObject } from 'konfig-lib'

export const useSubtleLinkStyles = createStyles((theme) => ({
  subtleLink: {
    fontSize: rem(14),
    color: 'gray',
    ':hover': {
      color: theme.colorScheme === 'dark' ? 'lightgray' : 'unset',
    },
  },
}))

export const DemoSocials = ({ socials }: { socials?: SocialObject }) => {
  const styles = useSubtleLinkStyles()
  return (
    <Group position="apart">
      <Group>
        {socials?.website && (
          <ActionIcon
            component="a"
            target="_blank"
            href={socials.website}
            size="sm"
            radius="xl"
          >
            <IconWorld />
          </ActionIcon>
        )}
        {socials?.documentation && (
          <ActionIcon
            component="a"
            target="_blank"
            href={socials.documentation}
            size="sm"
            radius="xl"
          >
            <IconBook />
          </ActionIcon>
        )}
      </Group>
      <Anchor
        target="_blank"
        className={styles.classes.subtleLink}
        unstyled
        href="https://konfigthis.com"
      >
        Made with Konfig
      </Anchor>
    </Group>
  )
}
