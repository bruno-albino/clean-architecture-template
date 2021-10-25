import { DomainError } from './domain-error'

export class InvalidExampleError extends Error implements DomainError {
  constructor (error: string) {
    super(`Error as example.`)
    this.name = 'InvalidExampleError'
  }
}
