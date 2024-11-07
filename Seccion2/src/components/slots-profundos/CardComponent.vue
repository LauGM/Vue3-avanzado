<script setup>
defineProps({
    title: String,
});
</script>

<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <slot></slot> <!-- Slot profundo para contenido adicional -->
    </div>
</template>

<style scoped>
.card {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 10px;
    max-width: 200px;
}
</style>