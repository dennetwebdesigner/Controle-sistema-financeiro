import { AuthRepository } from '../../repositories/implementations/AuthRepository'
import { AuthController } from './AuthController'
import { AuthService } from './AuthService'

const authReposiotry = new AuthRepository()
const authService = new AuthService(authReposiotry)
const authController = new AuthController(authService)

export { authController }
