import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    typecheck: {
      tsconfig: 'tsconfig.json',
    },
    environment: 'jsdom',
  },
  plugins: [tsconfigPaths()],
})
