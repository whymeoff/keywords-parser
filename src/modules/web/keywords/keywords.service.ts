function extractKeywordsFromText(text: string): Record<string, number> {
  const words = [...text.matchAll(/\b[^\d\W]+\b/gm)]
    .map((word) => String(word).toLowerCase())
    .filter(Boolean)

  const countedWordsMap: Record<string, number> = words.reduce((acc, item) => {
    if (!acc[item]) acc[item] = 0

    acc[item] += 1

    return acc
  }, {})

  return countedWordsMap
}

function sortMapDesc(map: Record<string, number>) {
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, item) => {
      acc[item[0]] = item[1]
      return acc
    }, {})
}

export const keywordsService = { extractKeywordsFromText, sortMapDesc }
