import { useRouter } from 'next/router'

export function useBasePath({
  omitOwnerAndRepo,
}: {
  omitOwnerAndRepo?: boolean
}) {
  const router = useRouter()
  if (omitOwnerAndRepo) {
    return ''
  }
  const parts = router.asPath.split('/')

  // Keeping the first two sections and appending /reference
  return `/${parts[1]}/${parts[2]}`
}
