import { Select, Group, Text } from '@mantine/core'

import { IconCode, IconApi } from '@tabler/icons-react'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
import { forwardRef } from 'react'

const NAVBAR_OPTIONS = {
  'api-reference': {
    value: 'api-reference',
    Icon: <IconApi size="1rem" />,
    label: 'API Reference',
  },
  demos: { value: 'demos', Icon: <IconCode size="1rem" />, label: 'Demos' },
} as const

type ModeType = keyof typeof NAVBAR_OPTIONS
type Mode = (typeof NAVBAR_OPTIONS)[ModeType]
class NavbarState {
  modeType: ModeType = 'demos'
  constructor() {
    makeAutoObservable(this)
  }

  setModeType(modeType: string) {
    if (modeType === 'api-reference' || modeType === 'demos')
      this.modeType = modeType
    else throw Error('Test')
  }

  get mode(): Mode {
    return NAVBAR_OPTIONS[this.modeType]
  }
}

export const navbarState = new NavbarState()

const SelectItem = forwardRef<HTMLDivElement, Mode>(
  ({ label, Icon, ...others }: Mode, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        {Icon}
        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  )
)
SelectItem.displayName = 'SelectItem'

export const NavbarSelect = observer(() => {
  return (
    <Select
      data={Object.values(NAVBAR_OPTIONS)}
      value={navbarState.mode.value}
      icon={navbarState.mode.Icon}
      itemComponent={SelectItem}
      onChange={(value) =>
        value !== null ? navbarState.setModeType(value) : null
      }
    />
  )
})
