import { data, iUserRepository } from '../iUserRepository'
import { prismaClient } from '../../database/prismaClient'
import bcrypt from 'bcrypt'
export class UserRepository implements iUserRepository {
  constructor() {}

  async findByUsername(username: string): Promise<any> {
    const user = await prismaClient.user.findFirst({ where: { username } })
    return user
  }

  async save(data: data): Promise<any> {
    data.password = await bcrypt.hash(data.password, 8)
    const user = await prismaClient.user.create({
      data: {
        username: data.username,
        password: data.password,
      },
    })

    return user
  }
}
