import { authSaveLocal } from '../utils/localStorage/auth'
import { defineStore } from 'pinia'
import { refreshForce } from '../utils/localStorage'

interface dataLog {
  authentication: boolean
  user: string
  token: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authentication: false,
    user: '',
    token: '',
    marletplaces: [] as { name: string; id: string }[],
    products: [] as { name: string; id: string }[],
    sales: [] as { name: string; id: string }[],
  }),
  actions: {
    async setLogin(data: dataLog): Promise<void> {
      this.authentication = data.authentication
      this.user = data.user
      this.token = data.token
      await authSaveLocal({
        authentication: data.authentication,
        token: data.token,
        user: data.user,
      })

      setTimeout(() => refreshForce('/'), 2000)
    },
    setLogout(): void {
      this.authentication = false
      this.user = ''
      this.token = ''

      authSaveLocal({
        authentication: this.authentication,
        token: this.token,
        user: this.user,
      })

      refreshForce('/entrar')
    },
  },
})
