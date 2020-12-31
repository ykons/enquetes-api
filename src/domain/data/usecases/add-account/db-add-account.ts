import { AccountModel } from '../../../models/account'
import { Encrypter } from '../../../protocols/encrypter'
import { AddAccount, AddAccountModel } from '../../../usecases/add-account'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encrypter: Encrypter
  ) {

  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => resolve({
      id: 'valid_id',
      name: 'valid_name',
      email: 'valid_email@acme.com',
      password: hashedPassword
    }))
  }
}
