import { Example } from "entities/example";
import { IExample } from "entities/example/Iexample";
import { TokenService } from "external/ports";
import { left, right } from "shared/either";
import { ExampleError } from "usecases/errors";
import { ExampleRepository } from "../ports";
import { ExampleUsecaseResponse, IExampleUsecase } from './interfaces'

export class ExampleUsecase implements IExampleUsecase {
  constructor(
    private repo: ExampleRepository,
    private tokenService: TokenService,
  ) {}
  async create(params: IExample): Promise<ExampleUsecaseResponse> {
    const example = this.tokenService.sign(params)
    const modelWithName = await this.repo.findOne(params.name)
    if (modelWithName) {
      return left(new ExampleError())
    }

    const modelOrError = Example.create(params)
    if (modelOrError.isLeft()) {
      return left(modelOrError.value)
    }
    const model = modelOrError.value
    const response = await this.repo.add({
      name: model.name,
      id: model.id,
    })
    return right(response)
  }
}
