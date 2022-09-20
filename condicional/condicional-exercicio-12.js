/*

12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de aproveitamento, usando a fórmula: MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7  

A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.  

Média de aproveitamento Conceito 
>= 90 A 
>= 75 e < 90 B 
>= 60 e < 75 C 
>= 40 e < 60 D 
< 40 E

*/

function avaliarAluno(numeroAluno, nota1, nota2, nota3) {
  let mediaExerc = (nota1 + nota2 + nota3) / 3;
  let mediaAprov = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExerc) / 7;
  let conceito = "";
  let situacao = "";

  if (mediaAprov >= 9) {
    conceito = "A", situacao = "Aprovado";
  } else if (mediaAprov >= 7.5 && mediaAprov < 9) {
    conceito = "B", situacao = "Aprovado";
  } else if (mediaAprov >= 6 && mediaAprov < 7.5) {
    conceito = "C", situacao = "Aprovado";
  } else if (mediaAprov >= 4 && mediaAprov < 6) {
    conceito = "D", situacao = "Reprovado";
  } else if (mediaAprov < 4) {
    conceito = "E", situacao = "Reprovado";
  }

  console.log(
    `Número do aluno: ${numeroAluno}` + "\n" +
    `Nota 1: ${nota1}` + "\n" +
    `Nota 2: ${nota2}` + "\n" +
    `Nota 3: ${nota3}` + "\n" +
    `ME: ${Number(mediaExerc.toFixed(1))}` + "\n" + // uma casa decimal; elimina o zero
    `MA: ${Number(mediaAprov.toFixed(1))}` + "\n" +
    `Conceito: ${conceito}` + "\n" +
    `Situação: ${situacao}`
  );
}

avaliarAluno(1234, 7.5, 8.5, 9.5);