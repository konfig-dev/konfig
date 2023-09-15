import { DocumentationConfig } from 'konfig-lib'
import { collectAllDocuments } from './collect-all-documents'

export function findFirstDocumentInConfiguration({
  docConfig,
}: {
  docConfig: DocumentationConfig
}) {
  const links = collectAllDocuments({ docConfig })
  if (links.length === 0)
    throw Error('Could not find document in configuration')
  return links[0]
}
