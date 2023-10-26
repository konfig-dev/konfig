import { Prism, PrismStylesNames } from '@mantine/prism'
import { CodeGeneratorTypeScript } from '@/utils/code-generator-typescript'
import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'
import { useEffect, useState } from 'react'
import { DefaultProps, clsx, createStyles } from '@mantine/core'
import { CodeGeneratorPython } from '@/utils/code-generator-python'
import { Language } from './DemoCode'

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
    } else {
      throw Error(`Unxpected language: "${args.language}"`)
    }
  }, [args, args.language])

  const styles: DefaultProps<PrismStylesNames> = {
    styles: {
      code: {
        maxHeight: 300,
        backgroundColor: 'unset !important',
        fontSize: 13,
      },
    },
  }

  return (
    <Prism withLineNumbers {...styles} language={args.language}>
      {data}
    </Prism>
  )
}
