/* Crie um programa que solicite uma palavra ao usuário e verifique se contém uma letra específica. Utilize um laço de repetição para percorrer cada letra da
palavra e um condicional para verificar se a letra desejada está presente. */
var palavra = prompt("Digite uma palavra:");
var letra = prompt("Digite uma letra para verificar:");

var letraPresente = palavra.toLowerCase().includes(letra.toLowerCase());

if (letraPresente) {
  alert("A "+palavra+" contém a letra " + letra);
} else {
  alert("A "+palavra+" não contém a letra " + letra);
}

