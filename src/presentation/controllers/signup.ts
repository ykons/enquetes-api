import { MissingParamErro } from '../errors/missing-param-erro'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (httpRequest?.body?.[field] == null) {
        return badRequest(new MissingParamErro(field))
      }
    }

    return { statusCode: 200, body: '' }
  }
}
