import { iProductRepository } from '../../../repositories/iProductRepository'
import { ProductsDTO } from '../ProductDTO'
export class CreateProductServices {
  constructor(private repository: iProductRepository) {}

  async execute(data: ProductsDTO) {
    const productExist = await this.repository.findByName({
      name: data.name,
      marketplace: data.marketplace_id,
    })

    if (productExist) {
      throw new Error('Este produto já esta cadastrado')
    }

    const product = await this.repository.save(data)
    return product
  }
}
