import { api } from '../../../utils/api'
import { defineStore } from 'pinia'
import { setLocal } from '../../../utils/localStorage'

interface dataMarketplaces {
  name: string
  id: string
}
const { stringify } = JSON
export const marketplacesStore = defineStore('marketplace', {
  state: () => ({
    marketplaces: [
      { name: 'Esmalteria DLuxo', id: '001ABC' },
    ] as dataMarketplaces[],
  }),
  actions: {
    async setAllMarketplaces(marketplaces: dataMarketplaces[]) {
      this.marketplaces = marketplaces
      setLocal({ key: 'marketplaces', value: stringify(this.marketplaces) })
    },
    async setMarketplace(marketplace: dataMarketplaces) {
      try {
        const { data: marketplaceStore } = await api.post(
          '/marketplaces',
          marketplace
        )
        const { id, name } = marketplaceStore

        this.marketplaces.push({ id, name })
        alert('Nova Loja foi Cadastrada')

        setLocal({ key: 'marketplaces', value: stringify(this.marketplaces) })
      } catch (error) {
        console.log(error)
        alert(
          'Ocorreu um erro, tente novamente mais tarde ou fale com o desenvolvedor.'
        )
      }
    },
  },
})
