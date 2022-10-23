import { createUserController } from '../Services/UserServices'
import { Request, Response, Router } from 'express'

const userRouter: Router = Router()

// create new user
userRouter.post(
  '/users',
  async (req: Request, res: Response): Promise<Response> => {
    return createUserController.handle(req, res)
  }
)

export { userRouter }
