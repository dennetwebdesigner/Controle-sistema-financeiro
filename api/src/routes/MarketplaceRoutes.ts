import { Request, Response, Router } from 'express'
import { createMarketplaceController } from '../Services/MarketplaceServices/CreateMarketplace'
import { authMiddleware } from '../Services/AuthenticationService/authMIddleware'

const marketplaceRouter = Router()

// Create marketplace
marketplaceRouter.post(
  '/marketplaces',
  authMiddleware,
  async (req: Request, res: Response): Promise<Response> => {
    return createMarketplaceController.handle(req, res)
  }
)

export { marketplaceRouter }
