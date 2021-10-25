import { promisify } from 'bluebird'
import server from 'main/server/server'
const serverStart = promisify(server.start)

describe('Server test', () => {
  test('Server Start', async () => {
    
    const server = await serverStart()
    expect(server).not.toBeNull()
    // server.start((err, server) => {
    //   expect(err).toBeNull()
    //   expect(server).not.toBeNull()
    // })
  })
  
  test('Server Stop', () => {
    expect(server.stop()).toEqual(true)
  })
})
