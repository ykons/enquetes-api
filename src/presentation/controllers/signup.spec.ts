import { MissingParamErro } from '../errors/missing-param-erro'
import { HttpRequest } from '../protocols/http'
import { SignUpController } from './signup'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = makeSut()
    const httpRequest: HttpRequest = {
      body: {
        email: 'any_mail@acme.com',
        password: 'any_password',
        password_confirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamErro('name'))
  })

  test('Should return 400 if no e-mail is provided', () => {
    const sut = makeSut()
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        password_confirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamErro('email'))
  })

  test('Should return 400 if no password is provided', () => {
    const sut = makeSut()
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_mail@acme.com',
        password_confirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamErro('password'))
  })

  test('Should return 400 if no password_confirmation is provided', () => {
    const sut = makeSut()
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_mail@acme.com',
        password: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamErro('password_confirmation'))
  })
})
