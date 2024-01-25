import { DocumentationConfig, getOperations } from 'konfig-lib'
import { collectAllDocuments } from './collect-all-documents'
import { githubGetFileContent } from './github-get-file-content'
import { Octokit } from '@octokit/rest'
import { findFirstHeadingText } from './find-first-heading-text'
import { githubGetKonfigYaml } from './github-get-konfig-yaml'
import { githubGetOpenApiSpec } from './github-get-openapi-spec'
import { isOperationHidden } from './is-operation-hidden'
import { TABS, TabType } from '@/components/HeaderButton'
import { getDemos } from './generate-demos-from-github'

type SearchRecordBase = {
  id: string
  title: string
  content: string
}
export type SearchRecord = (
  | {
      type: TabType['documentation']
    }
  | {
      type: TabType['demos']
    }
  | {
      method: string
      path: string
      tag: string
      type: TabType['reference']
    }
) &
  SearchRecordBase

export async function computeDocumentProps({
  documentationConfig,
  owner,
  repo,
  octokit,
}: {
  documentationConfig?: DocumentationConfig
  octokit: Octokit
  owner: string
  repo: string
}) {
  // get all docs with collectAllDocumentation and generate a map of id to label from first heading text
  const docs = documentationConfig
    ? collectAllDocuments({ docConfig: documentationConfig })
    : []
  const idToContent: Record<string, string | undefined> = {}
  const idToLabel: Record<string, string | undefined> = {}
  for (const { id, path } of docs) {
    const content = await githubGetFileContent({
      octokit,
      owner,
      repo,
      path,
    })
    idToContent[id] = content
    const docTitle = findFirstHeadingText({ markdown: content })
    idToLabel[id] = docTitle
  }

  const allMarkdown: SearchRecord[] = Object.entries(idToContent).map(
    ([id, content]) => {
      if (content === undefined)
        throw Error(`Couldn't find content for id: ${id}`)
      const title = idToLabel[id]
      if (title === undefined) throw Error("Couldn't find title for id: " + id)

      // strip all non-alphanumeric characters from content
      // this is used for search
      content = stripNonAlphanumericCharacters(content)

      return {
        id: `/docs/${id}`,
        title,
        content,
        type: TABS.documentation,
      }
    }
  )

  const konfigYaml = await githubGetKonfigYaml({
    owner,
    repo,
    octokit,
  })

  const spec = await githubGetOpenApiSpec({
    owner,
    repo,
    octokit,
    konfigYaml,
  })
  if (spec.specDereferenced === null) throw Error('specDereferenced is null')
  const operations = getOperations({ spec: spec.specDereferenced })

  for (const { operation, path, method } of operations) {
    if (operation.operationId === undefined)
      throw Error('operationId is undefined')
    if (operation.tags === undefined || operation.tags.length === 0)
      throw Error('tags is undefined or empty')
    const hidden = isOperationHidden({
      path,
      method,
      konfigYaml: konfigYaml.content,
      tag: operation.tags[0],
    })
    if (hidden) continue
    const tag = operation.tags[0]
    allMarkdown.push({
      id: `/reference/${tag}/${operation.operationId}`,
      title: operation.summary ?? `${path}`,
      content: operation.description ?? '',
      method,
      path,
      type: TABS.reference,
      tag,
    })
  }

  const demos = await getDemos({
    konfigYaml: konfigYaml.content,
    octokit,
    repo,
    owner,
  })

  if (demos !== null) {
    for (const demo of demos) {
      allMarkdown.push({
        id: `/demo/${demo.id}`,
        title: demo.name,
        content: stripNonAlphanumericCharacters(demo.markdown),
        type: TABS.demos,
      })
    }
  }

  const idToBreadcrumbs: Record<string, string[] | undefined> = {}
  if (documentationConfig !== undefined) {
    for (const { id } of docs) {
      // compute breadcrumb for every document in the documentation config
      // the breadcrumb for a document consists of [section, group, document]
      // group is optional if the document is not nested in a group
      const breadcrumb: string[] = []
      for (const section of documentationConfig.sidebar.sections) {
        for (const link of section.links) {
          if (link.type === 'group') {
            for (const innerLink of link.links) {
              if (innerLink.id === id) {
                breadcrumb.push(section.label)
                breadcrumb.push(link.label)
                const docLabel = idToLabel[id]
                if (docLabel === undefined)
                  throw Error(`Couldn't find document label for id: ${id}`)
                breadcrumb.push(docLabel)
                break
              }
            }
          } else if (link.id === id) {
            breadcrumb.push(section.label)
            const docLabel = idToLabel[id]
            if (docLabel === undefined)
              throw Error(`Couldn't find document label for id: ${id}`)
            breadcrumb.push(docLabel)
            break
          }
        }
      }
      idToBreadcrumbs[id] = breadcrumb
    }
  }

  return {
    idToBreadcrumbs,
    allMarkdown,
    idToLabel,
    idToContent,
    docs,
  }
}

function stripNonAlphanumericCharacters(str: string) {
  return str.replace(/[^a-zA-Z0-9 ]/g, ' ')
}
