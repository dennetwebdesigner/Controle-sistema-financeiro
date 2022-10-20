import { MarketplaceDTO } from '../../Services/MarketplaceServices/MarketplaceDTO'
import { iMarketplaceRepository } from '../iMarketplaceRepository'
import { prismaClient } from '../../database/prismaClient'

export class MarketplaceRepository implements iMarketplaceRepository {
  async findByName(data: MarketplaceDTO): Promise<any> {
    const { name, user_id } = data
    return await prismaClient.marketplace.findFirst({
      where: { name, user_id },
    })
  }
  async save(data: MarketplaceDTO): Promise<any> {
    return await prismaClient.marketplace.create({ data })
  }
}
