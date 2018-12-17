<template>
  <div id="app">
    <h1>Counter</h1>
    <counter/>
    <counter/>
    <counter/>
    <counter/>
    <counter/>
  </div>
</template>

<script>
import counter from "./components/Counter.vue";

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
