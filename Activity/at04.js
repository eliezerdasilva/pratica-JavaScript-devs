/* Crie um script que calcula o Índice de Massa Corpotal(IMC) com base no peso e altura fornecidos. A fórmula pra cálculo do IMC é IMC= Peso/(altura*altura)*/
let peso = parseFloat(prompt("Informe o peso (em kg): "));
let altura = parseFloat(prompt("Informe a altura (em metros): "));

let imc = peso / (altura * altura);

console.log("O Índice de Massa Corporal (IMC) é:", imc);
