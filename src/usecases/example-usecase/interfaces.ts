import { IExample } from "entities/example/Iexample";
import { Either } from "shared/either";
import { ExampleError } from "usecases/errors";

export type ExampleUsecaseResponse = Either<ExampleError, IExample>

export interface IExampleUsecase {
  create(params: IExample): Promise<ExampleUsecaseResponse>;
}
