import { OpenAPIV2, OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'
//@ts-ignore
import { convertObj } from 'konfig-swagger2openapi'
export const convertSwaggerToOAS3 = async ({
  spec,
}: {
  spec: OpenAPIV2.Document
}): Promise<OpenAPIV3.Document | OpenAPIV3_1.Document> => {
  const { openapi } = await convertObj(spec, { patch: true })
  return openapi
}
