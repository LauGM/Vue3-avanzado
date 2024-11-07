<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const props = defineProps({
    calcular: Function,
    texto: String
})
</script>

<template>
    <div>
        <button @click="props.calcular">{{ props.texto }}</button>
    </div>
</template>

<style scoped>
button {
    border: 2px solid pink;
    border-radius: 5px;
    background-color: violet;
    color: aliceblue;
    margin: 5px;
}
</style>