import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  connection: null as unknown as MongoClient,
  mongoUri: '',

  async connect (uri?: string) {
    this.mongoUri = uri ?? process.env.MONGO_URL
    this.connection = await MongoClient.connect(this.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect () {
    await this.connection.close()
    this.connection = null
  },

  async getCollection (name: string): Promise<Collection> {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!this.connection?.isConnected()) {
      await this.connect(this.mongoUri)
    }

    return this.connection.db().collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}
