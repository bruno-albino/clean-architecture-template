import { InvalidExampleError } from "entities/errors"
import { ExampleBuilder } from "tests/builders/example"
import { DoubleTokenService } from "tests/doubles/external/tokenService"
import { InMemoryExampleRepository } from "tests/doubles/repositories/in-memory-account-repository"
import { ExampleError } from "usecases/errors"
import { ExampleUsecase } from "usecases/example-usecase/example-usecase"

const repo = new InMemoryExampleRepository()
const tokenService = new DoubleTokenService()
const usecase = new ExampleUsecase(repo, tokenService)

describe('ExampleUsecase', () => {
  it('should fail if already has account with the same name', async () => {
    const example = ExampleBuilder.aExample().build()
    await repo.add(example)
    const response = await usecase.create(example)
    expect(response.isLeft()).toBeTruthy()
    expect(response.value).toBeInstanceOf(ExampleError)
  })

  it('should fail if email is invalid', async () => {
    const account = ExampleBuilder.aExample().withWrongName().build()
    const response = await usecase.create(account)
    expect(response.isLeft()).toBeTruthy()
    expect(response.value).toBeInstanceOf(InvalidExampleError)
  })

  it('should successfully create a account', async () => {
    const account = ExampleBuilder.aExample().withDifferentName().build()
    const response = await usecase.create(account)

    const accountInRepo = await repo.findOne(account.name)
    expect(response.isRight()).toBeTruthy()
    expect(accountInRepo).toBeDefined()
  })
})
