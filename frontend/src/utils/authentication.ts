/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosError, AxiosResponse } from 'axios'

import { api } from '../utils/api'
import { useAuthStore } from '../store/useAuthStore'

export const verifyAuthentication = async (): Promise<void> => {
  const { setLogout } = useAuthStore()
  try {
    const data: AxiosResponse = await api.get('/auth')

    if (data.data.error) {
      setLogout()
    }
  } catch (error: any) {
    const err = error.response as AxiosError
    console.log(err)
    setLogout()
  }
}
