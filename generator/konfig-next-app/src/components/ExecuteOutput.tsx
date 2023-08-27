import { useMantineColorScheme, Transition, Tabs, Code } from '@mantine/core'
import { useState, useEffect } from 'react'
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
}: {
  jsonOutput: ReturnType<typeof tryJsonOutput>
  tableOutput: ReturnType<typeof tryTableOutput>
  processedOutput: string
  show: boolean
}) {
  const [activeTab, setActiveTab] = useState<string | null>('raw')
  const [haveClickedTab, setHaveClickedTab] = useState<boolean>(false)
  useEffect(() => {
    if (haveClickedTab) return
    const newTab =
      tableOutput !== null ? 'table' : jsonOutput !== null ? 'json' : 'raw'
    setActiveTab(newTab)
  }, [jsonOutput, tableOutput, haveClickedTab])
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
            <Tabs.Tab disabled={tableOutput === null} value="table">
              Table
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="raw">
            <Code mah={500} sx={{ overflowY: 'scroll' }} color="gray" block>
              {processedOutput}
            </Code>
          </Tabs.Panel>

          <Tabs.Panel value="json">
            {jsonOutput && (
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
            )}
          </Tabs.Panel>
          <Tabs.Panel pt="xs" value="table">
            {tableOutput && (
              <DemoTable
                data={tableOutput.data}
                columns={tableOutput.columns}
              />
            )}
          </Tabs.Panel>
        </Tabs>
      )}
    </Transition>
  )
}
