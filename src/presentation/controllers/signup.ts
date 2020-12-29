import { MissingParamErro } from '../errors/missing-param-erro'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamErro('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamErro('email'))
    }
  }
}
