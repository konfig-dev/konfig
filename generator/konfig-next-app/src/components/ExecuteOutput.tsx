import { useMantineColorScheme, Transition, Tabs, Code } from '@mantine/core'
import { useState, useEffect, useCallback } from 'react'
const ReactJson = dynamic(() => import('react-json-view'), {
  ssr: false,
})
import { DemoTable } from './DemoTable'
import { tryTableOutput } from '@/utils/try-table-output'
import { tryJsonOutput } from '@/utils/try-json-output'
import dynamic from 'next/dynamic'

export function ExecuteOutput({
  jsonOutput,
  tableOutput,
  processedOutput,
  show,
  disableTable,
}: {
  jsonOutput: ReturnType<typeof tryJsonOutput>
  tableOutput: ReturnType<typeof tryTableOutput>
  processedOutput: string
  show: boolean
  disableTable?: boolean
}) {
  const [activeTab, setActiveTab] = useState<string | null>('raw')
  const [haveClickedTab, setHaveClickedTab] = useState<boolean>(false)

  const [isFocusedOnJson, setIsFocusedOnJson] = useState(false)

  const onCopy = useCallback(
    (e: ClipboardEvent) => {
      if (isFocusedOnJson) {
        e.preventDefault() // Prevent the default copy behavior

        // Have to use "value" to decode the JSON, not "innerHTML"
        // othewise "&" is turned into "&amp;"
        let text = (e.target as HTMLTextAreaElement)?.value

        // Check if text is a URL
        try {
          new URL(JSON.parse(text)) // Will throw if not a valid URL

          // Remove quotes if they are present
          if (text.startsWith('"') && text.endsWith('"')) {
            text = text.slice(1, -1)
          }
        } catch (error) {
          // Not a URL, do nothing special
        }

        e.clipboardData?.setData('text/plain', text)
      }
    },
    [isFocusedOnJson]
  )

  useEffect(() => {
    // Add an event listener when the component mounts
    document.addEventListener('copy', onCopy)

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('copy', onCopy)
    }
  }, [isFocusedOnJson, onCopy])

  useEffect(() => {
    if (haveClickedTab) return
    const newTab =
      tableOutput !== null && !disableTable
        ? 'table'
        : jsonOutput !== null
        ? 'json'
        : 'raw'
    setActiveTab(newTab)
  }, [jsonOutput, tableOutput, haveClickedTab, disableTable])
  const { colorScheme } = useMantineColorScheme()
  return (
    <Transition
      mounted={show}
      transition="pop"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => (
        <Tabs
          value={activeTab}
          style={styles}
          onTabChange={(tab) => {
            setHaveClickedTab(true)
            setActiveTab(tab)
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="raw">Raw</Tabs.Tab>
            <Tabs.Tab disabled={jsonOutput === null} value="json">
              JSON
            </Tabs.Tab>
            {!disableTable && (
              <Tabs.Tab disabled={tableOutput === null} value="table">
                Table
              </Tabs.Tab>
            )}
          </Tabs.List>

          <Tabs.Panel value="raw">
            <Code mah={500} sx={{ overflowY: 'scroll' }} color="gray" block>
              {processedOutput}
            </Code>
          </Tabs.Panel>

          <Tabs.Panel value="json">
            {jsonOutput && (
              <div
                onMouseEnter={() => setIsFocusedOnJson(true)}
                onMouseLeave={() => setIsFocusedOnJson(false)}
              >
                <ReactJson
                  collapsed={1}
                  displayObjectSize
                  displayDataTypes={false}
                  name={false}
                  theme={colorScheme === 'dark' ? 'tomorrow' : undefined}
                  style={{
                    fontSize: '0.85rem',
                    padding: '0.75rem',
                    maxHeight: '500px',
                    overflowY: 'scroll',
                  }}
                  src={jsonOutput}
                />
              </div>
            )}
          </Tabs.Panel>
          {!disableTable && (
            <Tabs.Panel pt="xs" value="table">
              {tableOutput && (
                <DemoTable
                  data={tableOutput.data}
                  columns={tableOutput.columns}
                />
              )}
            </Tabs.Panel>
          )}
        </Tabs>
      )}
    </Transition>
  )
}
