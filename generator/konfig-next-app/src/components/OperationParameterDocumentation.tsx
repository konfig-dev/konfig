import { Box, Flex, rem, useMantineTheme, Text, Code } from '@mantine/core'
import ReactMarkdown from 'react-markdown'

export type OperationParameterDocumentationProps = {
  name: string
  description: string | undefined
  schema: string
  required?: boolean
}

export function OperationParameterDocumentation({
  name,
  description,
  schema,
  required,
}: OperationParameterDocumentationProps) {
  const theme = useMantineTheme()
  return (
    <Box key={name}>
      <Flex align="center" wrap="wrap">
        {name !== '' && (
          <Code
            mr={rem(5)}
            style={{
              color: theme.colorScheme === 'dark' ? 'white' : 'black',
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.gray[9]
                  : theme.colors.gray[0],
              borderRadius: theme.radius.md,
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.gray[8]
                  : theme.colors.gray[4]
              }`,
            }}
          >
            {name}
          </Code>
        )}
        <Code
          style={{
            color: theme.colors.gray[6],
          }}
          bg="unset"
          fz={12}
          ml={name === '' ? rem(-5) : undefined}
          mr={rem(5)}
        >
          {schema}
        </Code>
        {required && (
          <Code style={{ color: 'red' }} bg="unset" fz={12}>
            {'required'}
          </Code>
        )}
      </Flex>
      {description && (
        <ReactMarkdown className="mt-[0.625rem] prose dark:prose-invert text-sm dark:text-mantine-gray-500 text-mantine-gray-700">
          {description}
        </ReactMarkdown>
      )}
    </Box>
  )
}
