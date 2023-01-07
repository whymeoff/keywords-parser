import { json, urlencoded } from 'body-parser'
import express, { Router } from 'express'
import { errorMiddleware } from '@lib/middlewares/error.js'

export function buildApp() {
  const app = express()

  app.use(express.json())

  app.use('/api/v1', configureV1Routes())

  app.use(errorMiddleware)

  return app
}

function configureV1Routes() {
  const router = Router()

  return router
}
