import { Kbd as MantineKbd, clsx, rem } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { spotlight } from '@mantine/spotlight'
import { PropsWithChildren } from 'react'
import { useOs } from '@mantine/hooks'

export function Search() {
  const os = useOs()
  return (
    <button
      type="button"
      onClick={() => spotlight.open()}
      className="dark:outline-brand-700 border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-950 hover:dark:bg-zinc-900 flex group transition text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 border gap-24 dark:border-zinc-800 hover:dark:border-zinc-700  p-2 md:p-4 rounded-lg my-auto items-center h-2/3 text-sm"
    >
      <IconSearch className="md:hidden" stroke="3" size=".75rem" />
      <div className="md:flex hidden gap-2 items-center">
        <IconSearch stroke="3" size=".75rem" />
        <span>Search</span>
      </div>
      <div className="hidden md:flex items-center pointer-events-none">
        <Kbd className="mr-1">{os === 'macos' ? '⌘' : 'Ctrl'}</Kbd>
        <Kbd>K</Kbd>
      </div>
    </button>
  )
}

export function Kbd({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <MantineKbd
      size="xs"
      className={clsx(
        className,
        'dark:group-hover:text-zinc-200 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 bg-zinc-50 dark:bg-zinc-800  h-1/2 transition border border-zinc-300 dark:border-zinc-700'
      )}
    >
      {children}
    </MantineKbd>
  )
}
