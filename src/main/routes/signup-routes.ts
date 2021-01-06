import { Router } from 'express'
import { expressRouteAdapter } from '../adapters/express-route-adapter'
import { makeSignUpController } from '../factories/signup/signup'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post('/signup', expressRouteAdapter(makeSignUpController()))
}
