 /*(for) Faça um programa que imprima na tela os números primos de 1 a 100. */
for (var numero = 2; numero <= 100; numero++) {
  var ehPrimo = true;

  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    console.log(numero);
  }
}
