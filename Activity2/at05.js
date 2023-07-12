/*Crie um script que solicite um número de telefone ao usuário e formate-o no formato "(XX) XXXX-XXXX" e exiba o número de telefone formatado. */
var numeroTelefone = prompt("Digite um número de telefone:");



if (numeroApenasNumeros.length !== 11) {
  alert("Número de telefone inválido. Digite um número com 11 dígitos.");
} else {

  var numeroFormatado = "(" + numeroApenasNumeros.substr(0, 2) + ") " + numeroApenasNumeros.substr(2, 4) + "-" + numeroApenasNumeros.substr(6, 4);


  alert("O número de telefone formatado é: " + numeroFormatado);
}
