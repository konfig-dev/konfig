import { Prism, PrismStylesNames } from '@mantine/prism'
import { CodeGeneratorTypeScript } from '@/utils/code-generator-typescript'
import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'
import { useEffect, useState } from 'react'
import { DefaultProps } from '@mantine/core'
import { CodeGeneratorPython } from '@/utils/code-generator-python'
import { Language } from './DemoCode'
import { CodeGeneratorHttpsnippet } from '@/utils/code-generator-httpsnippet'
import { CopyButton } from './CopyButton'
import { Prism as ReactPrism } from 'prism-react-renderer'
import { LanguageTab } from './OperationRequest'
;((typeof global !== 'undefined' ? global : window) as any).Prism = ReactPrism
require('prismjs/components/prism-csharp')
require('prismjs/components/prism-kotlin')
require('prismjs/components/prism-objectivec')
require('prismjs/components/prism-swift')
require('prismjs/components/prism-ruby')
require('prismjs/components/prism-php')
require('prismjs/components/prism-shell-session')
require('prismjs/components/prism-java')

const languageMapping = {
  typescript: {
    codegen: CodeGeneratorTypeScript,
    args: {},
  },
  python: {
    codegen: CodeGeneratorPython,
    args: {},
  },
  'python-http': {
    codegen: CodeGeneratorHttpsnippet,
    args: { targetId: 'python', clientId: 'requests' },
  },
  bash: {
    codegen: CodeGeneratorHttpsnippet,
    args: { targetId: 'shell' },
  },
  java: {
    codegen: CodeGeneratorHttpsnippet,
    args: { targetId: 'java', clientId: 'okhttp' },
  },
  csharp: {
    codegen: CodeGeneratorHttpsnippet,
    args: { targetId: 'csharp' },
  },
  ruby: {
    codegen: CodeGeneratorHttpsnippet,
    args: { targetId: 'ruby' },
  },
  php: {
    codegen: CodeGeneratorHttpsnippet,
    args: { targetId: 'php' },
  },
  go: {
    codegen: CodeGeneratorHttpsnippet,
    args: { targetId: 'go' },
  },
  kotlin: {
    codegen: CodeGeneratorHttpsnippet,
    args: { targetId: 'kotlin' },
  },
  objectivec: {
    codegen: CodeGeneratorHttpsnippet,
    args: { targetId: 'objc' },
  },
  swift: {
    codegen: CodeGeneratorHttpsnippet,
    args: { targetId: 'swift' },
  },
} as const

export type GeneratedCodeLanguage = keyof typeof languageMapping

export function OperationFormGeneratedCode(
  args: CodeGeneratorConstructorArgs & { language: LanguageTab }
) {
  const [data, setData] = useState('Loading...')
  const [copyData, setCopyData] = useState('')

  useEffect(() => {
    // if args.language not in languageMapping, then this will throw an error
    if (!languageMapping[args.language.generatorLanguage]) {
      throw new Error(`Language ${args.language} not supported`)
    }

    new languageMapping[args.language.generatorLanguage].codegen({
      ...args,
      ...languageMapping[args.language.generatorLanguage].args,
    } as any)
      .snippet()
      .then((result) => {
        setData(result)
      })
    new languageMapping[args.language.generatorLanguage].codegen({
      ...args,
      ...languageMapping[args.language.generatorLanguage].args,
      mode: 'copy',
    } as any)
      .snippet()
      .then((result) => {
        setCopyData(result)
      })
  }, [args, args.language.syntaxHighlightingLanguage])

  const styles: DefaultProps<PrismStylesNames> = {
    styles: {
      code: {
        maxHeight: 300,
        backgroundColor: 'unset !important',
      },
    },
    classNames: {
      code: 'text-xs',
    },
  }

  return (
    <div className="relative group py-4">
      <Prism
        noCopy
        withLineNumbers
        {...styles}
        language={args.language.syntaxHighlightingLanguage as Language}
      >
        {data}
      </Prism>
      <CopyButton value={copyData} />
    </div>
  )
}
