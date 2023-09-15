import { DocumentationConfig } from 'konfig-lib'
import { collectAllDocuments } from './collect-all-documents'

export function findDocumentInConfiguration({
  docId,
  docConfig,
}: {
  docId: string
  docConfig: DocumentationConfig
}) {
  const links = collectAllDocuments({ docConfig })
  for (const link of links) {
    if (link.id === docId) return link
  }
  throw Error('Could not find document in configuration for id: ' + docId)
}
