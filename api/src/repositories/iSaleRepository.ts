import { CreateSaleDTO } from '../Services/SaleServices/CreateSaleServices/CreateSaleDTO'

export interface iSaleRepository {
  save(data: CreateSaleDTO): Promise<any>
}
