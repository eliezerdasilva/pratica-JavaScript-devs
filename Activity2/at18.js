/*(for-each) Crie um programa que conte a quantidade de letras "a" em uma string informada pelo usuário. */
var frase = prompt("Informe uma frase:");
var count = 0;

for (var letra of frase) {
  if (letra.toLowerCase() === 'a') {
    count++;
  }
}

alert("A quantidade de vezes que a letra  'a' repete é de :", count);
