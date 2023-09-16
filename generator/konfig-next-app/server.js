const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // Custom route based on domain
  server.use((req, res, next) => {
    const host = req.headers.host

    console.log(host)

    if (host === 'domain1.com') {
      req.url = '/path-for-domain1' + req.url
    } else if (host === 'domain2.com') {
      req.url = '/path-for-domain2' + req.url
    }
    // ... add more domains as needed

    return handle(req, res)
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
