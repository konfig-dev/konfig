import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'
import React from 'react'
import { ScrollArea, Tooltip, useMantineTheme } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useClipboard } from '@mantine/hooks'
import { IconTerminal } from '@tabler/icons-react'
import { linkColor } from '@/utils/link-color'

interface LanguageInstallationCommandProps {
  codegenArgs: CodeGeneratorConstructorArgs
}

export const LanguageInstallationCommand: React.FC<
  LanguageInstallationCommandProps
> = ({ codegenArgs }) => {
  const clipboard = useClipboard()
  const theme = useMantineTheme()
  return (
    <div className="px-4 py-6 text-xs border-b border-b-mantine-gray-200 dark:border-b-zinc-800">
      <div className="mb-3 flex justify-between">
        <div className="select-none text-mantine-gray-700 dark:text-mantine-gray-600">
          Installation
        </div>
        <div className="flex gap-2 text-mantine-gray-700 dark:text-mantine-gray-600">
          <a
            target="_blank"
            href="https://github.com/groundxai/groundx-sdks/blob/main/sdks/typescript/README.md"
            className="hover:text-black dark:hover:text-mantine-gray-400"
          >
            GitHub
          </a>
          <a
            target="_blank"
            className="hover:text-black dark:hover:text-mantine-gray-400"
            href="https://www.npmjs.com/package/groundx-typescript-sdk"
          >
            npm
          </a>
        </div>
      </div>
      <div className="font-mono flex whitespace-nowrap">
        <div className="mr-2 text-mantine-gray-600 dark:text-mantine-gray-700">
          {'$ '}
        </div>
        <Tooltip
          position="right"
          classNames={{ tooltip: 'text-xs' }}
          withArrow
          label="Click to copy"
        >
          <ScrollArea
            onClick={() => {
              clipboard.copy(
                `npm install ${codegenArgs.languageConfigurations.typescript.packageName}`
              )
              notifications.show({
                id: 'command-copied-to-your-clipboard',
                radius: 'md',
                withBorder: true,
                styles: {
                  body: {
                    fontWeight: 500,
                  },
                  icon: {
                    backgroundColor: 'transparent',
                  },
                },
                message: 'Command copied to your clipboard',
                icon: (
                  <IconTerminal
                    stroke={1.5}
                    size="1.3rem"
                    color={linkColor({ theme })}
                  />
                ),
              })
            }}
            type="never"
            className="cursor-copy font-semibold"
          >
            {`npm install ${codegenArgs.languageConfigurations.typescript.packageName}`}
          </ScrollArea>
        </Tooltip>
      </div>
    </div>
  )
}
