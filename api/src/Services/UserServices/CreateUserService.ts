import { data, iUserRepository } from '../../repositories/iUserRepository'

export class CreateUserService {
  constructor(private userRepository: iUserRepository) {}

  async execute(data: data): Promise<any> {
    if (!data.username || !data.password)
      throw new Error(
        JSON.stringify({ text: 'username or password is empty!' })
      )

    const user = await this.userRepository.save(data)

    return user
  }
}
