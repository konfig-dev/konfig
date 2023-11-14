import { MarkdownPageProps } from '@/utils/generate-props-for-markdown-page'
import { useOs } from '@mantine/hooks'
import {
  SpotlightProvider as MantineSpotlightProvider,
  SpotlightAction,
  SpotlightActionProps,
} from '@mantine/spotlight'
import Fuse, { IFuseOptions } from 'fuse.js'
import { useRouter } from 'next/router'
import { PropsWithChildren, useState } from 'react'
import { useDeepCompareMemo } from 'use-deep-compare'
import { ICONS, TABS } from './HeaderButton'
import { createStyles, rem, UnstyledButton, Group, Center } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import HighlightTextComponent from './HighlightTextComponent'
import { HttpMethodBadge } from './HttpMethodBadge'

export function SpotlightProvider({
  allMarkdown,
  children,
}: PropsWithChildren<{
  allMarkdown: MarkdownPageProps['allMarkdown']
}>) {
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
        router.push(doc.id)
      },
    }
  })
  const [query, setQuery] = useState('')
  return (
    <MantineSpotlightProvider
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
      {children}
    </MantineSpotlightProvider>
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
          : theme.colors.gray[0],
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
