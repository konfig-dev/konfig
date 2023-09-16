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
  markdown: string
  defaultBranch: string
  idToLabel: Record<string, string | undefined>
}

export async function generatePropsForMarkdownPage({
  owner,
  repo,
  docUrlParam,
}: {
  owner: string
  repo: string
  docUrlParam: string | string[] | undefined
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

  const documentationConfig = konfigYaml?.content.portal?.documentation
  if (documentationConfig === undefined)
    throw Error("Couldn't find documentation configuration")

  // if no document is specified, redirect to first document
  if (docUrlParam === undefined) {
    const doc = findFirstDocumentInConfiguration({
      docConfig: documentationConfig,
    })
    return {
      redirect: {
        destination: `/${owner}/${repo}/docs/${doc.id}`,
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

  return {
    props: {
      title: konfigYaml.content.portal?.title,
      konfigYaml: konfigYaml.content,
      markdown,
      docTitle,
      docId: documentId,
      docPath: doc.path,
      docConfig: documentationConfig,
      owner,
      repo,
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
