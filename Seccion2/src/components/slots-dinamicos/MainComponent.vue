<script setup>
import { ref } from 'vue';
import ModalComponent from './ModalComponent.vue';

const formSubmitted = ref(false);

function handleSubmit() {
    // Lógica de envío del formulario
    formSubmitted.value = true;
}
</script>


<template>
    <ModalComponent :submitted="formSubmitted">
        <!-- Formulario -->
        <template #formulario>
            <form @submit.prevent="handleSubmit">
                <!-- Campos del formulario -->
                <input type="text" placeholder="your name" />
                <button type="submit">Enviar</button>
            </form>
        </template>
        <!-- Mensaje de éxito -->
        <template #mensajeDeExito>
            ¡Formulario enviado exitosamente!
        </template>
    </ModalComponent>
</template>