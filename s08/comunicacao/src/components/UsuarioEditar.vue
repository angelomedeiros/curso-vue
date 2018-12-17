<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Idade: {{idadeData}}</p>
    <button @click="changeAge">Change age</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    idade: {
      type: Number
    }
  },
  data() {
    return {
      idadeData: this.idade
    };
  },
  methods: {
    changeAge() {
      this.idadeData += 1;
      barramento.$emit("OnChangeAge", this.idadeData);
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
