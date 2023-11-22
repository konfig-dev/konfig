export function tokenizeName(name: string): string[] {
  // Split based on camel case, underscores, and dashes
  return name.split(/(?=[A-Z])|_|-/).filter((token) => token.length > 0)
}

export function findCommonTokens(names: string[]): string[] {
  const tokenLists = names.map(tokenizeName)
  const commonTokens = tokenLists.reduce((common, tokens) => {
    return common.filter((token) => tokens.includes(token))
  }, tokenLists[0] || [])
  return commonTokens
}

export function createAbbreviationFromUniqueTokens(
  tokenLists: string[][],
  commonTokens: string[]
): string {
  const uniqueTokenSet = new Set<string>()
  tokenLists.forEach((tokens) => {
    tokens
      .filter((token) => !commonTokens.includes(token))
      .forEach((token) => uniqueTokenSet.add(token.substring(0, 1)))
  })
  return Array.from(uniqueTokenSet).join('')
}

export function generateEncapsulatingName(
  names: string[],
  blacklist: string[]
): string {
  const tokenLists = names.map(tokenizeName)
  const commonTokens = findCommonTokens(names)
  const sharedPart = commonTokens.join('')
  const uniquePart = createAbbreviationFromUniqueTokens(
    tokenLists,
    commonTokens
  )
  let potentialName = uniquePart + sharedPart

  if (blacklist.includes(potentialName) || potentialName === '') {
    potentialName = 'GenericSchemaAggregate'
  }

  let attempt = 1
  while (blacklist.includes(potentialName)) {
    potentialName = 'GenericSchemaAggregate' + attempt
    attempt++
  }

  return potentialName
}
