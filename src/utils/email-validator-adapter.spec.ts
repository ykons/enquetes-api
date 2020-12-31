import validator from 'validator'
import { EmailValidatorAdapter } from './email-validator'

jest.mock('validator', () => ({
  isEmail (email: string): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('Should return false is validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

    const isValid = sut.isValid('invalid_email@acme.com')
    expect(isValid).toBe(false)
  })

  test('Should return true is validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email@acme.com')
    expect(isValid).toBe(true)
  })

  test('Should call validator with correct e-mail', () => {
    const sut = new EmailValidatorAdapter()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')

    sut.isValid('any_email@acme.com')
    expect(isEmailSpy).toHaveBeenCalledWith('any_email@acme.com')
  })
})
