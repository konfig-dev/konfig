import { ReferencePageProps } from '@/utils/generate-props-for-reference-page'
import { getClickableStyles } from '@/utils/get-clickable-styles'
import { httpResponseCodeMeaning } from '@/utils/http-response-code-meaning'
import { inactiveColor } from '@/utils/inactive-color'
import {
  Box,
  Title,
  Flex,
  Badge,
  useMantineTheme,
  Text,
  Accordion,
  createStyles,
  Tabs,
} from '@mantine/core'
import { IconFile, IconFileCode } from '@tabler/icons-react'
import { useState } from 'react'
import { JsonViewer } from './JsonViewer'
const OpenAPISampler = require('openapi-sampler')

const useStyles = createStyles((theme) => ({
  item: {
    border: getClickableStyles(theme).border,
  },
  noSchema: {
    // set pointer so it doesn't look clickable
    cursor: 'default',

    // set svg to display: none
    '& svg': {
      display: 'none',
    },
  },
}))

export function OperationReferenceResponses({
  responses,
}: Pick<ReferencePageProps, 'responses'>) {
  const { classes, cx } = useStyles()
  const [value, setValue] = useState<string | null>(null)
  const theme = useMantineTheme()

  return (
    <Box my="lg">
      <Title mb="xs" order={4}>
        Responses
      </Title>
      <Accordion
        value={value}
        onChange={(value) => {
          if (value === null) return setValue(value)
          // if schema does not exist for this response, don't allow it to be opened
          if (responses[value] === undefined) return
          if (responses[value].content === undefined) {
            return
          }
          const contentObject = responses[value].content
          if (contentObject === undefined) return

          if (contentObject[Object.keys(contentObject)[0]].schema === undefined)
            return

          setValue(value)
        }}
        variant="separated"
      >
        {Object.entries(responses).map(([responseCode, response]) => {
          // get schemaobject from first content type
          // if schema is null the response object could be like
          // "200": {
          //  "description": "Successful response"
          // }
          const schemaObject = response.content
            ? response.content[Object.keys(response.content)[0]].schema
            : null

          return (
            <Accordion.Item
              className={classes.item}
              value={responseCode}
              key={responseCode}
            >
              {/* 1. Render response code
                          2. Render meaning of response code like "OK" for 200 and "Not Found" for 404 in same text box as (1)
                          3. Render green "Success" badge next to 2xx codes and red "Error" badge next to 4xx and 5xx codes
                          4. Render response description if it exists under the response code + badge
                       */}
              <Accordion.Control
                className={cx({
                  [classes.noSchema]: schemaObject === null,
                })}
                px="md"
              >
                <Flex gap="xs" align="center">
                  <Title order={6}>
                    {responseCode} {httpResponseCodeMeaning(responseCode)}
                  </Title>
                  {responseCode.startsWith('2') ? (
                    <Badge color="blue">Success</Badge>
                  ) : (
                    <Badge color="red">Error</Badge>
                  )}
                </Flex>
                {response.description && (
                  <Text c="dimmed" fz="sm">
                    {response.description}
                  </Text>
                )}
              </Accordion.Control>
              <Accordion.Panel>
                <Tabs
                  styles={{
                    tab: {
                      color: inactiveColor(theme),
                      '&[data-active="true"]': {
                        color:
                          theme.colorScheme === 'dark'
                            ? theme.white
                            : theme.black,
                        ...getClickableStyles(theme),
                        ':hover': {
                          ...getClickableStyles(theme),
                        },
                      },
                    },
                  }}
                  variant="pills"
                  defaultValue="example"
                >
                  <Tabs.List>
                    <Tabs.Tab
                      w="100px"
                      value="example"
                      icon={<IconFile size="0.8rem" />}
                    >
                      Example
                    </Tabs.Tab>
                    <Tabs.Tab
                      w="138px"
                      value="schema"
                      icon={<IconFileCode size="0.8rem" />}
                    >
                      JSON Schema
                    </Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel value="example" pt="xs">
                    {schemaObject && !('$ref' in schemaObject) && (
                      <JsonViewer
                        collapsed={3}
                        displayObjectSize={false}
                        displayDataTypes={false}
                        enableClipboard={true}
                        name={false}
                        src={OpenAPISampler.sample(schemaObject as any)}
                      ></JsonViewer>
                    )}
                  </Tabs.Panel>

                  <Tabs.Panel value="schema" pt="xs">
                    {schemaObject && !('$ref' in schemaObject) && (
                      <JsonViewer
                        collapsed={3}
                        displayObjectSize={false}
                        displayDataTypes={false}
                        enableClipboard={true}
                        name={false}
                        src={schemaObject}
                      />
                    )}
                  </Tabs.Panel>
                </Tabs>
              </Accordion.Panel>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </Box>
  )
}
