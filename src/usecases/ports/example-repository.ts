import { IExample } from '../../entities/example/Iexample'

export interface ExampleRepository {
  findAll: () => Promise<IExample[]>
  add: (example: IExample) => Promise<IExample>
  findOne: (name: string) => Promise<IExample>
  update: (example: IExample) => Promise<IExample>
  delete: (id: string) => Promise<IExample>
}
