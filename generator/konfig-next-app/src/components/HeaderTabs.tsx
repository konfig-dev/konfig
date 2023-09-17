import { Group, useMantineTheme } from '@mantine/core'
import { HeaderTab } from './HeaderTab'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IconBook, IconBox, IconCode, IconTerminal } from '@tabler/icons-react'
import { useBasePath } from '@/utils/use-base-path'

export const TABS = {
  documentation: 'Documentation',
  reference: 'API Reference',
  demos: 'Demos',
  sdks: 'SDKs',
} as const

export type Tab = (typeof TABS)[keyof typeof TABS]

export function HeaderTabs({
  currentTab,
  isSandbox,
  demos,
  hasDocumentation,
  omitOwnerAndRepo,
  owner,
  repo,
}: {
  currentTab: Tab
  isSandbox?: boolean
  demos: string[]
  hasDocumentation?: boolean
  owner: string
  repo: string
  omitOwnerAndRepo?: boolean
}) {
  const docsPath = useDocsPath({ omitOwnerAndRepo })
  const referencePath = useReferencePath({ omitOwnerAndRepo })
  const basePath = useBasePath({ omitOwnerAndRepo })
  const githubUrl = useGithubUrl({ owner, repo })
  const theme = useMantineTheme()
  return (
    <Group
      h="45%"
      style={{
        color: theme.white,
        background:
          theme.colorScheme === 'dark'
            ? theme.colors.brand[9]
            : theme.colors.brand[7],
        alignItems: 'flex-end',
        overflowX: 'scroll',
      }}
      px="sm"
      noWrap
      spacing={0}
    >
      {hasDocumentation && (
        <HeaderTab
          disabled={isSandbox}
          label={TABS.documentation}
          active={currentTab === TABS.documentation}
          icon={<IconBook size="1rem" />}
          link={docsPath}
        />
      )}
      <HeaderTab
        disabled={isSandbox}
        label={TABS.reference}
        active={currentTab === TABS.reference}
        icon={<IconCode size="1rem" />}
        link={referencePath}
      />
      {demos.length > 0 && (
        <HeaderTab
          label={TABS.demos}
          active={currentTab === TABS.demos}
          link={`${basePath}/demo`}
          icon={<IconTerminal size="1rem" />}
          disabled={isSandbox}
        />
      )}
      <HeaderTab
        disabled={isSandbox}
        external
        icon={<IconBox size="1rem" />}
        label={TABS.sdks}
        active={currentTab === TABS.sdks}
        link={githubUrl ?? '#'}
      />
    </Group>
  )
}

function useGithubUrl({
  owner,
  repo,
}: {
  owner: string
  repo: string
}): string {
  return `https://github.com/${owner}/${repo}#${repo}`
}

function useReferencePath({
  omitOwnerAndRepo,
}: {
  omitOwnerAndRepo?: boolean
}) {
  const basePath = useBasePath({ omitOwnerAndRepo })
  return `${basePath}/reference`
}

function useDocsPath({ omitOwnerAndRepo }: { omitOwnerAndRepo?: boolean }) {
  const basePath = useBasePath({ omitOwnerAndRepo })
  return `${basePath}/docs`
}
