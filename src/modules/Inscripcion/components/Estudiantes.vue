<template>

  <div class="estudiante-form">
    <h1>Estudiante</h1>
    <div class="input-group">
      <label for="token">Token:</label>
      <input type="text" id="token" placeholder="Ingrese el token" v-model="token">
    </div>

    <div class="input-group">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre"  placeholder="Ingrese el nombre" v-model="nombre">
    </div>
    
    <div class="input-group">
      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" placeholder="Ingrese el apellido" v-model="apellido">
    </div>

    <div class="input-group">
      <label for="cedula">Cédula:</label>
      <input type="text" id="cedula" placeholder="Ingrese la cédula" v-model="cedula">
    </div>

    <button class="ingresar-button" @click="ingresarEstudiante">Ingresar</button>
  </div>  

<br>
 <RegistroEstudiantes :estudiantes="listado"/>

</template>

<script>
import { ingresarEstudianteFachada} from '../helpers/Estudiante.js';
import RegistroEstudiantes from './RegistroEstudiantes.vue';


export default {
    components:{
      RegistroEstudiantes
    },
    data(){
        return{
            token:null,
            nombre:null,
            cedula:null,
            apellido:null,
            listado:[]
        }
    },
    methods:{
        async ingresarEstudiante(){
            const data={
                nombre:this.nombre,
                apellido:this.apellido,
                cedula:this.cedula
            };

            const estudiante= await ingresarEstudianteFachada(data, this.token);
            console.log(estudiante)
            this.listado.push(estudiante)
        }
    }

}
</script>

<style scoped>
.estudiante-form {
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

button.ingresar-button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button.ingresar-button:hover {
  background-color: #0056b3;
}



</style>
