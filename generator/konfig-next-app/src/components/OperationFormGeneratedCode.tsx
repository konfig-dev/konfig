import { Prism, PrismStylesNames } from '@mantine/prism'
import { CodeGeneratorTypeScript } from '@/utils/code-generator-typescript'
import { CodeGeneratorConstructorArgs } from '@/utils/code-generator'
import { useEffect, useState } from 'react'
import { DefaultProps, Tabs, useMantineTheme } from '@mantine/core'
import { CodeGeneratorPython } from '@/utils/code-generator-python'

function TsIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path fill="#1976d2" d="M6 6h36v36H6z" />
      <path
        fill="#fff"
        d="M27.49 22H14.227v3.264h4.757V40h3.769V25.264h4.737zM39.194 26.084s-1.787-1.192-3.807-1.192-2.747.96-2.747 1.986c0 2.648 7.381 2.383 7.381 7.712 0 8.209-11.254 4.568-11.254 4.568V35.22s2.152 1.622 4.733 1.622 2.483-1.688 2.483-1.92c0-2.449-7.315-2.449-7.315-7.878 0-7.381 10.658-4.469 10.658-4.469l-.132 3.509z"
      />
    </svg>
  )
}

function PythonIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path
        fill="#0277BD"
        d="M24.047 5c-1.555.005-2.633.142-3.936.367-3.848.67-4.549 2.077-4.549 4.67V14h9v2H10.87c-2.636 0-4.943 1.242-5.674 4.219-.826 3.417-.863 5.557 0 9.125C5.851 32.005 7.294 34 9.931 34h3.632v-5.104c0-2.966 2.686-5.896 5.764-5.896h7.236c2.523 0 5-1.862 5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672.061-.006-1.756-.371-3.298-.365zm-4.984 4c.821 0 1.5.677 1.5 1.502a1.5 1.5 0 01-1.5 1.498 1.49 1.49 0 01-1.5-1.498A1.5 1.5 0 0119.063 9z"
      />
      <path
        fill="#FFC107"
        d="M23.078 43c1.555-.005 2.633-.142 3.936-.367 3.848-.67 4.549-2.077 4.549-4.67V34h-9v-2h13.693c2.636 0 4.943-1.242 5.674-4.219.826-3.417.863-5.557 0-9.125C41.274 15.995 39.831 14 37.194 14h-3.632v5.104c0 2.966-2.686 5.896-5.764 5.896h-7.236c-2.523 0-5 1.862-5 4.377v8.586c0 2.439 1.759 4.263 4.218 4.672-.061.006 1.756.371 3.298.365zm4.985-4c-.821 0-1.5-.677-1.5-1.502a1.5 1.5 0 011.5-1.498c.837 0 1.5.664 1.5 1.498 0 .822-.664 1.502-1.5 1.502z"
      />
    </svg>
  )
}

type Languages = 'ts' | 'py'
export function OperationFormGeneratedCode(args: CodeGeneratorConstructorArgs) {
  const [data, setData] = useState('Loading...') // Initial state

  const [activeTab, setActiveTab] = useState<Languages | null>('ts')

  useEffect(() => {
    if (activeTab === 'ts') {
      new CodeGeneratorTypeScript(args).snippet().then((result) => {
        setData(result)
      })
    } else if (activeTab === 'py') {
      new CodeGeneratorPython(args).snippet().then((result) => {
        setData(result)
      })
    } else {
      throw Error('Unxpected language' + activeTab)
    }
  }, [args, activeTab])
  const { colorScheme } = useMantineTheme()
  const darkBorder = '0.0625rem solid #373A40'
  const lightBorder = '0.0625rem solid #dee2e6'
  const styles: DefaultProps<PrismStylesNames> = {
    style: {
      borderLeft: colorScheme === 'dark' ? darkBorder : lightBorder,
      borderBottom: colorScheme === 'dark' ? darkBorder : lightBorder,
      borderRight: colorScheme === 'dark' ? darkBorder : lightBorder,
    },
    styles: {
      code: {
        maxHeight: 400,
        backgroundColor: 'unset !important',
      },
    },
  }
  return (
    <Tabs variant="outline" onTabChange={setActiveTab as any} value={activeTab}>
      <Tabs.Panel value="ts">
        <Prism {...styles} language="typescript">
          {data}
        </Prism>
      </Tabs.Panel>
      <Tabs.Panel value="py">
        <Prism {...styles} language="python">
          {data}
        </Prism>
      </Tabs.Panel>
    </Tabs>
  )
}
