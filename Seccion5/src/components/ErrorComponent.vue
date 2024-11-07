<script setup>
const handleClickError = () => {
    throw new Error('¡Error intencionalmente lanzado!');
}
</script>

<template>
    <button @click="handleClickError">Arrojar Error</button>
</template>