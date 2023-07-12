/*(do-while) Escreva um programa que solicite ao usuário para digitar uma senha, repetindo a solicitação até que ele acerte a senha correta.*/
var senha = "senha123";
var senhaInformada;

do {
    senhaInformada = prompt("Digite a senha:");

  if (senhaInformada === senha) {
    alert("Senha correta! Acesso concedido.");
  } else {
    alert("Senha incorreta! Tente novamente.");
  }
} while (senhaInformada !== senha);
