import { Button, ScrollArea, clsx, useMantineTheme } from '@mantine/core'
import {
  GeneratedCodeLanguage,
  OperationFormGeneratedCode,
} from './OperationFormGeneratedCode'
import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { LanguageInstallationCommand } from './LanguageInstallationCommand'
import { LanguageExtended } from './DemoCode'

export type LanguageTab = {
  syntaxHighlightingLanguage: LanguageExtended
  generatorLanguage: GeneratedCodeLanguage
  /**
   * Is this language configuration generating for Konfig's SDK?
   */
  isSdk?: boolean
  label: string
}

/**
 * The list of possible tabs to show in the UI
 */
const languages: LanguageTab[] = [
  {
    syntaxHighlightingLanguage: 'typescript',
    generatorLanguage: 'typescript',
    label: 'TypeScript',
    isSdk: true, // TODO this should be dynamic based on konfig.yam
  },
  {
    // for konfig sdk snippet
    syntaxHighlightingLanguage: 'python',
    generatorLanguage: 'python',
    label: 'Python',
    isSdk: true,
  },
  {
    // for native http snippet
    syntaxHighlightingLanguage: 'python',
    generatorLanguage: 'python-http',
    label: 'Python',
  },
  {
    syntaxHighlightingLanguage: 'bash',
    generatorLanguage: 'bash',
    label: 'cURL',
  },
  {
    syntaxHighlightingLanguage: 'java',
    generatorLanguage: 'java',
    label: 'Java',
  },
  {
    syntaxHighlightingLanguage: 'csharp',
    generatorLanguage: 'csharp',
    label: 'C#',
  },
  {
    syntaxHighlightingLanguage: 'ruby',
    generatorLanguage: 'ruby',
    label: 'Ruby',
  },
  {
    syntaxHighlightingLanguage: 'php',
    generatorLanguage: 'php',
    label: 'PHP',
  },
  {
    syntaxHighlightingLanguage: 'go',
    generatorLanguage: 'go',
    label: 'Go',
  },
  {
    syntaxHighlightingLanguage: 'kotlin',
    generatorLanguage: 'kotlin',
    label: 'Kotlin',
  },
  {
    syntaxHighlightingLanguage: 'objectivec',
    generatorLanguage: 'objectivec',
    label: 'Objective-C',
  },
  {
    syntaxHighlightingLanguage: 'swift',
    generatorLanguage: 'swift',
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
  const languagesFiltered = languages.filter(
    ({ syntaxHighlightingLanguage: value, isSdk }) => {
      // If Python SDK configuration is disabled, don't show Python SDK snippet
      // But if Python SDK configuration is enabled, show Python SDK snippet
      // Why? This is important so we don't show two Python tabs in the
      // generated code snippet window
      if (value === 'python') {
        if (isSdk) {
          return !codegenArgs.languageConfigurations.python?.disabled
        } else {
          return !!codegenArgs.languageConfigurations.python?.disabled
        }
      }
      return !hideNonSdkSnippets || isSdk
    }
  )
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
          {languagesFiltered.map((language) => {
            return (
              <Tab.Panel
                className="outline-brand-500 dark:outline-brand-600"
                key={language.generatorLanguage}
              >
                <LanguageInstallationCommand
                  language={language.generatorLanguage}
                  codegenArgs={codegenArgs}
                />
                <OperationFormGeneratedCode
                  {...codegenArgs}
                  language={language}
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
