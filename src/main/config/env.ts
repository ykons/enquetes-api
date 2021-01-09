export default {
  mongoUri: process.env.MONGO_URL ?? 'mongodb://127.0.0.1:27017/enquetes',
  port: process.env.PORT ?? 5050,
  jwtSecret: process.env.JWT_SECRET ?? 'hZBPeyJ_FdkkLnYx4e7J'
}
