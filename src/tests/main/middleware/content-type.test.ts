import app from 'main/config/app'
import request from 'supertest'

describe('Content Type Middleware', () => {
  test('should return default content type as json', async () => {
    app.get('/test-content-type', (req, res) => {
      res.json('')
    })
    await request(app)
      .get('/test-content-type')
      .expect('content-type', /json/)
  })

  test('should return xml content type when forced', async () => {
    app.get('/test-content-type-xml', (req, res) => {
      res.type('xml').send('')
    })
    await request(app)
      .get('/test-content-type-xml')
      .expect('content-type', /xml/)
  })
})
