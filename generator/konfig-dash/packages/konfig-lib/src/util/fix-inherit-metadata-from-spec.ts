import { httpMethods } from '../http-methods'
import { Spec } from '../parseSpec'
import { resolveRef } from '../resolveRef'

/**
 * This function is used to merge specific properties from one OpenAPI
 * Specification to another. In effect this is like inheriting a bunch of
 * properties from one OAS. To do this we should implement an algorithm that
 * maps a particular set of properties from one OAS to another.
 *
 * For example if our target OAS looks like this:
 * ```
 * "paths": {
 *  "/api/installmentplans/check-eligibility": {
 *    "post": {
 *      "tags": [
 *        "InstallmentPlan"
 *      ],
 *      "responses": {
 *        "200": {
 *          "description": "",
 *        },
 *      }
 *    }
 *  }
 * }
 * ```
 *
 * And your source OAS looks like this:
 * ```
 * paths:
 *  /check-eligibility:
 *    post:
 *      tags:
 *        - Start Plans (Direct API)
 *      operationId: CheckInstallmentsEligibility
 *      description: |
 *        As your customer begins to checkout, use this endpoint to verify their overall eligibility for Splitit
 *        installment plans and to determine plans for which they are eligible.
 *        This endpoint can be called repeatedly before and during checkout, for example you may
 *        call it after each field on a page is filled out. The Splitit API compares and updates the plan
 *        based on each new body as it arrives.
 *      summary: Check Eligibility
 *      responses:
 *        '200':
 *          description: 'Success'
 * ```
 * Then your output OAS looks like:
 *
 * ```
 * "paths": {
 *  "/api/installmentplans/check-eligibility": {
 *    "post": {
 *      "tags": [
 *        "Start Plans (Direct API)"
 *      ],
 *      "descriptions": "As your customer begins to checkout, use this endpoint to verify their overall eligibility for Splitit installment plans and to determine plans for which they are eligible.  This endpoint can be called repeatedly before and during checkout, for example you may call it after each field on a page is filled out. The Splitit API compares and updates the plan based on each new body as it arrives."
 *      "summary": "Check Eligibility"
 *      "responses": {
 *        "200": {
 *          "description": "Success",
 *        },
 *      }
 *    }
 *  }
 * }
 * ```
 *
 * Note that the endpoint subpath does match up exactly but rather has matching substrings.
 * @param source The source OAS to inherit metadata from
 * @param target The target OAS to inherit metadata to
 * @return The target OAS with metadata inherited from the source OAS
 */
export function fixInheritMetadataFromSpec({
  source,
  target,
}: {
  source: Spec
  target: Spec
}): Spec['spec'] {
  if (source.spec.paths === undefined) return target.spec
  if (target.spec.paths === undefined) return target.spec

  for (const sourcePath in source.spec.paths) {
    // find matching path in target. If path is substring if path in targe then it is a match. Use regular for loop and break after match is found
    for (const targetPath in target.spec.paths) {
      if (targetPath.includes(sourcePath)) {
        // found match

        const targetPathObject = target.spec.paths[targetPath]
        const sourcePathObject = source.spec.paths[sourcePath]

        if (targetPathObject === undefined) break
        if (sourcePathObject === undefined) break

        for (const method of httpMethods) {
          const targetOperationObject = targetPathObject[method]
          const sourceOperationObject = sourcePathObject[method]

          if (targetOperationObject === undefined) continue
          if (sourceOperationObject === undefined) continue

          // operation
          targetOperationObject.tags = sourceOperationObject.tags
          targetOperationObject.summary = sourceOperationObject.summary
          targetOperationObject.description = sourceOperationObject.description

          // parameters
          if (
            sourceOperationObject.parameters !== undefined &&
            targetOperationObject.parameters !== undefined
          ) {
            for (const sourceParameter of sourceOperationObject.parameters) {
              const targetParameter = targetOperationObject.parameters.find(
                (targetParameter) => {
                  const t = resolveRef({
                    refOrObject: targetParameter,
                    $ref: target.$ref,
                  })
                  const s = resolveRef({
                    refOrObject: sourceParameter,
                    $ref: source.$ref,
                  })
                  return t.name === s.name
                }
              )

              if (targetParameter === undefined) continue

              const t = resolveRef({
                refOrObject: targetParameter,
                $ref: target.$ref,
              })
              const s = resolveRef({
                refOrObject: sourceParameter,
                $ref: source.$ref,
              })
              t.description = s.description
            }
          }

          // response object
          for (const responseCode in sourceOperationObject.responses) {
            const sourceResponseObjectUnresolved =
              sourceOperationObject.responses[responseCode]
            const targetResponseObjectUnresolved =
              targetOperationObject.responses[responseCode]

            if (sourceResponseObjectUnresolved === undefined) continue
            if (targetResponseObjectUnresolved === undefined) continue

            const sourceResponseObject = resolveRef({
              refOrObject: sourceResponseObjectUnresolved,
              $ref: source.$ref,
            })
            const targetResponseObject = resolveRef({
              refOrObject: targetResponseObjectUnresolved,
              $ref: target.$ref,
            })

            targetResponseObject.description = sourceResponseObject.description

            // if (targetResponseObject.content === undefined) continue

            // for (const mediaType in sourceResponseObject.content) {
            //   const sourceMediaTypeObject =
            //     sourceResponseObject.content[mediaType]
            //   const targetMediaTypeObject =
            //     targetResponseObject.content[mediaType]

            //   if (sourceMediaTypeObject === undefined) continue
            //   if (targetMediaTypeObject === undefined) continue

            // }
          }
        }
        break
      }
    }
  }

  if (source.spec.components?.schemas) {
    for (const schema in source.spec.components.schemas) {
      const sourceSchemaUnresolved = source.spec.components.schemas[schema]
      const targetSchemaUnresolved = target.spec.components?.schemas?.[schema]

      if (sourceSchemaUnresolved === undefined) continue
      if (targetSchemaUnresolved === undefined) continue

      const targetSchema = resolveRef({
        refOrObject: targetSchemaUnresolved,
        $ref: target.$ref,
      })
      const sourceSchema = resolveRef({
        refOrObject: sourceSchemaUnresolved,
        $ref: source.$ref,
      })

      targetSchema.description = sourceSchema.description
    }
  }

  return target.spec
}
