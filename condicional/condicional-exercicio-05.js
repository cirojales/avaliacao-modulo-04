/*

5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.

*/

function dobrarOuTriplicar(num) {
  if (num > 0) {
    console.log(num * 2);
  } else {
    console.log(num * 3);
  }
}

dobrarOuTriplicar(7);
dobrarOuTriplicar(-7);