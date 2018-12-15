/*
 * Cenário 0
 */

const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);
  }
};

pessoa.falar(); // Bom dia

const falar = pessoa.falar;
falar(); // undefined

/*
 * Cenário 1 - Self
 */

const pessoa_self = {
  saudacao: "Bom dia",
  falar() {
    const self = pessoa_self;
    console.log(self.saudacao);
  }
};

pessoa_self.falar(); // Bom dia

const falar_self = pessoa_self.falar;
falar_self(); // Bom dia

/*
 * Cenário 2 - Bind
 */
const falar_bind = pessoa.falar.bind(pessoa);
falar_bind(); // Bom dia
