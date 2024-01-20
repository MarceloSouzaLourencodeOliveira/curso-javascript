function saudacao(nome) {
    
    return `bom dia ${nome}!`;
}

const variavel = saudacao('chinbica');
console.log(variavel);


    
    function soma(x, y) {
    const resultado = x + y;
    return resultado;
    }

console.log(soma(2, 2)); 



function soma1(x = 1, y = 1) {
    const resultado1 = x + y;
    return resultado1;
}

const resultado1 = soma1(4, 2);
console.log(resultado1); 



//FUNÇÃO ANONIMA ( FAZENDO RAIZ QUADRADA)
const raiz = function (n) { 
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


//ARROW FUNCTION (TIRA A FUNÇÃO, ; RETURN E PARENTESES  E ADICIONA = , =>)
const raiz1 = n => n ** 0.5


console.log(raiz1(9));
console.log(raiz1(16));
console.log(raiz1(25));