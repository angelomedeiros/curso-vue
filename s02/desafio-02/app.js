new Vue({
  el: "#desafio",
  data: {
    valor: ""
  },
  methods: {
    exibirAlerta(e) {
      alert("Alerta");
    },
    apertou(e) {
      this.valor = e.target.value;
    }
  }
});
