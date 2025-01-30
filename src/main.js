import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import './assets/style.css';

import router from './router/router';

createApp(App).use(router).mount('#app')



