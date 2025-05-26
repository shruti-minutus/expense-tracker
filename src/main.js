import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import { createPinia } from 'pinia'
loadFonts() // Load custom fonts

const pinia = createPinia() // Create a Pinia store instance

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia) // Ensure to use the Pinia store
  .mount('#app')
