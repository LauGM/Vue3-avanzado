<!-- eslint-disable vue/return-in-computed-property -->
<script setup>
/* import { ref, computed } from 'vue'; */
import { useFetch } from '@vueuse/core';

const url = 'https://swapi.dev/api/planets/1'
const { isFetching, data, error } = useFetch(url).json();
//el metodo json esta incluido en la interface de useFetch para poder transformar la data a objetos de JS
</script>

<template>
    <h3>Star Wars Planets</h3>
    <div v-if="error">
        Error:{{ error }}
    </div>
    <div v-else-if="isFetching">
        Cargando...
    </div>
    <p v-else>Planet: {{ data?.name }} - Surface: {{ data?.terrain }}</p>
</template>


<style scoped></style>