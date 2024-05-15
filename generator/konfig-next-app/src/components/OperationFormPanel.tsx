import { tryJsonOutput } from '@/utils/try-json-output'
import { tryTableOutput } from '@/utils/try-table-output'
import { Box, Title, Paper, Badge } from '@mantine/core'
import type { KonfigYamlType, SecurityScheme } from 'konfig-lib'
import { ExecuteOutput } from './ExecuteOutput'
import { OperationRequest } from './OperationRequest'
import {
  OperationSecuritySchemeForm,
  OperationClientStateForm,
} from './OperationSecuritySchemeForm'
import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'

export function OperationFormPanel({
  authorization,
  hideSecurity,
  clientState,
  clientStateWithExamples,
  codegenArgs,
  result,
  requestInProgress,
  hideNonSdkSnippets,
}: {
  authorization: [string, SecurityScheme][]
  hideSecurity: NonNullable<
    NonNullable<KonfigYamlType['portal']>['hideSecurity']
  >
  clientState: string[]
  clientStateWithExamples: NonNullable<
    NonNullable<
      KonfigYamlType['generators']['typescript']
    >['clientStateWithExamples']
  >
  codegenArgs: CodeGeneratorConstructorArgs
  result: {
    data: unknown
    status: number
    statusText: string
  } | null
  requestInProgress: boolean
  hideNonSdkSnippets: boolean
}) {
  return (
    <Box className="flex flex-col gap-6" w={{ base: '100%', sm: '40%' }}>
      {authorization.length > 0 && (
        <div className="space-y-2">
          <div className="text-xs text-mantine-gray-600 mb-3 font-semibold">
            Authorization
          </div>
          {authorization
            .filter(([name]) => {
              return !hideSecurity.map(({ name }) => name).includes(name)
            })
            .map(([name, scheme]) => {
              return (
                <OperationSecuritySchemeForm
                  key={name}
                  name={name}
                  scheme={scheme}
                />
              )
            })}
          {clientState.map((name) => {
            return <OperationClientStateForm key={name} name={name} />
          })}
          {clientStateWithExamples.map(({ name, required }) => {
            return (
              <OperationClientStateForm
                required={required}
                key={name}
                name={name}
              />
            )
          })}
        </div>
      )}
      <div className="sticky top-[calc(var(--mantine-header-height,0px)+1rem)] space-y-4">
        <OperationRequest
          hideNonSdkSnippets={hideNonSdkSnippets}
          codegenArgs={codegenArgs}
          requestInProgress={requestInProgress}
        />
        {result?.data != null && (
          <Paper className="rounded-md overflow-hidden" p={0} withBorder>
            <Box p="sm">
              {/* if status is not successful (e.g. 4xx or 5xx), the badge is red */}
              <Badge
                color={result.status >= 300 ? 'red' : 'blue'}
              >{`${result.status} ${result.statusText}`}</Badge>
            </Box>
            <ExecuteOutput
              jsonOutput={tryJsonOutput(JSON.stringify(result.data))}
              tableOutput={tryTableOutput(JSON.stringify(result.data))}
              processedOutput={JSON.stringify(result.data, null, 2)}
              disableTable
              show={true}
            />
          </Paper>
        )}
      </div>
    </Box>
  )
}
