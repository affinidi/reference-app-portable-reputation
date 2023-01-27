import pino from 'pino'
import { logLevel } from './env'

export const logger = pino({
  level: logLevel,
  transport: {
    target: 'pino-pretty',
  }
})
