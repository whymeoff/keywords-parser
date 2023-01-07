import { NextFunction, Request, Response } from 'express'
import { ValidationError } from 'yup'
import { HttpError } from '@lib/errors/http-error.js'
import { getLogger } from '@lib/utils/logger.js'
import { generateTraceID } from '@lib/utils/trace.js'

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  let status = 500
  let message = 'Something went wrong'
  let handled = false
  console.log('here')
  if (err instanceof HttpError) {
    status = err.getStatus()
    message = err.message
    handled = true
  } else if (err instanceof ValidationError) {
    status = 400
    message = err.message
    handled = true
  }

  const traceID = generateTraceID()

  getLogger().error(err.message, {
    stack: handled ? undefined : err.stack,
    traceID,
    http: {
      url: req.url,
      method: req.method,
    },
  })

  return res.status(status).send({
    errors: [{ message, traceID }],
  })
}
