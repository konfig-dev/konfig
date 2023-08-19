import { Select } from '@mantine/core'

import { IconCode, IconApi } from '@tabler/icons-react'
import { useState } from 'react'

const NAVBAR_OPTIONS = {
  apiReference: { value: 'API Reference', Icon: IconApi },
  demos: { value: 'Demos', Icon: IconCode },
} as const

export function NavbarSelect() {
  const [{ value: navigationValue, Icon: NavigationIcon }, setNavigation] =
    useState<(typeof NAVBAR_OPTIONS)['apiReference' | 'demos']>(
      NAVBAR_OPTIONS['demos']
    )

  return (
    <Select
      data={['API Reference', 'Demos']}
      value={navigationValue}
      icon={<NavigationIcon size="1rem" />}
    />
  )
}
