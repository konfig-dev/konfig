import { ReferencePageProps } from '@/utils/generate-props-for-reference-page'
import { httpResponseCodeMeaning } from '@/utils/http-response-code-meaning'
import {
  Box,
  Title,
  Divider,
  Stack,
  Flex,
  Badge,
  useMantineTheme,
  Text,
} from '@mantine/core'

export function OperationReferenceResponses({
  responses,
}: Pick<ReferencePageProps, 'responses'>) {
  const theme = useMantineTheme()
  return (
    <Box my="lg">
      <Title order={4}>Responses</Title>
      <Divider my="sm" />
      <Stack>
        {Object.entries(responses).map(([responseCode, response]) => (
          <Box key={responseCode}>
            {/* 1. Render response code
                          2. Render meaning of response code like "OK" for 200 and "Not Found" for 404 in same text box as (1)
                          3. Render green "Success" badge next to 2xx codes and red "Error" badge next to 4xx and 5xx codes
                          4. Render response description if it exists under the response code + badge
                       */}

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
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
