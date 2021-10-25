import { MainError } from './main-error'

export class UnauthorizedError extends Error implements MainError {
  constructor (message: string) {
    super(message)
    this.name = 'UnauthorizedError'
  }
}
