import { Encrypter } from '../../../protocols/encrypter'
import { DbAddAccount } from './db-add-account'

interface SutType {
  sut: DbAddAccount
  encrypterStub: Encrypter
}

class EncrypterStub implements Encrypter {
  async encrypt (value: string): Promise<string> {
    return new Promise(resolve => resolve('hashed_password'))
  }
}

const makeSut = (): SutType => {
  const encrypterStub = new EncrypterStub()
  const sut = new DbAddAccount(encrypterStub)

  return {
    sut,
    encrypterStub
  }
}

describe('DbAddAccount Usecase', () => {
  test('Should call Encrypter with correct password', async () => {
    const { sut, encrypterStub } = makeSut()
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')

    const accountData = {
      name: 'valid_name',
      email: 'valid_email@acme.com',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
