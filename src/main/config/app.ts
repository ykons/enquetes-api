import express from 'express'
import setupMiddleware from '../config/middlewares'

const app = express()
setupMiddleware(app)

export default app
