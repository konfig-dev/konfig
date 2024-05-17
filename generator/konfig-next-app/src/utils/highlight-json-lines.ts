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
  }
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
    }
    if (trimmedLine.endsWith(']') || trimmedLine.endsWith('],')) {
      parsingState.inArray--
    }
    if (trimmedLine.endsWith('}') || trimmedLine.endsWith('},')) {
      parsingState.inObject--
    }

    const atObjectOpen = stateBefore.inObject < parsingState.inObject
    const atArrayOpen = stateBefore.inArray < parsingState.inArray
    const atObjectClose = stateBefore.inObject > parsingState.inObject
    const atArrayClose = stateBefore.inArray > parsingState.inArray
    const endOfPath = pathIndex === path.length - 1
    const atRoot = pathIndex === 0

    if (
      trimmedLine.startsWith(`"${path[pathIndex]}"`) ||
      (endOfPath && (atObjectOpen || atArrayOpen)) ||
      parsingState.processingObject ||
      parsingState.processingArray
    ) {
      if (pathIndex === path.length - 1) {
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
      if (!parsingState.processingObject && !parsingState.processingArray) {
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
