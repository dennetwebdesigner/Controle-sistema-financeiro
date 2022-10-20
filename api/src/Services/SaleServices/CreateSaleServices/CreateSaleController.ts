import { Request, Response } from 'express'
import { CreateSaleServices } from './CreateSaleServices'

export class CreateSaleController {
  constructor(private service: CreateSaleServices) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body as {
      marketplace_id: string
      total: string
      products: string[]
    }

    try {
      const sale = await this.service.execute(data)
      return res.json(sale)
    } catch (error: any) {
      return res.status(404).json(error.message)
    }
  }
}
