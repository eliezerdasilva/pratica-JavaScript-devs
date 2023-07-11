/* Crie um scripe que extraia uma parte específica de uma string. Por exdemplo, extraia os primeiros três caracteres de uma palavra e exiba o resultado*/
let palavra = prompt("Informe uma palavra: ");

let primeirosTresCaracteres = palavra.substring(0, 3);

console.log("Os primeiros três caracteres são:", primeirosTresCaracteres);
