import { PortalState } from '@/components/DemoPortal'
import { useWindowScroll } from '@mantine/hooks'
import { NextRouter } from 'next/router'

export function navigateToDemo({
  demoId,
  demoIndex,
  organizationId,
  portal,
  router,
  sandbox,
}: {
  demoIndex: number
  organizationId: string
  demoId: string
  router: NextRouter
  portal: PortalState
  sandbox: boolean | undefined
}) {
  portal.setCurrentDemoIndex(demoIndex)
  if (!sandbox) {
    router.replace(
      `/${organizationId}/${portal.id}/demo/${demoId}`,
      undefined,
      {
        shallow: true,
        scroll: true,
      }
    )
  } else {
    // NOTE: this triggers a re-render so when we
    // navigate through demos the page actually changes
    router.replace('/sandbox', undefined, {
      shallow: true,
      scroll: true,
    })
  }
}
