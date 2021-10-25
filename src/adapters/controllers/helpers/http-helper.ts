import { HttpResponse } from '../ports/http'
import { ServerError } from '../errors/server-error'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error.message
})

export const unauthorized = (error: Error): HttpResponse => ({
  statusCode: 401,
  body: error.message
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data
})

export const serverError = (reason: string): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(reason)
})
