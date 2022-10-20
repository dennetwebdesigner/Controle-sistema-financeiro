import { SalesData, dataInputs } from './index'

import { dataSale } from './saleInterface'
import { salesStore } from '../salesStore'
import { storeToRefs } from 'pinia'

export const salesAll = (): void => {
  const store = salesStore()
  const { sales } = storeToRefs(store)
  SalesData.value = sales.value
}

export const saleFind = (): void => {
  if (!dataInputs.search) {
    salesAll()
    return
  }

  const sales = SalesData.value as dataSale[]
  const findSales = sales.filter((data: dataSale) => {
    const nameOrId =
      !dataInputs.selectTypeSearch || dataInputs.selectTypeSearch == 'name'
        ? data.name
        : data.id
    return nameOrId.toLowerCase().indexOf(dataInputs.search.toLowerCase()) > -1
  })
  SalesData.value = findSales
}
