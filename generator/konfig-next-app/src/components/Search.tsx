import { MarkdownPageProps } from '@/utils/generate-props-for-markdown-page'
import {
  Center,
  Group,
  Kbd,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from '@mantine/core'
import { useOs } from '@mantine/hooks'
import { IconBook, IconSearch } from '@tabler/icons-react'
import { SpotlightProvider, spotlight } from '@mantine/spotlight'
import type { SpotlightAction, SpotlightActionProps } from '@mantine/spotlight'
import Fuse, { IFuseOptions } from 'fuse.js'
import { useDeepCompareMemo } from 'use-deep-compare'
import { useState } from 'react'
import { useRouter } from 'next/router'
import HighlightTextComponent from './HighlightTextComponent'
import { ICONS, TABS } from './HeaderButton'
import { HttpMethodBadge } from './HttpMethodBadge'

export function Search({
  allMarkdown,
}: {
  allMarkdown: MarkdownPageProps['allMarkdown']
}) {
  const options: IFuseOptions<MarkdownPageProps['allMarkdown'][0]> = {
    keys: ['content', 'title'],

    // Fuzzy finding options
    useExtendedSearch: true, // use ' to do substring search
    ignoreLocation: true, // distance & location mean nothing
    threshold: 0.3, // 0.0 is perfect, 1.0 is match all so 0.3 is stricter than default value of 0.6
    fieldNormWeight: 2, // title has more weight than content
  }
  const fuse = useDeepCompareMemo(() => {
    return new Fuse(allMarkdown, options)
  }, [allMarkdown, options])
  const os = useOs()
  const router = useRouter()
  const actions: SpotlightAction[] = allMarkdown.map((doc) => {
    const Icon = ICONS[doc.type]
    return {
      id: doc.id,
      title: doc.title,
      content: doc.content,
      icon: <Icon size="1.2rem" />,
      path: doc.type === TABS.reference ? doc.path : '',
      method: doc.type === TABS.reference ? doc.method : '',
      onTrigger: () => {
        if (doc.type === TABS.documentation) {
          router.push(`/docs/${doc.id}`)
        } else if (doc.type === TABS.reference) {
          router.push(`/reference/${doc.tag}/${doc.id}`)
        } else if (doc.type === TABS.demos) {
          router.push(`/demo/${doc.id}`)
        }
      },
    }
  })
  const [query, setQuery] = useState('')
  return (
    <SpotlightProvider
      actions={actions}
      query={query}
      filter={(query, actions) => {
        if (query === '') return actions
        const searchResult = fuse.search(query)
        // filter/sort actions by search result
        const filteredActions = actions
          .filter((action) =>
            searchResult.some((result) => result.item.id === action.id)
          )
          .sort((a, b) => {
            const aIndex = searchResult.findIndex(
              (result) => result.item.id === a.id
            )
            const bIndex = searchResult.findIndex(
              (result) => result.item.id === b.id
            )
            return aIndex - bIndex
          })
        // add description if there is a case insensitive substring match between query term and content
        const terms = query.split(' ')
        filteredActions.forEach((action) => {
          const content: string = action.content.toLowerCase()

          for (const term of terms) {
            const index = content.indexOf(term.toLowerCase())
            if (index === -1) continue
            action.description = content.substring(
              Math.max(0, index - 100),
              Math.min(content.length, index + term.length + 100)
            )
            return
          }
        })

        return filteredActions
      }}
      onQueryChange={setQuery}
      limit={15}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      nothingFoundMessage="Nothing found..."
      actionComponent={CustomAction}
      classNames={
        {
          // content: 'dark:bg-zinc-950 rounded-lg',
          // searchInput: 'dark:bg-zinc-900',
        }
      }
    >
      <button
        type="button"
        onClick={() => spotlight.open()}
        className="dark:outline-brand-700 bg-zinc flex group transition text-zinc-500 hover:text-zinc-200 border gap-24 dark:border-zinc-800 hover:dark:border-zinc-700 dark:bg-zinc-950 hover:dark:bg-zinc-900 p-2 md:p-4 rounded-lg my-auto items-center h-2/3 text-sm"
      >
        <IconSearch className="md:hidden" stroke="3" size=".75rem" />
        <div className="md:flex hidden gap-2 items-center">
          <IconSearch stroke="3" size=".75rem" />
          <span>Search</span>
        </div>
        <div className="hidden md:flex items-center pointer-events-none">
          <Kbd
            className=" h-1/2 bg-zinc-800 group-hover:text-zinc-200 transition border border-zinc-700"
            size="xs"
            mr={5}
          >
            {os === 'macos' ? '⌘' : 'Ctrl'}
          </Kbd>
          <Kbd
            size="xs"
            className="group-hover:text-zinc-200 bg-zinc-800  h-1/2 transition border border-zinc-700"
          >
            K
          </Kbd>
        </div>
      </button>
    </SpotlightProvider>
  )
}

const useStyles = createStyles((theme) => ({
  action: {
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: `${rem(10)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[1],
    }),

    '&[data-hovered]': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[1],
    },
  },
}))

function CustomAction({
  action,
  styles,
  classNames,
  hovered,
  onTrigger,
  query,
  highlightQuery,
  ...others
}: SpotlightActionProps) {
  const { classes } = useStyles()
  const queryTerms = query.split(' ')

  return (
    <UnstyledButton
      className={classes.action}
      data-hovered={hovered || undefined}
      tabIndex={-1}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onTrigger}
      {...others}
    >
      <Group noWrap>
        {action.icon && <Center>{action.icon}</Center>}
        <div style={{ flex: 1 }}>
          <HighlightTextComponent className="font-semibold" bold={queryTerms}>
            {action.title}
          </HighlightTextComponent>
          {action.description && (
            <HighlightTextComponent className="text-xs" bold={queryTerms}>
              {action.description}
            </HighlightTextComponent>
          )}
        </div>
        {action.method && <HttpMethodBadge httpMethod={action.method} />}
      </Group>
    </UnstyledButton>
  )
}
