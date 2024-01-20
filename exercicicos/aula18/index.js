/*
const array = [1,2,3];
array.push(4);
array[0] = 'luiz';
console.log(array);


const nome01 = 'luiz';
const sobrenome01 = 'miranda';
const idade01 = 25;

const nome02 = 'maria';
const sobrenome02 = 'oliveira';
const idade02 = 55; */

/*
const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 25
};

const pessoa2 = {
    nome: 'maria',
    sobrenome: 'oliveira',
    idade: 55
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome); */

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade};
}

const pessoa1 = criaPessoa ('luiz', 'otavio', 46);
const pessoa2 = criaPessoa ('maria', 'amaral', 20);
const pessoa3 = criaPessoa ('joão', 'junqueira', 17);
const pessoa4 = criaPessoa ('junior', 'villas', 30);
const pessoa5 = criaPessoa ('jean', 'castro', 21);

console.log(pessoa1.nome, pessoa4.nome);




const pessoa10 = {
    nome: 'marcelo',
    sobrenome: 'oliveira',
    idade: 30,

    fala() {
        console.log('ola mundo!');
    }
};

pessoa10.fala();