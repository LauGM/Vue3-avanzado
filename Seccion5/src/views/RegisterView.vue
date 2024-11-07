<script setup>
import RegisterComponent from '../components/RegisterComponent.vue';
</script>

<template>
    <div>       
        <div class="opciones">
            <h3>Register</h3>
            <RegisterComponent />
        </div>
    </div>
</template>

<style scoped>
.opciones{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
}
</style>