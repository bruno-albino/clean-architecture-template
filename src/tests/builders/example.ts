import { IExample } from "entities/example/Iexample"

export class ExampleBuilder {
  private example: IExample = {
    id: '',
    name: 'name',
  }

  static aExample(): ExampleBuilder {
    return new ExampleBuilder()
  }

  public withDifferentName(): ExampleBuilder {
    this.example.name = 'name2'
    return this
  }

  public withWrongName(): ExampleBuilder {
    this.example.name = ''
    return this
  }

  public build(): IExample {
    return this.example
  }
}
