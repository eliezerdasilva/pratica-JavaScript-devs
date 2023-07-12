/*Crie um script que com o preço de um produto calcule o valor com desconto de 10% e exiba o valor com desconto. */
var precoProduto = prompt("Digite o preço do produto:");


precoProduto = parseFloat(precoProduto);



  var desconto = precoProduto * 0.1;
  var valorComDesconto = precoProduto - desconto;
  
  
  alert("O valor com desconto é: R$ " + valorComDesconto.toFixed(2));
