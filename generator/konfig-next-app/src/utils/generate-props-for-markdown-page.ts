import {
  DocumentationConfig,
  KonfigYamlType,
  OperationObject,
  getOperations,
  parseSpec,
} from 'konfig-lib'
import { GetStaticPropsResult } from 'next'
import path from 'path'
import { collectAllDocuments } from './collect-all-documents'
import { findDocumentInConfiguration } from './find-document-in-configuration'
import { findFirstDocumentInConfiguration } from './find-first-document-in-configuration'
import { findFirstHeadingText } from './find-first-heading-text'
import { generateDemosDataFromGithub } from './generate-demos-from-github'
import { githubGetFileContent } from './github-get-file-content'
import { githubGetKonfigYamls } from './github-get-konfig-yamls'
import { githubGetRepository } from './github-get-repository'
import { createOctokitInstance } from './octokit'
import { transformImageLinks } from './transform-image-links'
import { transformInternalLinks } from './transform-internal-links'
import { generateFaviconLink } from './generate-favicon-link'
import { generateLogoLink } from './generate-logo-link'

export type MarkdownPageProps = {
  konfigYaml: KonfigYamlType
  demos: string[] // demo ids
  docId: string
  docPath: string
  docConfig: DocumentationConfig
  docTitle: string
  title: string
  owner: string
  repo: string
  operations: OperationObject[]
  googleAnalyticsId: string | null
  markdown: string
  defaultBranch: string

  /**
   * Mapping of document id from konfig.yaml and the first heading text of the document.
   * This is used to render the navigation links in the sidebar navigation.
   */
  idToLabel: Record<string, string | undefined>

  /**
   * This is used to render the breadcrumb above the page. (e.g. [Guides, Getting Started])
   */
  breadcrumb: string[]

  omitOwnerAndRepo: boolean
  faviconLink: string | null
  logo: ReturnType<typeof generateLogoLink>
}

export async function generatePropsForMarkdownPage({
  owner,
  repo,
  docUrlParam,
  omitOwnerAndRepo,
}: {
  owner: string
  repo: string
  docUrlParam: string | string[] | undefined
  omitOwnerAndRepo: boolean
}): Promise<GetStaticPropsResult<MarkdownPageProps>> {
  const octokit = await createOctokitInstance({ owner, repo })

  // get default branch of repo
  const { data: repoData } = await githubGetRepository({
    owner,
    repo,
    octokit,
  })
  const defaultBranch = repoData.default_branch

  // time the next two lines
  const start = Date.now()
  const konfigYamls = await githubGetKonfigYamls({ owner, repo, octokit })
  console.log(`githubGetKonfigYamls took ${Date.now() - start}ms`)

  // TODO: handle multiple konfig.yaml
  const konfigYaml = konfigYamls?.[0]

  if (konfigYaml === undefined) throw Error("Couldn't find konfig.yaml")

  const faviconLink = generateFaviconLink({
    konfigYaml: konfigYaml.content,
    defaultBranch,
    konfigYamlPath: konfigYaml.info.path,
    owner,
    repo,
  })

  const logoLink = generateLogoLink({
    konfigYaml: konfigYaml.content,
    defaultBranch,
    konfigYamlPath: konfigYaml.info.path,
    owner,
    repo,
  })

  const documentationConfig = konfigYaml?.content.portal?.documentation
  if (documentationConfig === undefined) {
    return {
      redirect: {
        destination: '/reference',
        permanent: false,
      },
    }
  }

  // if no document is specified, redirect to first document
  if (docUrlParam === undefined) {
    const doc = findFirstDocumentInConfiguration({
      docConfig: documentationConfig,
    })
    return {
      redirect: {
        destination: omitOwnerAndRepo
          ? `/docs/${doc.id}`
          : `/${owner}/${repo}/docs/${doc.id}`,
        permanent: false,
      },
    }
  }

  const docParam = docUrlParam ?? []
  if (!Array.isArray(docParam)) throw Error("Couldn't parse document parameter")
  const documentId = docParam.join('/')

  const doc = findDocumentInConfiguration({
    docId: documentId,
    docConfig: documentationConfig,
  })

  const originalMarkdown = await githubGetFileContent({
    octokit,
    owner,
    repo,
    path: doc.path,
  })

  const specPath = konfigYaml.content.specPath

  // time the next three lines
  const openapi = await githubGetFileContent({
    owner,
    repo,
    octokit,
    path: path.join(path.dirname(konfigYaml.info.path), specPath),
  })

  const spec = await parseSpec(openapi)
  const operations = getOperations({ spec: spec.spec })

  const markdown = transformImageLinks({
    markdown: transformInternalLinks({
      markdown: originalMarkdown,
      owner,
      repo,
      operations: operations.map((op) => op.operation),
      omitOwnerAndRepo,
    }),
    owner,
    repo,
    docPath: doc.path,
    defaultBranch,
  })

  const demos = await generateDemosDataFromGithub({
    orgId: owner,
    portalId: repo,
  })

  if (konfigYaml?.content.portal === undefined)
    throw Error("Couldn't find portal configuration")

  const docTitle = findFirstHeadingText({ markdown })

  // get all docs with collectAllDocumentation and generate a map of id to label from first heading text
  const docs = collectAllDocuments({ docConfig: documentationConfig })
  const idToLabel: Record<string, string | undefined> = {}
  for (const { id, path } of docs) {
    const content = await githubGetFileContent({
      octokit,
      owner,
      repo,
      path,
    })
    const docTitle = findFirstHeadingText({ markdown: content })
    idToLabel[id] = docTitle
  }

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

  const breadcrumb = idToBreadcrumbs[documentId]
  if (breadcrumb === undefined)
    throw Error(`Couldn't find breadcrumb for document id: ${documentId}`)

  return {
    props: {
      title: konfigYaml.content.portal?.title,
      konfigYaml: konfigYaml.content,
      markdown,
      googleAnalyticsId: konfigYaml.content.portal?.googleAnalyticsId ?? null,
      faviconLink,
      docTitle,
      logo: logoLink,
      docId: documentId,
      docPath: doc.path,
      docConfig: documentationConfig,
      omitOwnerAndRepo: omitOwnerAndRepo ?? false,
      owner,
      repo,
      breadcrumb,
      operations,
      defaultBranch,
      idToLabel,
      demos:
        demos.result === 'error'
          ? []
          : demos.portal.demos.map((demo) => demo.id),
    },
  }
}
