/*
 * partes = partes da string, Array
 * valores = parâmetros passados na template string, Array
 */
function money(partes, ...valores) {
  const resultado = [];
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
    // Para montar a string é preciso alternar entre uma parte e um valor
    resultado.push(partes[indice], valor);
  });
  return resultado.join("");
}

const nome = "Angelo";
const idades = ["11", "22", "33"];

console.log(money`10x de ${19.99} ou 1x sem juros de ${239}`);
