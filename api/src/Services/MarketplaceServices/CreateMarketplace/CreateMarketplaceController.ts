import { Request, Response } from 'express'
import { CreateMakertplaceServices } from './CreateMarketplaceServices'
export class CreateMarketplaceController {
  constructor(private service: CreateMakertplaceServices) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const user_id = req.userId
    const { name } = req.body

    try {
      const marketplace = await this.service.execute({ name, user_id })
      return res.status(201).json(marketplace)
    } catch (error: any) {
      const err = !error.message ? error : error.message
      return res.status(400).json({ err })
    }
  }
}
