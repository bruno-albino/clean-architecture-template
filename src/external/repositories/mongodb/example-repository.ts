import { IExample } from "entities/example/Iexample";
import { ExampleRepository } from "usecases/ports";

export class MongoExampleRepository implements ExampleRepository {
  findAll: () => Promise<IExample[]>;
  add: (example: IExample) => Promise<IExample>;
  findOne: (id: string) => Promise<IExample>;
  update: (example: IExample) => Promise<IExample>;
  delete: (id: string) => Promise<IExample>;
}
