import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createRulesPlugin } from 'vuetify/labs/rules'

const app = createApp(App)
const pinia = createPinia()
const vuetify = createVuetify({ components, directives })

// Initialize Pinia first
app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(createRulesPlugin({ /* options */ }, vuetify.locale))

app.mount('#app')
