<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <div>
      <p>Nome: {{ name }}</p>
      <p>Idade: {{ idade }}</p>
      <button @click="changeName">Change</button>
    </div>
    <hr>
    <div class="componentes">
      <app-usuario-info
        :idade="idade"
        :name="name"
        @OnChangeName="name = $event"
        :resetNameByCallback="resetName"
      />
      <!-- <app-usuario-editar @OnChangeAge="idade = $event" :idade="idade"/> -->
      <app-usuario-editar :idade="idade"/>
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      name: "Angelo",
      idade: 23
    };
  },
  methods: {
    changeName() {
      this.name = "Thalita";
    },
    resetName() {
      this.name = "Angelo";
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
