import { defineStore } from 'pinia'
import { setLocal } from '../../../utils/localStorage'
import { stringify } from '../../../utils'

interface dataSales {
  name: string
  id: string
}

export const salesStore = defineStore('sale', {
  state: () => ({
    sales: [
      { name: '00002', id: '001ABC' },
      { name: '0003', id: '002DEF' },
    ] as dataSales[],
  }),
  actions: {
    async setAllSales(sales: dataSales[]) {
      this.sales = sales
      setLocal({ key: 'sales', value: stringify(this.sales) })
    },
    async setSale(product: dataSales) {
      this.sales.push(product)
      setLocal({ key: 'sales', value: stringify(this.sales) })
    },
  },
})
