/*
Primitivos (imutáveis)- string, number, boolean, undefined, null (bigint, symbol)
*/

/*
//          0123
let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);
*/

/*
let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'outra coisa';
console.log(a, b); */


// TIPOS DE DADOS PASSADOS POR REFERENCIA (MUTÁVEL) - array, object, function

/*
let a =[1, 2, 3];
let b = [...a];
let c = b;
console.log(a,b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a,b);

a.push('luiz');
console.log(c);
*/

const a = {
    nome: 'luiz',
    sobrenome: 'otavio'
};
const b = {...a};

a.nome = 'joão';
console.log(a);
console.log(b);
