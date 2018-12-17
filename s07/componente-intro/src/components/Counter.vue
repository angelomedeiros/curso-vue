<template>
  <div>
    <span>{{ counter }}</span>
    <div class="buttons">
      <button @click="counter++">increase</button>
      <button @click="counter--">decrease</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  }
};
</script>

<style>
.buttons,
span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 0px 25px;
}

button {
  height: 30px;
  width: 150px;
  border-radius: 15px;
  color: aliceblue;
  margin-left: 10px;
  outline: none;
  border: none;
}

.buttons button:first-child {
  background-color: purple;
}

.buttons button:last-child {
  background-color: orangered;
}
</style>


