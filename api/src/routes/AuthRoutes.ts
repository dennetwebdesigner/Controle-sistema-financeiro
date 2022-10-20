import { Request, Response, Router } from 'express'
import { authController } from '../Services/AuthenticationService'
import { authMiddleware } from '../Services/AuthenticationService/authMIddleware'
const authRouter = Router()

// Create token auth
authRouter.post(
  '/auth',
  async (req: Request, res: Response): Promise<Response> => {
    return authController.handle(req, res)
  }
)

// verify token validate
authRouter.get(
  '/auth',
  authMiddleware,
  async (req: Request, res: Response): Promise<Response> => {
    return res.json({ auth: true })
  }
)

export { authRouter }
