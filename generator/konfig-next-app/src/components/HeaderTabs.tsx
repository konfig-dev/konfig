import { Box, Flex, Group, MediaQuery, Menu } from '@mantine/core'
import { HeaderTab } from './HeaderTab'
import { useBasePath } from '@/utils/use-base-path'
import { HeaderButton, TABS, Tab } from './HeaderButton'
import { IconMenu } from '@tabler/icons-react'
import Link from 'next/link'

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
  const linkForTab = (tab: Tab) => {
    switch (tab) {
      case TABS.documentation:
        return docsPath
      case TABS.reference:
        return referencePath
      case TABS.demos:
        return `${basePath}/demo`
      case TABS.sdks:
        return githubUrl ?? '#'
    }
  }
  return (
    <Box h="45%">
      <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
        <Box w="100%" h="100%">
          <Menu withinPortal offset={0} width="target" radius={0}>
            <Menu.Target>
              <Flex
                px="lg"
                style={{ cursor: 'pointer' }}
                h="100%"
                align="center"
                justify="space-between"
              >
                <HeaderButton tab={currentTab} />
                <IconMenu size="0.9rem" />
              </Flex>
            </Menu.Target>
            <Menu.Dropdown>
              {Object.values(TABS)
                .filter((tab) => tab !== currentTab)
                .map((tab) => {
                  return (
                    <Menu.Item key={tab}>
                      <Link
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        target={tab === TABS.sdks ? '_blank' : undefined}
                        href={linkForTab(tab)}
                      >
                        <HeaderButton noColor tab={tab} />
                      </Link>
                    </Menu.Item>
                  )
                })}
            </Menu.Dropdown>
          </Menu>
        </Box>
      </MediaQuery>
      <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
        <Group
          h="100%"
          style={{
            alignItems: 'flex-end',
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
              link={linkForTab(TABS.documentation)}
            />
          )}
          <HeaderTab
            disabled={isSandbox}
            label={TABS.reference}
            active={currentTab === TABS.reference}
            link={linkForTab(TABS.reference)}
          />
          {demos.length > 0 && (
            <HeaderTab
              label={TABS.demos}
              active={currentTab === TABS.demos}
              link={linkForTab(TABS.demos)}
              disabled={isSandbox}
            />
          )}
          <HeaderTab
            disabled={isSandbox}
            external
            label={TABS.sdks}
            active={currentTab === TABS.sdks}
            link={linkForTab(TABS.sdks)}
          />
        </Group>
      </MediaQuery>
    </Box>
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
