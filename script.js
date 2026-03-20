// tipos primitivos
// boolean
var boolean = false;
console.log(`A variavel ${boolean} tem o tipo ${typeof(boolean)}`)

var number = 1;
console.log(`A variavel ${number} tem o tipo ${typeof(number)}`)

// usando variavel global
var nome ='Arthur';

// usando variavel local
function nomeDafuncao() {
    var sobrenome = 'Fiorese'
    console.log(sobrenome);
}

console.log(nome);
nomeDafuncao();

// comparacao
var comparacao = "0" == 0;
console.log(comparacao);

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// operadores aritmeticos
var mult = 5 * 20;
console.log(mult);

var divisao = 90 / 2;
console.log(divisao);

// operadores relacionais
// >, <, ==, <>, <=, >=
// maior ou igual
 var maiorOuigual = 5 >= 6;
 console.log(maiorOuigual);

 var diferente = 4 != 8;
 console.log(diferente);

 // operadores logicos
 // && (e), || (ou), ! (not)
 var e = true && true;
 console.log(e);

 var ou =true || false;
 console.log(ou);

 var not =!true;
 console.log(not);