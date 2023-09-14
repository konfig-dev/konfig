import { useBasePath } from '@/utils/use-base-path'
import { NavLink, useMantineColorScheme } from '@mantine/core'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

export function DocNavLink({
  id,
  label,
  docId,
  setOpened,
}: {
  id: string
  label: string
  docId: string
  setOpened: Dispatch<SetStateAction<boolean>>
}) {
  const { colorScheme } = useMantineColorScheme()
  const basePath = useBasePath()
  return (
    <NavLink<typeof Link>
      active={id === docId}
      px="md"
      onClick={() => setOpened(false)}
      key={id}
      component={Link}
      variant={colorScheme === 'dark' ? 'light' : 'filled'}
      href={`${basePath}/docs/${id}`}
      label={label}
    />
  )
}
