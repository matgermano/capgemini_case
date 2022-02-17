let array = [];
function exibeAsterisco(entrada) {
  for (let i = 0; i < entrada; i++) {
    array.push(" ".repeat(entrada - i - 1) + "*".repeat(i + 1));
  }
  for (const entrada of array) {
    console.log(entrada);
  }
}

// Substitua o x dentro do parenteses abaixo pelo número INT desejado para montar a escada de *
exibeAsterisco(x);

//abra o terminal e rode o comando: node loop.js
