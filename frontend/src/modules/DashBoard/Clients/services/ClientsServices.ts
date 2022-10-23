import { clientsData, dataInputs } from './index'

import { clientsStore } from '../clientsStore'
import { dataClients } from './ClientsInterface'
import { storeToRefs } from 'pinia'

export const clientsAll = (): void => {
  const store = clientsStore()
  const { clients } = storeToRefs(store)
  clientsData.value = clients.value
}

export const clientFind = (): void => {
  if (!dataInputs.searchClients) {
    clientsAll()
    return
  }

  const clients = clientsData.value as dataClients[]
  const findClient = clients.filter((data: dataClients) => {
    const nameOrId =
      !dataInputs.selectTypeSearch || dataInputs.selectTypeSearch == 'name'
        ? data.name
        : data.id
    return (
      nameOrId.toLowerCase().indexOf(dataInputs.searchClients.toLowerCase()) >
      -1
    )
  })
  clientsData.value = findClient
}
