/* (do-while) Crie um jogo de adivinhação em que o usuário tem que tentar acertar um número aleatório de 1 a 100, dando dicas de "maior" ou "menor" até acertar.*/
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var tentativas = 0;
var acertou = false;

do {
  var palpite = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):"));
  tentativas++;

  if (palpite === numeroAleatorio) {
    acertou = true;
    alert("Parabéns! Você acertou o número em " + tentativas + " tentativas.");
  } else if (palpite < numeroAleatorio) {
    alert("Tente novamente! O número é maior.");
  } else {
    alert("Tente novamente! O número é menor.");
  }
} while (!acertou);
