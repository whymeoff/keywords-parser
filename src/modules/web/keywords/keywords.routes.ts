import { promisifiedRoute } from '@app/lib/utils/express.js'
import { Router } from 'express'
import { keywordsController } from './keywords.controller.js'

export function createKeywordsRouter() {
  const router = Router()

  router.get('/', promisifiedRoute(keywordsController.getKeywords))

  return router
}
