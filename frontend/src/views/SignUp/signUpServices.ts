import { signUpData } from './signUpDTO'
import { api } from '../../utils/api'
import { AxiosResponse } from 'axios'
export const createUser = async (data: signUpData): Promise<AxiosResponse> => {
  return await api.post('/users', data)
}
