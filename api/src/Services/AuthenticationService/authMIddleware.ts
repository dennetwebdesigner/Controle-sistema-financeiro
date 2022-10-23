import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import { authConfig } from '../../config/authConfig'

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const authentication = req.headers.authorization as string

  if (!authentication)
    return res.status(400).json({ error: 'token is not providaded.' })

  const [, token] = authentication.split(' ')

  try {
    const verifyToken = promisify<string, string>(jwt.verify)
    const decoded = (await verifyToken(token, authConfig.secret)) as any
    req.userId = decoded.userId

    return next()
  } catch (error: any) {
    return res.json({ error: 'token is not valid!' })
  }
}
