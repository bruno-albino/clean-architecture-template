import dotenv from 'dotenv-safe'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

function getEnvVar(name: string): string {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} not found`)
  }
  return process.env[name] as string
}

export const PORT = getEnvVar('PORT')
export const DEV_MODE = getEnvVar('ENV') === 'development'
export const JWT_SECRET = getEnvVar('JWT_SECRET')
export const MONGODB_URI = getEnvVar('MONGODB_URI')
