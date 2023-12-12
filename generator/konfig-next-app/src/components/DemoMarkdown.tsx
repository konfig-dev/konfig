import { makeAutoObservable } from 'mobx'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import remarkGfm from 'remark-gfm'
import {
  Anchor,
  Box,
  Stack,
  Text,
  createStyles,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { createContext, useEffect, useRef } from 'react'
import { api } from '@/utils/api'
import { observer } from 'mobx-react'
import { CellState, DemoForm, FormContext } from './DemoForm'
import { DemoButton } from './DemoButton'
import { DemoCode } from './DemoCode'
import { getCellTitlesFromMarkdown } from '@/utils/get-cell-titles-from-markdown'
import { DemoInput } from './DemoInput'
import { PortalState } from './DemoPortal'
import { DemoInfo } from './DemoInfo'
import { DemoDateInput } from './DemoDateInput'
import { DemoNumberInput } from './DemoNumberInput'
import { DemoTitle } from './DemoTitle'
import { DemoEnum } from './DemoEnum'
import { v4 as uuid } from 'uuid'
import { DemoPre } from './DemoPre'
import Slugger from 'github-slugger'
import { formatTimeAgo } from '@/utils/format-time-ago'
import { DemoNote } from './DemoNote'
import { DemoWarn } from './DemoWarn'
import { DemoDivider } from './DemoDivider'
import { DemoAnchor } from './DemoAnchor'
import { DemoApi } from './DemoApi'
import { DemoMarkdownTable } from './DemoMarkdownTable'

export class DemoState {
  id: string
  name: string
  sessionId: string | null = null
  cells: CellState[] = []
  markdown: string = ''
  uuid = uuid()
  portal?: PortalState
  savedData: Record<string, string[] | undefined> = {}
  slugger: Slugger = new Slugger()
  headerIdToHtmlElement: Record<string, HTMLHeadingElement> = {}
  demoDiv: HTMLDivElement | null = null
  lastSuccessfulExecution: Date | null = null
  showCode = false
  owner: string
  repo: string
  omitOwnerAndRepo: boolean

  constructor(parameters: {
    markdown: string
    name: string
    portal?: PortalState
    id: string
    showCode?: boolean
    owner: string
    repo: string
    omitOwnerAndRepo: boolean
  }) {
    makeAutoObservable(this)
    this.showCode = parameters.showCode ?? false
    this.omitOwnerAndRepo = parameters.omitOwnerAndRepo
    this.owner = parameters.owner
    this.repo = parameters.repo
    if (parameters && parameters.markdown !== undefined) {
      this.markdown = parameters.markdown
    }
    this.id = parameters.id
    this.name = parameters.name
    this.portal = parameters.portal
    this.init()
  }

  setDemoDiv(demoDiv: HTMLDivElement | null) {
    this.demoDiv = demoDiv
  }

  pushCell({ cell }: { cell: CellState }) {
    this.cells.push(cell)
    return cell
  }

  setLastSuccessfulExecution(when: Date) {
    this.lastSuccessfulExecution = when
  }

  get howLongAgoLastSuccessfulExecution() {
    if (this.lastSuccessfulExecution === null) return null
    return formatTimeAgo(this.lastSuccessfulExecution)
  }

  setSavedData({ label, values }: { label: string; values: string[] }) {
    this.savedData[label] = values
  }

  async init() {
    // Only initialize sessions in browser
    if (typeof window !== 'undefined' && this.portal !== undefined) {
      const {
        session_id,
        lastSuccessfulExecution: { when },
      } = await api.startSession.query({
        organizationId: this.portal.organizationId,
        portalId: this.portal.id,
        demoId: this.id,
      })
      this.setSessionId(session_id)
      if (when !== undefined) {
        this.setLastSuccessfulExecution(new Date(when))
      }
    }
  }

  setSessionId(sessionId: string) {
    this.sessionId = sessionId
  }

  setMarkdown(markdown: string) {
    this.markdown = markdown
  }

  get titles() {
    return getCellTitlesFromMarkdown({ markdown: this.markdown })
  }
}

export const DemoStateContext = createContext<DemoState | null>(null)

const useStyles = createStyles((theme) => ({
  markdown: {
    'h1:first-of-type': {
      marginTop: 0,
      '::after': {
        display: 'none',
      },
    },
  },
  text: {
    img: {
      maxWidth: '100%',
      display: 'block',
      margin: 'auto',
      borderRadius: theme.radius.md,
      ...(theme.colorScheme === 'dark'
        ? {}
        : {
            boxShadow: theme.shadows.xs,
          }),
    },
  },
}))

const DemoMarkdown = observer(({ state }: { state: DemoState }) => {
  const demoDiv = useRef<HTMLDivElement | null>(null)
  const { colors, colorScheme } = useMantineTheme()
  const { classes } = useStyles()
  useEffect(() => {
    state.setDemoDiv(demoDiv.current)
  }, [state])
  const textColor = colorScheme === 'dark' ? colors.gray[5] : colors.gray[7]
  return (
    <DemoStateContext.Provider value={state}>
      <Box ref={demoDiv}>
        <ReactMarkdown
          className={classes.markdown}
          remarkPlugins={[remarkGfm, remarkDirective, remarkDirectiveRehype]}
          rehypePlugins={[rehypeRaw as any]}
          components={{
            a: DemoAnchor,
            p({ node, children, siblingCount, ...props }) {
              return (
                <Text
                  component="p"
                  color={textColor}
                  className={classes.text}
                  mt="md"
                  mb="xl"
                  {...props}
                >
                  {children}
                </Text>
              )
            },
            ul({ node, children, siblingCount, ...props }) {
              return (
                <ul className="list-disc pl-6 my-5" role="list">
                  {children}
                </ul>
              )
            },
            ol({ node, children, siblingCount, ...props }) {
              return (
                <ol className="list-decimal pl-6 my-5" role="list">
                  {children}
                </ol>
              )
            },
            li({ node, children, siblingCount, ...props }) {
              return (
                <li
                  style={{
                    color: textColor,
                  }}
                >
                  {children}
                </li>
              )
            },
            table: DemoMarkdownTable,
            pre: DemoPre,
            form: DemoForm,
            input: DemoInput,
            button: DemoButton,
            code: DemoCode,
            hr: DemoDivider,
            h1: (props) => <DemoTitle {...props} />,
            h2: (props) => <DemoTitle {...props} />,
            h3: (props) => <DemoTitle {...props} />,
            h4: (props) => <DemoTitle {...props} />,
            h5: (props) => <DemoTitle {...props} />,
            h6: (props) => <DemoTitle {...props} />,
            // Make TypeScript happy by moving this into its own object
            ...{
              info: DemoInfo,
              note: DemoNote,
              warn: DemoWarn,
              date: DemoDateInput,
              api: DemoApi,
              number: DemoNumberInput,
              enum: DemoEnum,
            },
          }}
        >
          {state.markdown}
        </ReactMarkdown>
      </Box>
    </DemoStateContext.Provider>
  )
})

export default DemoMarkdown
