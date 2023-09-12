import { JSONPath } from 'jsonpath-plus'
import { KonfigYamlType } from '../KonfigYaml'
import { Spec, parseSpec } from '../parseSpec'
import { recurseObject } from '../recurseObject'
import * as fs from 'fs-extra'
import { fixInheritMetadataFromSpec } from './fix-inherit-metadata-from-spec'

export async function fixCustomModifications({
  fixConfig,
  spec: { spec, $ref, specDereferenced },
  isCLI,
}: {
  fixConfig?: KonfigYamlType['fixConfig']
  spec: Spec

  /**
   * Dylan: I added functionality to this function that reads from file system
   * which doesn't make sense when executing this function from the API side. So
   * I added this flag to only enable the functionality when executing from the
   * CLI. In particular the functionality was reading from a file path that
   * holds an OAS to inherit metadata from.
   */
  isCLI?: boolean
}): Promise<number> {
  let updates = 0
  if (fixConfig?.modify) {
    for (const path in fixConfig.modify) {
      const results = JSONPath({ path, json: spec, resultType: 'all' })
      for (const { parent, parentProperty } of results) {
        parent[parentProperty] = fixConfig.modify[path]
        updates++
      }
    }
  }

  if (isCLI && fixConfig?.inheritMetadataSpecPath) {
    if (!fs.existsSync(fixConfig.inheritMetadataSpecPath))
      throw Error(
        'Could not find file at path: ' + fixConfig.inheritMetadataSpecPath
      )
    const rawSpec = fs.readFileSync(fixConfig.inheritMetadataSpecPath, 'utf8')
    const specToInheritMetadataFrom = await parseSpec(rawSpec)
    fixInheritMetadataFromSpec({
      source: specToInheritMetadataFrom,
      target: { spec, $ref, specDereferenced },
    })
  }

  // Apply updates to all properties that match the property name and type
  if (fixConfig?.updateProperty) {
    recurseObject(spec, ({ value: schema }) => {
      // return if schema is not an object with the "type" property
      if (schema === null) return
      if (typeof schema !== 'object') return
      if (schema.type !== 'object') return
      if (schema.properties === undefined) return
      if (schema.properties === null) return
      if (typeof schema.properties !== 'object') return

      for (const propertyName in fixConfig.updateProperty) {
        const propertySchema = schema.properties[propertyName]
        if (propertySchema === undefined) continue
        if (propertySchema === null) continue
        if (typeof propertySchema !== 'object') continue
        for (const typeName in fixConfig.updateProperty[propertyName]) {
          if (propertySchema.type !== typeName) continue
          for (const property in fixConfig.updateProperty[propertyName][
            typeName
          ]) {
            propertySchema[property] =
              fixConfig.updateProperty[propertyName][typeName][property]
            updates++
          }
        }
      }
    })
  }

  if (fixConfig?.update) {
    for (const path in fixConfig.update) {
      const results = JSONPath({ path, json: spec })
      for (const value of results) {
        for (const property of Object.keys(fixConfig.update[path])) {
          value[property] = fixConfig.update[path][property]
          updates++
        }
      }
    }
  }
  return updates
}
