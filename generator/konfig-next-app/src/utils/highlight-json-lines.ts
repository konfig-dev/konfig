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
  // Setting up some helpful constants for parsing
  const SPACES = 2
  const stringify = (obj: object) => {
    return JSON.stringify(obj, null, SPACES)
  }
  const jsonString = stringify(json)

  // If path is empty, then we highlight all lines
  if (path.length === 0) {
    return {
      jsonString,
      highlightedLines: jsonString.split('\n').map((_, i) => i + 1),
    }
  }

  const lines = jsonString.split('\n')
  path = ['$root', ...path]

  // Tracks the current path index we are processing
  // 1. Is incremented when we found a matching field name in the path
  // 2. Is decremented when processing object item is complete
  // 3. When $root is reached, is incremented by 1
  // 4. When $item is found, is incremented by 1
  let pathIndex = 0

  const highlightedLines: number[] = []
  const parsingState = {
    inArray: 0,
    inObject: 0,
    processingObject: -1, // -1 signifies that we are not processing an object
    processingArray: -1, // -1 signifies that we are not processing an array
    processingObjectItem: 0, // 0 signifies that we are not processing an object item
    pathSoFar: ['$root'] as string[],
  }
  for (const lineNumberString in lines) {
    // Pre-computing some helpful variables for the current line
    const lineNumber = Number(lineNumberString)
    const trimmedLine = lines[lineNumber].trim()
    const fieldName = trimmedLine.match(/^"([^"]+)": /)?.[1]
    const stateBefore = { ...parsingState }

    // Calculating parsing state
    // 1. inArray is incremented when we found an array opening
    // 2. inObject is incremented when we found an object opening
    // 3. processingObject is incremented when we found an object item
    // 4. processingArray is incremented when we found an array item
    // 5. pathSoFar is appended with the current field name if found
    // 6. processingObjectItem is incremented when object opening is found
    // inside an array
    if (trimmedLine.endsWith('[')) {
      parsingState.inArray++

      if (fieldName) {
        parsingState.pathSoFar.push(fieldName)
      }
      parsingState.pathSoFar.push('$item')
    }
    if (trimmedLine.endsWith('{')) {
      parsingState.inObject++

      // If the last line was the array opening, then we increment the processing object item
      if (parsingState.inArray > 0) {
        parsingState.processingObjectItem++
      }
      if (fieldName) {
        parsingState.pathSoFar.push(fieldName)
      }
    }
    if (trimmedLine.endsWith(']') || trimmedLine.endsWith('],')) {
      parsingState.inArray--
      parsingState.pathSoFar.pop() // $item
      if (
        parsingState.pathSoFar[parsingState.pathSoFar.length - 1] !== '$item'
      ) {
        parsingState.pathSoFar.pop() // field name
      }
    }
    if (
      !(trimmedLine.endsWith('{}') || trimmedLine.endsWith('{},')) &&
      (trimmedLine.endsWith('}') || trimmedLine.endsWith('},'))
    ) {
      parsingState.inObject--

      // If this is the end of object in an array, then we decrement the processing object item
      if (parsingState.inArray > 0) {
        parsingState.processingObjectItem--
      }

      if (
        parsingState.pathSoFar[parsingState.pathSoFar.length - 1] !== '$item'
      ) {
        parsingState.pathSoFar.pop()
      }
    }

    // Calculating derivative state
    const atObjectOpen = stateBefore.inObject < parsingState.inObject
    const atArrayOpen = stateBefore.inArray < parsingState.inArray
    const atObjectClose = stateBefore.inObject > parsingState.inObject
    const atArrayClose = stateBefore.inArray > parsingState.inArray
    const endOfPath = pathIndex === path.length - 1
    const atRoot = pathIndex === 0
    const keyMatches = fieldName !== undefined && fieldName === path[pathIndex]
    const keyIsItem = path[pathIndex] === '$item'
    const currentPath = [
      ...parsingState.pathSoFar,
      ...(atObjectOpen || atArrayOpen || fieldName === undefined
        ? []
        : [fieldName]),
    ]
    const currentPathLeaf = currentPath[currentPath.length - 1]
    const currentPathLeafIsItem = currentPathLeaf === '$item'
    const pathMatches =
      keyMatches &&
      currentPath.length === path.length &&
      currentPath.every((pathPart, i) => pathPart === path[i])
    const pathMatchesPartly = path.every(
      (pathPart, i) => currentPath[i] === pathPart
    )

    if (
      (keyIsItem && !atArrayClose) ||
      keyMatches ||
      (atRoot && endOfPath && (atObjectOpen || atArrayOpen)) ||
      parsingState.processingObject !== -1 ||
      parsingState.processingArray !== -1
    ) {
      if (endOfPath) {
        if (
          (pathMatches ||
            (keyMatches && currentPathLeafIsItem && pathMatchesPartly)) &&
          atObjectOpen &&
          parsingState.processingObject === -1
        ) {
          parsingState.processingObject = parsingState.inObject
        }
        if (
          (pathMatches ||
            (keyMatches && currentPathLeafIsItem && pathMatchesPartly)) &&
          atArrayOpen &&
          parsingState.processingArray === -1
        ) {
          parsingState.processingArray = parsingState.inArray
        }
        if (parsingState.inObject < parsingState.processingObject) {
          parsingState.processingObject = -1
          highlightedLines.push(lineNumber)
        }
        if (parsingState.inArray < parsingState.processingArray) {
          parsingState.processingArray = -1
          highlightedLines.push(lineNumber)
        }

        if (
          pathMatches ||
          parsingState.processingObject !== -1 ||
          parsingState.processingArray !== -1 ||
          keyIsItem
        ) {
          highlightedLines.push(lineNumber)
        }

        // "If we do not need to process any more items, then we break"
        if (
          pathMatches &&
          !keyIsItem &&
          parsingState.processingObject === -1 &&
          parsingState.processingArray === -1 &&
          parsingState.processingObjectItem === 0
        ) {
          break
        }
      }

      if (!endOfPath) {
        if (
          parsingState.processingObject === -1 &&
          parsingState.processingArray === -1 &&
          !keyIsItem
        ) {
          pathIndex++
        } else if (keyIsItem) {
          pathIndex++
        }
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
