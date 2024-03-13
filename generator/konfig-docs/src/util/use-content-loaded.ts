import { useEffect } from 'react'

/**
 * Custom hook to run a given function when the content is fully loaded.
 *
 * @param onContentLoaded Function to run when the content is loaded.
 */
const useContentLoaded = (onContentLoaded: () => void) => {
  useEffect(() => {
    window.addEventListener('load', onContentLoaded)

    return () => {
      window.removeEventListener('load', onContentLoaded)
    }
  }, [onContentLoaded])
}

export default useContentLoaded
