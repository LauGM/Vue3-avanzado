<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import ErrorComponent from './components/ErrorComponent.vue';

const isLogged = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    user ? isLogged.value = true : isLogged.value = false;
  })
})

const handleLogOut = () => {
  signOut(auth).then(() => {
    alert('Bye bye');
  })
}
</script>

<template>
  <h1>Dashboard analítico de usuarios</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login" v-if="!isLogged">Login</RouterLink>
    <RouterLink to="/register" v-if="!isLogged">Register</RouterLink>
  </nav>
  <main>
    <button @click='handleLogOut' v-if="isLogged">LogOut</button>
    <RouterView />
  </main>
  <ErrorComponent />
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}
</style>
