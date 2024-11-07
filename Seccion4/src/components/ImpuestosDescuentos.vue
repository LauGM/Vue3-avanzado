<script setup>
import { ref } from 'vue';
import { useCalculos } from '../composables/useCalculos.js'

const precio = ref(null);
const impuesto = ref(null);
const descuento = ref(null);
const { calcularImpuesto, calcularDescuento } = useCalculos();

const handleImpuesto = () => {
    impuesto.value = calcularImpuesto(precio.value);
}

const handleDescuento = () => {
    descuento.value = calcularDescuento(precio.value);
}

</script>

<template>
    <div>
        <input type="number" v-model="precio" placeholder="ingresa precio producto" />
        <div>
            <input type="number" v-model="impuesto" />
            <button @click="handleImpuesto">Calcular Impuesto 21%</button>
        </div>
        <div>
            <input type="number" v-model="descuento" />
            <button @click="handleDescuento">Calcular Descuento 10%</button>
        </div>
    </div>
</template>

<style scoped></style>