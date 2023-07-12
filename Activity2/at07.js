/*Crie um programa que solicite ao usuário três notas e calcule a média. Se alguma nota for inválida (for menor que 0 ou maior que 10), solicite novamente essa nota. Utilize um laço de repetição e condicional para validar as notas. */
var notas = [];


for (var i = 0; i < quantidadeNotas; i++) {
    var nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));


    while (nota < 0 || nota > 10 || isNaN(nota)) {
        nota = parseFloat(prompt("Nota inválida. Digite novamente a nota " + (i + 1) + ":"));
    }

    notas.push(nota);
}

var soma = 0;
for (var i = 0; i < 3; i++) {
    soma += notas[i];
}
var media = soma / 3;


alert("A média das notas é: " + media.toFixed(2));
