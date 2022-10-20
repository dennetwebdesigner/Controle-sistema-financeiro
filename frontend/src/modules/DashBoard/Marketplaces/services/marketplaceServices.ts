import { dataInputs, marketplacesData } from './index'

import { dataMarketplaces } from './marketplacesInterface'
import { marketplacesStore } from '../marketplacesStore'
import { storeToRefs } from 'pinia'

export const marketplacesAll = (): void => {
  const store = marketplacesStore()
  const { marketplaces } = storeToRefs(store)
  marketplacesData.value = marketplaces.value
}

export const marketplaceFind = (): void => {
  if (!dataInputs.searchClients) {
    marketplacesAll()
    return
  }

  const clients = marketplacesData.value as dataMarketplaces[]
  const findClient = clients.filter((data: dataMarketplaces) => {
    const nameOrId =
      !dataInputs.selectTypeSearch || dataInputs.selectTypeSearch == 'name'
        ? data.name
        : data.id
    return (
      nameOrId.toLowerCase().indexOf(dataInputs.searchClients.toLowerCase()) >
      -1
    )
  })
  marketplacesData.value = findClient
}
