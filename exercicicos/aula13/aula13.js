
//outra forma de pegar letras

//strings tem indices (ordens de posições ao serem exibidas) 0123456789

//let umaString = 'Um "texto"';

//console.log(umaString);

//console.log(umaString[4]);


//console.log(umaString.charAt(7)); 

//console.log(umaString.lastIndexOf('texto'));


let umaString = "Um texto";
//console.log(umaString.indexOf('texto')); // buscando a partir de qual index começa uma palavra

//console.log(umaString.indexOf('o', 3)); // achando posições de um indice a partir de umacoordenada de indice especifica (na frase "um texto" o indeci "o" se encontra após o terceiro(3° declarado no console.log) indice, estando localizado na 7° colocação)

//console.log(umaString.lastIndexOf('m', 3)); //começa a buscar o indice de tras para frente (do final da string para o começo) a partir da colocação descrita dentro do console (numero 3 vide console acima)

/*
//UTILUIZANDO EXPREÇÕES REGULARES PARA ACHAR INDICES:

console.log(umaString.match(/[a-z]/g)); //achando todas as letras minusculas presentes na frase

console.log(umaString.match(/[a-z]/)); // achando o indice, posição e grupo. 

console.log(umaString.search(/[x]/)); //encontrando o indice, similar a indexOf, porem aceita expressões regulares


console.log(umaString.replace('Um', 'Outra')); 
console.log(umaString.replace(/Um/, 'Outra'));// substitui uma palavra por outra. pode ou nao utilizar expressões regulares

*/

let umaString1 = "O rato roeu a roupa do rei de roma.";

console.log(umaString1.replace(/r/g, '#'));
console.log(umaString1.length);// conta o numero de letras e exibe
console.log(umaString1.slice(2, 6));// fatia a string (executa de onde começa a onde termina)

console.log(umaString1.slice(-3));// começa a contar do final, para o começo da string ("O rato roeu a roupa do rei de roma." em "roma", "m" esta localizado na posição 32/35 ou seja -3 e a contagem continua apos a localização -3, lendo assim o final da frase 'roma' = "ma")

console.log(umaString1.length - 3);// numero de strings -3
console.log(umaString1.slice(-5)); //determinou de onde começae e especificou a casa para começar a contar (-5)
console.log(umaString1.slice(32));// fatiou a frase e demarcou  de onde começar a contar
console.log(umaString1.slice(-5, -1)); //demarcou a partir de qual casa (-5) fatiou a tring e subtraiu 1 indice (-1)

console.log(umaString1.substring(umaString1.length - 5, umaString1.length - 1));// faz a mesma coisa que o console acima, porem com mais declarações

//DIVIDINDO AS STRINGS :

console.log(umaString1.split('', 2));// pode ser dividido por espaços ou por palavras, tambem pode especificar em quantas vezes dividir

//STRINGS TODAS EM MAIUSCULAS:

console.log(umaString1.toUpperCase());//toda em maiusculo
console.log(umaString1.toLowerCase());//toda em minusculo

//outras formas de concatenação:



/*console.log(umaString.concat(' em', ' um', ' lindo dia.')); 

console.log(umaString + 'em um lindo dia.');

console.log(`${umaString} + em um lindo dia.`);*/