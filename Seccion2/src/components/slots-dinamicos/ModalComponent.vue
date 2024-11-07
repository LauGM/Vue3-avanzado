<script setup>
defineProps({
    submitted: Boolean
});
</script>

<template>
    <div class="modal">
        <h1>Modal</h1>
        <div class="modal-content">
            <slot name='formulario' v-if="submitted == false">formulario</slot>
            <slot name='mensajeDeExito' v-else>mensaje de éxito</slot>
        </div>
    </div>
</template>


<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.5);
    color: rgb(255, 255, 255);
    /* Fondo oscuro semitransparente */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.modal-content {
    background-color: white;
    color: blue;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    /* Ancho máximo del contenido del modal */
    width: 90%;
    /* Ancho relativo al tamaño de la ventana */
    text-align: center;
}
</style>