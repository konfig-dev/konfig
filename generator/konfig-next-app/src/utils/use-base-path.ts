import { useRouter } from 'next/router'

export function useBasePath() {
  const router = useRouter()
  const parts = router.asPath.split('/')

  // Keeping the first two sections and appending /reference
  return `/${parts[1]}/${parts[2]}`
}
