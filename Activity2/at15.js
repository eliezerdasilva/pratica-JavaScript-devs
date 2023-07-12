/* (for) Escreva um programa que gere a sequência de Fibonacci até o décimo termo.*/
var primeiroTermo = 0;
var segundoTermo = 1;
var proximoTermo;

console.log("Sequência de Fibonacci até o décimo termo:");

console.log(primeiroTermo);

console.log(segundoTermo); 

for (var i = 3; i <= 10; i++) {
  proximoTermo = primeiroTermo + segundoTermo;
  console.log(proximoTermo); 
  primeiroTermo = segundoTermo;
  segundoTermo = proximoTermo;
}
