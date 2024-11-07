import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: () => import('../views/AboutView.vue')},
  //primero se realiza el npm run build y vemos la carpeta notando que genera un solo js
  // se cambia por AboutView () => import('../views/AboutView.vue')
  //Ahora realiza la separacion que se llama code splitting
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })
  
  export default router