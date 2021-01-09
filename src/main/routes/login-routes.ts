/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { expressRouteAdapter } from '../adapters/express/express-route-adapter'
import { makeLoginController } from '../factories/login/login-controller-factory'
import { makeSignUpController } from '../factories/signup/signup-controller-factory'

export default (router: Router): void => {
  router.post('/signup', expressRouteAdapter(makeSignUpController()))
  router.post('/login', expressRouteAdapter(makeLoginController()))
}
