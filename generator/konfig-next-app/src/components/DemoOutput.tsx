import { observer } from 'mobx-react'
import { CellState } from './DemoForm'
import { ExecuteOutput } from './ExecuteOutput'

export const DemoOutput = observer(({ cell }: { cell: CellState }) => {
  return (
    // gets rid of:
    // """"
    // Warning: useLayoutEffect does nothing on the server, because its effect
    // cannot be encoded into the server renderer's output format. This will
    // lead to a mismatch between the initial, non-hydrated UI and the intended
    // UI. To avoid this, useLayoutEffect should only be used in components that
    // render exclusively on the client. See
    // https://reactjs.org/link/uselayouteffect-ssr for common fixes.
    // """"
    cell.show && (
      <ExecuteOutput
        jsonOutput={cell.jsonOutput}
        tableOutput={cell.tableOutput}
        processedOutput={cell.processedOutput}
        show={cell.show}
      />
    )
  )
})
