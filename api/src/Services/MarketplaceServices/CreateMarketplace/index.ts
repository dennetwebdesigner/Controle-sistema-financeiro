import { MarketplaceRepository } from '../../../repositories/implementations/MarketPlaceRepository'
import { CreateMakertplaceServices } from './CreateMarketplaceServices'
import { CreateMarketplaceController } from './CreateMarketplaceController'

const marketplaceRepository = new MarketplaceRepository()
const createMakertplaceServices = new CreateMakertplaceServices(
  marketplaceRepository
)
const createMarketplaceController = new CreateMarketplaceController(
  createMakertplaceServices
)

export { createMarketplaceController }
