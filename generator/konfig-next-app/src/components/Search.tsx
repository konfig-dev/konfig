import { MarkdownPageProps } from '@/utils/generate-props-for-markdown-page'
import { Kbd } from '@mantine/core'
import { useOs } from '@mantine/hooks'
import {
  IconDashboard,
  IconFileText,
  IconHome,
  IconSearch,
} from '@tabler/icons-react'
import { SpotlightProvider, spotlight } from '@mantine/spotlight'
import type { SpotlightAction } from '@mantine/spotlight'
import Fuse from 'fuse.js'

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <IconFileText size="1.2rem" />,
  },
]

export function Search({
  allMarkdown,
}: {
  allMarkdown?: MarkdownPageProps['allMarkdown']
}) {
  //   const fuse = new Fuse(allMarkdown, {
  //     keys: ['id', 'content'],
  //     includeScore: true,
  //     includeMatches: true,
  //     useExtendedSearch: true,
  //   })
  //   console.log(fuse)
  const os = useOs()
  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      nothingFoundMessage="Nothing found..."
    >
      <button
        type="button"
        onClick={() => spotlight.open()}
        className="dark:outline-brand-700 flex group transition text-mantine-gray-600 hover:text-mantine-gray-100 border gap-9 dark:border-mantine-gray-800 hover:dark:border-mantine-gray-700 dark:bg-mantine-gray-900 hover:dark:bg-mantine-gray-800 p-4 rounded-lg my-auto items-center h-2/3 text-sm"
      >
        <div className="flex gap-2 items-center">
          <IconSearch stroke="3" size=".75rem" />
          <span>Search</span>
        </div>
        <div className="flex items-center pointer-events-none">
          <Kbd
            className=" h-1/2 group-hover:text-mantine-gray-100 transition border border-mantine-gray-700"
            size="xs"
            mr={5}
          >
            {os === 'macos' ? '⌘' : 'Ctrl'}
          </Kbd>
          <Kbd
            size="xs"
            className="group-hover:text-mantine-gray-100 h-1/2 transition border border-mantine-gray-700"
          >
            K
          </Kbd>
        </div>
      </button>
    </SpotlightProvider>
  )
}
