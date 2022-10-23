import { ProductsDTO } from '../Services/ProductServices/ProductDTO'

export interface iProductRepository {
  findByName(data: { name: string; marketplace: string }): Promise<any>
  save(data: ProductsDTO): Promise<any>
}
