import { useMantineTheme } from '@mantine/core'
import dynamic from 'next/dynamic'
const ReactJson = dynamic(() => import('react-json-view'), {
  ssr: false,
})
export const JsonViewer: typeof ReactJson = (props) => {
  const theme = useMantineTheme()
  return (
    <ReactJson
      theme={theme.colorScheme === 'dark' ? 'tomorrow' : undefined}
      style={{
        fontSize: '0.85rem',
        padding: '0.75rem',
        maxHeight: '500px',
        overflowY: 'scroll',
      }}
      {...props}
    />
  )
}
