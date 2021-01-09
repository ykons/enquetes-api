export default {
  mongoUri: process.env.MONGO_URL ?? 'mongodb://mongo:27017/enquetes',
  port: process.env.PORT ?? 5050,
  jwtSecret: process.env.JWT_SECRET ?? 'hZBPeyJ_FdkkLnYx4e7J'
}
