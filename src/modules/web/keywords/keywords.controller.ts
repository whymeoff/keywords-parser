import axios from 'axios'
import { Request, Response } from 'express'
import { convert } from 'html-to-text'
import { keywordsService } from './keywords.service.js'
import { getKeywordsSchema } from './keywords.validation.js'

async function getKeywords(req: Request, res: Response) {
  const { url } = await getKeywordsSchema.validate(req.query)

  const { data } = await axios.get(url)

  const text = convert(data)
  const countedWords = keywordsService.extractKeywordsFromText(text)
  const sortedWords = keywordsService.sortMapDesc(countedWords)

  res.status(200).send({ keywords: sortedWords })
}

export const keywordsController = { getKeywords }
