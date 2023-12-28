// CONSTANTES


// Não podemos criar CONSTANTES com palavras reservadas (palavras usadas do javascript)
// CONSTANTES precisam ter nomes significativos: 
// Não pode começar o nome de uma CONSTANTE com um numero
//Utilizamos camelCase
// Case-sensitive
// Não podem conter espaços ou traços
//não pode modificar o valor de uma CONSTANTE
//NÃO UTILIZE VAR, UTILIZE LET.

const nome = 'João';
console.log(nome);

//String = Text | Number = Numero


const primeiroNumero = 5;  //number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(typeof (primeiroNumero + segundoNumero));