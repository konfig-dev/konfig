import { LayoutHeader } from './LayoutHeader'
import { Dispatch, SetStateAction } from 'react'
import { HeaderWrapper } from './HeaderWrapper'
import { TABS } from './HeaderButton'
import { HeaderTabs } from './HeaderTabs'
import type { generateLogoLink } from '@/utils/generate-logo-link'

export function ReferenceHeader({
  opened,
  setOpened,
  demos,
  title,
  hasDocumentation,
  omitOwnerAndRepo,
  owner,
  repo,
  logo,
}: {
  opened: boolean
  hasDocumentation: boolean
  setOpened: Dispatch<SetStateAction<boolean>>
  demos: string[]
  title: string
  omitOwnerAndRepo?: boolean
  owner: string
  repo: string
  logo: ReturnType<typeof generateLogoLink>
}) {
  return (
    <HeaderWrapper>
      <LayoutHeader
        breakpoint="lg"
        opened={opened}
        setOpened={setOpened}
        title={title}
        logo={logo}
      />
      <HeaderTabs
        owner={owner}
        repo={repo}
        hasDocumentation={hasDocumentation}
        demos={demos}
        currentTab={TABS.reference}
        omitOwnerAndRepo={omitOwnerAndRepo}
      />
    </HeaderWrapper>
  )
}
