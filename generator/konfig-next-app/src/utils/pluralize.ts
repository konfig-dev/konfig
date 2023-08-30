/**
 * @param word
 * @returns plural version of a word
 */
export function pluralize(word: string) {
  const lastLetter = word[word.length - 1]
  if (lastLetter === 's') {
    return `${word}es`
  } else if (lastLetter === 'y') {
    return `${word.slice(0, -1)}ies`
  } else {
    return `${word}s`
  }
}
