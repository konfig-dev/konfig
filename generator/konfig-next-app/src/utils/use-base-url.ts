import { useEffect, useState } from 'react'

export function useBaseUrl(): string {
  const [baseUrl, setBaseUrl] = useState('')

  useEffect(() => {
    const { protocol, hostname, port } = window.location
    const url = `${protocol}//${hostname}${port ? `:${port}` : ''}`
    setBaseUrl(url)
  }, [])

  return baseUrl
}
