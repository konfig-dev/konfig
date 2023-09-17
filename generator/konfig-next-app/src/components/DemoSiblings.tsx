import React from 'react'
import { SimpleGrid } from '@mantine/core'
import { DemoSibling } from './DemoSibling'
import { PortalState } from './DemoPortal'

export type Sibling = {
  title: string
  demoId: string
  organizationId: string
  demoIndex: number
}

interface Props {
  previous?: Sibling
  next?: Sibling
  portal: PortalState
  omitOwnerAndRepo: boolean
}

export function DemoSiblings({
  previous,
  next,
  portal,
  omitOwnerAndRepo,
}: Props) {
  return (
    <SimpleGrid mt={40} cols={2} breakpoints={[{ maxWidth: 1000, cols: 1 }]}>
      {previous && (
        <DemoSibling
          omitOwnerAndRepo={omitOwnerAndRepo}
          portal={portal}
          type="prev"
          data={previous}
        />
      )}
      {next && (
        <DemoSibling
          omitOwnerAndRepo={omitOwnerAndRepo}
          portal={portal}
          type="next"
          data={next}
        />
      )}
    </SimpleGrid>
  )
}
