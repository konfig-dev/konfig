import { DocumentationConfig } from 'konfig-lib'
import { collectAllDocuments } from './collect-all-documents'
import { githubGetFileContent } from './github-get-file-content'
import { Octokit } from '@octokit/rest'
import { findFirstHeadingText } from './find-first-heading-text'

export async function computeDocumentProps({
  documentationConfig,
  owner,
  repo,
  octokit,
}: {
  documentationConfig: DocumentationConfig
  octokit: Octokit
  owner: string
  repo: string
}) {
  // get all docs with collectAllDocumentation and generate a map of id to label from first heading text
  const docs = collectAllDocuments({ docConfig: documentationConfig })
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

  const allMarkdown = Object.entries(idToContent).map(([id, content]) => {
    if (content === undefined)
      throw Error(`Couldn't find content for id: ${id}`)
    return {
      id,
      content,
    }
  })

  const idToBreadcrumbs: Record<string, string[] | undefined> = {}
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

  return {
    idToBreadcrumbs,
    allMarkdown,
    idToLabel,
    idToContent,
    docs,
  }
}
