<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>{{ reverseName() }}</p>
    <p>Idade: {{idadeData}}</p>

    <button @click="resetName">Reset</button>
    <button @click="resetNameByCallback()">Reset by callback</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  //   props: ["name"],
  props: {
    name: {
      type: String,
      required: true
      //   default: 'Zé',
      //   default() {
      //     return Array(10)
      //       .fill(0)
      //       .join(",");
      //   }
    },
    resetNameByCallback: Function,
    idade: Number
  },
  data() {
    return {
      idadeData: this.idade
    };
  },
  methods: {
    reverseName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.$emit("OnChangeName", "Angelo");
    }
  },
  created() {
    barramento.$on("OnChangeAge", idade => {
      this.idadeData = idade;
    });
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
