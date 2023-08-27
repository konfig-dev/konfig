import { observer } from 'mobx-react'
import { CellState } from './DemoForm'
import { ExecuteOutput } from './ExecuteOutput'

export const DemoOutput = observer(({ cell }: { cell: CellState }) => {
  return (
    <ExecuteOutput
      jsonOutput={cell.jsonOutput}
      tableOutput={cell.tableOutput}
      processedOutput={cell.processedOutput}
      show={cell.show}
    />
  )
})
