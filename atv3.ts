const entrada3 = require("readline-sync");

let ladosDados = 6;
let numeroLancamentos = parseFloat(entrada3.question('Numero de lancamentos: '))

let combinacoes: { [key: string]: number } = {}; 


for (let i = 1; i <= ladosDados; i++) {
  for (let a = 1; a <= ladosDados; a++) {
    let resultadoLancamento = `${i},${a}`;
    combinacoes[resultadoLancamento] = (combinacoes[resultadoLancamento] || 0) + 1;
  }
}


console.log("Probabilidade de cada combinação possível: ");
for (let i = 1; i <= ladosDados; i++) {
  for (let a = 1; a <= ladosDados; a++) {
    let resultadoLancamento = `${i},${a}`;
    let probabilidade = combinacoes[resultadoLancamento] / numeroLancamentos;
    console.log(`Lançamento ${resultadoLancamento}: ${probabilidade}`);
  }
}