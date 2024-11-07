import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOlVtvB50nEDJe-7yBkmKDXvEklhMp1ZE",
  authDomain: "users-test-1271f.firebaseapp.com",
  projectId: "users-test-1271f",
  storageBucket: "users-test-1271f.appspot.com",
  messagingSenderId: "653618458021",
  appId: "1:653618458021:web:c9897d33052b3f3100cc4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const appVue = createApp(App);

// Configuramos el errorHandler global
appVue.config.errorHandler = function (err) {
  // Aquí puedes manejar el error
  console.error(err); // Imprime el error en la consola
  // Mostrar un mensaje de error al usuario
  alert(`Ocurrió un error: ${err.message}` );
};

appVue.use(router);
appVue.mount('#app');


