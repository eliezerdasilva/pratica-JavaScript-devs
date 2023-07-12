/* Crie um programa que solicite ao usuário uma frase e converta todas as letras para maiúsculas. Utilize um laço de repetição para percorrer cada letra da
frase e atribua o resultado a uma nova variável. */
var frase = prompt("Digite uma frase:");
var fraseMaiuscula = "";
for (var i = 0; i < frase.length; i++) {
  var letra = frase.charAt(i);
  var letraMaiuscula = letra.toUpperCase();
  fraseMaiuscula += letraMaiuscula;
}

alert(fraseMaiuscula);
