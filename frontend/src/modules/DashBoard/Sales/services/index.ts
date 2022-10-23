import { reactive, ref } from 'vue'

import { dataSale } from './saleInterface'

export const dataInputs = reactive({
  search: '',
  selectTypeSearch: 'name',
})

export const SalesData = ref<dataSale[]>()
