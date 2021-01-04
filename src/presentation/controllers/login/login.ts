import { MissingParamError, ServerError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (httpRequest.body?.email == null) {
      return Promise.resolve(badRequest(new MissingParamError('email')))
    }
    if (httpRequest.body?.password == null) {
      return Promise.resolve(badRequest(new MissingParamError('password')))
    }

    return Promise.resolve(badRequest(new ServerError()))
  }
}
