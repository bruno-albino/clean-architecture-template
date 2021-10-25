import { InvalidExampleError } from "entities/errors"
import { Either, left, right } from "shared/either"

export class Email {
  email: string

  private constructor(email: string) {
    this.email = email
  }

  static create(value: string): Either<InvalidExampleError, Email> {
    if (Email.isValid(value)) {
      return right(new Email(value))
    }
    return left(new InvalidExampleError(value))
  }

  private static isValid(value: string): boolean {
    const REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return REGEX.test(value)
  }
}
