import { iProductRepository } from '../iProductRepository'
import { ProductsDTO } from '../../Services/ProductServices/ProductDTO'
import { prismaClient } from '../../database/prismaClient'

export class ProductRepository implements iProductRepository {
  constructor() {}

  async findByName(data: { name: string; marketplace: string }): Promise<any> {
    return await prismaClient.product.findFirst({
      where: {
        name: data.name,
        marketplace_id: data.marketplace,
      },
    })
  }

  async save(data: ProductsDTO): Promise<any> {
    return await prismaClient.product.create({
      data: {
        ...data,
      },
    })
  }
}
