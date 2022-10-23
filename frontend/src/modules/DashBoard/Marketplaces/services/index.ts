import { reactive, ref } from 'vue'

import { dataMarketplaces } from './marketplacesInterface'

export const dataInputs = reactive({
  searchClients: '',
  selectTypeSearch: 'name',
})

export const marketplacesData = ref<dataMarketplaces[]>()
