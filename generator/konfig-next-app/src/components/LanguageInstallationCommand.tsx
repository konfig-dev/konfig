import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'
import React from 'react'
import { ScrollArea, Tooltip, useMantineTheme } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useClipboard } from '@mantine/hooks'
import { IconTerminal } from '@tabler/icons-react'
import { linkColor } from '@/utils/link-color'
import { LanguageExtended } from './DemoCode'

interface LanguageInstallationCommandProps {
  codegenArgs: CodeGeneratorConstructorArgs
  language: LanguageExtended
}

export const LanguageInstallationCommand: React.FC<
  LanguageInstallationCommandProps
> = ({ codegenArgs, language }) => {
  const clipboard = useClipboard()
  const theme = useMantineTheme()
  const cmd = installCommand({ codegenArgs, language })
  if (cmd === null) return null
  return (
    <div className="px-4 py-6 text-xs border-b border-b-mantine-gray-200 dark:border-b-zinc-800">
      <div className="mb-3 flex justify-between">
        <div className="select-none text-mantine-gray-700 dark:text-mantine-gray-600">
          Installation
        </div>
        <div className="flex gap-2 text-mantine-gray-700 dark:text-mantine-gray-600">
          <Links codegenArgs={codegenArgs} language={language} />
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
              clipboard.copy(cmd.cmd)
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
            className="cursor-pointer font-semibold transition text-mantine-gray-700 dark:text-mantine-gray-500 hover:text-black dark:hover:text-mantine-gray-0"
          >
            {cmd.cmd}
          </ScrollArea>
        </Tooltip>
      </div>
    </div>
  )
}

function Links({
  codegenArgs,
  language,
}: {
  codegenArgs: CodeGeneratorConstructorArgs
  language: LanguageExtended
}) {
  const pkg = packageLink({ codegenArgs, language })
  return (
    <>
      <a
        target="_blank"
        href={githubLink({ codegenArgs, language })}
        className="hover:text-black dark:hover:text-mantine-gray-400"
      >
        GitHub
      </a>
      {pkg && (
        <a
          target="_blank"
          className="hover:text-black dark:hover:text-mantine-gray-400"
          href={pkg.link}
        >
          {pkg.packageManager}
        </a>
      )}
    </>
  )
}

function githubLink({
  codegenArgs,
  language,
}: {
  codegenArgs: CodeGeneratorConstructorArgs
  language: LanguageExtended
}) {
  const config = languageConfiguration({ codegenArgs, language })
  if (config === undefined) return ''
  if (typeof config === 'string') return ''
  if (config.git === undefined) return ''
  return `https://github.com/${config.git.owner}/${config.git.path}/README.md`
}

function packageLink({
  codegenArgs,
  language,
}: {
  codegenArgs: CodeGeneratorConstructorArgs
  language: LanguageExtended
}): { packageManager: 'npm' | 'PyPI'; link: string } | undefined {
  const config = languageConfiguration({ codegenArgs, language })
  if (config === undefined) return
  if (typeof config === 'string') return
  if (config.type === 'typescript') {
    return {
      packageManager: 'npm',
      link: `https://www.npmjs.com/package/${config.packageName}`,
    }
  }
  if (config.type === 'python') if (config.projectName === undefined) return
  return {
    packageManager: 'PyPI',
    link: `https://pypi.org/project/${config.projectName}`,
  }
}

function languageConfiguration({
  codegenArgs,
  language,
}: {
  codegenArgs: CodeGeneratorConstructorArgs
  language: LanguageExtended
}) {
  if (language === 'typescript') {
    return {
      type: 'typescript',
      ...codegenArgs.languageConfigurations.typescript,
    } as const
  } else if (language === 'python') {
    return {
      type: 'python',
      ...codegenArgs.languageConfigurations.python,
    } as const
  }
  return language
}

function installCommand({
  codegenArgs,
  language,
}: {
  language: LanguageExtended
  codegenArgs: CodeGeneratorConstructorArgs
}): { cmd: string } | null {
  if (language === 'typescript') {
    return {
      cmd: `npm install ${codegenArgs.languageConfigurations.typescript.packageName}`,
    }
  } else if (language === 'python') {
    if (!codegenArgs.languageConfigurations.python?.packageName) {
      return { cmd: '' }
    }
    return {
      cmd: `pip install ${codegenArgs.languageConfigurations.python?.packageName}`,
    }
  }
  return null
}
