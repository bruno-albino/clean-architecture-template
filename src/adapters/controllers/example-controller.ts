import { IExampleUsecase } from "usecases/example-usecase/interfaces";
import { MissingParamError } from "./errors";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse, IController } from "./ports";
import { getMissingParams, ParamTypes } from "./utils/getMissingParam";

export class ExampleController implements IController {
  private readonly usecase: IExampleUsecase

  constructor(usecase: IExampleUsecase) {
    this.usecase = usecase
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params
    const { name } = httpRequest.body

    try {
      const requiredParams = ['example']
      const missingParams = getMissingParams(httpRequest, requiredParams, ParamTypes.query)
      if (missingParams) {
        return badRequest(new MissingParamError(missingParams))
      }

      const response = await this.usecase.create({
        id,
        name
      })
      if(response.isLeft() && response.value instanceof Error) {
        return badRequest(response.value)
      }
      return ok(response.value)
    } catch (error) {
      console.error(error)
      return serverError('internal')
    }
  }
}
