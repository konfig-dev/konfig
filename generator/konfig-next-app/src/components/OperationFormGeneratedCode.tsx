import { Prism, PrismStylesNames } from '@mantine/prism'
import { CodeGeneratorTypeScript } from '@/utils/code-generator-typescript'
import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'
import { useEffect, useState } from 'react'
import { DefaultProps } from '@mantine/core'
import { CodeGeneratorPython } from '@/utils/code-generator-python'
import { LanguageExtended } from './DemoCode'
import { CodeGeneratorHttpsnippet } from '@/utils/code-generator-httpsnippet'
import { CopyButton } from './CopyButton'
import { Prism as ReactPrism } from 'prism-react-renderer'
;((typeof global !== 'undefined' ? global : window) as any).Prism = ReactPrism
require('prismjs/components/prism-csharp')
require('prismjs/components/prism-ruby')
require('prismjs/components/prism-php')
require('prismjs/components/prism-shell-session')
require('prismjs/components/prism-java')

export function OperationFormGeneratedCode(
  args: CodeGeneratorConstructorArgs & { language: LanguageExtended }
) {
  const [data, setData] = useState('Loading...')
  const [copyData, setCopyData] = useState('')

  useEffect(() => {
    if (args.language === 'typescript') {
      new CodeGeneratorTypeScript(args).snippet().then((result) => {
        setData(result)
      })
      new CodeGeneratorTypeScript({ ...args, mode: 'copy' })
        .snippet()
        .then((result) => {
          setCopyData(result)
        })
    } else if (args.language === 'python') {
      new CodeGeneratorPython(args).snippet().then((result) => {
        setData(result)
      })
      new CodeGeneratorPython({ ...args, mode: 'copy' })
        .snippet()
        .then((result) => {
          setCopyData(result)
        })
    } else if (args.language === 'bash') {
      new CodeGeneratorHttpsnippet({ ...args, targetId: 'shell' })
        .snippet()
        .then((result) => {
          setData(result)
        })
      new CodeGeneratorHttpsnippet({ ...args, targetId: 'shell', mode: 'copy' })
        .snippet()
        .then((result) => {
          setCopyData(result)
        })
    } else if (args.language === 'java') {
      new CodeGeneratorHttpsnippet({
        ...args,
        targetId: 'java',
        clientId: 'okhttp',
      })
        .snippet()
        .then((result) => {
          setData(result)
        })
      new CodeGeneratorHttpsnippet({
        ...args,
        targetId: 'java',
        clientId: 'okhttp',
        mode: 'copy',
      })
        .snippet()
        .then((result) => {
          setCopyData(result)
        })
    } else if (args.language === 'csharp') {
      new CodeGeneratorHttpsnippet({
        ...args,
        targetId: 'csharp',
      })
        .snippet()
        .then((result) => {
          setData(result)
        })
      new CodeGeneratorHttpsnippet({
        ...args,
        targetId: 'csharp',
        mode: 'copy',
      })
        .snippet()
        .then((result) => {
          setCopyData(result)
        })
    } else {
      throw Error(`Unxpected language: "${args.language}"`)
    }
  }, [args, args.language])

  const styles: DefaultProps<PrismStylesNames> = {
    styles: {
      code: {
        maxHeight: 300,
        backgroundColor: 'unset !important',
      },
    },
    classNames: {
      code: 'text-xs lg:text-sm',
    },
  }

  return (
    <div className="relative group">
      <Prism noCopy withLineNumbers {...styles} language={args.language as any}>
        {data}
      </Prism>
      <CopyButton value={copyData} />
    </div>
  )
}
