import { Request, Response } from 'express'
import { CreateUserService } from './CreateUserService'

export class CreateuserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(req: Request, res: Response): Promise<any> {
    const { username, password } = req.body

    try {
      const user = await this.createUserService.execute({ username, password })
      return res.status(201).json()
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}
