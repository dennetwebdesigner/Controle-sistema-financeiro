import { Request, Response, Router } from 'express'

import { authRouter } from './AuthRoutes'
import { marketplaceRouter } from './MarketplaceRoutes'
import { producteRouter } from './ProductRoutes'
import { userRouter } from './UserRoutes'

const router = Router()

router.use(userRouter)
router.use(marketplaceRouter)
router.use(producteRouter)
router.use(authRouter)

export { router }
