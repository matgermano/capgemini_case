//Vá até o final da função linha: 34

function senhaValida(p) {
  let retorno = "Faltam requisitos para sua senha, para ser aceita deve conter pelo menos: \n 1 número \n 1 letra em minúsculo \n 1 letra em maiúsculo \n 1 caracter especial: !@#$%^&*()-+ ";
  let letrasMaiusculas = /[A-Z]/;
  let letrasMinusculas = /[a-z]/;
  let numeros = /[0-9]/;
  let caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|+]/;
  if (p.length < 6) {
    return "Sua senha deve conter no mínimo 6 caracteres";
  }
  let letraMaiuscula = 0;
  let letraMinuscula = 0;
  let numero = 0;
  let letraEspecial = 0;
  for (var i = 0; i < p.length; i++) {
    if (letrasMaiusculas.test(p[i])) letraMaiuscula++;
    else if (letrasMinusculas.test(p[i])) letraMinuscula++;
    else if (numeros.test(p[i])) numero++;
    else if (caracteresEspeciais.test(p[i])) letraEspecial++;
  }
  if (letraMaiuscula > 0) {
    if (letraMinuscula > 0) {
      if (numero > 0) {
        if (letraEspecial > 0) {
          retorno = "Senha Aceita";
        }
      }
    }
  }

  return retorno;
}
//Substitua sua senha onde está o X, e insira a senha que deseja dentro das aspas ""
console.log(senhaValida("X"));
//rode o comando no terminal: node senha.js
//O resultado será true se for senha com os requisitos, caso contrário irá te instruir a chegar na senha requerida