import { reactive, ref } from 'vue'

import { dataProducts } from './ProductInterface'

export const dataInputs = reactive({
  searchProducts: '',
  selectTypeSearch: 'name',
})

export const productsData = ref<dataProducts[]>()
