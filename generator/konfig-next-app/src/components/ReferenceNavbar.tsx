import {
  Navbar,
  Group,
  createStyles,
  rem,
  Select,
  Text,
  CloseButton,
  Code,
} from '@mantine/core'
import { LinksGroup, NavbarDataItem } from './LinksGroup'
import { Dispatch, SetStateAction, forwardRef, useEffect } from 'react'
import { IconLink } from '@tabler/icons-react'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'

export const NAVBAR_WIDTH = 350

const useStyles = createStyles((theme) => ({
  header: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  basepath: {
    fontWeight: 700,
    position: 'relative',
    paddingRight: rem(20),
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  selectItem: {
    borderRadius: `${theme.radius.xs} !important`,
  },

  chevron: {
    position: 'absolute',
    right: rem(4),
    top: rem(5),
  },

  menuItem: {
    borderRadius: 0,
  },
}))

export function ReferenceNavbar({
  navbarData,
  setOpened,
  servers,
  basePath,
  setServers,
  setBasePath,
  originalServers,
  owner,
  repo,
}: {
  navbarData: NavbarDataItem[]
  setOpened: Dispatch<SetStateAction<boolean>>
  servers: string[]
  setServers: Dispatch<SetStateAction<string[]>>
  basePath: string | null
  setBasePath: Dispatch<SetStateAction<string | null>>
  originalServers: string[]
  owner: string
  repo: string
}) {
  const { classes } = useStyles()
  const links = navbarData.map((item) => (
    <LinksGroup setOpened={setOpened} {...item} key={item.label} />
  ))

  const form = useForm({
    initialValues: {
      url: basePath ?? servers[0],
    },

    validate: {
      url: (value) =>
        /^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(
          value
        )
          ? null
          : 'Invalid URL',
    },
  })

  // When CloseButton is clicked then remove item from servers that matches value
  const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ value, ...others }: ItemProps, ref) => {
      const { classes } = useStyles()
      const isOriginalServer = originalServers.includes(value)
      return (
        <Group spacing={2} noWrap>
          <div className={classes.selectItem} ref={ref} {...others}>
            <Text size="xs">{value}</Text>
          </div>
          {!isOriginalServer && (
            <CloseButton
              radius="xs"
              onClick={() => {
                setServers((current) =>
                  current.filter((item) => item !== value)
                )
                localStorage.setItem(
                  `${owner}-${repo}-servers`,
                  JSON.stringify(servers.filter((item) => item !== value))
                )
                if (basePath === value) {
                  setBasePath(servers[0])
                  localStorage.setItem(`${owner}-${repo}-basepath`, servers[0])
                }
              }}
              size="sm"
            />
          )}
        </Group>
      )
    }
  )

  SelectItem.displayName = 'SelectItem'

  useEffect(() => {
    setTimeout(() => {
      const savedBasePath = localStorage.getItem(`${owner}-${repo}-basepath`)
      if (savedBasePath) {
        setBasePath(savedBasePath)
      }
      const savedServers = localStorage.getItem(`${owner}-${repo}-servers`)
      if (savedServers) {
        setServers(JSON.parse(savedServers))
      }
    }, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Navbar.Section p="md" className={classes.header}>
        <Select
          size="xs"
          icon={<IconLink size="1rem" />}
          placeholder="Pick one"
          value={basePath}
          error={form.getInputProps('url').error}
          data={servers}
          itemComponent={SelectItem}
          radius="xl"
          hoverOnSearchChange
          nothingFound="Nothing found"
          searchable
          creatable
          onChange={(value) => {
            if (value !== null) {
              setBasePath(value)
              localStorage.setItem(`${owner}-${repo}-basepath`, value)
              notifications.show({
                message: (
                  <Text>
                    Base path set to <Code color="brand">{value}</Code>
                  </Text>
                ),
                color: 'brand',
                id: value,
              })
            }
          }}
          onSearchChange={(query) => {
            form.setFieldValue('url', query)
          }}
          getCreateLabel={(query) => `+ Use ${query}`}
          onCreate={(query) => {
            const { hasError } = form.validateField('url')
            if (hasError) return
            setServers((current) => [...current, query])
            localStorage.setItem(
              `${owner}-${repo}-servers`,
              JSON.stringify([...servers, query])
            )
            return query
          }}
        />
      </Navbar.Section>

      <Navbar.Section py="md" grow>
        {links}
      </Navbar.Section>
    </>
  )
}

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  value: string
}
