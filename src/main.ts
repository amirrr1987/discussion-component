import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// main.ts
import 'uno.css'
import '@unocss/reset/tailwind.css'
import 'virtual:unocss-devtools'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
