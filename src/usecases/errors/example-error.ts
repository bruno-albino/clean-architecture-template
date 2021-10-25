import { UsecaseError } from './usecase-error'

export class ExampleError extends Error implements UsecaseError {
  constructor () {
    super('Example error')
    this.name = 'ExampleError'
  }
}
