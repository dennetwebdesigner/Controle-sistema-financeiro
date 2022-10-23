import { Request, Response } from 'express'
import { AuthService } from './AuthService'

export class AuthController {
  constructor(private authService: AuthService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body
    try {
      const user = await this.authService.execute({ username, password })
      return res.json(user)
    } catch (error: any) {
      const err = error.message ? error.message : error
      return res.status(400).json(err)
    }
  }
}
