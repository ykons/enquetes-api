import { Controller, HttpRequest } from '../../presentation/protocols'
import { Request, Response } from 'express'

export const expressRouteAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpRespose = await controller.handle(httpRequest)
    if (httpRespose.statusCode === 200) {
      res.status(httpRespose.statusCode).json(httpRespose.body)
    } else {
      res.status(httpRespose.statusCode).json({
        error: httpRespose.body.message
      })
    }
  }
}
