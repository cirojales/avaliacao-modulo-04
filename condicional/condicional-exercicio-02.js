/*

2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).

*/

function tempoDeCasada(nome, sexo, estadoCivil) {
  if (sexo === "F" && estadoCivil === "CASADA") {
    console.log(`${nome}, informe o tempo de casada (anos)`);
  }
}

tempoDeCasada("Maria", "F", "CASADA");