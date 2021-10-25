import { Request, Response } from 'express'
import app from 'main/config/app'
import request from 'supertest'

describe('CORS Middleware', () => {
  test('should enable CORS', async () => {
    app.get('test-cors', (req: Request, res: Response) => {
      res.sendStatus(200)
    })
    await request(app)
      .get('/test-cors')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
      .expect('access-control-allow-origin', '*')
  })
})
