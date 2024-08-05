#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Path to your yarn.lock file one directory up
const yarnLockFile = path.resolve(__dirname, '../yarn.lock')

// Function to parse yarn.lock file and extract dependencies
function parseYarnLock(fileContent) {
  const dependencies = {}
  const lines = fileContent.split('\n')
  let currentDependency = null

  lines.forEach((line) => {
    if (line.startsWith('"') && line.includes('@npm')) {
      // Capture dependency name, stripping out version information
      const fullDependency = line.match(/"([^"]+)"/)[1]
      const dependencyName = fullDependency.split('@npm')[0]
      currentDependency = dependencyName
    } else if (currentDependency && line.includes('version:')) {
      // Capture version
      const version = line.split('version: ')[1].trim()
      dependencies[currentDependency] = version
      currentDependency = null
    }
  })

  return dependencies
}

// Read the yarn.lock file
fs.readFile(yarnLockFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading yarn.lock file:', err)
    return
  }

  const dependencies = parseYarnLock(data)

  const tmpDir = require('os').tmpdir()
  const tmpFile = path.join(tmpDir, 'dependencies.json')
  fs.writeFileSync(tmpFile, JSON.stringify(dependencies, null, 2))
  console.log(`Dependencies saved to ${tmpFile}`)
})
