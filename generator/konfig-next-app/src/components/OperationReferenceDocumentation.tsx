import {
  Stack,
  Title,
  Group,
  Box,
  ScrollArea,
  Alert,
  ColorScheme,
  MantineTheme,
  Code,
} from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'
import ReactMarkdown from 'react-markdown'
import { HttpMethodBadge } from './HttpMethodBadge'
import { Breadcrumbs } from './Breadcrumbs'
import { ReferencePageProps } from '@/utils/generate-props-for-reference-page'

export function OperationReferenceDocumentation({
  operation,
  tag,
  header,
  colorScheme,
  theme,
  basePath,
}: {
  operation: ReferencePageProps['operation']
  tag: string
  header: string
  colorScheme: ColorScheme
  theme: MantineTheme
  basePath: string
}) {
  return (
    <Stack mb="lg" spacing="xs">
      <Breadcrumbs breadcrumbs={[tag, header]} />
      <Title color={colorScheme === 'dark' ? theme.white : undefined} order={2}>
        {header}
      </Title>
      <Group noWrap spacing="xs">
        <HttpMethodBadge httpMethod={operation.method} />
        <Box
          h={2}
          w={2}
          className="flex-shrink-0"
          style={{
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[3]
                : theme.colors.gray[5],
            borderRadius: theme.radius.xl,
          }}
        />
        <ScrollArea type="never">
          <Code
            className="whitespace-nowrap"
            style={{ backgroundColor: 'unset' }}
          >
            {`${basePath}${operation.path}`}
          </Code>
        </ScrollArea>
      </Group>
      {operation.operation.deprecated && (
        <Alert
          p="xs"
          radius="xs"
          icon={<IconAlertCircle size="1rem" />}
          title="Deprecated"
          color="red"
        >
          Refrain from usage of this operation
        </Alert>
      )}
      {operation.operation.description && (
        <Box className="space-y-4 prose text-mantine-gray-700 dark:text-mantine-gray-500 text-sm max-w-2xl">
          <ReactMarkdown>{operation.operation.description}</ReactMarkdown>
        </Box>
      )}
    </Stack>
  )
}
