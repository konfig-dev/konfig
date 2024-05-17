/**
 * Highlight the lines in the JSON string that match the list of keys
 *
 * Takes care to ensure that only values that match the list of keys are highlighted.
 *
 * For example given the following JSON:
 *
 * ```json
 * 1: {
 * 2:   "id": 2,
 * 3:   "inner": {
 * 4:     "id": 2
 * 5:   },
 * 6: }
 * ```
 * The path ["id"] should return 2, ["inner", "id"] should return 4, and ["inner"] should return [3, 4, 5]
 *
 * For lists, it is assumed that indexing occurs
 * @param json The JSON string
 * @param path List of strings that are keys in the JSON
 */
export function highlightJsonLines({
  json,
  path,
}: {
  json: object
  path: string[]
}): { jsonString: string; highlightedLines: number[] } {
  const SPACES = 2
  const stringify = (obj: object) => {
    return JSON.stringify(obj, null, SPACES)
  }
  const jsonString = stringify(json)
  const lines = jsonString.split('\n')
  path = ['$root', ...path]

  // Trakcs the current path index we are processing
  let pathIndex = 0

  const highlightedLines: number[] = []
  const parsingState = {
    inArray: 0,
    inObject: 0,
    processingObject: false,
    processingArray: false,
    processingObjectItem: false,
  }
  let atArrayOpen = false
  let atObjectClose = false
  for (const lineNumberString in lines) {
    const lineNumber = Number(lineNumberString)
    const trimmedLine = lines[lineNumber].trim()
    const stateBefore = { ...parsingState }

    // Maintain parsing state
    if (trimmedLine.endsWith('[')) {
      parsingState.inArray++
    }
    if (trimmedLine.endsWith('{')) {
      parsingState.inObject++

      // If the last line was the array opening, then we are currently processing an object item
      if (atArrayOpen) {
        parsingState.processingObjectItem = true
      }
    }
    if (trimmedLine.endsWith(']') || trimmedLine.endsWith('],')) {
      parsingState.inArray--

      // If this is the end of an array of objects, then we are not processing an object item anymore
      if (parsingState.processingObjectItem && atObjectClose) {
        parsingState.processingObjectItem = false
      }
    }
    if (trimmedLine.endsWith('}') || trimmedLine.endsWith('},')) {
      parsingState.inObject--
    }

    const atObjectOpen = stateBefore.inObject < parsingState.inObject
    atArrayOpen = stateBefore.inArray < parsingState.inArray
    atObjectClose = stateBefore.inObject > parsingState.inObject
    const atArrayClose = stateBefore.inArray > parsingState.inArray
    const endOfPath = pathIndex === path.length - 1
    const atRoot = pathIndex === 0
    const keyMatches = trimmedLine.startsWith(`"${path[pathIndex]}"`)

    if (
      keyMatches ||
      ((atRoot || keyMatches) && endOfPath && (atObjectOpen || atArrayOpen)) ||
      parsingState.processingObject ||
      parsingState.processingArray
    ) {
      if (endOfPath) {
        highlightedLines.push(lineNumber)

        if (atObjectOpen) {
          parsingState.processingObject = true
        }
        if (atArrayOpen) {
          parsingState.processingArray = true
        }
        if (atObjectClose) {
          parsingState.processingObject = false
        }
        if (atArrayClose) {
          parsingState.processingArray = false
        }
      }

      // If we aren't currently processing an object or array, we can move to the next path index
      if (
        !parsingState.processingObject &&
        !parsingState.processingArray &&
        !parsingState.processingObjectItem
      ) {
        pathIndex++
      }
    }

    if (atRoot && !endOfPath) {
      pathIndex++
    }

    if (pathIndex === path.length) {
      break
    }
  }

  return {
    jsonString,
    highlightedLines: highlightedLines.map((line) => line + 1), // Add 1 to line number to match 1-indexed line numbers
  }
}
