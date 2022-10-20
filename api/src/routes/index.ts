import { Request, Response, Router } from 'express'
import { userRouter } from './UserRoutes'
import { marketplaceRouter } from './MarketplaceRoutes'
import { authRouter } from './AuthRoutes'

const router = Router()

router.use(userRouter)
router.use(marketplaceRouter)
router.use(authRouter)

export { router }
