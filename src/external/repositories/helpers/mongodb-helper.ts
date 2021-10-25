import mongoose, { Mongoose } from 'mongoose'

export let client: Mongoose | null = null

export const MongodbHelper = {
  async connect(mongoUri: string): Promise<void> {
    client = await mongoose.connect(mongoUri)
  },
  async disconnect(): Promise<void> {
    mongoose.disconnect()
  }
}
