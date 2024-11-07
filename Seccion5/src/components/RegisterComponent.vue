<script setup>
import { ref } from 'vue';
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const email=ref('');
const password=ref('');

const handleRegister=()=>{
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data)=>{
            alert('Registro exitoso!')
            console.log(data)
        })
        .catch((error)=>{
            alert(error.code);
            console.log(error.code);
        })
}

const handleGoogle=()=>{
    const provider=new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then(result => {
            alert('Registro exitoso!')
            console.log(result)
        })
        .catch((error)=>{
            alert(error.code);
            console.log(error.code);
        });
}

</script>

<template>
    <div class="registro">
        <h3>Crear una cuenta</h3>
        <label for="correo">
            Correo:
            <input type="email" name="correo" id="correo" placeholder="tu correo" v-model="email"/>
        </label>
        <label for="clave">
            Clave:
            <input type="password" name="clave" id="clave" v-model="password"/>
        </label>
        <button @click="handleRegister">Registrarse</button>
        <button @click="handleGoogle">Registrarse con Google</button>
    </div>
</template>

<style scoped>
.registro{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 300px;
    gap: 15px;
    border: 1px solid grey;
    padding: 20px;
    justify-content: flex-start;
    border-radius: 10px;
    margin: 20px;
}
</style>