/* eslint-disable react-hooks/exhaustive-deps */
import { api } from '@/utils/api'
import { LocalVariables, LocalVariablesType } from '@/utils/schemas'
import { Stack } from '@mantine/core'
import { createFormContext } from '@mantine/form'
import { observer } from 'mobx-react'
import { useState, useContext, createContext, useEffect } from 'react'
import { toText } from 'hast-util-to-text'
import { Components } from 'react-markdown'
import { DemoState, DemoStateContext } from './DemoMarkdown'
import { makeAutoObservable } from 'mobx'
import { Position } from 'unist-util-position/lib'
import { v4 as uuid } from 'uuid'
import dayjs from 'dayjs'
import { SandboxContext } from './DemoPortal'
import { captureSaveOutput } from '@/utils/capture-save-output'
import { visit } from 'unist-util-visit'
import { Element } from 'hast-util-to-text/lib'
import { extractLanguageFromElement } from './DemoCode'

export const FormContext = createContext<
  ReturnType<typeof createFormContext>[1] | null
>(null)

export const CellContext = createContext<CellState | null>(null)

type RunState = 'Success' | 'Error' | 'N/A'

const inputTagNames = ['input', 'enum']
export class CellState {
  show = false
  running = false
  runState: RunState = 'N/A'
  output: string = ''
  demoState: DemoState | null
  skippable: boolean
  id = uuid()
  debug?: string

  constructor({
    demoState,
    skippable,
    debug,
  }: {
    demoState: DemoState | null
    skippable: boolean
    debug?: string
  }) {
    makeAutoObservable(this)
    this.demoState = demoState
    this.debug = debug
    this.skippable = skippable
  }

  get ranSuccessfully() {
    return this.runState === 'Success'
  }

  get idx() {
    return this.demoState?.cells.findIndex((c) => c === this)
  }

  /**
   * If any previous cells haven't been run and are not skippable then you can't
   * run this cell
   */
  get canRunCell(): 'no' | 'yes' | 'firstCell' {
    if (this.idx === undefined) return 'no'
    if (this.idx === 0) return 'firstCell'

    for (let i = 0; i < this.idx; i++) {
      const cell = this.demoState?.cells?.[i]
      if (cell === undefined) return 'no'
      if (cell.skippable) continue
      if (!cell.ranSuccessfully) return 'no'
    }
    return 'yes'
  }

  get failed() {
    return this.runState === 'Error'
  }

  setRunning(value: boolean) {
    this.running = value
  }

  setShow(value: boolean) {
    this.show = value
  }

  setOutput(value: string) {
    this.output = value
  }

  setRunState(value: RunState) {
    this.runState = value
  }

  /**
   * Removes save labels from output
   */
  get processedOutput() {
    return this.output
      .split('\n')
      .filter((line) => captureSaveOutput({ line }) === undefined)
      .join('\n')
  }

  get jsonOutput(): object | null {
    try {
      const json: unknown = JSON.parse(this.processedOutput)
      if (typeof json === 'object') return json
    } catch {}
    return null
  }

  get tableOutput(): {
    data: Record<string, unknown>[]
    columns: string[]
  } | null {
    try {
      const json: unknown = JSON.parse(this.processedOutput)
      if (Array.isArray(json)) {
        const allElementsAreObjects =
          json.filter((value: unknown) => typeof value === 'object').length ===
          json.length
        if (allElementsAreObjects) {
          const columns: Set<string> = new Set()
          for (const row of json) {
            for (const column of Object.keys(row)) {
              columns.add(column)
            }
          }
          return {
            data: json as Record<string, unknown>[],
            columns: Array.from(columns),
          }
        }
      }
    } catch {}
    return null
  }

  setSaved({ output }: { output: string }) {
    if (this.demoState === null) return
    const saved = output
      .split('\n')
      .filter((line) => captureSaveOutput({ line }) !== undefined)
      .map((line) => captureSaveOutput({ line }))

    const savedData: Record<string, string[]> = {}
    for (const output of saved) {
      if (output === undefined) continue
      savedData[output.label] = []
    }

    for (const output of saved) {
      if (output === undefined) continue
      savedData[output.label].push(output.value)
    }

    for (const label in savedData) {
      this.demoState.setSavedData({ label, values: savedData[label] })
    }

    return saved
  }

  async run({
    position,
    environmentVariables,
    localVariables,
    sandbox,
  }: {
    position: Position
    environmentVariables?: unknown
    localVariables: unknown
    sandbox?: { code: string }
  }) {
    if (!this.demoState?.sessionId) return
    this.setRunning(true)
    this.setShow(false)

    const response =
      sandbox !== undefined
        ? await api.executeSandboxCode.query({
            sessionId: this.demoState?.sessionId,
            code: sandbox.code,
            localVariables: LocalVariables.parse(localVariables),
          })
        : await api.executeCode.query({
            organizationId: this.demoState.portal.organizationId,
            portalId: this.demoState.portal.demoId,
            demoId: this.demoState.id,
            sessionId: this.demoState?.sessionId,
            codePosition: position,
            localVariables: LocalVariables.parse(localVariables),
          })

    this.setRunning(false)

    if (response.result === 'Could not find demo') {
      this.setRunState('Error')
      return
    }

    if (response.result === 'Could not find code') {
      this.setRunState('Error')
      return
    }
    this.setSaved({ output: response.output })
    this.setOutput(response.output)
    this.setRunning(false)
    this.setShow(true)
    this.setRunState(response.error === '' ? 'Success' : 'Error')
  }
}

const _Form: Components['form'] = ({
  node,
  children,
  siblingCount,
  ...props
}) => {
  const [[FormProvider, useFormContext, useForm]] = useState(
    createFormContext()
  )

  // collect all optional inputs
  const optionals = node.children.reduce((optionals, child) => {
    if (child.type === 'element') {
      const name = child.properties?.['name']
      const optional = child.properties?.['optional']
      if (
        typeof name === 'string' &&
        optional !== undefined &&
        optional !== null
      ) {
        optionals.push(name)
      }
    }
    return optionals
  }, [] as string[])

  // collect all precision attributes formats from number inputs
  const precisions = node.children.reduce(
    (precisions, child) => {
      if (child.type === 'element' && child.tagName === 'number') {
        const name = child.properties?.['name']
        const precision = child.properties?.['precision']
        if (typeof name === 'string' && typeof precision === 'string') {
          precisions[name] = parseInt(precision)
        }
      }
      return precisions
    },
    {} as { [key: string]: number }
  )

  // collect any value formats from date inputs
  const valueFormats = node.children.reduce(
    (valueFormats, child) => {
      if (child.type === 'element' && child.tagName === 'date') {
        const name = child.properties?.['name']
        const valueFormat = child.properties?.['valueFormat']
        if (typeof name === 'string' && typeof valueFormat === 'string') {
          valueFormats[name] = valueFormat
        }
      }
      return valueFormats
    },
    {} as { [key: string]: string }
  )

  // Initialize values from the "defaultValue" attribute
  const initialValues = node.children.reduce(
    (initialValues, child) => {
      if (child.type === 'element') {
        if (inputTagNames.includes(child.tagName)) {
          const name = child.properties?.['name']
          const type = child.properties?.['type']
          const defaultValue = child.properties?.['defaultValue']
          if (typeof name === 'string') {
            initialValues[name] =
              type === 'checkbox'
                ? defaultValue === 'true'
                : defaultValue !== undefined && typeof defaultValue === 'string'
                ? defaultValue
                : ''
          }
        } else if (child.tagName === 'number') {
          const name = child.properties?.['name']
          const defaultValue = child.properties?.['defaultValue']
          if (typeof name === 'string') {
            initialValues[name] =
              typeof defaultValue === 'string' ? parseFloat(defaultValue) : ''
          }
        }
      }
      return initialValues
    },
    {} as { [key: string]: string | boolean | number }
  )

  // Ensure all non-optional inputs are non-empty
  const validate = node.children.reduce(
    (validate, child) => {
      if (
        child.type === 'element' &&
        (inputTagNames.includes(child.tagName) || child.tagName === 'date')
      ) {
        const name = child.properties?.['name']
        const label = child.properties?.['label']
        const optional = child.properties?.['optional']
        const type = child.properties?.['type']
        if (
          type !== 'checkbox' && // checkbox should always be optional as you want to allow box to be unchecked
          typeof name === 'string' &&
          optional === undefined
        ) {
          validate[name] = (value) => {
            // check for null because thats what is used when you de-select an
            // option from a select input
            return value === undefined || value === '' || value === null
              ? `${label} is required`
              : null
          }
        }
      } else if (child.type === 'element' && child.tagName === 'number') {
        const name = child.properties?.['name']
        const label = child.properties?.['label']
        const min = child.properties?.['min']
        const max = child.properties?.['max']
        const optional = child.properties?.['optional']
        if (typeof name === 'string') {
          validate[name] = (value) => {
            if (typeof min === 'string') {
              if (parseFloat(min) > parseFloat(value)) {
                return `${label} must be greater than ${min}`
              }
            }
            if (typeof max === 'string') {
              if (parseFloat(max) > parseFloat(value)) {
                return `${label} must be less than ${max}`
              }
            }
            // check for null because thats what is used when you de-select an
            // option from a select input
            return optional === undefined &&
              (value === undefined || value === '' || value === null)
              ? `${label} is required`
              : null
          }
        }
      }
      return validate
    },
    {} as { [key: string]: (value: string) => string | null }
  )

  // Find the first section of code that is a Python snippet
  let firstPreNode: Element | undefined
  visit(
    node,
    (node) => {
      const element = node as Element
      return element.type === 'element' && element.tagName === 'code'
    },
    (node) => {
      const element = node as Element
      const language = extractLanguageFromElement(element)
      if (language === 'python') firstPreNode = element
    }
  )

  const form = useForm({ initialValues, validate })

  useEffect(() => {
    node.children.forEach((child) => {
      if (child.type === 'element') {
        if (inputTagNames.includes(child.tagName)) {
          // if tag name is enum then don't populate default value if it is using savedData and not data
          if (child.tagName === 'enum') {
            const data = child.properties?.['data']
            const savedData = child.properties?.['savedData']
            if (savedData !== undefined && data === undefined)
              return initialValues
          }

          const name = child.properties?.['name']
          if (typeof name === 'string') {
            const stored = localStorage.getItem(name)
            if (stored !== null && stored !== 'null') {
              if (stored === 'true') form.setFieldValue(name, true)
              else if (stored === 'false') form.setFieldValue(name, false)
              else form.setFieldValue(name, stored)
            }
          }
        } else if (child.tagName === 'date') {
          const name = child.properties?.['name']
          if (typeof name === 'string') {
            const stored = localStorage.getItem(name)
            if (
              stored !== null &&
              stored !== 'null' &&
              !isNaN(new Date(stored).getTime())
            ) {
              form.setFieldValue(name, new Date(stored))
            }
          }
        }
      }
      return initialValues
    })
  }, [])

  const demoState = useContext(DemoStateContext)
  const sandbox = useContext(SandboxContext)

  const [cell, setCell] = useState(
    new CellState({
      demoState,
      skippable: 'skippable' in props,
      debug: (props as any)['debug'],
    })
  )

  // Turns out if you want to do something once for a component this is the
  // pattern you should follow to actually ensure that child components can
  // react to state updates
  useEffect(() => {
    if (demoState === null) return
    if (demoState.cells.includes(cell)) return
    demoState.pushCell({ cell })
  }, [cell])

  // Make sure to update cell if there is a new demoState.
  //
  // This somehow fixed bug where sandbox is refreshed but DemoPortalAside was
  // not updating.  My hypothesis is that although a new demoState was being
  // created, this DemoForm's cell state was static so by explicitly updating
  // the cell to a new cell whenever the demoState is updated, we mitigate that
  // behavior.
  //
  // Regarding the first two "if" statements in the effect, I believe it
  // essentially ensures the cell is not updated if the demoState already
  // contains the current cell (i.e. we are good to go for this component).
  useEffect(() => {
    if (demoState === null) return
    if (demoState.cells.includes(cell)) return
    setCell(
      new CellState({
        demoState,
        skippable: 'skippable' in props,
        debug: (props as any)['debug'],
      })
    )
  }, [demoState])

  return (
    <FormContext.Provider value={useFormContext}>
      <CellContext.Provider value={cell}>
        <FormProvider form={form}>
          <form
            onSubmit={form.onSubmit(async (values) => {
              if (demoState === null) {
                return
              }
              if (demoState === null) {
                return
              }
              if (firstPreNode === undefined) {
                return
              }
              if (firstPreNode.position === undefined) {
                return
              }

              // copy existing values object to new object
              const newValues: LocalVariablesType = {}
              for (const [key, value] of Object.entries(values as object)) {
                newValues[key] = value
              }

              // convert precision floats to BoxedFloats based on "precision" attribute
              for (const [key, value] of Object.entries(values as object)) {
                if (!(typeof value === 'number')) continue
                if (!(key in precisions)) continue
                newValues[key] = {
                  type: 'float',
                  data: value.toFixed(precisions[key]),
                  precision: precisions[key],
                }
              }

              // convert Dates to strings based on "valueFormat" attribute
              for (const [key, value] of Object.entries(values as object)) {
                if (!(value instanceof Date)) continue
                if (!(key in valueFormats)) {
                  newValues[key] = value.toISOString()
                  continue
                }
                newValues[key] = dayjs(value).format(valueFormats[key])
              }

              // remove null values
              for (const [key, value] of Object.entries(values as object)) {
                if (value === null) {
                  delete newValues[key]
                }
              }

              // remove optional empty string values
              for (const [key, value] of Object.entries(values as object)) {
                if (value === '' && optionals.includes(key)) {
                  delete newValues[key]
                }
              }

              await cell?.run({
                position: firstPreNode.position,
                localVariables: newValues,
                ...(sandbox
                  ? {
                      sandbox: {
                        code: toText(firstPreNode, { whitespace: 'pre' }),
                      },
                    }
                  : {}),
              })

              if (cell?.ranSuccessfully) {
                for (const [key, value] of Object.entries(values as object)) {
                  localStorage.setItem(key, value)
                }
              }
            })}
            {...props}
          >
            <Stack spacing="xs">{children}</Stack>
          </form>
        </FormProvider>
      </CellContext.Provider>
    </FormContext.Provider>
  )
}

export const DemoForm = observer(_Form)
