import { Server } from 'http'
import dotenv from 'dotenv-safe'

dotenv.config()
let server: Server | null = null

interface IServerCallBack {
  (err: Error | null, server: Server | null): void
}

const PORT = process.env.PORT || 3000
async function start (callback: IServerCallBack): Promise<void> {
  const app = (await import('../config/app')).default
  server = app.listen(PORT, () => callback(null, server)).on('error', console.error)
}

function stop (): boolean {
  if (server) server.close()
  return true
}

export default {
  start,
  stop
}
