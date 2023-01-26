import { ZodError } from "zod"
import { Middleware } from "next-api-middleware";
import { ApiError } from '../errors';

export const errorHandler: Middleware = async (req, res, next) => {
  try {
    await next()
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          issues: error.issues,
        }
      })
    } else if (error instanceof ApiError) {
      res.status(error.httpStatusCode).json({
        error: {
          code: error.code,
          message: error.message,
        }
      })
    } else {
      res.status(500).json({
        error: {
          code: 'INTERNAL_SERVER_ERROR',
        }
      })
    }
  }
}
