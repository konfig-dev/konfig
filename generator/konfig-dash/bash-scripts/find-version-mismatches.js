#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Function to read JSON from the temporary file
function readJsonFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(data)
}

// Function to get installed versions from node_modules, including scoped packages
function getInstalledVersions(nodeModulesPath) {
  const installedVersions = {}

  fs.readdirSync(nodeModulesPath).forEach((packageName) => {
    const packagePath = path.join(nodeModulesPath, packageName)

    if (packageName.startsWith('@')) {
      // Handle scoped packages
      fs.readdirSync(packagePath).forEach((scopedPackageName) => {
        const packageJsonPath = path.join(
          packagePath,
          scopedPackageName,
          'package.json'
        )

        if (fs.existsSync(packageJsonPath)) {
          const packageJson = JSON.parse(
            fs.readFileSync(packageJsonPath, 'utf8')
          )
          installedVersions[`${packageName}/${scopedPackageName}`] =
            packageJson.version
        }
      })
    } else {
      const packageJsonPath = path.join(packagePath, 'package.json')

      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
        installedVersions[packageName] = packageJson.version
      }
    }
  })

  return installedVersions
}

// Function to create an object for package.json with correct versions
function generateCorrectedDependencies(dependencyVersions, installedVersions) {
  const correctedDependencies = {}

  for (const [packageName, expectedVersion] of Object.entries(
    dependencyVersions
  )) {
    if (
      installedVersions[packageName] &&
      installedVersions[packageName] !== expectedVersion
    ) {
      correctedDependencies[packageName] = expectedVersion
    }
  }

  return correctedDependencies
}

// Main script
if (process.argv.length !== 5) {
  console.error(
    'Usage: ./check-version-mismatches.js <path-to-json-tmp-file> <path-to-node_modules> <output-tmp-file>'
  )
  process.exit(1)
}

const tmpFilePath = process.argv[2]
const nodeModulesPath = process.argv[3]
const outputTmpFilePath = process.argv[4]

// Read the JSON dependencies from the temporary file
const dependencyVersions = readJsonFile(tmpFilePath)

// Get the installed versions from node_modules
const installedVersions = getInstalledVersions(nodeModulesPath)

// Generate corrected dependencies object
const correctedDependencies = generateCorrectedDependencies(
  dependencyVersions,
  installedVersions
)

// Write the corrected dependencies to the output temp file
fs.writeFileSync(
  outputTmpFilePath,
  JSON.stringify(correctedDependencies, null, 2)
)

console.log(
  `Corrected dependencies saved to ${outputTmpFilePath}. You can copy-paste them into your package.json file.`
)
