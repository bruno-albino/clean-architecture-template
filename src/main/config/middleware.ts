import { Express } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { bodyParser, cors } from '../middleware'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(helmet())
  app.use(morgan('dev'))
}
