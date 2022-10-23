import { Request, Response, Router } from 'express'

import { authMiddleware } from '../Services/AuthenticationService/authMIddleware'
import { createProductController } from '../Services/ProductServices/CreateProduct'

const producteRouter = Router()

// Create product
producteRouter.post(
  '/products',
  authMiddleware,
  async (req: Request, res: Response): Promise<Response> => {
    return createProductController.handle(req, res)
  }
)

export { producteRouter }
