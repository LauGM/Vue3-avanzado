<script setup>
import { useTitle } from '@vueuse/core'

//si enviamos null entonces devuelve el titulo actual por defecto, tmabien podriamos pasarle un string como parametro
const title = useTitle();
//devuelve el titulo actual y es un ref
console.log(title.value);
</script>

<template>
    <h3>Title</h3>
    <input v-model="title" type="text" />

</template>