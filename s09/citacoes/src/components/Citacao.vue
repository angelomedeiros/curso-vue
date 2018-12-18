<template>
  <div class="citacao">
    <slot name="autor"></slot>
    <slot name="fonte"></slot>
    <slot name="texto"></slot>
    <slot name="teste"/>
  </div>
</template>

<script>
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>
