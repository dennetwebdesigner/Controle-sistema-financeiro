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
      this.marketplaces.push(marketplace)
      setLocal({ key: 'marketplaces', value: stringify(this.marketplaces) })
    },
  },
})
