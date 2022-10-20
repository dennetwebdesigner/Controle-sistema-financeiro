import { reactive, ref } from 'vue'

import { dataClients } from './ClientsInterface'

export const dataInputs = reactive({
  searchClients: '',
  selectTypeSearch: 'name',
})

export const clientsData = ref<dataClients[]>()
