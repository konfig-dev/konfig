import { procedure, router } from '../trpc'
import axios from 'axios'
import { urlForPythonRceApi } from '@/utils/urlForPythonRceApi'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { visit } from 'unist-util-visit'
import { position } from 'unist-util-position'
import { stringifyPosition } from 'unist-util-stringify-position'
import { Node } from 'unist'
import { toText } from 'hast-util-to-text'
import { unified } from 'unified'
import {
  StartSessionResponse,
  ExecuteCodeRequest,
  ExecuteCodeResponse,
  PingSessionRequest,
  PingSessionResponse,
  ExecuteSandboxCodeRequest,
  PingSessionResponseType,
  StartSessionRequest,
} from '@/utils/schemas'
import { generateDemosDataFromGithub } from '@/utils/generate-demos-from-github'
import { TRPCError } from '@trpc/server'

/**
 * Stores the last time a particular demo had a code execution
 */
class LastSuccessfulExecutionStore {
  static singleton = new LastSuccessfulExecutionStore()
  _lastSuccessfulExecution: Record<string, Date | undefined> = {}

  private constructor() {}

  save({
    organizationId,
    portalId,
    demoId,
  }: {
    organizationId: string
    portalId: string
    demoId: string
  }) {
    this._lastSuccessfulExecution[
      this._computeKey({ organizationId, portalId, demoId })
    ] = new Date()
  }

  get({
    organizationId,
    portalId,
    demoId,
  }: {
    organizationId: string
    portalId: string
    demoId: string
  }) {
    return this._lastSuccessfulExecution[
      this._computeKey({ organizationId, portalId, demoId })
    ]
  }

  private _computeKey({
    organizationId,
    portalId,
    demoId,
  }: {
    organizationId: string
    portalId: string
    demoId: string
  }) {
    return `${organizationId}-${portalId}-${demoId}`
  }

  static get inst() {
    return this.singleton
  }
}

export const appRouter = router({
  startSession: procedure
    .input(StartSessionRequest)
    .output(StartSessionResponse)
    .query(async ({ input }) => {
      const url = `${urlForPythonRceApi()}/sessions/create`

      const { data } = await axios.post(url)
      return {
        ...data,
        lastSuccessfulExecution: {
          when: LastSuccessfulExecutionStore.inst.get(input),
        },
      }
    }),
  pingSessions: procedure
    .input(PingSessionRequest)
    .output(PingSessionResponse)
    .query(async ({ input }) => {
      const url = `${urlForPythonRceApi()}/sessions/ping`
      const { data } = await axios.post(url, {
        session_ids: input.sessions.map((session) => session.sessionId),
      })
      const response: PingSessionResponseType = {
        ...data,
        lastSuccessfulExecutions: input.sessions.map((session) => ({
          ...session,
          when: LastSuccessfulExecutionStore.inst.get(session),
        })),
      }
      return response
    }),
  executeSandboxCode: procedure
    .input(ExecuteSandboxCodeRequest)
    .output(ExecuteCodeResponse)
    .query(async ({ input }) => {
      // TODO: Add authentication + isolate repls using fly.io for security
      // if (process.env.NODE_ENV !== "development")
      //   throw new TRPCError({ code: "UNAUTHORIZED" });

      const url = `${urlForPythonRceApi()}/sessions/execute`

      const { data } = await axios.post(url, {
        session_id: input.sessionId,
        code: input.code,
        local_variables: input.localVariables,
      })

      return data
    }),
  executeCode: procedure
    .input(ExecuteCodeRequest)
    .output(ExecuteCodeResponse)
    .query(async ({ input }) => {
      const url = `${urlForPythonRceApi()}/sessions/execute`
      const processor = unified()
        .use(remarkParse)
        .use(remarkDirective)
        .use(remarkDirectiveRehype)
        .use(remarkRehype)

      const generation = await generateDemosDataFromGithub({
        orgId: input.organizationId,
        portalId: input.portalId,
        demoId: input.demoId,
      })

      if (generation.result === 'error') {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: generation.reason,
        })
      }

      const { demo } = generation

      const hast = processor.runSync(processor.parse(demo.markdown))

      // Find the node with the same position and convert to code
      let matchingNode: Node | null = null
      visit(
        hast,
        (node) => {
          const id = stringifyPosition(position(node))
          const positionQuery = stringifyPosition(input.codePosition)
          return id === positionQuery
        },
        (node) => {
          matchingNode = node
        }
      )

      if (matchingNode === null) {
        return {
          result: 'Could not find code',
        }
      }
      const code = toText(matchingNode, { whitespace: 'pre' })

      const { data } = await axios.post(url, {
        session_id: input.sessionId,
        code: code,
        environment_variables: input.environmentVariables,
        local_variables: input.localVariables,
      })

      const response = ExecuteCodeResponse.parse(data)

      if (response.result === 'Success')
        LastSuccessfulExecutionStore.inst.save(input)

      return response
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter
