import { right } from "../../../shared/either";
import { IController } from "../../../adapters/controllers/ports";
import { ExampleUsecaseResponse, IExampleUsecase } from "usecases/example-usecase/interfaces";
import { IExample } from "entities/example/Iexample";
import { ExampleController } from "adapters/controllers/example-controller";

const makeController = (): IController => {
  class Usecase implements IExampleUsecase {
    create(params: IExample): Promise<ExampleUsecaseResponse> {
      return Promise.resolve(right(params))
    }
  }

  return new ExampleController(new Usecase())
}

describe('ExampleController', () => {
  const controller = makeController()
  it('should fail if name is missing', async () => {
    const response = await controller.handle({
      params: {
        id: 'id'
      },
      body: {}
    })
    expect(response.body).toBe('Missing param: name')
    expect(response.statusCode).toBe(400)
  })

  it('should handle successfully', async () => {
    const response = await controller.handle({
      params: {
        id: 'id'
      },
      body: {
        name: 'name'
      }
    })
    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual({
      id: 'id',
      name: 'name'
    })
  })
})
