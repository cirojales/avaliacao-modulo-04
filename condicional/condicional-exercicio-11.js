/*

11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal deetiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado.  

Código Condição de pagamento 
1 À vista em dinheiro ou cheque, recebe 10% de desconto 
2 À vista no cartão de crédito, recebe 15% de desconto 
3 Em duas vezes, preço normal de etiqueta sem juros 
4 Em duas vezes, preço normal de etiqueta mais juros de 10%

*/

function calcularPago(precoEtiqueta, condicao) {
  let valorPago = 0;
  if (condicao === 1) {
    valorPago = precoEtiqueta - (precoEtiqueta * 0.1);
  } else if (condicao === 2) {
    valorPago = precoEtiqueta - (precoEtiqueta * 0.15);
  } else if (condicao === 3) {
    valorPago = precoEtiqueta;
  } else if (condicao === 4) {
    valorPago = precoEtiqueta + (precoEtiqueta / 100) * 10;
  }
  console.log(`Valor a ser pago: R$ ${valorPago}.`);
}

calcularPago(100, 1);
calcularPago(100, 2);
calcularPago(100, 3);
calcularPago(100, 4);
