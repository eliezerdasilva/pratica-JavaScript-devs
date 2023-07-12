/*Escreva um script que determine se um número é primo*/
var numero = prompt("Digite um número:");

// Converter o número para um inteiro
numero = parseInt(numero);

// Verificar se o número é primo
var ehPrimo = true;

if (numero <= 1) {
  ehPrimo = false;
} else {
  for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      ehPrimo = false;
      break;
    }
  }
}

if (ehPrimo) {
  alert("O número " + numero + " é primo.");
} else {
  alert("O número " + numero + " não é primo.");
}