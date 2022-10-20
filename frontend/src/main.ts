import './style.css'

import * as mdijs from '@mdi/js'

import App from './App.vue'
import { createApp } from 'vue'
import mdiVue from 'mdi-vue/v3'
import { pinia } from './store/createPinia'
import { router } from './routes'

createApp(App)
  .use(mdiVue, {
    icons: mdijs,
  })
  .use(pinia)
  .use(router)
  .mount('#app')
