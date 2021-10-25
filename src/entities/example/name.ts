import { Either, left, right } from "../../shared/either"
import { InvalidExampleError } from "../errors"

export class Name {
  public name: string

  constructor(name: string) {
    this.name = name
    Object.freeze(this)
  }

  static create(name: string): Either<InvalidExampleError, Name> {
    if (!Name.isValid(name)) {
      return left(new InvalidExampleError(name))
    }
    return right(new Name(name))
  }

  static isValid(name: string): boolean {
    return name.length > 2 && name.length < 70
  }
}
