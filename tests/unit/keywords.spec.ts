import { keywordsService } from '../../dist/modules/web/keywords/keywords.service'

const text = `
  Hello world, test text there, test with special characters, test with breakdowns

  .

  ///

  Should not parse numbers.

  123

  Case insensitive

  ...
`

describe('Keywords', () => {
  test('Test word count check', () => {
    expect(keywordsService.checkWordCount(text, 'hello')).toBe(1)
    expect(keywordsService.checkWordCount(text, 'test')).toBe(3)
    expect(keywordsService.checkWordCount(text, 'close')).toBe(0)
  })

  test('Test parsing keywords from text', () => {
    const keywords = keywordsService.extractKeywordsFromText(text)

    expect(keywords).toBeDefined()

    expect(keywords['hello']).toBe(1)
    expect(keywords['world']).toBe(1)
    expect(keywords['test']).toBe(3)
    expect(keywords['text']).toBe(1)
    expect(keywords['there']).toBe(1)
    expect(keywords['with']).toBe(2)
    expect(keywords['special']).toBe(1)
    expect(keywords['characters']).toBe(1)
    expect(keywords['breakdowns']).toBe(1)
    expect(keywords['should']).toBe(1)
    expect(keywords['not']).toBe(1)
    expect(keywords['parse']).toBe(1)
    expect(keywords['numbers']).toBe(1)
    expect(keywords['case']).toBe(1)
    expect(keywords['insensitive']).toBe(1)

    expect(Object.keys(keywords).length).toBe(15)
  })

  test('Test keywords sort (desc)', () => {
    const keywords = keywordsService.extractKeywordsFromText(text)
    const sortedKeywords = keywordsService.sortMapDesc(keywords)

    const values: Array<number> = Object.values(sortedKeywords)

    for (let i = 0; i < values.length - 1; i++) {
      expect(values[i] >= values[i + 1]).toBeTruthy()
    }
  })
})
