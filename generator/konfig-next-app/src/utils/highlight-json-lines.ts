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
  if (path.length === 0) {
    return {
      jsonString,
      highlightedLines: jsonString.split('\n').map((_, i) => i + 1),
    }
  }
  const lines = jsonString.split('\n')
  path = ['$root', ...path]

  // Trakcs the current path index we are processing
  let pathIndex = 0

  const highlightedLines: number[] = []
  const parsingState = {
    inArray: 0,
    inObject: 0,
    processingObject: -1, // -1 signifies that we are not processing an object
    processingArray: -1, // -1 signifies that we are not processing an array
    processingObjectItem: 0, // 0 signifies that we are not processing an object item
    currentPath: [] as string[],
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

      // If the last line was the array opening, then we increment the processing object item
      if (parsingState.inArray > 0) {
        parsingState.processingObjectItem++
      }
    }
    if (trimmedLine.endsWith(']') || trimmedLine.endsWith('],')) {
      parsingState.inArray--
    }
    if (trimmedLine.endsWith('}') || trimmedLine.endsWith('},')) {
      parsingState.inObject--

      // If this is the end of object in an array, then we decrement the processing object item
      if (parsingState.inArray > 0) {
        parsingState.processingObjectItem--
      }
    }

    const atObjectOpen = stateBefore.inObject < parsingState.inObject
    atArrayOpen = stateBefore.inArray < parsingState.inArray
    atObjectClose = stateBefore.inObject > parsingState.inObject
    const atArrayClose = stateBefore.inArray > parsingState.inArray
    const endOfPath = pathIndex === path.length - 1
    const atRoot = pathIndex === 0
    const keyMatches = trimmedLine.startsWith(`"${path[pathIndex]}"`)
    const keyIsItem = path[pathIndex] === '$item'

    if (
      atObjectClose &&
      parsingState.inArray >= parsingState.processingObjectItem &&
      parsingState.inArray > 0 &&
      parsingState.processingArray === -1 &&
      parsingState.processingObject === -1 &&
      path[pathIndex - 1] !== '$item' && // do not decrement if processing an item's field
      !keyIsItem
    ) {
      // 1 for re-enabling the path, and 1 for exiting this object
      pathIndex -= 2
    }

    if (
      (keyIsItem && !atArrayClose) ||
      keyMatches ||
      (atRoot && endOfPath && (atObjectOpen || atArrayOpen)) ||
      parsingState.processingObject !== -1 ||
      parsingState.processingArray !== -1
    ) {
      if (endOfPath) {
        highlightedLines.push(lineNumber)

        if (
          keyMatches &&
          atObjectOpen &&
          parsingState.processingObject === -1
        ) {
          parsingState.processingObject = parsingState.inObject
        }
        if (keyMatches && atArrayOpen && parsingState.processingArray === -1) {
          parsingState.processingArray = parsingState.inArray
        }
        if (parsingState.inObject < parsingState.processingObject) {
          parsingState.processingObject = -1
        }
        if (parsingState.inArray < parsingState.processingArray) {
          parsingState.processingArray = -1
        }
      }

      if (
        parsingState.processingObject === -1 &&
        parsingState.processingArray === -1 &&
        !keyIsItem
      ) {
        pathIndex++
      } else if (keyIsItem && !endOfPath) {
        pathIndex++
      }
    }

    if (atRoot && !endOfPath) {
      pathIndex++
    }

    if (pathIndex === path.length && parsingState.processingObjectItem === 0) {
      break
    }
  }

  return {
    jsonString,
    highlightedLines: highlightedLines.map((line) => line + 1), // Add 1 to line number to match 1-indexed line numbers
  }
}
