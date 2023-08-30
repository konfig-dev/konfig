export function tryJsonOutput(raw: string): object | null {
  try {
    const json: unknown = JSON.parse(raw)
    if (typeof json === 'object') return json
  } catch {}
  return null
}
