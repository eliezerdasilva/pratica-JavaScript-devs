/*(while) Faça um programa que leia uma lista de números inteiros até o usuário digitar zero e exiba o maior número digitado. */
var numero = parseInt(prompt("Informe um número ou 0 para sair"));
var soma = numero; 

while (numero!=0) {
  numero = parseInt(prompt("Informe um número ou 0 para sair"));
    soma += numero;



}

  console.log("O maior número digitado é:", soma);

