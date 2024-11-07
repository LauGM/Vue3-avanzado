<script setup>
import { ref } from 'vue'

const bloodType = ref('');

//con una sola funcion tomo todos los casos posibles
const handle = (e) => {
    bloodType.value = e.target.innerText;
}
</script>


<template>
    <nav>
        <button @click="handle">A</button>
        <button @click="handle">B</button>
        <button @click="handle">AB</button>
        <button @click="handle">0</button>
    </nav>
    <div v-if="bloodType === 'A'">
        A
    </div>
    <div v-else-if="bloodType === 'B'">
        B
    </div>
    <div v-else-if="bloodType === 'AB'">
        AB
    </div>
    <div v-else-if="bloodType === '0'">
        0
    </div>
    <div v-else>
        Not selected
    </div>
</template>
