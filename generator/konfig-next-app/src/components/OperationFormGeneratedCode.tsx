import { Prism, PrismStylesNames } from '@mantine/prism'
import { CodeGeneratorTypeScript } from '@/utils/code-generator-typescript'
import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'
import { useEffect, useState } from 'react'
import { DefaultProps } from '@mantine/core'
import { CodeGeneratorPython } from '@/utils/code-generator-python'
import { Language } from './DemoCode'
import { CodeGeneratorHttpsnippet } from '@/utils/code-generator-httpsnippet'
import { CopyButton } from './CopyButton'

export function OperationFormGeneratedCode(
  args: CodeGeneratorConstructorArgs & { language: Language }
) {
  const [data, setData] = useState('Loading...') // Initial state

  useEffect(() => {
    if (args.language === 'typescript') {
      new CodeGeneratorTypeScript(args).snippet().then((result) => {
        setData(result)
      })
    } else if (args.language === 'python') {
      new CodeGeneratorPython(args).snippet().then((result) => {
        setData(result)
      })
    } else if (args.language === 'bash') {
      new CodeGeneratorHttpsnippet({ ...args, targetId: 'shell' })
        .snippet()
        .then((result) => {
          setData(result)
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
      <Prism noCopy withLineNumbers {...styles} language={args.language}>
        {data}
      </Prism>
      <CopyButton value="" />
    </div>
  )
}
