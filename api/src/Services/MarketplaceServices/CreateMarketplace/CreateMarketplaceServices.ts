import { MarketplaceDTO } from '../MarketplaceDTO'
import { MarketplaceRepository } from '../../../repositories/implementations/MarketPlaceRepository'

export class CreateMakertplaceServices {
  constructor(private repository: MarketplaceRepository) {}

  async execute(data: MarketplaceDTO): Promise<any> {
    const marketplaceExist = await this.repository.findByName(data)

    if (marketplaceExist) throw new Error('Essa loja já esta registrada!')

    try {
      return await this.repository.save(data)
    } catch (error) {
      return error
    }
  }
}
