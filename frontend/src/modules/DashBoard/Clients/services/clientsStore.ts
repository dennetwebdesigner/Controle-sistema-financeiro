import { defineStore } from 'pinia'
import { setLocal } from '../../../utils/localStorage'
import { stringify } from '../../../utils'

interface dataClients {
  name: string
  id: string
}

export const clientsStore = defineStore('client', {
  state: () => ({
    clients: [
      { name: 'joatan Dennet de Sena', id: '001ABC' },
      { name: 'Marinalva Silva de Sena', id: '002DEF' },
      { name: 'Renata Gabriella', id: '003GHI' },
      { name: 'João Antonio de Sena', id: '004JKL' },
      { name: 'Valmira', id: '005MNO' },
    ] as dataClients[],
  }),
  actions: {
    async setAllClients(clients: dataClients[]) {
      this.clients = clients
      setLocal({ key: 'clients', value: stringify(this.clients) })
    },
    async setClient(client: dataClients) {
      this.clients.push(client)
      setLocal({ key: 'clients', value: stringify(this.clients) })
    },
  },
})
