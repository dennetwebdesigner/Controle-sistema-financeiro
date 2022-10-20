import { data } from '../Services/AuthenticationService/AuthDTO'

export interface iAuthRepository {
  findByUser(data: data): Promise<any>
  passwordValidate({
    password,
    hash,
  }: {
    password: string
    hash: string
  }): Promise<any>
  createToken({ userId }: { userId: string }): Promise<any>
}
