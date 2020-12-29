import { MissingParamErro } from '../errors/missing-param-erro'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controler'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'password_confirmation']
    for (const field of requiredFields) {
      if (httpRequest?.body?.[field] == null) {
        return badRequest(new MissingParamErro(field))
      }
    }

    return { statusCode: 200, body: '' }
  }
}
