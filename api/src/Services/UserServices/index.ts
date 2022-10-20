import { UserRepository } from '../../repositories/implementations/UserRepository'
import { CreateuserController } from './CreateUserController'
import { CreateUserService } from './CreateUserService'

const userRepository = new UserRepository()
const createUserService = new CreateUserService(userRepository)
export const createUserController = new CreateuserController(createUserService)
