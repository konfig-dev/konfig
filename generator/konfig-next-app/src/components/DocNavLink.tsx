import { navLinkColor } from '@/utils/nav-link-color'
import { useBasePath } from '@/utils/use-base-path'
import { NavLink, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

export function DocNavLink({
  id,
  label,
  docId,
  setOpened,
  omitOwnerAndRepo,
}: {
  id: string
  label: string
  docId: string
  setOpened: Dispatch<SetStateAction<boolean>>
  omitOwnerAndRepo: boolean
}) {
  const { colorScheme } = useMantineColorScheme()
  const basePath = useBasePath({ omitOwnerAndRepo })
  const theme = useMantineTheme()
  const active = id === docId
  return (
    <NavLink<typeof Link>
      active={active}
      onClick={() => setOpened(false)}
      key={id}
      styles={{
        label: {
          color: navLinkColor({ active, theme }),
        },
      }}
      component={Link}
      href={`${basePath}/docs/${id}`}
      label={label}
    />
  )
}
