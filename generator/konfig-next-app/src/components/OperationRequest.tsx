import { Button, clsx, useMantineTheme } from '@mantine/core'
import { OperationFormGeneratedCode } from './OperationFormGeneratedCode'
import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'
import { Tab } from '@headlessui/react'
import { Language } from './DemoCode'
import { Fragment } from 'react'

const languages: { value: Language; label: string }[] = [
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
    <div className="border rounded-md border-mantine-gray-400 dark:border-mantine-gray-800">
      <Tab.Group>
        <div className="flex px-4 flex-wrap items-start gap-x-4">
          <div className="mr-auto pt-3 text-black dark:text-white text-sm font-semibold">
            Request
          </div>
          <Tab.List className="-mb-px flex gap-4 text-xs font-medium">
            {languages.map(({ label }) => {
              return (
                <Tab as={Fragment} key={label}>
                  {({ selected }) => (
                    <button
                      className={clsx(
                        {
                          ['border-brand-800 text-brand-800 dark:border-brand-500 dark:text-brand-500']:
                            selected,
                          ['border-transparent text-mantine-gray-600 hover:text-mantine-gray-800 dark:hover:text-mantine-gray-100']:
                            !selected,
                        },
                        'border-b py-4 transition ui-not-focus-visible:outline-none ui-focus-visible:outline-brand-500 ui-focus-visible:dark:outline-brand-600'
                      )}
                    >
                      {label}
                    </button>
                  )}
                </Tab>
              )
            })}
          </Tab.List>
        </div>
        <Tab.Panels className="border-t dark:border-t-mantine-gray-900">
          {languages.map(({ value }) => {
            return (
              <Tab.Panel
                className="p-0 lg:p-2 outline-brand-500 dark:outline-brand-600"
                key={value}
              >
                <OperationFormGeneratedCode {...codegenArgs} language={value} />
              </Tab.Panel>
            )
          })}
        </Tab.Panels>
        <div className="border-t dark:border-t-mantine-gray-900 py-2">
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
