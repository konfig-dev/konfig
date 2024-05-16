import {
  Flex,
  Stack,
  Divider,
  useMantineColorScheme,
  MediaQuery,
  useMantineTheme,
  Title,
  clsx,
} from '@mantine/core'
import { OperationForm } from './OperationForm'
import {
  FORM_VALUES_LOCAL_STORAGE_KEY,
  PARAMETER_FORM_NAME_PREFIX,
  generateInitialFormValues,
  generateInitialFormValuesWithStorage,
} from '../utils/generate-initial-operation-form-values'
import type { SecurityScheme, RequestBodyObject } from 'konfig-lib'
import { generateParametersFromRequestBodyProperties } from '../utils/generate-parameters-from-request-body-properties'
import { useEffect, useMemo, useState } from 'react'
import { FormProvider, useForm } from '../utils/operation-form-context'
import { useRouter } from 'next/router'
import { CodeGeneratorConstructorArgs } from '../utils/code-generator'
import { CodeGeneratorTypeScript } from '../utils/code-generator-typescript'
import { deepmerge } from '../utils/deepmerge'
import { notifications } from '@mantine/notifications'
import localforage from 'localforage'
import { ReferencePageProps } from '../utils/generate-props-for-reference-page'
import { SocialFooter } from './SocialFooter'
import { OperationReferenceResponses } from './OperationReferenceResponses'
import { validateValueForParameter } from '@/utils/validate-value-for-parameter'
import { recursivelyRemoveEmptyValues } from '@/utils/recursively-remove-empty-values'
import { OperationFormPanel } from './OperationFormPanel'
import { OperationReferenceDocumentation } from './OperationReferenceDocumentation'

export function OperationReferenceMain({
  pathParameters,
  queryParameters,
  headerParameters,
  cookieParameters,
  requestBodyProperties,
  requestBodyRequired,
  responses,
  securitySchemes,
  operation,
  konfigYaml,
  basePath,
  owner,
  path,
  oauthTokenUrl,
  repo,
  servers,
  originalOauthTokenUrl,
  requestBodyParameter,
  httpMethod,
  contentType,
  hideNonSdkSnippets,
}: Pick<
  ReferencePageProps,
  | 'pathParameters'
  | 'queryParameters'
  | 'contentType'
  | 'hideNonSdkSnippets'
  | 'httpMethod'
  | 'headerParameters'
  | 'cookieParameters'
  | 'requestBodyParameter'
  | 'path'
  | 'owner'
  | 'repo'
  | 'requestBodyProperties'
  | 'requestBodyRequired'
  | 'responses'
  | 'securitySchemes'
  | 'servers'
  | 'operation'
  | 'oauthTokenUrl'
  | 'konfigYaml'
> & { basePath: string; originalOauthTokenUrl: string | null }) {
  const parameters = [
    ...pathParameters,
    ...queryParameters,
    ...headerParameters,
    ...cookieParameters,
    ...generateParametersFromRequestBodyProperties({
      requestBodyProperties,
      requestBodyRequired,
    }),
  ]

  const theme = useMantineTheme()

  const typecriptConfig = konfigYaml.generators.typescript
  if (!typecriptConfig) {
    throw new Error('TypeScript generator not configured')
  }

  const pythonConfig = konfigYaml.generators.python

  const clientState = useMemo(
    () => typecriptConfig.clientState ?? [],
    [typecriptConfig]
  )
  const clientStateWithExamples = useMemo(
    () => typecriptConfig.clientStateWithExamples ?? [],
    [typecriptConfig]
  )

  const hideSecurity = konfigYaml.portal?.hideSecurity ?? []

  const formValues = generateInitialFormValues({
    parameters: parameters,
    securitySchemes,
    clientState,
    hideSecurity,
    requestBodyParameter,
    clientStateWithExamples,
  })

  console.debug('OperationReferenceMain.formValues', formValues)

  const form = useForm(formValues)

  const router = useRouter()

  /**
   * In an effort to ensure that there are no React hydration issues (e.g.
   * server rendering does not match client rendering), we delay the setting of
   * the form values until the next tick. We do this by using setTimeout with a
   * timeout of 0.
   */
  useEffect(() => {
    setTimeout(async () => {
      const { initialValues } = await generateInitialFormValuesWithStorage({
        parameters: parameters,
        securitySchemes,
        clientState,
        owner,
        repo,
        hideSecurity,
        requestBodyParameter,
        clientStateWithExamples,
      })
      console.debug(initialValues)
      if (initialValues) {
        form.setValues(initialValues)
      }
    }, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  useEffect(() => {
    if (formValues.initialValues) {
      // initialValues has to come first because it has stored values from
      // browser storage that was saved in requests from other operations
      const merged = deepmerge(formValues.initialValues, form.values)
      form.setValues(merged)
    }
    setResult(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  const { colorScheme } = useMantineColorScheme()

  const tag = operation.operation.tags?.[0]

  if (tag === undefined) {
    throw new Error('Tag not defined')
  }

  if (operation.operation.operationId === undefined) {
    throw new Error('Operation ID not defined')
  }

  const authorization: [string, SecurityScheme][] = securitySchemes
    ? [...Object.entries(securitySchemes)]
    : []

  const codegenArgs: CodeGeneratorConstructorArgs = {
    contentType,
    httpMethod,
    path,
    parameters: parameters,
    requestBody: requestBodyParameter,
    securitySchemes,
    formData: form.values,
    languageConfigurations: {
      typescript: {
        clientName: typecriptConfig.clientName,
        packageName: typecriptConfig.npmName,
        git: {
          owner: typecriptConfig.git.userId,
          path: typecriptConfig.git.repoId,
        },
      },
      ...(pythonConfig && {
        python: {
          disabled: pythonConfig.disabled ?? false,
          clientName: pythonConfig.clientName,
          packageName: pythonConfig.packageName,
          projectName: pythonConfig.projectName,
          git: {
            owner: pythonConfig.git.userId,
            path: pythonConfig.git.repoId,
          },
        },
      }),
    },
    servers,
    operationId: operation.operation.operationId,
    tag: tag,
    basePath,
    oauthTokenUrl,
    originalOauthTokenUrl,
    requestBodyRequired:
      (operation.operation.requestBody as RequestBodyObject)?.required ?? false,
  }

  console.debug('codegenArgs:', codegenArgs)

  const [requestInProgress, setRequestInProgress] = useState(false)

  const [result, setResult] = useState<{
    data: unknown
    status: number
    statusText: string
  } | null>(null)

  const hasParameters = parameters.length > 0 || requestBodyParameter != null

  const handleError = (errors: typeof form.errors) => {
    for (const [id, message] of Object.entries(errors)) {
      notifications.show({ message, color: 'red', id })
    }
  }

  const handleSubmit: Parameters<typeof form.onSubmit>[0] = async (values) => {
    // validate that any required parameters are set
    const requiredParameters = parameters.filter(
      (parameter) => parameter.required
    )

    const missingRequiredParameters = requiredParameters.filter((parameter) => {
      const value = values[PARAMETER_FORM_NAME_PREFIX][parameter.name]
      const parameterNotValid = validateValueForParameter(
        parameter,
        parameter.name
      )(recursivelyRemoveEmptyValues(value))
      return parameterNotValid
    })

    if (missingRequiredParameters.length > 0) {
      for (const parameter of missingRequiredParameters) {
        const message =
          parameter.schema.type === 'array'
            ? `Add a non-empty item to required parameter "${parameter.name}"`
            : `Missing required parameter "${parameter.name}"`
        form.setFieldError(
          `${PARAMETER_FORM_NAME_PREFIX}.${parameter.name}`,
          message
        )
        notifications.show({ message, color: 'red', id: parameter.name })
      }
      return
    }

    setRequestInProgress(true)
    try {
      // IMPORTANT: files is used by the code generator so its fine that this is not used
      // the IDE will complain that it is not used but it is used by the code generator
      // see implementation of .setupFiles() and .snippet()
      const files = CodeGeneratorTypeScript.setupFiles(values)

      const snippet = await new CodeGeneratorTypeScript({
        mode: 'execution',
        ...codegenArgs,
      }).snippet()

      const wrapped = `(async () => {
            ${snippet}
            })()`
      const result = await eval(wrapped)
      setResult(result)
    } catch (e) {
      console.error(e)
      if (
        typeof e === 'object' &&
        e !== null &&
        'status' in e &&
        typeof e.status === 'number' &&
        'statusText' in e &&
        typeof e.statusText === 'string' &&
        'responseBody' in e
      ) {
        setResult({
          data: e.responseBody,
          status: e.status,
          statusText: e.statusText,
        })
      }
    } finally {
      if (typeof window !== 'undefined') {
        await localforage.setItem(
          FORM_VALUES_LOCAL_STORAGE_KEY({ owner, repo }),
          values
        )
      }
      setRequestInProgress(false)
    }
  }

  const header = operation.operation.summary ?? operation.path
  return (
    <FormProvider form={form}>
      <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
        <div className="px-3 sm:px-8">
          <div className="mb-14 mt-6">
            <OperationReferenceDocumentation
              operation={operation}
              tag={tag}
              header={header}
              colorScheme={colorScheme}
              theme={theme}
              basePath={basePath}
            />
          </div>
          <Title
            className={clsx(
              'mb-8',
              'border-b pb-3 border-b-mantine-gray-100 dark:border-b-mantine-gray-900'
            )}
            order={4}
          >
            Execute an API Request
          </Title>
        </div>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify={{ base: undefined, sm: 'space-between' }}
          className="px-3 sm:px-8"
        >
          <Stack w={{ base: '100%', sm: '55%' }} spacing="md">
            <OperationForm
              hasParameters={hasParameters}
              requestBody={requestBodyParameter}
              owner={owner}
              repo={repo}
              pathParameters={pathParameters}
              queryParameters={queryParameters}
              headerParameters={headerParameters}
              cookieParameters={cookieParameters}
              requestBodyProperties={requestBodyProperties}
              requestBodyRequired={requestBodyRequired}
            />
          </Stack>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <div className="h-10" />
          </MediaQuery>
          <OperationFormPanel
            authorization={authorization}
            hideSecurity={hideSecurity}
            clientState={clientState}
            clientStateWithExamples={clientStateWithExamples}
            codegenArgs={codegenArgs}
            result={result}
            requestInProgress={requestInProgress}
            hideNonSdkSnippets={hideNonSdkSnippets}
          />
        </Flex>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Divider className="my-16" />
        </MediaQuery>
        <div className="px-3 sm:px-8">
          {responses && (
            <OperationReferenceResponses
              operation={operation}
              responses={responses}
            />
          )}
          <SocialFooter konfigYaml={konfigYaml} />
        </div>
      </form>
    </FormProvider>
  )
}
