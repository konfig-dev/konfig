import { Button, ScrollArea, clsx, useMantineTheme } from '@mantine/core'
import { OperationFormGeneratedCode } from './OperationFormGeneratedCode'
import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'
import { Tab } from '@headlessui/react'
import { LanguageExtended } from './DemoCode'
import { Fragment } from 'react'

const languages: { value: LanguageExtended; label: string }[] = [
  {
    value: 'typescript',
    label: 'TypeScript',
  },
  {
    value: 'python',
    label: 'Python',
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
] as const

export function OperationRequest({
  codegenArgs,
  requestInProgress,
}: {
  codegenArgs: CodeGeneratorConstructorArgs
  requestInProgress: boolean
}) {
  const { colorScheme } = useMantineTheme()
  return (
    <div className="border rounded-md border-mantine-gray-400 dark:border-mantine-gray-800 overflow-hidden">
      <Tab.Group>
        <div className="flex pl-4 flex-wrap items-start gap-x-4 bg-gray-50 dark:bg-mantine-gray-900 border-b dark:border-b-mantine-gray-800">
          <div className="mr-auto pt-3 text-black dark:text-white text-sm font-semibold">
            Request
          </div>
          <ScrollArea type="scroll" scrollbarSize={5} className="-mb-px">
            <Tab.List className="flex gap-4 text-xs font-medium max-w-xs">
              {languages.map(({ label }, i) => {
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
                          'border-b py-4 transition ui-not-focus-visible:outline-none ui-focus-visible:outline-brand-500 ui-focus-visible:dark:outline-brand-600 whitespace-nowrap'
                        )}
                      >
                        <div
                          className={clsx(
                            {
                              ['pr-4']: i === languages.length - 1,
                            },
                            'ui-not-focus-visible:outline-none'
                          )}
                        >
                          {label}
                        </div>
                      </button>
                    )}
                  </Tab>
                )
              })}
            </Tab.List>
          </ScrollArea>
        </div>
        <Tab.Panels>
          {languages.map(({ value }) => {
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
