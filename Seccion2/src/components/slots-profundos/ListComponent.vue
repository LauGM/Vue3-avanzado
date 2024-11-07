<script setup>
import CardComponent from './CardComponent.vue';
import MapComponent from './MapComponent.vue';
</script>

<template>
    <div class="list">
        <CardComponent title="Tarjeta de usuario">
            <!-- Contenido adicional dentro de la tarjeta -->
            <p>Nombre: Juan Perez</p>
            <p>Perfil: Entusiasta, siempre dispuesto a ayudar a sus pares, empatico, inteligente, con buen humor
                siempre. Ama aprender cosas nuevas.</p>
        </CardComponent>
        <CardComponent title="Ubicacion">
            <MapComponent />
        </CardComponent>
    </div>
</template>

<style scoped>
.list {
    display: flex;
    flex-direction: row;
    border: 1px solid peru;
    padding: 10px;
    gap: 10px
}
</style>