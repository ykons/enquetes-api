import { AccountModel } from '../../domain/models/account'
import { AddAccountModel } from '../../domain/usecases/add-account'

export class AddAccountRepository {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
