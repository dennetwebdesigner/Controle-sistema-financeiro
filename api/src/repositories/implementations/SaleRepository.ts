import { CreateSaleDTO } from 'Services/SaleServices/CreateSaleServices/CreateSaleDTO'
import { iSaleRepository } from '../iSaleRepository'
import { prismaClient } from '../../database/prismaClient'
export class SaleRepository implements iSaleRepository {
  async save(data: CreateSaleDTO): Promise<any> {
    return await prismaClient.sale.create({
      data,
    })
  }
}
