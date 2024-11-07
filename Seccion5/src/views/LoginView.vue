<script setup>
import LoginComponent from '../components/LoginComponent.vue';

</script>

<template>
    <div>       
        <div class="opciones">
            <h3>LogIn</h3>
            <LoginComponent />
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