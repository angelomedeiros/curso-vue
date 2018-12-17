<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Idade: {{idade}}</p>
    <button @click="changeAge">Change age</button>
  </div>
</template>

<script>
export default {
  props: {
    idade: {
      type: Number
    }
  },
  methods: {
    changeAge() {
      this.$emit("OnChangeAge", 22);
    }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
