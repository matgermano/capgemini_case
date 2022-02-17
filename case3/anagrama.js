// Insira seu anagrama no substituindo String abaixo "ovo".
var arr = ['ovo'];
//Após mudar para seu anagrama, abra o terminal e rode o comando: node anagrama.js
// Irá retornar array dos possíveis anagramas de sua palavra.

var TodosAnagramas = function(arr) {
    var anagramas = {};
    arr.forEach(function(str) {
        var recurse = function(palavra, str) {
            if (str === '') 
                anagramas[palavra] = 1;
            for (var i = 0; i < str.length; i++)
                recurse(palavra + str[i], str.slice(0, i) + str.slice(i + 1) );
        };
        recurse('', str);
    });
    return Object.keys(anagramas);
    
}

console.log(TodosAnagramas(arr));




