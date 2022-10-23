import { Request, Response } from 'express'

import { CreateProductServices } from './CreateProductServices'
import { ProductsDTO } from '../ProductDTO'

export class CreateProductController {
  constructor(private service: CreateProductServices) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body as ProductsDTO

    try {
      const product = await this.service.execute(data)
      return res.status(201).json(product)
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  }
}
