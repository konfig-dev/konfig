// https://chat.openai.com/share/a17a2ddd-5b92-405d-93bf-9de4129a8cb4

export type Mapping = { [key: string]: string }

function computeScore(source: string, target: string): number {
  const sourceParts = source.split('/')
  const targetParts = target.split('/')
  let score = 0

  // 1. Assign a high score for direct substring matches.
  if (target.includes(source)) {
    score += 1000
  }

  // 2. Assign scores based on the matching of individual path segments.
  for (let i = 0; i < Math.min(sourceParts.length, targetParts.length); i++) {
    if (sourceParts[i] === targetParts[i]) {
      score += 100 // Exact match is highly valued
    } else if (
      sourceParts[i].startsWith('{') &&
      sourceParts[i].endsWith('}') &&
      targetParts[i].startsWith('{') &&
      targetParts[i].endsWith('}')
    ) {
      score += 50 // Matching placeholder is valued
    }
  }

  // 3. Apply penalties for mismatched lengths and other deviations.
  score -= 10 * Math.abs(sourceParts.length - targetParts.length) // Penalty for mismatched length

  return score
}

export function pairSourceAndTargetStrings(
  source: string[],
  target: string[]
): Mapping {
  let potentialMappings: { source: string; target: string; score: number }[] =
    []

  for (let s of source) {
    for (let t of target) {
      const score = computeScore(s, t)
      potentialMappings.push({ source: s, target: t, score: score })
    }
  }

  // Sort potential mappings by score in descending order
  potentialMappings.sort((a, b) => b.score - a.score)

  let finalMapping: Mapping = {}
  let usedSources = new Set<string>()
  let usedTargets = new Set<string>()

  for (let mapping of potentialMappings) {
    if (!usedSources.has(mapping.source) && !usedTargets.has(mapping.target)) {
      finalMapping[mapping.source] = mapping.target
      usedSources.add(mapping.source)
      usedTargets.add(mapping.target)
    }
  }

  return finalMapping
}
