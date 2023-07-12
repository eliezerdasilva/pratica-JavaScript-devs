/*(for) Faça um programa que calcule a média de um vetor de números reais com 10 elemento. */
var vetor = [3.5, 7.2, 4.8, 9.1, 5.6, 6.3, 8.4, 2.9, 6.7, 4.2];
var soma = 0;

for (var i = 0; i < vetor.length; i++) {
  soma += vetor[i];
}

var media = soma / vetor.length;
console.log("A média é: " + media.toFixed(2));
// outra forma


var vetor = [];
var quantidadeElementos = 10;
var soma = 0;
for (var i = 0; i < quantidadeElementos; i++) {
  var numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
  soma += numero;
}


var media = soma / quantidadeElementos;
console.log("A média é: " + media.toFixed(2));
