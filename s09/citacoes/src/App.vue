<template>
  <div id="app">
    <span>
      <button @click="componente = 'Citacoes'">Change to quotes</button>
      <button @click="componente = 'Sobre'">Change to about</button>
    </span>
    <!-- o keep-alive permite utilizar os métodos de activeted e deactived, esses métodos são
    análogos ao created e destroyed, respectivamente-->
    <keep-alive>
      <component :is="componente"/>
    </keep-alive>
    <!-- <component :is="'Citacoes'"/> -->
    <!-- <Citacoes />
    <Sobre />-->
  </div>
</template>

<script>
import Citacoes from "./components/Citacoes";
import Sobre from "./components/Sobre";

export default {
  components: { Citacoes, Sobre },
  data() {
    return {
      componente: "Citacoes"
    };
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.6rem;
}

button {
  outline: none;
  padding: 5px 15px 10px;
  margin: 10px 5px;
  border-radius: 3px;
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>