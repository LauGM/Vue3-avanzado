<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import PrimerEjemplo from './components/PrimerEjemplo.vue';
import SegundoEjemplo from './components/SegundoEjemplo.vue';
//Para defineAsyncComponent
import { defineAsyncComponent } from 'vue'
import {VueSpinnerBars} from 'vue3-spinners';
import ErrorComponent from './components/ErrorComponent.vue';

const carga = ref(false);
/* const AdminPage = defineAsyncComponent(() =>
  import('./components/AdminPageComponent.vue')
) */
const AdminPage = defineAsyncComponent({
  // the loader function
  loader: () => import('./components/AdminPageComponent.vue'),

  // A component to use while the async component is loading
  loadingComponent: VueSpinnerBars,

  // Delay before showing the loading component. Default: 200ms.
  delay: 2,

  // A component to use if the load fails
  errorComponent: ErrorComponent,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
})

</script>

<template>
  <PrimerEjemplo />
  <SegundoEjemplo />
  <hr>
  <!-- Para defineAsyncComponent -->
  <button @click="carga = !carga">Cargar página de administración</button>
  <AdminPage v-if="carga" />
  <hr>
  <!--   router -->
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
