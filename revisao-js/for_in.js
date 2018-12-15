const mega_sena = [12, 32, 56, 87, 3, 9];

for (let i in mega_sena) {
  console.log(i, mega_sena[i]);
}

const cidade = {
  nome: "Patos",
  estado: "Paraíba",
  populacao: 120000,
  uf: "PB"
};

for (let atr in cidade) {
  console.log(`${atr} - ${cidade[atr]}`);
}
