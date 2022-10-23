import express, { Express } from 'express'
import http, { Server } from 'http'

import cors from 'cors'
import { router } from './routes'

export class App {
  private app: Express
  public server: Server
  constructor() {
    this.app = express()
    this.server = http.createServer(this.app)
    this.middleaware()
    this.routes()
  }

  async middleaware(): Promise<void> {
    this.app.use(cors())
    this.app.use(express.json())
  }

  async routes(): Promise<void> {
    this.app.use('/v1', router)
  }
}

export default new App().server
