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

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
