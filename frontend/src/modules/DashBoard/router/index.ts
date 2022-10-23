import { ClientsRouter } from '../Clients/router'
import { MarketplaceRouter } from '../Marketplaces/router'
import { ProductRouter } from '../Products/router'
import { SaleRouter } from '../Sales/router'

export const dashBoardGroupRouter = [
  ClientsRouter,
  MarketplaceRouter,
  ProductRouter,
  SaleRouter,
]
