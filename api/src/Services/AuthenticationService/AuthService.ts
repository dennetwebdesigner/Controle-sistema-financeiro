import { iAuthRepository } from '../../repositories/iAuthRepository'
import { data } from './AuthDTO'

export class AuthService {
  constructor(private authRepository: iAuthRepository) {}

  async execute(data: data): Promise<any> {
    const user = await this.authRepository.findByUser(data)

    if (!user) throw new Error('Usuario não cadastrado')

    if (
      !(await this.authRepository.passwordValidate({
        password: data.password,
        hash: user.password,
      }))
    ) {
      throw new Error('Usuario não cadastrado')
    }

    const token = await this.authRepository.createToken({ userId: user.id })

    return { token }
  }
}
