<script setup>
import { ref } from 'vue';

const vFocus = {
    mounted: (el) => el.focus(),
}

const vRed = {
    mounted: (el) => el.style.color = 'red',
}

const myColor = ref('green');
const myColor2 = ref('blue');
const vColor = {
    mounted: (el, binding) => el.style.color = binding.value,
}

</script>

<template>
    <h3 v-red>Formulario</h3>
    <input type="text" placeholder="Escribe tu nombre">
    <button v-focus >Enviar</button>
    <p v-color="myColor2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, culpa non ratione corrupti, hic distinctio architecto dolore quo aperiam minima odit eius voluptates reprehenderit eveniet eos officia sunt, quidem voluptas.</p>
    <p v-color="myColor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, culpa non ratione corrupti, hic distinctio architecto dolore quo aperiam minima odit eius voluptates reprehenderit eveniet eos officia sunt, quidem voluptas.</p>
</template>

<style scoped></style>