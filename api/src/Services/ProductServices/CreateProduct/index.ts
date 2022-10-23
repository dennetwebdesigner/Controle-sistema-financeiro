import { ProductRepository } from '../../../repositories/implementations/ProductRepository'
import { CreateProductController } from './CreateProductController'
import { CreateProductServices } from './CreateProductServices'

const productRepository = new ProductRepository()
const createProductServices = new CreateProductServices(productRepository)
const createProductController = new CreateProductController(
  createProductServices
)

export { createProductController }
