<template>
  <div id="app">
    <h1>Counter</h1>
    <counter v-for="a in 8" :key="a"/>
  </div>
</template>

<script>
// import counter from "./components/Counter.vue";
import counter from "@/components/Counter.vue";

export default {
  components: {
    counter
  }
};
</script>


<style scoped>
/* O atributo scoped é aplicado no elemento e nos seus filhos.
importante: Exclusivamente nos filhos, e não nos filhos dos filhos */

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
