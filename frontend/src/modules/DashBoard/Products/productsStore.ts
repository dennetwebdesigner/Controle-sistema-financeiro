import { api } from '../../../utils/api'
import { defineStore } from 'pinia'
import { setLocal } from '../../../utils/localStorage'
import { stringify } from '../../../utils'

interface dataProducts {
  name: string
  value: string
  description: string
  code: string
  stock: string
}

export const productsStore = defineStore('product', {
  state: () => ({
    products: [
      { name: 'Mãos Simples', code: '001ABC' },
      { name: 'pés Simples', code: '002DEF' },
    ] as dataProducts[],
  }),
  actions: {
    async setAllProducts(products: dataProducts[]) {
      this.products = products
      setLocal({ key: 'products', value: stringify(this.products) })
    },
    async setProduct(product: dataProducts) {
      this.products.push(product)
      const create = await api.post('/products', {})
      console.log(create)
      setLocal({ key: 'products', value: stringify(this.products) })
    },
  },
})
