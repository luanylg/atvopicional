var entrada3 = require("readline-sync");
var ladosDado = 6;
var numeroLancamentos = parseFloat(entrada3.question('Numero de lancamentos: '));
var combinacoes = {};
for (var i = 1; i <= ladosDado; i++) {
    for (var a = 1; a <= ladosDado; a++) {
        var resultadoLancamento = "".concat(i, ",").concat(a);
        combinacoes[resultadoLancamento] = (combinacoes[resultadoLancamento] || 0) + 1;
    }
}
console.log("Probabilidade de cada combinação possível: ");
for (var i = 1; i <= ladosDado; i++) {
    for (var a = 1; a <= ladosDado; a++) {
        var resultadoLancamento = "".concat(i, ",").concat(a);
        var probabilidade = combinacoes[resultadoLancamento] / numeroLancamentos;
        console.log("Lan\u00E7amento ".concat(resultadoLancamento, ": ").concat(probabilidade));
    }
}
