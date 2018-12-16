<template>
  <h1>{{ titulo }}</h1>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: "Primeiro Componente com o VueJs"
    };
  }
};
</script>

<style>
body {
  background-color: gold;
}

h1 {
  background-color: blueviolet;
  color: #fff;
  margin: 0;
  padding: 10px;
  text-align: center;
}
</style>



