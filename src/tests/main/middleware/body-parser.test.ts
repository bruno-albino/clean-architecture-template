import app from 'main/config/app'
import request from 'supertest'

describe('Body parser Middleware', () => {
  test('should parse body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Bruno' })
      .expect({ name: 'Bruno' })
  })
})
