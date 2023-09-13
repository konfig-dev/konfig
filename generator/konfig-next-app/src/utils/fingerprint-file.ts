export function fingerprintFile(file: File): string {
  return `${file.name}-${file.size}-${file.lastModified}`
}
