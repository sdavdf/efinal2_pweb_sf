<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Cédula</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in lista" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.apellido }}</td>
          <td>{{ item.cedula }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    estudiantes: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      lista: this.estudiantes,
    };
  },
};
</script>

<style scoped>

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>