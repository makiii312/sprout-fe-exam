import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

import FontAwesomeIcon from '@/utils/fontawesome-icons'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
