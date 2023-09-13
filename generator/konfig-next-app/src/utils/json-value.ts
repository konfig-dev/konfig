export type JSONPrimitive = string | number | boolean | null
export type SdkArg = JSONPrimitive | JSONObject | JSONArray | File

export interface JSONObject {
  [key: string]: SdkArg
}

export interface JSONArray extends Array<SdkArg> {}
