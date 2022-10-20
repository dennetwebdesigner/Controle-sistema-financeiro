import { data } from '../../Services/AuthenticationService/AuthDTO'
import { iAuthRepository } from '../iAuthRepository'
import { authConfig } from '../../config/authConfig'
import { prismaClient } from '../../database/prismaClient'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'

export class AuthRepository implements iAuthRepository {
  async findByUser(data: data): Promise<any> {
    const user = await prismaClient.user.findFirst({
      where: { username: data.username },
    })

    return user
  }

  async passwordValidate({
    password,
    hash,
  }: {
    password: string
    hash: string
  }): Promise<any> {
    return await bcrypt.compare(password, hash)
  }

  async createToken({ userId }: { userId: string }): Promise<any> {
    const create = promisify<{ userId: string }, string, { expiresIn: string }>(
      jwt.sign
    )
    return await create({ userId }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    })
  }
}
