/**(while) Escreva um programa que calcule a soma dos números pares de 1 a 50. */
var numero = 1;
var soma = 0;

while (numero <= 50) {
  if (numero % 2 === 0) {
    soma += numero;
  }
  numero++;
}

console.log("A soma dos numeros pares é:", soma);
