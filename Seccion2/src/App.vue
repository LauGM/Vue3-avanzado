<script setup>
/* import Boton from './components/Boton.vue'; */
import MainComponent from './components/slots-dinamicos/MainComponent.vue'
import ListComponent from './components/slots-profundos/ListComponent.vue'
/* import { calcularImpuesto } from './funciones';
import { ref } from 'vue'; */

/* const precio = ref(0);
const precioConIva = ref(0);

function calcularIva() {
  precioConIva.value = calcularImpuesto(precio.value, 21);
} */

</script>

<template>
  <!-- <input type="text" v-model="precio" />
  <Boton :calcular="calcularIva" texto='Calcular impuesto 21%' />
  <p>Valor del impuesto a aplicar $ {{ precioConIva }}</p> -->
  <!-- para los slots avanzados -->
  <MainComponent />
  <ListComponent />
</template>
