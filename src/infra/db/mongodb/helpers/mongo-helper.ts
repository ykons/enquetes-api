import { MongoClient, Db, Collection } from 'mongodb'

export const MongoHelper = {
  connection: null as unknown as MongoClient,
  db: null as unknown as Db,

  async connect (uri?: string) {
    const mongoUri: string = uri ?? process.env.MONGO_URL ?? ''
    this.connection = await MongoClient.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    this.db = await this.connection.db()
  },

  async disconnect () {
    await this.connection.close()
  },

  getCollection (name: string): Collection {
    return this.db.collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}
