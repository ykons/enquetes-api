import { MissingParamError, InvalidParamError } from '../errors'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controler'
import { EmailValidator } from '../protocols/email-validator'

export class SignUpController implements Controller {
  constructor (
    private readonly emailValidator: EmailValidator
  ) {

  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'password_confirmation']
      for (const field of requiredFields) {
        if (httpRequest?.body?.[field] == null) {
          return badRequest(new MissingParamError(field))
        }
      }

      if (!this.emailValidator.isValid(httpRequest.body.email)) {
        return badRequest(new InvalidParamError('email'))
      }

      return serverError()
    } catch (error) {
      return serverError()
    }
  }
}
