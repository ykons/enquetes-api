import { MongoClient, Db, Collection } from 'mongodb'

export const MongoHelper = {
  connection: null as MongoClient,
  db: null as Db,

  async connect () {
    this.connection = await MongoClient.connect(process.env.MONGO_URL, {
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
