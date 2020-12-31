import { AddAccount, AddAccountModel, AccountModel, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encrypter: Encrypter
  ) {

  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(account.password)
    return new Promise(resolve => resolve({
      id: 'valid_id',
      name: 'valid_name',
      email: 'valid_email@acme.com',
      password: hashedPassword
    }))
  }
}
