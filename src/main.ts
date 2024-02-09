import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './router';

import FontAwesomeIcon from '@/utils/fontawesome-icons'

createApp(App)
    .use(Router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
