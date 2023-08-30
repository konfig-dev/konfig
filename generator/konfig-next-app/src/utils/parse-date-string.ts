/**
 * Parses a date string in the format YYYY-MM-DD.
 * If the date string is invalid, returns null.
 * @param str input date string (can be invalid)
 */
export function parseDateString(str: string): Date | null {
  const date = new Date(str)
  return date.toString() === 'Invalid Date' ? null : date
}
