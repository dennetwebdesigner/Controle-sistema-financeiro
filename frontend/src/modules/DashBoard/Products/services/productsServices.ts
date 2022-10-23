import { dataInputs, productsData } from './index'

import { dataProducts } from './ProductInterface'
import { productsStore } from '../productsStore'
import { storeToRefs } from 'pinia'

export const productsAll = (): void => {
  const store = productsStore()
  const { products } = storeToRefs(store)
  productsData.value = products.value
}

export const productFind = (): void => {
  if (!dataInputs.searchProducts) {
    productsAll()
    return
  }

  const clients = productsData.value as dataProducts[]
  const findClient = clients.filter((data: dataProducts) => {
    const nameOrId =
      !dataInputs.selectTypeSearch || dataInputs.selectTypeSearch == 'name'
        ? data.name
        : data.id
    return (
      nameOrId.toLowerCase().indexOf(dataInputs.searchProducts.toLowerCase()) >
      -1
    )
  })
  productsData.value = findClient
}
