/*let numero = prompt('Digite um número');
numero
const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`;*/


const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>raiz quadrada: ${numero ** 0.5}.<p/>`;
texto.innerHTML += `<p>É Nan: ${Number.isNaN(numero)}.<p/>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>arredonda para baixo ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>arredonda para cima ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>com duas casas decimais ${numero.toFixed(2)}.</p>`;