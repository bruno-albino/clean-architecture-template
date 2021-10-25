import { ExampleController } from "adapters/controllers/example-controller"
import { IController } from "adapters/controllers/ports"
import { JsonWebToken } from "external/jsonwebtoken"
import { MongoExampleRepository } from "external/repositories/mongodb/example-repository"
import { ExampleUsecase } from "usecases/example-usecase/example-usecase"

export const makeExampleController = (): IController => {
  const repo = new MongoExampleRepository()
  const tokenService = new JsonWebToken('secret')
  const usecase = new ExampleUsecase(repo, tokenService)
  return new ExampleController(usecase)
}
