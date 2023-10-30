import zodToJsonSchema from 'zod-to-json-schema'
import { KonfigYaml } from './src/KonfigYaml'
import * as fs from 'fs-extra'
import * as path from 'path'

const jsonSchema = zodToJsonSchema(KonfigYaml, {
  name: 'konfigYaml',
})

const outputPath = path.join(__dirname, 'konfig-yaml.schema.json')
const docOutputPath = path.join(
  path.dirname(path.dirname(path.dirname(__dirname))),
  'konfig-docs',
  'static',
  'konfig-yaml.schema.json'
)
if (fs.existsSync(outputPath))
  fs.writeFileSync(outputPath, JSON.stringify(jsonSchema, undefined, 2))
if (fs.existsSync(docOutputPath))
  fs.writeFileSync(docOutputPath, JSON.stringify(jsonSchema, undefined, 2))
