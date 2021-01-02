import { Controller, HttpRequest } from '../../presentation/protocols'
import { Request, Response } from 'express'

export const expressRouteAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpRespose = await controller.handle(httpRequest)
    res.status(httpRespose.statusCode).json(httpRespose.body)
  }
}
