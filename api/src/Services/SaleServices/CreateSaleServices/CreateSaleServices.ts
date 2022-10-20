import { iSaleRepository } from '../../../repositories/iSaleRepository'
import { CreateSaleDTO } from './CreateSaleDTO'

export class CreateSaleServices {
  constructor(private repository: iSaleRepository) {}

  async execute(data: CreateSaleDTO): Promise<any> {
    const { marketplace_id, total } = data
    if (!marketplace_id || !total) throw new Error('Informações invalidas')
    return await this.repository.save(data)
  }
}
