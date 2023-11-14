import { Box, Flex, Group, Menu, clsx, useMantineTheme } from '@mantine/core'
import { HeaderTab } from './HeaderTab'
import { useBasePath } from '@/utils/use-base-path'
import { HeaderButton, TABS, Tab } from './HeaderButton'
import { IconMenu } from '@tabler/icons-react'
import Link from 'next/link'
import { getClickableStyles } from '@/utils/get-clickable-styles'
import { Search } from './Search'
import { MarkdownPageProps } from '@/utils/generate-props-for-markdown-page'

export function HeaderTabs({
  currentTab,
  isSandbox,
  demos,
  hasDocumentation,
  omitOwnerAndRepo,
  owner,
  allMarkdown,
  repo,
  hasLightAndDarkLogo,
}: {
  currentTab: Tab
  isSandbox?: boolean
  demos: string[]
  hasDocumentation?: boolean
  owner: string
  repo: string
  hasLightAndDarkLogo: boolean
  omitOwnerAndRepo?: boolean
  allMarkdown: MarkdownPageProps['allMarkdown']
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
  const theme = useMantineTheme()
  return (
    <Box h="45%">
      <Box className="sm:hidden" w="100%" h="100%">
        <Menu
          shadow="xl"
          // opened={true}
          withinPortal={true}
          styles={{
            dropdown: {
              ...getClickableStyles(theme),
            },
          }}
          offset={5}
          width="95%"
          radius="sm"
        >
          <Menu.Target>
            <Flex
              px="lg"
              style={{ cursor: 'pointer' }}
              h="100%"
              align="center"
              justify="space-between"
            >
              <HeaderButton
                hasLightDarkMode={hasLightAndDarkLogo}
                tab={currentTab}
              />
              <IconMenu
                color={
                  hasLightAndDarkLogo
                    ? theme.colorScheme === 'dark'
                      ? theme.white
                      : theme.black
                    : theme.white
                }
                size="0.9rem"
              />
            </Flex>
          </Menu.Target>
          <Menu.Dropdown className="sm:hidden">
            {Object.values(TABS)
              .filter((tab) => tab !== currentTab)
              .map((tab) => {
                if (tab === TABS.documentation && !hasDocumentation) {
                  return null
                }
                if (tab === TABS.demos && demos.length === 0) {
                  return null
                }
                return (
                  <Menu.Item key={tab}>
                    <Link
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      target={tab === TABS.sdks ? '_blank' : undefined}
                      href={linkForTab(tab)}
                    >
                      <HeaderButton
                        hasLightDarkMode={hasLightAndDarkLogo}
                        noColor
                        tab={tab}
                      />
                    </Link>
                  </Menu.Item>
                )
              })}
          </Menu.Dropdown>
        </Menu>
      </Box>
      <div
        className={clsx(
          'h-full hidden sm:flex items-center justify-between px-3'
        )}
      >
        <Group
          h="100%"
          style={{
            alignItems: 'flex-end',
          }}
          noWrap
          spacing={0}
        >
          {hasDocumentation && (
            <HeaderTab
              hasLightAndDarkLogo={hasLightAndDarkLogo}
              disabled={isSandbox}
              label={TABS.documentation}
              active={currentTab === TABS.documentation}
              link={linkForTab(TABS.documentation)}
            />
          )}
          <HeaderTab
            hasLightAndDarkLogo={hasLightAndDarkLogo}
            disabled={isSandbox}
            label={TABS.reference}
            active={currentTab === TABS.reference}
            link={linkForTab(TABS.reference)}
          />
          {demos.length > 0 && (
            <HeaderTab
              hasLightAndDarkLogo={hasLightAndDarkLogo}
              label={TABS.demos}
              active={currentTab === TABS.demos}
              link={linkForTab(TABS.demos)}
              disabled={isSandbox}
            />
          )}
          <HeaderTab
            hasLightAndDarkLogo={hasLightAndDarkLogo}
            disabled={isSandbox}
            external
            label={TABS.sdks}
            active={currentTab === TABS.sdks}
            link={linkForTab(TABS.sdks)}
          />
        </Group>
        <Search />
      </div>
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
