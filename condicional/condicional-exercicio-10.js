/*

10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2  Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição 
Abaixo de 18,5 Abaixo do peso 
Entre 18,5 e 25 Peso normal 
Entre 25 e 30 Acima do peso 
Acima de 30 obeso 

*/

function calcularIMC(peso, altura) {
  let imc = Number((peso / (altura * altura)).toFixed(1)); // uma casa decimal; elimina zero
  let condicao = "";
  if (imc < 18.5) {
    condicao = "abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    condicao = "peso normal";
  } else if (imc >= 25 && imc < 30) {
    condicao = "acima do peso";
  } else {
    condicao = "obeso";
  }
  console.log(`IMC: ${imc}. Condição: ${condicao}.`);
}

calcularIMC(50, 1.7);
calcularIMC(70, 1.7);
calcularIMC(80, 1.7);
calcularIMC(100, 1.7);
