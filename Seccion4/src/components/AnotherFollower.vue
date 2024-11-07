<script setup>
import { usePosition } from '../composables/usePosition.js'

const { mousePosition } = usePosition();
</script>

<template>
    <div class="container">
        <p>Another Mouse position is at: {{ mousePosition.x }}, {{ mousePosition.y }}</p>
    </div>
</template>

<style scoped>
.container {
    width: 500px;
    height: 300px;
    border: 1px solid white;
    margin-top: 20px;
    text-align: center;
}
</style>