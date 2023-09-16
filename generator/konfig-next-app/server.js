const express = require('express')
const next = require('next')
const { domainToRepoMappings } = require('./src/utils/domain-to-repo-mappings')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // Custom route based on domain
  server.use((req, res, next) => {
    const domain = req.headers.host

    const repo = domainToRepoMappings[domain]
    if (repo !== undefined) {
      if (
        !req.url.includes('_next') &&
        !req.url.includes('favicon') &&
        !req.url.includes(repo)
      ) {
        console.log('req.url', req.url)
        const newUrl = `/${repo}${req.url}`
        console.log('newUrl', newUrl)
        req.url = newUrl
      }
    }

    next()
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = 3000
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
