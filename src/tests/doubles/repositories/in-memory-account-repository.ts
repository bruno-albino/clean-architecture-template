import { IExample } from "entities/example/Iexample";
import { ExampleRepository } from "usecases/ports";

export class InMemoryExampleRepository implements ExampleRepository {
  private examples: IExample[] = []
  findAll: () => Promise<IExample[]>;
  add(example: IExample): Promise<IExample> {
    this.examples.push(example)
    return Promise.resolve(example)
  }
  findOne(name: string): Promise<IExample> {
    return Promise.resolve(this.examples.find(example => example.name === name))
  }
  update: (example: IExample) => Promise<IExample>;
  delete: (id: string) => Promise<IExample>;
}
