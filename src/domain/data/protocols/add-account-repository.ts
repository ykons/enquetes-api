import { AccountModel } from '../../models/account'
import { AddAccountModel } from '../../usecases/add-account'

export class AddAccountRepository {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
