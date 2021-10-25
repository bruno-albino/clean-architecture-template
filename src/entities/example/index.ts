import { InvalidExampleError } from '../errors'
import { Either, left, right } from '../../shared/either'
import { IExample } from './Iexample'
import { Name } from './name'

export class Example implements IExample {
  public readonly name: string
  public readonly id: string

  constructor({
    name,
    id,
  }: IExample) {
    this.name = name
    this.id = id
    Object.freeze(this)
  }

  static create(data: IExample): Either<InvalidExampleError, Example> {
    const nameOrError = Name.create(data.name)
    if(nameOrError.isLeft()) {
      return left(nameOrError.value)
    }
    data.name = nameOrError.value.name
    return right(new Example(data))
  }
}
