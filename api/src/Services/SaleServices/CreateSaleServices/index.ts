import { SaleRepository } from '../../../repositories/implementations/SaleRepository'
import { CreateSaleServices } from './CreateSaleServices'
import { CreateSaleController } from './CreateSaleController'

const saleRepository = new SaleRepository()
const createSaleServices = new CreateSaleServices(saleRepository)
const createSaleController = new CreateSaleController(createSaleServices)

export { createSaleController }
