import { ControllerError } from '../ports/controller-error'

export class ServerError extends Error implements ControllerError {
  constructor (reason: string) {
    super('Server error: ' + reason + '.')
    this.name = 'ServerError'
  }
}
