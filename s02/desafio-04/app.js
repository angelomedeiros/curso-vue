new Vue({
  el: "#desafio",
  data: {
    aplicarEfeito: false,
    aplicarClass: "",
    trueOrFalse: "false",
    barProgress: false,
    largura: 0
  },
  methods: {
    iniciarEfeito() {
      this.aplicarEfeito = !this.aplicarEfeito;
    },
    startProgress() {
      this.largura = 0;
      this.barProgress = !this.barProgress;
    }
  },
  computed: {
    efeito() {
      return {
        destaque: this.aplicarEfeito,
        encolher: !this.aplicarEfeito
      };
    },
    aplicarClassValidacao() {
      return this.trueOrFalse === "true" && this.aplicarClass;
    }
  },
  watch: {
    barProgress(n, o) {
      const temp = setInterval(() => {
        this.largura = this.largura + 10;
        if (this.largura === 100) clearInterval(temp);
      }, 1000);
    }
  }
});
