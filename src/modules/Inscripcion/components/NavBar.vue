<template>
    <div class="nav-bar">
    <router-link to="/tokens">Generar Token</router-link>
    <router-link to="/estudiantes"> / Guardar Estudiante</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar {

  color: #000000;
  padding: 10px;
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  z-index: 1000;
}

.nav-bar a {
  color: #000000;
  text-decoration: none;

}


</style>