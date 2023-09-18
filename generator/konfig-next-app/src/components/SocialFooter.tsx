import { Box, Divider, rem } from '@mantine/core'
import { KonfigYamlType } from 'konfig-lib'
import { DemoSocials } from './DemoSocials'

export function SocialFooter({ konfigYaml }: { konfigYaml: KonfigYamlType }) {
  if (konfigYaml.portal?.socials === undefined) return null
  return (
    <Box>
      <Divider mt={rem(60)} />
      <Box my={rem(20)}>
        <DemoSocials socials={konfigYaml.portal.socials} />
      </Box>
    </Box>
  )
}
