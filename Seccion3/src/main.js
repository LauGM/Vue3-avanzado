import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Definición de la lógica de la directiva
const Vsmall = {
    mounted: (el) => el.style.width = '300px',
}

  const app = createApp(App);

  /* aqui el nombre va sin la v- */
  app.directive('small', Vsmall);
  

app.mount('#app')
