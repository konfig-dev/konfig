export function tryTableOutput(raw: string): {
  data: Record<string, unknown>[]
  columns: string[]
} | null {
  try {
    const json: unknown = JSON.parse(raw)
    if (Array.isArray(json)) {
      const allElementsAreObjects =
        json.filter((value: unknown) => typeof value === 'object').length ===
        json.length
      if (allElementsAreObjects) {
        const columns: Set<string> = new Set()
        for (const row of json) {
          for (const column of Object.keys(row)) {
            columns.add(column)
          }
        }
        return {
          data: json as Record<string, unknown>[],
          columns: Array.from(columns),
        }
      }
    }
  } catch {}
  return null
}
