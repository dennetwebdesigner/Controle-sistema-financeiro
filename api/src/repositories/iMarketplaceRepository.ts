import { MarketplaceDTO } from '../Services/MarketplaceServices/MarketplaceDTO'

export interface iMarketplaceRepository {
  findByName(data: MarketplaceDTO): Promise<any>
  save(data: MarketplaceDTO): Promise<any>
}
