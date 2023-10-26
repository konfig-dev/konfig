import { Prism, PrismStylesNames } from '@mantine/prism'
import { CodeGeneratorTypeScript } from '@/utils/code-generator-typescript'
import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'
import { useEffect, useState } from 'react'
import { DefaultProps, clsx, createStyles } from '@mantine/core'
import { CodeGeneratorPython } from '@/utils/code-generator-python'
import { Language } from './DemoCode'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    border: '1px solid',
    borderRadius: theme.radius.sm,
  },
  code: {
    borderTop: '1px solid',
  },
  codeBorderColor: {
    borderColor:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[8]
        : theme.colors.gray[4],
  },
}))

export function OperationFormGeneratedCode(
  args: CodeGeneratorConstructorArgs & { language: Language }
) {
  const [data, setData] = useState('Loading...') // Initial state

  const {
    classes: { code, codeBorderColor },
  } = useStyles()

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
        maxHeight: 400,
        backgroundColor: 'unset !important',
      },
    },
  }

  return (
    <Prism
      withLineNumbers
      classNames={{
        root: clsx(code, codeBorderColor),
      }}
      {...styles}
      language={args.language}
    >
      {data}
    </Prism>
  )
}
