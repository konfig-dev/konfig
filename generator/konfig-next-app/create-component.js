const fs = require('fs')
const path = require('path')

const componentName = process.argv[2]
if (!componentName) {
  console.error('Please supply a valid component name!')
  process.exit(1)
}

const componentsDirectory = path.join(__dirname, 'src', 'components')
const componentFilePath = path.join(componentsDirectory, `${componentName}.tsx`)

const componentTemplate = `import React from 'react';

interface ${componentName}Props {}

export const ${componentName}: React.FC<${componentName}Props> = (props) => {
  return (
    <div>
      {/* Component Logic */}
    </div>
  );
};
`

// Check if the component's file already exists
if (fs.existsSync(componentFilePath)) {
  console.error(`Component file "${componentName}.tsx" already exists.`)
  process.exit(1)
}

// Create the components directory if it doesn't exist
if (!fs.existsSync(componentsDirectory)) {
  fs.mkdirSync(componentsDirectory, { recursive: true })
}

// Write the component file
fs.writeFileSync(componentFilePath, componentTemplate)

console.log(`Component ${componentName} created at ${componentFilePath}`)
