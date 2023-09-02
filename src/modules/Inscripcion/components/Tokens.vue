<template>
  <div class="tokens-form">
    <h1>Token</h1>

    <div class="input-group">
      <label for="semilla">Semilla:</label>
      <input type="text" id="semilla" placeholder="Ingrese semilla" v-model="usuario.semilla">
    </div>

    <div class="input-group">
      <label for="vigencia">Tiempo de vigencia:</label>
      <input type="text" id="vigencia" placeholder="Ingrese tiempo de vigencia" v-model="usuario.tiempo">
    </div>

    <div class="input-group">
      <label for="token">Token:</label>
      <input type="text" id="token" v-model="usuario.tiempo">
    </div>

    <button @click="obtenerToken" class="generar-button">Generar</button>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "../helpers/Token.js";
export default {
data() {
    return {
      token: null,
      usuario: {
        username: "stalyn",
        password: "12345",
        semilla: null,
        tiempo: null,
      },
    };
  },
  methods: {
    async obtenerToken() {
      const token = await obtenerTokenFachada(this.usuario);
      this.token = token;
    },
  },

}
</script>

<style scoped>
.tokens-form {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
 
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button.generar-button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  font-size: 15dp;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button.generar-button:hover {
  background-color: #0056b3;
}
</style>
