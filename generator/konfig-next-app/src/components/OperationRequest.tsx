import { Button, ScrollArea, clsx, useMantineTheme } from '@mantine/core'
import { OperationFormGeneratedCode } from './OperationFormGeneratedCode'
import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'
import { Tab } from '@headlessui/react'
import { LanguageExtended } from './DemoCode'
import { Fragment } from 'react'

const languages: { value: LanguageExtended; isSdk?: boolean; label: string }[] =
  [
    {
      value: 'typescript',
      label: 'TypeScript',
      isSdk: true, // TODO this should be dynamic based on konfig.yam
    },
    {
      value: 'python',
      label: 'Python',
      isSdk: true,
    },
    {
      value: 'bash',
      label: 'cURL',
    },
    {
      value: 'java',
      label: 'Java',
    },
    {
      value: 'csharp',
      label: 'C#',
    },
    {
      value: 'ruby',
      label: 'Ruby',
    },
    {
      value: 'php',
      label: 'PHP',
    },
    {
      value: 'go',
      label: 'Go',
    },
    {
      value: 'kotlin',
      label: 'Kotlin',
    },
    {
      value: 'objectivec',
      label: 'Objective-C',
    },
    {
      value: 'swift',
      label: 'Swift',
    },
  ]

export function OperationRequest({
  codegenArgs,
  requestInProgress,
  hideNonSdkSnippets,
}: {
  codegenArgs: CodeGeneratorConstructorArgs
  requestInProgress: boolean
  hideNonSdkSnippets: boolean
}) {
  const { colorScheme } = useMantineTheme()
  const languagesFiltered = languages.filter(({ value, isSdk }) => {
    return !hideNonSdkSnippets || isSdk
  })
  return (
    <div className="border rounded-md border-mantine-gray-400 dark:border-mantine-gray-800 overflow-hidden">
      <Tab.Group>
        <div className="flex flex-wrap items-start gap-x-4 bg-gray-50 dark:bg-mantine-gray-900 border-b dark:border-b-mantine-gray-800">
          <div className="mr-auto pt-3 text-black dark:text-white text-sm font-semibold pl-4">
            Request
          </div>
          <ScrollArea type="never" scrollbarSize={4} className="-mb-px">
            <Tab.List className="flex text-sm font-medium px-4">
              {languagesFiltered.map(({ label }) => {
                return (
                  <Tab as={Fragment} key={label}>
                    {({ selected }) => (
                      <button
                        type="button"
                        className={clsx(
                          {
                            ['border-brand-800 text-brand-800 dark:border-brand-500 dark:text-brand-500']:
                              selected,
                            ['border-transparent text-mantine-gray-600 hover:text-mantine-gray-800 dark:hover:text-mantine-gray-100']:
                              !selected,
                          },
                          'border-b-2 py-5 px-3 transition ui-not-focus-visible:outline-none ui-focus-visible:outline-brand-500 ui-focus-visible:dark:outline-brand-600 whitespace-nowrap'
                        )}
                      >
                        {label}
                      </button>
                    )}
                  </Tab>
                )
              })}
            </Tab.List>
          </ScrollArea>
        </div>
        <Tab.Panels>
          {languagesFiltered.map(({ value }) => {
            return (
              <Tab.Panel
                className="outline-brand-500 dark:outline-brand-600"
                key={value}
              >
                <OperationFormGeneratedCode
                  {...codegenArgs}
                  language={value as any}
                />
              </Tab.Panel>
            )
          })}
        </Tab.Panels>
        <div className="border-t dark:border-t-mantine-gray-800 py-2 bg-gray-50 dark:bg-mantine-gray-900">
          <Button
            variant={colorScheme === 'dark' ? 'light' : 'filled'}
            className="ml-auto block mx-4 rounded-md"
            type="submit"
            loading={requestInProgress}
          >
            Send
          </Button>
        </div>
      </Tab.Group>
    </div>
  )
}
