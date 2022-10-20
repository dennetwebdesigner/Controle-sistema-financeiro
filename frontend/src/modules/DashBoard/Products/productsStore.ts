import { defineStore } from 'pinia'
import { setLocal } from '../../../utils/localStorage'
import { stringify } from '../../../utils'

interface dataProducts {
  name: string
  id: string
}

export const productsStore = defineStore('product', {
  state: () => ({
    products: [
      { name: 'Mãos Simples', id: '001ABC' },
      { name: 'pés Simples', id: '002DEF' },
    ] as dataProducts[],
  }),
  actions: {
    async setAllProducts(products: dataProducts[]) {
      this.products = products
      setLocal({ key: 'products', value: stringify(this.products) })
    },
    async setProduct(product: dataProducts) {
      this.products.push(product)
      setLocal({ key: 'products', value: stringify(this.products) })
    },
  },
})
